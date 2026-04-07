"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pinsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    }
    if (pinsRef.current) {
      pinsRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    }
  });

  // Grid lines (wireframe globe)
  const gridLines = useMemo(() => {
    const lines: React.ReactElement[] = [];
    // Latitude lines
    for (let i = -60; i <= 60; i += 30) {
      const phi = (90 - i) * (Math.PI / 180);
      const points: THREE.Vector3[] = [];
      for (let j = 0; j <= 360; j += 5) {
        const theta = j * (Math.PI / 180);
        const r = 2.01;
        points.push(new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.cos(phi),
          r * Math.sin(phi) * Math.sin(theta)
        ));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: "#3B82F6", opacity: 0.12, transparent: true });
      lines.push(<primitive key={`lat-${i}`} object={new THREE.Line(geometry, material)} />);
    }
    // Longitude lines
    for (let i = 0; i < 360; i += 30) {
      const theta = i * (Math.PI / 180);
      const points: THREE.Vector3[] = [];
      for (let j = 0; j <= 180; j += 5) {
        const phi = j * (Math.PI / 180);
        const r = 2.01;
        points.push(new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.cos(phi),
          r * Math.sin(phi) * Math.sin(theta)
        ));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: "#3B82F6", opacity: 0.08, transparent: true });
      lines.push(<primitive key={`lon-${i}`} object={new THREE.Line(geometry, material)} />);
    }
    return lines;
  }, []);

  // Pin locations (lat, lon, color)
  const pins = useMemo(() => [
    { lat: 37.77, lon: -122.42, color: "#3B82F6" },  // SF
    { lat: 40.71, lon: -74.01, color: "#22C55E" },    // NYC
    { lat: 51.51, lon: -0.13, color: "#F59E0B" },     // London
    { lat: 35.68, lon: 139.69, color: "#EF4444" },    // Tokyo
    { lat: -33.87, lon: 151.21, color: "#A855F7" },   // Sydney
    { lat: 48.86, lon: 2.35, color: "#3B82F6" },      // Paris
    { lat: 19.43, lon: -99.13, color: "#22C55E" },    // Mexico City
    { lat: -23.55, lon: -46.63, color: "#F59E0B" },   // Sao Paulo
    { lat: 1.35, lon: 103.82, color: "#EF4444" },     // Singapore
    { lat: 28.61, lon: 77.21, color: "#A855F7" },     // Delhi
    { lat: 55.75, lon: 37.62, color: "#3B82F6" },     // Moscow
    { lat: 25.20, lon: 55.27, color: "#22C55E" },     // Dubai
  ], []);

  return (
    <group>
      {/* Globe body */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshPhongMaterial
          color="#0A0F1A"
          emissive="#0A1628"
          emissiveIntensity={0.3}
          transparent
          opacity={0.9}
          shininess={20}
        />
      </Sphere>

      {/* Grid overlay */}
      <group ref={meshRef}>{gridLines}</group>

      {/* Glowing pins */}
      <group ref={pinsRef}>
        {pins.map((pin, i) => {
          const phi = (90 - pin.lat) * (Math.PI / 180);
          const theta = (pin.lon + 180) * (Math.PI / 180);
          const r = 2.03;
          const x = r * Math.sin(phi) * Math.cos(theta);
          const y = r * Math.cos(phi);
          const z = r * Math.sin(phi) * Math.sin(theta);
          return (
            <group key={i} position={[x, y, z]}>
              <mesh>
                <sphereGeometry args={[0.04, 16, 16]} />
                <meshBasicMaterial color={pin.color} />
              </mesh>
              {/* Glow ring */}
              <mesh>
                <ringGeometry args={[0.06, 0.1, 32]} />
                <meshBasicMaterial color={pin.color} transparent opacity={0.3} side={THREE.DoubleSide} />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* Atmosphere glow */}
      <Sphere args={[2.15, 64, 64]}>
        <meshPhongMaterial
          color="#3B82F6"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </Sphere>
      <Sphere args={[2.3, 64, 64]}>
        <meshPhongMaterial
          color="#3B82F6"
          transparent
          opacity={0.02}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

export default function Globe() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#3B82F6" />
        <pointLight position={[-10, -5, -10]} intensity={0.4} color="#22C55E" />
        <Earth />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
