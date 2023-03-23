import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const colors = [0x4b0082, 0xffd700, 0x6549C0]

const Particles = () => {
    const groupRef = useRef();

    useFrame(() => {
        groupRef.current.rotation.x += 0.001
        groupRef.current.rotation.y -= 0.004
    })

    return (
        <group ref={groupRef}>
            {Array.from({ length: 500 }).map((_, i) => (
                <mesh
                    key={i}
                    position={[
                        (Math.random() - 0.5) * 1000,
                        (Math.random() - 0.5) * 1000,
                        (Math.random() - 0.5) * 1000,
                    ]}
                    rotation={[0, 0, 0]}
                >
                    <tetrahedronGeometry attach="geometry" args={[4, 0]} />
                    <meshPhongMaterial
                        attach="material"
                        color={colors[Math.floor(Math.random() * colors.length)]}
                        flatShading
                    />
                </mesh>
            ))}
        </group>
    )
}

const Saturn = () => {
    const groupRef = useRef()

    useFrame(() => {
        groupRef.current.rotation.y += 0.003
    })

    return (
        <group ref={groupRef}>
            <mesh position={[0, 40, 0]}>
                <icosahedronGeometry attach="geometry" args={[180, 1]} />
                <meshPhongMaterial
                    attach="material"
                    color={0xB8A97E}
                    flatShading
                />
            </mesh>

            { /* Saturn Rings */}

            <mesh position={[0, 40, 0]} rotation={[THREE.MathUtils.degToRad(80), 0, 0]}>
                <torusGeometry attach="geometry" args={[240, 12, 6, 15]} />
                <meshStandardMaterial
                    attach="material"
                    color={0x65617D}
                    flatShading
                />
            </mesh>
        </group >
    )
}

const Scene = () => (
    <Canvas
        style={{
            height: '70%',
            width: '100%',
            pointerEvents: 'none',
        }}
        camera={{ position: [0, 100, 600], fov: 50, rotation: [0, 0, 0] }}
        onCreated={({ gl }) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
    >
        <ambientLight />
        <directionalLight position={[200, 100, 200]} castShadow />
        <Particles />
        <Saturn />
    </Canvas>
)

export default Scene;