import { useEffect, useRef, useState } from 'react'

export default function Certificate() {
  const [activeFilter, setActiveFilter] = useState('All')
  
  // หมวดหมู่
  const categories = ['All', 'Cloud & Network', 'Web & Mobile', 'Data & AI', 'Hardware & Engineering', 'Others']

  // ข้อมูลใบเซอร์ทั้ง 12 ใบ
  const certificatesData = [
    { 
      id: 1, 
      title: 'AWS Academy', 
      category: 'Data & AI', 
      image: '', 
      description: 'เกียรติบัตรจาก AWS Academy รับรองว่าได้เรียนจบและผ่านหลักสูตร AWS Academy Graduate - Machine Learning Foundations',
      date: 'ออกให้เมื่อวันที่ 4 กุมภาพันธ์ 2569'
    },
    { 
      id: 2, 
      title: 'BORNTO DEV', 
      category: 'Data & AI', 
      image: '', 
      description: 'เกียรติบัตร จาก BORNTO DEV (Open Access Academy) รับรองว่าได้เรียนจบและผ่านหลักสูตร ChatGPT for Developers',
      date: 'ออกให้เมื่อวันที่ 20 สิงหาคม 2568'
    },
    { 
      id: 3, 
      title: 'CHULA MOOC', 
      category: 'Others', 
      image: '', 
      description: 'รับรองการผ่านการอบรมคอร์สออนไลน์จาก CHULA MOOC (รายวิชาทั่วไป)',
      date: 'ออกให้เมื่อวันที่ 15 มกราคม 2568'
    },
    { 
      id: 4, 
      title: 'MathWorks', 
      category: 'Hardware & Engineering', 
      image: '', 
      description: 'Course Completion Certificate จาก MathWorks Training Services',
      date: 'ออกให้เมื่อวันที่ 10 ตุลาคม 2567'
    },
    { 
      id: 5, 
      title: 'Cisco Networking Academy', 
      category: 'Cloud & Network', 
      image: '', 
      description: 'เกียรติบัตรรับรองการผ่านหลักสูตร CCNA: Introduction to Networks',
      date: 'ออกให้เมื่อวันที่ 12 มีนาคม 2569'
    },
    { 
      id: 6, 
      title: 'React Native Development', 
      category: 'Web & Mobile', 
      image: '', 
      description: 'Certificate of Completion - การพัฒนาแอปพลิเคชันด้วย React Native และ Expo',
      date: 'ออกให้เมื่อวันที่ 5 พฤษภาคม 2569'
    },
    { 
      id: 7, 
      title: 'IoT Systems with ESP32', 
      category: 'Hardware & Engineering', 
      image: '', 
      description: 'ใบประกาศนียบัตรผ่านการอบรมการสร้างระบบ IoT ด้วยอุปกรณ์ ESP32 และโปรโตคอล MQTT',
      date: 'ออกให้เมื่อวันที่ 22 เมษายน 2569'
    },
    { 
      id: 8, 
      title: 'Figma UI/UX Design', 
      category: 'Web & Mobile', 
      image: '', 
      description: 'ผ่านการอบรมหลักสูตรการออกแบบ UI/UX ขั้นพื้นฐานสำหรับการทำ Web Application ด้วย Figma',
      date: 'ออกให้เมื่อวันที่ 18 กรกฎาคม 2568'
    },
    { 
      id: 9, 
      title: 'Docker Fundamentals', 
      category: 'Cloud & Network', 
      image: '', 
      description: 'Certificate of Achievement - พื้นฐานการจัดการ Container ด้วย Docker',
      date: 'ออกให้เมื่อวันที่ 9 กันยายน 2568'
    },
    { 
      id: 10, 
      title: 'Python for AI', 
      category: 'Data & AI', 
      image: '', 
      description: 'ใบรับรองการเขียนโปรแกรมภาษา Python สำหรับประยุกต์ใช้ในระบบปัญญาประดิษฐ์',
      date: 'ออกให้เมื่อวันที่ 30 พฤศจิกายน 2568'
    },
    { 
      id: 11, 
      title: 'Database Design', 
      category: 'Web & Mobile', 
      image: '', 
      description: 'หลักสูตรการออกแบบและจัดการระบบฐานข้อมูล (MySQL, MariaDB และ Supabase)',
      date: 'ออกให้เมื่อวันที่ 14 กุมภาพันธ์ 2568'
    },
    { 
      id: 12, 
      title: 'Workflow Automation', 
      category: 'Others', 
      image: '', 
      description: 'Certificate of Completion - การสร้าง Automation Workflow ด้วย Make.com และ Node-RED',
      date: 'ออกให้เมื่อวันที่ 5 ธันวาคม 2567'
    }
  ]

  const filteredCertificates = activeFilter === 'All' 
    ? certificatesData 
    : certificatesData.filter(c => c.category === activeFilter)

  const sectionRef = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
        else setIsVisible(false) 
      },
      { threshold: 0.02 } // ปรับให้น้อยลงเพื่อให้เห็นอนิเมชั่นไวขึ้นเพราะข้อมูลยาว
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const popIn3D = (delay) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible 
      ? 'perspective(1500px) translateY(0px) rotateX(0deg) scale(1)' 
      : 'perspective(1500px) translateY(80px) rotateX(10deg) scale(0.95)',
    transition: `transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay}s, opacity 0.8s ease ${delay}s`,
  })

  return (
    <div id="certificate" ref={sectionRef} style={{ minHeight: '100vh', padding: '15vh 5vw', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "'Space Grotesk', 'Kanit', sans-serif" }}>
      
      <style>{`
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          width: 100%;
          max-width: 1200px;
        }
        .cert-card {
          position: relative;
          background: linear-gradient(145deg, rgba(15, 20, 30, 0.6) 0%, rgba(5, 10, 15, 0.8) 100%);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 25px;
          transition: all 0.4s ease;
          cursor: pointer;
          transform-style: preserve-3d;
        }
        .cert-card:hover {
          transform: perspective(1000px) translateY(-10px) rotateX(2deg);
          border-color: rgba(0, 221, 255, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 221, 255, 0.1);
        }
        .cert-img-wrapper {
          width: 100%;
          aspect-ratio: 16 / 10;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid rgba(255,255,255,0.02);
        }
        .cert-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.5s ease;
        }
        .cert-card:hover .cert-img-wrapper img {
          transform: scale(1.03);
        }
        @media (max-width: 900px) {
          .cert-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* --- Header & Tabs --- */}
      <div style={{ ...popIn3D(0.1), display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px', width: '100%' }}>
        <h2 style={{ fontSize: '3.5rem', color: 'white', margin: '0 0 40px 0', fontFamily: "'Playfair Display', serif" }}>
          Certificate
        </h2>

        {/* ปุ่มกรองหมวดหมู่ */}
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                background: activeFilter === cat ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.05)',
                border: activeFilter === cat ? '1px solid white' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeFilter === cat ? '#0f141e' : '#aaaaaa',
                padding: '12px 28px',
                borderRadius: '30px',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Space Grotesk', 'Kanit', sans-serif"
              }}
              onMouseOver={e => { if (activeFilter !== cat) { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; } }}
              onMouseOut={e => { if (activeFilter !== cat) { e.currentTarget.style.color = '#aaaaaa'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; } }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- Certificate Grid --- */}
      <div className="cert-grid">
        {filteredCertificates.map((cert, index) => (
          <div 
            key={cert.id} 
            className="cert-card"
            // ใช้ (index % 6) เพื่อไม่ให้ดีเลย์มันรอนานเกินไปเวลาโหลดทีละ 12 ใบ
            style={popIn3D(0.1 + ((index % 6) * 0.15))}
          >
            {/* กล่องใส่รูปใบเซอร์ */}
            <div className="cert-img-wrapper">
              {cert.image ? (
                <img src={cert.image} alt={cert.title} />
              ) : (
                <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '1.2rem', fontWeight: '500' }}>Image Placeholder</span>
              )}
            </div>

            {/* ข้อมูล */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ margin: '0 0 10px 0', color: 'white', fontSize: '1.8rem', fontFamily: "'Playfair Display', serif" }}>
                  {cert.title}
                </h3>
                <p style={{ margin: 0, color: '#b0c4de', fontSize: '1.05rem', lineHeight: '1.6' }}>
                  {cert.description}
                </p>
              </div>
              
              {/* ป้ายวันที่ */}
              <div style={{ marginTop: '10px' }}>
                <span style={{ 
                  display: 'inline-block',
                  background: 'rgba(0, 221, 255, 0.08)', 
                  border: '1px solid rgba(0, 221, 255, 0.3)', 
                  padding: '8px 20px', 
                  borderRadius: '30px', 
                  color: '#00ddff', 
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  boxShadow: '0 0 10px rgba(0, 221, 255, 0.1)'
                }}>
                  {cert.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}