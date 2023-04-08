import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Uranus = () => {
    const groupRef = useRef();

    useFrame(() => {
        groupRef.current.rotation.y += 0.01;
    });

    return (
        <group ref={groupRef}>
            <mesh>
                <icosahedronGeometry attach="geometry" args={[70, 80, 64]} />
                <meshStandardMaterial attach="material" color={0x70C7C0} />
            </mesh>

            <mesh position={[10, 0, -100]} rotation={[0, 0, 0]}>
                <sphereGeometry attach="geometry" args={[10, 22, 32]} />
                <meshStandardMaterial attach="material" color={0xffffff} />
            </mesh>
        </group>
    );
};

const ThreeScene = () => {
    return (
        <Canvas
            style={{ width: '100%', height: '30rem' }}
            camera={{ position: [0, 0, 200], fov: 75 }}
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
        >
            <ambientLight intensity={0.5} />
            <pointLight position={[100, 100, 100]} castShadow />
            <Uranus />
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

export default ThreeScene;
