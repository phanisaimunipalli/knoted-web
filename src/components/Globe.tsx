"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pinsRef = useRef<THREE.Group>(null);
  const cloudRef = useRef<THREE.Mesh>(null);

  const earthTexture = useTexture("/earth.jpg");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) meshRef.current.rotation.y = t * 0.07;
    if (pinsRef.current) pinsRef.current.rotation.y = t * 0.07;
    if (cloudRef.current) cloudRef.current.rotation.y = t * 0.09;
  });

  const pins = useMemo(() => [
    { lat: 37.77, lon: -122.42, color: "#3B82F6" },   // SF
    { lat: 40.71, lon: -74.01,  color: "#22C55E" },   // NYC
    { lat: 51.51, lon: -0.13,   color: "#F59E0B" },   // London
    { lat: 35.68, lon: 139.69,  color: "#EF4444" },   // Tokyo
    { lat: -33.87, lon: 151.21, color: "#A855F7" },   // Sydney
    { lat: 48.86, lon: 2.35,    color: "#3B82F6" },   // Paris
    { lat: 19.43, lon: -99.13,  color: "#22C55E" },   // Mexico City
    { lat: -23.55, lon: -46.63, color: "#F59E0B" },   // São Paulo
    { lat: 1.35,  lon: 103.82,  color: "#EF4444" },   // Singapore
    { lat: 28.61, lon: 77.21,   color: "#A855F7" },   // Delhi
    { lat: 55.75, lon: 37.62,   color: "#3B82F6" },   // Moscow
    { lat: 25.20, lon: 55.27,   color: "#22C55E" },   // Dubai
    { lat: -1.29, lon: 36.82,   color: "#F59E0B" },   // Nairobi
    { lat: 34.05, lon: -118.24, color: "#EF4444" },   // LA
  ], []);

  return (
    <group>
      {/* Earth */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshPhongMaterial
          map={earthTexture}
          shininess={8}
          specular={new THREE.Color(0x333333)}
        />
      </Sphere>

      {/* Thin cloud / haze layer */}
      <Sphere ref={cloudRef} args={[2.04, 32, 32]}>
        <meshPhongMaterial
          color="#ffffff"
          transparent
          opacity={0.07}
          depthWrite={false}
        />
      </Sphere>

      {/* Atmosphere glow inner */}
      <Sphere args={[2.12, 48, 48]}>
        <meshPhongMaterial
          color="#88bbff"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </Sphere>

      {/* Atmosphere glow outer */}
      <Sphere args={[2.28, 48, 48]}>
        <meshPhongMaterial
          color="#4488ff"
          transparent
          opacity={0.025}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </Sphere>

      {/* Pins */}
      <group ref={pinsRef}>
        {pins.map((pin, i) => {
          const phi = (90 - pin.lat) * (Math.PI / 180);
          const theta = (pin.lon + 180) * (Math.PI / 180);
          const r = 2.07;
          const x = r * Math.sin(phi) * Math.cos(theta);
          const y = r * Math.cos(phi);
          const z = r * Math.sin(phi) * Math.sin(theta);
          return (
            <group key={i} position={[x, y, z]}>
              {/* Core dot */}
              <mesh>
                <sphereGeometry args={[0.035, 16, 16]} />
                <meshBasicMaterial color={pin.color} />
              </mesh>
              {/* Glow ring */}
              <mesh>
                <ringGeometry args={[0.055, 0.09, 32]} />
                <meshBasicMaterial color={pin.color} transparent opacity={0.35} side={THREE.DoubleSide} />
              </mesh>
            </group>
          );
        })}
      </group>
    </group>
  );
}

export default function Globe() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 1, 5.8], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        {/* Sun-like directional light from upper-right */}
        <directionalLight position={[5, 3, 5]} intensity={1.4} color="#fff8f0" />
        {/* Soft fill from the other side */}
        <pointLight position={[-8, -4, -8]} intensity={0.3} color="#3366cc" />
        <Earth />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
}
