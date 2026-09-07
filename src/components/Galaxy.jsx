import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

export default function Galaxy({ explode }) {
  const pointsRef = useRef()
  const scroll = useScroll()

  const { positions, colors } = useMemo(() => {
    const count = 15000 
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const colorInside = new THREE.Color('#ffddaa') 
    const colorOutside = new THREE.Color('#4477ff') 

    for (let i = 0; i < count; i++) {
      const radius = Math.pow(Math.random(), 3) * 5 
      const branchAngle = (i % 3) * ((2 * Math.PI) / 3) 
      const spinAngle = radius * 1.5
      const randomX = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.5
      const randomY = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.2 
      const randomZ = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.5

      positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i * 3 + 1] = randomY
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

      const mixedColor = colorInside.clone().lerp(colorOutside, radius / 5)
      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b
    }
    return { positions, colors }
  }, [])

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // ปล่อยให้หมุนด้วยความเร็วคงที่ (0.15) ก็พอ ไม่ต้องเอาค่า scroll มาบวกเพิ่มแล้ว
      pointsRef.current.rotation.y += delta * 0.15
      
      if (explode) {
        pointsRef.current.scale.x = THREE.MathUtils.lerp(pointsRef.current.scale.x, 20, delta * 3)
        pointsRef.current.scale.y = THREE.MathUtils.lerp(pointsRef.current.scale.y, 20, delta * 3)
        pointsRef.current.scale.z = THREE.MathUtils.lerp(pointsRef.current.scale.z, 20, delta * 3)
        pointsRef.current.material.opacity = THREE.MathUtils.lerp(pointsRef.current.material.opacity, 0.3, delta * 2)
      }
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial vertexColors size={0.02} sizeAttenuation transparent opacity={0.8} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  )
}