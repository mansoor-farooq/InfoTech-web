'use client'

import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Cube({ data, index }) {
  const ref = useRef(null)

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    if (!ref.current) return
    ref.current.rotation.x += delta * data.speed
    ref.current.rotation.y += delta * data.speed * 0.7
    ref.current.position.y = data.position[1] + Math.sin(t * data.floatSpeed + index) * data.floatRange
  })

  return (
    <mesh ref={ref} position={data.position} scale={data.scale}>
      <boxGeometry />
      <meshStandardMaterial
        color={data.color}
        metalness={0.88}
        roughness={0.14}
        emissive={data.color}
        emissiveIntensity={0.18}
      />
    </mesh>
  )
}

function FloatingCubes() {
  const [cubes] = useState(() => {
    const colors = ['#0d54ff', '#5732d9', '#0fb8ff', '#10275f']
    return Array.from({ length: 36 }, (_, index) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 5,
      ],
      scale: 0.22 + Math.random() * 0.8,
      speed: 0.03 + Math.random() * 0.1,
      floatSpeed: 0.15 + Math.random() * 0.35,
      floatRange: 0.08 + Math.random() * 0.2,
      color: colors[index % colors.length],
    }))
  }, [])

  return cubes.map((data, index) => <Cube key={index} data={data} index={index} />)
}

function CameraRig() {
  useFrame((state, delta) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.6,
      Math.min(1, delta * 0.5),
    )
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 0.3,
      Math.min(1, delta * 0.5),
    )
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function CinematicBackground({ height = 520, className = '' }) {
  return (
    <div className={className} style={{ width: '100%', height, overflow: 'hidden', borderRadius: 24 }}>
      <Canvas
        camera={{ position: [0, 0, 7.8], fov: 52 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%', background: '#020611' }}
      >
        <fog attach="fog" args={['#020611', 4, 13]} />
        <ambientLight intensity={0.45} />
        <directionalLight position={[5, 6, 3]} intensity={4.2} color="#75c8ff" />
        <pointLight position={[-4, -1, 2]} intensity={55} color="#7d2dff" distance={10} />
        <pointLight position={[2, 1, -2]} intensity={38} color="#009dff" distance={8} />
        <FloatingCubes />
        <CameraRig />
      </Canvas>
    </div>
  )
}
