import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import Navbar from './components/Navbar'
import Galaxy from './components/Galaxy'
import PageContent from './components/PageContent'

function App() {
  const [count, setCount] = useState(0)
  const [explode, setExplode] = useState(false)
  const [hideNumber, setHideNumber] = useState(false)

  // 1. เพิ่ม State เช็คว่าเป็นมือถือหรือไม่ (จอเล็กกว่า 768px)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    // 2. อัปเดตค่าทันทีที่มีการย่อ/ขยายจอ
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setHideNumber(true), 400) 
          setTimeout(() => setExplode(true), 800)    
          return 100
        }
        return prev + 2
      })
    }, 20)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <Navbar explode={explode} />

      {/* หน้าจอ Loading */}
      {!hideNumber && (
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          fontFamily: "'Space Grotesk', sans-serif", fontSize: '4rem', color: 'white',
          zIndex: 999, pointerEvents: 'none',
          transition: 'opacity 0.4s ease',
          opacity: count === 100 ? 0 : 1
        }}>
          {count}%
        </div>
      )}

      {/* โซน 3D Component */}
      <div style={{ width: '100vw', height: '100vh' }}>
        <Canvas camera={{ position: [0, 3, 5], fov: 60 }}>
          {/* 3. ถ้าเป็นมือถือ ให้ยาว 26 หน้า ถ้าคอมให้ยาว 16 หน้า */}
          <ScrollControls pages={isMobile ? 26 : 12} damping={0.2}>
            
            <group rotation={[-0.2, 0, 0]}>
              <Galaxy explode={explode} />
            </group>

            <PageContent explode={explode} />

          </ScrollControls>
        </Canvas>
      </div>
    </>
  )
}

export default App