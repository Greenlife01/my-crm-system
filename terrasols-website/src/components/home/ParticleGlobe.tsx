"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 2600;
const RADIUS = 3.2;
const INTERACTION_RADIUS = 1.6;
const PUSH_STRENGTH = 0.9;

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

function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const { camera, size } = useThree();

  const basePositions = useMemo(() => fibonacciSphere(COUNT, RADIUS), []);
  // Seeds the bufferAttribute once; the live buffer is subsequently read
  // and mutated only via the Three.js geometry attribute array itself
  // (see useFrame below), never through this React-level binding.
  const initialPositions = useMemo(() => basePositions.slice(), [basePositions]);

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

    const arr = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < COUNT; i++) {
      const idx = i * 3;
      const bx = basePositions[idx];
      const by = basePositions[idx + 1];
      const bz = basePositions[idx + 2];

      const dx = bx - localMouse.x;
      const dy = by - localMouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let tx = bx;
      let ty = by;
      let tz = bz;

      if (dist < INTERACTION_RADIUS) {
        const falloff = 1 - dist / INTERACTION_RADIUS;
        const len = Math.sqrt(bx * bx + by * by + bz * bz) || 1;
        const push = falloff * PUSH_STRENGTH;
        tx = bx + (bx / len) * push;
        ty = by + (by / len) * push;
        tz = bz + (bz / len) * push;
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
        </bufferGeometry>
        <pointsMaterial
          size={0.032}
          color="#5DCAA5"
          transparent
          opacity={0.85}
          sizeAttenuation
          depthWrite={false}
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
