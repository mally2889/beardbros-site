'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

function Tile({ color, position }: { color: string, position: [number,number,number] }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t/2) * 0.2;
    ref.current.rotation.y = Math.cos(t/2) * 0.3;
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[1.6, 0.1, 1]} />
      <meshStandardMaterial color={color} metalness={0.4} roughness={0.4} />
    </mesh>
  );
}

export default function Hero3D() {
  const reduced = usePrefersReducedMotion();
  return (
    <div className="h-[420px] md:h-[520px] glass">
      <Canvas camera={{ position: [3,3,6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5,5,5]} intensity={1.2} />
        <Suspense fallback={null}>
          <Float speed={reduced ? 0 : 1}>
            <group position={[0,0,0]}>
              <Tile color={"#34f5c5"} position={[-1.4, 0, 0]} />
              <Tile color={"#ffffff"} position={[0.3, 0.4, -0.6]} />
              <Tile color={"#a7f3d0"} position={[1.8, -0.2, 0.2]} />
            </group>
          </Float>
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate={!reduced} autoRotateSpeed={0.8} />
      </Canvas>
      <p className="text-xs text-white/40 p-3">3D preview (lightweight, no model). Will morph into services grid on scroll.</p>
    </div>
  );
}
