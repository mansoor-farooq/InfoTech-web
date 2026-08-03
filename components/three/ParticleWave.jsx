import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Wave() {
  const pointsRef = useRef(null)
  const { geometry, basePositions } = useMemo(() => {
    const width = 82
    const height = 48
    const count = width * height
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const base = new Float32Array(count * 3)
    const cyan = new THREE.Color('#20d8ff')
    const purple = new THREE.Color('#8c4cff')

    let index = 0
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const px = (x / (width - 1) - 0.5) * 9.8
        const py = (y / (height - 1) - 0.5) * 5.6
        positions[index * 3] = px
        positions[index * 3 + 1] = py
        positions[index * 3 + 2] = 0
        base[index * 3] = px
        base[index * 3 + 1] = py
        base[index * 3 + 2] = 0
        const color = cyan.clone().lerp(purple, x / (width - 1))
        colors[index * 3] = color.r
        colors[index * 3 + 1] = color.g
        colors[index * 3 + 2] = color.b
        index += 1
      }
    }

    const result = new THREE.BufferGeometry()
    result.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    result.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return { geometry: result, basePositions: base }
  }, [])

  useFrame((state) => {
    const positionAttribute = geometry.attributes.position
    const time = state.clock.elapsedTime
    const mouseX = state.pointer.x * 4.5
    const mouseY = state.pointer.y * 2.8

    for (let index = 0; index < positionAttribute.count; index += 1) {
      const x = basePositions[index * 3]
      const y = basePositions[index * 3 + 1]
      const distance = Math.hypot(x - mouseX, y - mouseY)
      const pointerLift = Math.max(0, 1.6 - distance) * 0.45
      positionAttribute.array[index * 3 + 2] =
        Math.sin(x * 1.05 + time * 1.25) * 0.28 +
        Math.cos(y * 1.45 - time * 1.05) * 0.18 +
        pointerLift
    }

    positionAttribute.needsUpdate = true
    if (pointsRef.current) {
      pointsRef.current.rotation.x = -0.62 + state.pointer.y * 0.08
      pointsRef.current.rotation.z = state.pointer.x * 0.025
    }
  })

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        vertexColors
        size={0.045}
        transparent
        opacity={0.95}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function ParticleWave({ height = 420, className = '' }) {
  return (
    <div className={className} style={{ width: '100%', height, overflow: 'hidden', borderRadius: 24 }}>
      <Canvas
        camera={{ position: [0, 0.2, 7.5], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%', background: '#020611' }}
      >
        <Wave />
      </Canvas>
    </div>
  )
}
