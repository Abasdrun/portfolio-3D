import { useEffect, useRef, useState } from 'react'
import { Scroll } from '@react-three/drei'

// 1. สร้างตัวช่วยจัดการอนิเมชั่นเวลาเลื่อนจอมาเจอ (Scroll Animation)
function AnimatedSection({ children }) {
  const ref = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // ถ้าเลื่อนจอมาเห็นคอมโพเนนต์นี้เกิน 30% ให้แสดงผล
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          // ถ้าเลื่อนผ่านไปแล้ว ให้ซ่อนกลับไปเหมือนเดิม (เวลาเลื่อนกลับมาจะได้มีอนิเมชั่นอีก)
          setIsVisible(false) 
        }
      },
      { threshold: 0.3 } 
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        /* --- อนิเมชั่นเปลี่ยนหน้า: เฟดอิน + ดันขึ้น + ขยายขนาดนิดๆ --- */
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.95)',
        transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  )
}

export default function PageContent({ explode }) {
  
  // สไตล์การ์ดกระจกฝ้า (โครงเดิม)
  const glassCardStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '24px',
    padding: '60px',
    width: '100%',
    maxWidth: '850px',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)'
  }

  const pageStyle = {
    height: '100vh', 
    padding: '0 5vw', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <Scroll html style={{ width: '100vw', color: 'white' }}>
      
      {/* หน้าที่ 1: ต้อนรับ (ใช้อนิเมชั่นตอนโหลดเสร็จเหมือนเดิม จะได้ซิงค์กับดาวระเบิด) */}
      <div id="home" style={pageStyle}>
        <h1 style={{ 
          fontSize: '5rem', fontFamily: "'Playfair Display', serif", fontWeight: '700',
          margin: '0 0 10px 0', textShadow: '0px 0px 20px rgba(255,255,255,0.5)', textAlign: 'center',
          opacity: explode ? 1 : 0, transform: explode ? 'translateY(0px)' : 'translateY(40px)', 
          transition: 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)' 
        }}>
          Welcome to Portfolio
        </h1>
        <h2 style={{
          fontSize: '2rem', fontFamily: "'Playfair Display', serif", fontWeight: '400', fontStyle: 'italic', 
          color: '#cccccc', margin: 0, textShadow: '0px 0px 15px rgba(255,255,255,0.3)', textAlign: 'center',
          opacity: explode ? 1 : 0, transform: explode ? 'translateY(0px)' : 'translateY(30px)', 
          transition: 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1) 0.8s' 
        }}>
          Mr.Abasdrun Maeha ComputerEngineering
        </h2>
      </div>

      {/* หน้าที่ 2: About Me (เอา AnimatedSection มาครอบการ์ดไว้) */}
      <div id="about" style={pageStyle}>
        <AnimatedSection>
          <div style={glassCardStyle}>
            <h2 style={{ fontSize: '3rem', color: '#4477ff', marginTop: 0 }}>About Me</h2>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#e0e0e0', marginBottom: 0 }}>
              สวัสดีครับ ผมยูน นักศึกษาวัย 21 ปี ที่หลงใหลในการเขียนโค้ดและสร้างสรรค์ระบบใหม่ๆ 
              ผมเคยผ่านประสบการณ์ทำงานบริการมา 3 ปีเต็ม ทำให้ผมเข้าใจการทำงานร่วมกับผู้อื่นและการแก้ปัญหาเฉพาะหน้าได้เป็นอย่างดี
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* หน้าที่ 3: Projects */}
      <div id="projects" style={pageStyle}>
        <AnimatedSection>
          <div style={glassCardStyle}>
            <h2 style={{ fontSize: '3rem', color: '#ffddaa', marginTop: 0 }}>Selected Projects</h2>
            <ul style={{ fontSize: '1.3rem', lineHeight: '2.2', color: '#e0e0e0', listStyleType: 'square', marginBottom: 0 }}>
              <li><strong>LoRaWAN Container Tracking:</strong> ระบบเครือข่ายฮาร์ดแวร์สำหรับติดตามตู้คอนเทนเนอร์</li>
              <li><strong>Smart Classroom:</strong> ระบบเช็คชื่อนักศึกษาผ่าน QR Code พร้อมตรวจจับตำแหน่ง</li>
              <li><strong>Shopee Affiliate Auto-Post:</strong> บอท AI อัตโนมัติดึงข้อมูลจาก Google Sheet เพื่อโพสต์ทำ Affiliate</li>
              <li><strong>BioSync & UI/UX:</strong> ออกแบบอินเทอร์เฟซแอปพลิเคชันลงทะเบียนเรียนกว่า 15 หน้าจอด้วย Figma</li>
            </ul>
          </div>
        </AnimatedSection>
      </div>

      {/* หน้าที่ 4: Certificate */}
      <div id="certificate" style={pageStyle}>
        <AnimatedSection>
          <div style={glassCardStyle}>
            <h2 style={{ fontSize: '3rem', color: '#aaffaa', marginTop: 0 }}>Certificates & Activities</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
              <div style={{ paddingLeft: '20px', borderLeft: '4px solid #aaffaa' }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.4rem', color: 'white' }}>Cubic Staff Program - PlayCube</h3>
                <p style={{ margin: 0, fontSize: '1.1rem', color: '#aaaaaa' }}>เข้าร่วมการคัดเลือกและปฏิบัติงานในโครงการจัดกิจกรรม</p>
              </div>
              
              <div style={{ paddingLeft: '20px', borderLeft: '4px solid #aaffaa' }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.4rem', color: 'white' }}>TOEIC English Proficiency Prep</h3>
                <p style={{ margin: 0, fontSize: '1.1rem', color: '#aaaaaa' }}>ผ่านการฝึกฝนทักษะภาษาอังกฤษเพื่อการสื่อสารระดับสากล</p>
              </div>

              <div style={{ paddingLeft: '20px', borderLeft: '4px solid #aaffaa' }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.4rem', color: 'white' }}>UI/UX Design Concept</h3>
                <p style={{ margin: 0, fontSize: '1.1rem', color: '#aaaaaa' }}>ออกแบบโครงสร้างและประสบการณ์ผู้ใช้ (Figma) ในโปรเจ็กต์มหาวิทยาลัย</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

    </Scroll>
  )
}