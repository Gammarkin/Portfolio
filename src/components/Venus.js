import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'


function Venus() {
    const groupRef = useRef()

    useFrame(() => {
        groupRef.current.rotation.y += 0.003
    })

    return (
        <group ref={groupRef}>
            <mesh position={[0, 40, 0]}>
                <icosahedronGeometry attach="geometry" args={[100, 1]} />
                <meshPhongMaterial
                    attach="material"
                    color={0xF5DEB3}
                    flatShading
                />
            </mesh>
        </group>
    )
}

function ThreeScene() {
    return (
        <Canvas
            style={{ width: '100%', height: '15rem' }}
            camera={{ position: [0, 400, 400], fov: 75, rotation: [-Math.PI / 2, 0, 0] }}
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true
                gl.shadowMap.type = THREE.PCFSoftShadowMap
            }}
        >
            <ambientLight />
            <directionalLight position={[200, 100, 200]} castShadow />
            <Venus />
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}

export default ThreeScene
