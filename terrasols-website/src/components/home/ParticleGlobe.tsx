"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 2600;
const RADIUS = 3.2;
const INTERACTION_RADIUS = 1.6;
const PUSH_STRENGTH = 0.9;
const DRIFT_AMPLITUDE = 0.045;

function fibonacciSphere(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    positions[i * 3] = Math.cos(theta) * r * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = Math.sin(theta) * r * radius;
  }
  return positions;
}

function generateVariation(count: number) {
  const sizes = new Float32Array(count);
  const opacities = new Float32Array(count);
  const phases = new Float32Array(count * 3);
  const speeds = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    sizes[i] = 0.5 + Math.random() * 2.5; // 0.5px – 3px
    opacities[i] = 0.2 + Math.random() * 0.8; // 0.2 – 1.0
    phases[i * 3] = Math.random() * Math.PI * 2;
    phases[i * 3 + 1] = Math.random() * Math.PI * 2;
    phases[i * 3 + 2] = Math.random() * Math.PI * 2;
    speeds[i] = 0.06 + Math.random() * 0.1; // slow, organic drift rate
  }
  return { sizes, opacities, phases, speeds };
}

// Generated once at module load — not during render.
const BASE_POSITIONS = fibonacciSphere(COUNT, RADIUS);
const VARIATION = generateVariation(COUNT);

const VERTEX_SHADER = /* glsl */ `
  attribute float aSize;
  attribute float aOpacity;
  varying float vOpacity;
  void main() {
    vOpacity = aOpacity;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    // aSize is the target on-screen size in px (0.5–3); scaled by camera
    // distance so points on the far side of the globe read slightly smaller.
    gl_PointSize = aSize * (8.5 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  varying float vOpacity;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d) * vOpacity;
    gl_FragColor = vec4(0.365, 0.792, 0.647, alpha);
  }
`;

function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const { camera, size } = useThree();

  // Seeds the bufferAttribute once; the live buffer is subsequently read
  // and mutated only via the Three.js geometry attribute array itself
  // (see useFrame below), never through this React-level binding.
  const initialPositions = useMemo(() => BASE_POSITIONS.slice(), []);

  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);
  const mouseNDC = useRef(new THREE.Vector2(9999, 9999));
  const intersection = useMemo(() => new THREE.Vector3(), []);
  const localMouse = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    if (!groupRef.current || !pointsRef.current) return;

    groupRef.current.rotation.y += delta * 0.07;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.06) * 0.08;

    const breathe = 1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.015;
    groupRef.current.scale.setScalar(breathe);

    raycaster.setFromCamera(mouseNDC.current, camera);
    const hit = raycaster.ray.intersectPlane(plane, intersection);
    if (hit) {
      localMouse.copy(intersection);
      groupRef.current.worldToLocal(localMouse);
    } else {
      localMouse.set(9999, 9999, 9999);
    }

    const t = state.clock.elapsedTime;
    const arr = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const { phases, speeds } = VARIATION;

    for (let i = 0; i < COUNT; i++) {
      const idx = i * 3;
      const bx = BASE_POSITIONS[idx];
      const by = BASE_POSITIONS[idx + 1];
      const bz = BASE_POSITIONS[idx + 2];

      // Slow organic drift, like dust suspended in light.
      const speed = speeds[i];
      const driftX = Math.sin(t * speed + phases[idx]) * DRIFT_AMPLITUDE;
      const driftY = Math.cos(t * speed * 0.9 + phases[idx + 1]) * DRIFT_AMPLITUDE;
      const driftZ = Math.sin(t * speed * 1.1 + phases[idx + 2]) * DRIFT_AMPLITUDE;

      const dx = bx - localMouse.x;
      const dy = by - localMouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let tx = bx + driftX;
      let ty = by + driftY;
      let tz = bz + driftZ;

      if (dist < INTERACTION_RADIUS) {
        const falloff = 1 - dist / INTERACTION_RADIUS;
        const len = Math.sqrt(bx * bx + by * by + bz * bz) || 1;
        const push = falloff * PUSH_STRENGTH;
        tx += (bx / len) * push;
        ty += (by / len) * push;
        tz += (bz / len) * push;
      }

      arr[idx] += (tx - arr[idx]) * 0.09;
      arr[idx + 1] += (ty - arr[idx + 1]) * 0.09;
      arr[idx + 2] += (tz - arr[idx + 2]) * 0.09;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      mouseNDC.current.x = (e.clientX / size.width) * 2 - 1;
      mouseNDC.current.y = -(e.clientY / size.height) * 2 + 1;
    };
    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [size]);

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[initialPositions, 3]} />
          <bufferAttribute attach="attributes-aSize" args={[VARIATION.sizes, 1]} />
          <bufferAttribute attach="attributes-aOpacity" args={[VARIATION.opacities, 1]} />
        </bufferGeometry>
        <shaderMaterial
          vertexShader={VERTEX_SHADER}
          fragmentShader={FRAGMENT_SHADER}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <mesh>
        <sphereGeometry args={[RADIUS * 0.7, 32, 32]} />
        <meshBasicMaterial color="#1D9E75" transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

export default function ParticleGlobe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <Globe />
    </Canvas>
  );
}
