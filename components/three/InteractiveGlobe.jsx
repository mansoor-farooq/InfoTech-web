
import React, { useState, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function latLonToVector3(lat, lon, radius = 2.02) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  )
}

function Arc({ from, to, color }) {
  const curve = useMemo(() => {
    const start = latLonToVector3(...from)
    const end = latLonToVector3(...to)
    const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(2.85)
    return new THREE.QuadraticBezierCurve3(start, mid, end)
  }, [from, to])

  return (
    <mesh>
      <tubeGeometry args={[curve, 48, 0.018, 8, false]} />
      <meshBasicMaterial color={color} transparent opacity={0.86} />
    </mesh>
  )
}

function Globe() {
  const group = useRef(null)
  const locations = useMemo(
    () => [
      [24.86, 67.01],
      [24.71, 46.68],
      [25.2, 55.27],
      [51.5, -0.12],
      [40.71, -74.0],
      [1.35, 103.82],
    ],
    [],
  )

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.12
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.16,
      Math.min(1, delta * 1.8),
    )
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -state.pointer.x * 0.12,
      Math.min(1, delta * 1.8),
    )
  })

  return (
    <group ref={group} rotation={[0.1, -0.7, 0]}>
      <mesh>
        <sphereGeometry args={[2, 72, 72]} />
        <meshStandardMaterial
          color="#061c3f"
          metalness={0.3}
          roughness={0.36}
          emissive="#06244d"
          emissiveIntensity={0.45}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.035, 42, 42]} />
        <meshBasicMaterial color="#1ed5ff" wireframe transparent opacity={0.15} />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.13, 48, 48]} />
        <meshBasicMaterial color="#3e8cff" transparent opacity={0.035} side={THREE.BackSide} />
      </mesh>

      {locations.map((location, index) => {
        const point = latLonToVector3(...location, 2.08)
        return (
          <mesh key={index} position={point}>
            <sphereGeometry args={[0.055, 18, 12]} />
            <meshBasicMaterial color={index === 0 ? '#ffbf4f' : '#66e6ff'} />
          </mesh>
        )
      })}

      <Arc from={locations[0]} to={locations[1]} color="#ffbf4f" />
      <Arc from={locations[0]} to={locations[2]} color="#36dfff" />
      <Arc from={locations[0]} to={locations[3]} color="#7b61ff" />
      <Arc from={locations[0]} to={locations[4]} color="#38c7ff" />
      <Arc from={locations[0]} to={locations[5]} color="#ffbf4f" />
    </group>
  )
}

function Stars() {
  const [geometry] = useState(() => {
    const points = new Float32Array(900 * 3)
    for (let index = 0; index < 900; index += 1) {
      const radius = 5 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      points[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
      points[index * 3 + 1] = radius * Math.cos(phi)
      points[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
    }
    const result = new THREE.BufferGeometry()
    result.setAttribute('position', new THREE.BufferAttribute(points, 3))
    return result
  }, [])

  return (
    <points geometry={geometry}>
      <pointsMaterial color="#78cfff" size={0.018} transparent opacity={0.75} sizeAttenuation />
    </points>
  )
}

export default function InteractiveGlobe({ height = 500, className = '' }) {
  return (
    <div className={className} style={{ width: '100%', height, overflow: 'hidden', borderRadius: 24 }}>
      <Canvas
        camera={{ position: [0, 0.2, 6.7], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%', background: '#020713' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 3, 5]} intensity={3.6} color="#bcecff" />
        <pointLight position={[-3, -1, 2]} intensity={28} color="#156dff" distance={9} />
        <Stars />
        <Globe />
      </Canvas>
    </div>
  )
}
