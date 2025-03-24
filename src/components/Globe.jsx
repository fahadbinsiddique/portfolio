"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture, Text3D } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const RotatingGlobe = () => {
  const globeRef = useRef();
  const cloudsRef = useRef();
  const earthTexture = useTexture({
    map: "/1.jpg",
    bumpMap: "/1.jpg",
    specularMap: "/1.jpg",
    cloudMap: "/1.jpg"
  });

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    globeRef.current.rotation.y = elapsedTime * 0.15;
    cloudsRef.current.rotation.y = elapsedTime * 0.155; // Slightly faster for parallax effect
  });

  return (
    <group>
      {/* Main Earth Sphere */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhongMaterial
          map={earthTexture.map}
          bumpMap={earthTexture.bumpMap}
          bumpScale={0.05}
          specularMap={earthTexture.specularMap}
          specular={new THREE.Color('grey')}
          shininess={5}
        />
      </mesh>

      {/* Cloud Layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.52, 64, 64]} />
        <meshPhongMaterial
          map={earthTexture.cloudMap}
          transparent={true}
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      {/* Glow Effect */}
      <mesh>
        <sphereGeometry args={[1.55, 32, 32]} />
        <meshBasicMaterial
          color={new THREE.Color(0.2, 0.3, 1)}
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

const FloatingText = () => {
  const textRef = useRef();

  useFrame(({ clock }) => {
    textRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1;
  });

  return (
    <Text3D
      ref={textRef}
      font="/fonts/helvetiker_regular.typeface.json"
      size={0.4}
      height={0.1}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
      position={[0, -2.5, 0]}
      rotation={[0, 0, 0]}
    >
      Interactive Globe
      <meshStandardMaterial color="#6366f1" metalness={0.7} roughness={0.2} />
    </Text3D>
  );
};

const Globe = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <directionalLight
            position={[-5, 5, 5]}
            intensity={0.8}
            castShadow
          />
          
          {/* Scene Elements */}
          <RotatingGlobe />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <FloatingText />
          
          {/* Controls */}
          <OrbitControls
            enableZoom={true}
            zoomSpeed={0.5}
            minDistance={3}
            maxDistance={8}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
      
      {/* Overlay Instructions */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm opacity-70 pointer-events-none">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};

export default Globe;