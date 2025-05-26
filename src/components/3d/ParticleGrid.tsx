import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Particles = ({ count = 2000 }) => {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  
  // This reference gives us direct access to our points
  const particlesRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  // Generate random particles
  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Animation
  useFrame(() => {
    if (particlesRef.current) {
      // Rotate particles
      particlesRef.current.rotation.x += 0.0005;
      particlesRef.current.rotation.y += 0.0005;
      
      // Influence rotation based on mouse position
      particlesRef.current.rotation.x += mouseRef.current.y * 0.0005;
      particlesRef.current.rotation.y += mouseRef.current.x * 0.0005;
      
      // Update particle positions
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        // Apply a slight movement to each particle
        positions[i] += Math.sin(Date.now() * 0.001 + i) * 0.01;
        positions[i + 1] += Math.cos(Date.now() * 0.0015 + i) * 0.01;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.15 * aspect} 
        color="#00F5FF" 
        transparent 
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const ParticleGrid = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Particles count={1500} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

export default ParticleGrid;