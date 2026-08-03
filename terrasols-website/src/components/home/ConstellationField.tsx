"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 200;

function generateDots(count: number) {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 14;
    arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }
  return arr;
}

// Generated once at module load — not during render.
const DOT_POSITIONS = generateDots(COUNT);

export default function ConstellationField({
  color = "#5b9dfa",
  opacity = 0.7,
}: {
  color?: string;
  opacity?: number;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <Dots color={color} opacity={opacity} />
    </Canvas>
  );
}

function Dots({ color, opacity }: { color: string; opacity: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = DOT_POSITIONS;

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.02) * 0.05;
    pointsRef.current.rotation.y += 0.0006;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
