import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Robot() {
  const root = useRef(null)
  const head = useRef(null)
  const leftArm = useRef(null)
  const rightArm = useRef(null)

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    if (!root.current || !head.current || !leftArm.current || !rightArm.current) return

    root.current.position.y = Math.sin(t * 1.35) * 0.12
    root.current.rotation.y = THREE.MathUtils.lerp(
      root.current.rotation.y,
      state.pointer.x * 0.35,
      Math.min(1, delta * 3),
    )
    head.current.rotation.x = THREE.MathUtils.lerp(
      head.current.rotation.x,
      -state.pointer.y * 0.22,
      Math.min(1, delta * 4),
    )
    head.current.rotation.y = THREE.MathUtils.lerp(
      head.current.rotation.y,
      state.pointer.x * 0.32,
      Math.min(1, delta * 4),
    )
    leftArm.current.rotation.z = -0.45 + Math.sin(t * 1.6) * 0.08
    rightArm.current.rotation.z = 0.55 + Math.sin(t * 1.6 + Math.PI) * 0.08
  })

  return (
    <group ref={root} rotation={[0.08, -0.18, 0]}>
      <mesh position={[0, 0.2, 0]} castShadow>
        <capsuleGeometry args={[0.72, 1.1, 10, 20]} />
        <meshStandardMaterial color="#0b2b5c" metalness={0.72} roughness={0.22} />
      </mesh>

      <mesh position={[0, 0.35, 0.73]}>
        <boxGeometry args={[0.72, 0.24, 0.08]} />
        <meshStandardMaterial color="#20d8ff" emissive="#20d8ff" emissiveIntensity={2.1} />
      </mesh>

      <group ref={head} position={[0, 1.45, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.74, 36, 24]} />
          <meshStandardMaterial color="#e8f6ff" metalness={0.45} roughness={0.18} />
        </mesh>
        <mesh position={[0, -0.03, 0.63]}>
          <boxGeometry args={[1.04, 0.38, 0.16]} />
          <meshStandardMaterial color="#040b1e" metalness={0.9} roughness={0.1} />
        </mesh>
        {[-0.27, 0.27].map((x) => (
          <mesh key={x} position={[x, 0, 0.74]}>
            <sphereGeometry args={[0.075, 24, 16]} />
            <meshStandardMaterial color="#7df9ff" emissive="#20d8ff" emissiveIntensity={4} />
          </mesh>
        ))}
        <mesh position={[0, -0.26, 0.72]}>
          <boxGeometry args={[0.28, 0.035, 0.04]} />
          <meshStandardMaterial color="#6feaff" emissive="#20d8ff" emissiveIntensity={2} />
        </mesh>
      </group>

      <group ref={leftArm} position={[-0.92, 0.5, 0]} rotation={[0, 0, -0.45]}>
        <mesh position={[0, -0.55, 0]} castShadow>
          <capsuleGeometry args={[0.2, 0.8, 8, 16]} />
          <meshStandardMaterial color="#1556a3" metalness={0.6} roughness={0.25} />
        </mesh>
      </group>

      <group ref={rightArm} position={[0.92, 0.5, 0]} rotation={[0, 0, 0.55]}>
        <mesh position={[0, -0.55, 0]} castShadow>
          <capsuleGeometry args={[0.2, 0.8, 8, 16]} />
          <meshStandardMaterial color="#1556a3" metalness={0.6} roughness={0.25} />
        </mesh>
      </group>

      <mesh position={[-0.38, -1.05, 0]} castShadow>
        <capsuleGeometry args={[0.24, 0.85, 8, 16]} />
        <meshStandardMaterial color="#081733" metalness={0.55} roughness={0.26} />
      </mesh>
      <mesh position={[0.38, -1.05, 0]} castShadow>
        <capsuleGeometry args={[0.24, 0.85, 8, 16]} />
        <meshStandardMaterial color="#081733" metalness={0.55} roughness={0.26} />
      </mesh>
    </group>
  )
}

function Orbits() {
  const group = useRef(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z += delta * 0.08
  })

  return (
    <group ref={group} rotation={[0.4, 0.2, 0]}>
      {[2.5, 3.2, 4].map((radius, index) => (
        <mesh key={radius} rotation={[Math.PI / 2 + index * 0.22, index * 0.35, 0]}>
          <torusGeometry args={[radius, 0.012, 6, 160]} />
          <meshBasicMaterial
            color={index === 1 ? '#8a5cff' : '#1bc8ff'}
            transparent
            opacity={0.38}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function MascotAnimation({ height = 420, className = '' }) {
  return (
    <div className={className} style={{ width: '100%', height, overflow: 'hidden', borderRadius: 24 }}>
      <Canvas
        camera={{ position: [0, 0.25, 6.4], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[4, 5, 4]} intensity={3.5} color="#9ddfff" />
        <pointLight position={[-4, 1, 3]} intensity={35} color="#6a3cff" distance={10} />
        <pointLight position={[3, -2, 2]} intensity={25} color="#00d6ff" distance={8} />
        <Robot />
        <Orbits />
        <mesh position={[0, -1.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[2.6, 64]} />
          <meshStandardMaterial color="#071329" metalness={0.8} roughness={0.18} />
        </mesh>
      </Canvas>
    </div>
  )
}
