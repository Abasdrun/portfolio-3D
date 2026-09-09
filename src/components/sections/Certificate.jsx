import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Certificate() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)
  
  const categories = ['All', 'Cloud & Network', 'Web & Mobile', 'Data & AI', 'Hardware & Engineering', 'Others']

  // ข้อมูลใบเซอร์
  const certificatesData = [
    { 
      id: 1, 
      title: 'AWS Academy', 
      category: 'Cloud & Network', 
      image: 'https://ycvrqcrekarkhxtainkd.supabase.co/storage/v1/object/public/portfolio-images/certificates/AWS%20Academy%20Graduate%20-%20Machine%20Learning%20Foundations%20-%20Training%20Badge.png', 
      description: 'เกียรติบัตรจาก AWS Academy รับรองว่าได้เรียนจบและผ่านหลักสูตร AWS Academy Graduate - Machine Learning Foundations',
      date: 'ออกให้เมื่อวันที่ 4 กุมภาพันธ์ 2569'
    },
    { 
      id: 2, 
      title: 'BORNTO DEV', 
      category: 'Web & Mobile', 
      image: 'https://ycvrqcrekarkhxtainkd.supabase.co/storage/v1/object/public/portfolio-images/certificates/ChatGPT%20for%20Developers.png', 
      description: 'เกียรติบัตร จาก BORNTO DEV (Open Access Academy) รับรองว่าได้เรียนจบและผ่านหลักสูตร ChatGPT for Developers',
      date: 'ออกให้เมื่อวันที่ 20 สิงหาคม 2568'
    },
    { 
      id: 3, 
      title: 'CHULA MOOC', 
      category: 'Data & AI', 
      image: 'https://ycvrqcrekarkhxtainkd.supabase.co/storage/v1/object/public/portfolio-images/certificates/Introduction%20to%20data%20analytics%20and%20data.jpg', 
      description: 'เกียรติบัตรจาก CHULA MOOC (จุฬาลงกรณ์มหาวิทยาลัย) รับรองว่าได้เรียนจบคอร์สออนไลน์ ในหลักสูตร Introduction to data analytics and big data (ความรู้เบื้องต้นเกี่ยวกับการวิเคราะห์ข้อมูลและบิ๊กดาต้า)',
      date: 'ออกให้เมื่อวันที่ 22 สิงหาคม 2568'
    },
    { id: 4, title: 'MathWorks Training Services', category: 'Hardware & Engineering', image: 'https://ycvrqcrekarkhxtainkd.supabase.co/storage/v1/object/public/portfolio-images/certificates/Course%20MathWorke.jpg', description: 'เกียรติบัตร จาก MathWorks Training Services รับรองว่าได้เรียนจบคอร์สการฝึกอบรมแบบ self-paced หลักสูตร MATLAB Onramp', date: 'ออกให้เมื่อวันที่ 9 กุมภาพันธ์ 2567' },
    { id: 5, title: 'BORNTO DEV', category: 'Web & Mobile', image: 'https://ycvrqcrekarkhxtainkd.supabase.co/storage/v1/object/public/portfolio-images/certificates/Introduction%20to%20JavaScript.png', description: 'เกียรติบัตร BORNTO DEV (Open Access Academy) เป็นเกียรติบัตรที่รับรองว่า ได้เรียนจบและผ่านหลักสูตร Introduction to JavaScript', date: 'ออกให้เมื่อวันที่ 25 สิงหาคม 2568' },
    { id: 6, title: 'SET', category: 'Others', image: 'https://ycvrqcrekarkhxtainkd.supabase.co/storage/v1/object/public/portfolio-images/certificates/image.png', description: 'วุฒิบัตรจาก SET (The Stock Exchange of Thailand) รับรองว่าได้ผ่านการเรียน e-Learning ครบถ้วนตามหลักสูตร UX Development', date: 'ออกให้เมื่อวันที่ 25 พฤษภาคม 2567' },
    { id: 7, title: 'Chula Mooc', category: 'Data & AI', image: 'https://ycvrqcrekarkhxtainkd.supabase.co/storage/v1/object/public/portfolio-images/certificates/Learn%20Coding%20Basics%20with%20Block-based%20Programming.jpg', description: 'ประกาศนียบัตรจาก Chula MOOC (จุฬาลงกรณ์มหาวิทยาลัย) รับรองว่าได้ผ่านการเรียนออนไลน์ตามเกณฑ์ในคอร์ส Learn Coding Basics with Block-based Programming (เรียนรู้พื้นฐานการโค้ดผ่านการทำโปรแกรมแบบบล็อก)', date: 'ออกให้เมื่อวันที่ 22 สิงหาคม 2568' },
    { id: 8, title: 'BORNTO DEV', category: 'Cloud & Network', image: 'https://ycvrqcrekarkhxtainkd.supabase.co/storage/v1/object/public/portfolio-images/certificates/GitHub%20for%20Developer%20.png', description: 'เกียรติบัตร จาก BORNTO DEV (Open Access Academy) รับรองว่าได้เรียนจบและผ่านหลักสูตร GitHub for Developer', date: 'ออกให้เมื่อวันที่ 17 พฤษภาคม 2567' },
    { id: 9, title: 'BORNTO DEV', category: 'Web & Mobile', image: 'https://ycvrqcrekarkhxtainkd.supabase.co/storage/v1/object/public/portfolio-images/certificates/Essential%20SQL%20for%20Everyone_certificate.png', description: 'เกียรติบัตรจาก BORNTO DEV (Open Access Academy) รับรองว่าได้เรียนจบและผ่านหลักสูตร Essential SQL for Everyone', date: 'ออกให้เมื่อวันที่ 22 สิงหาคม 2568' },
    { id: 10, title: 'อุ่นใจไซเบอร์ AI Literacy', category: 'Data & AI', image: 'https://ycvrqcrekarkhxtainkd.supabase.co/storage/v1/object/public/portfolio-images/certificates/Pathway-AIBuddy-AI%20Literacy.png', description: 'เกียรติบัตร จาก บริษัท แอดวานซ์ อินโฟร์ เซอร์วิส จำกัด (มหาชน) รับรองว่าได้เรียนจบคอร์สการฝึกอบรม อุ่นใจไซเบอร์ AI Literacy', date: 'ออกให้เมื่อวันที่ 20 เมษายน 2569' },
    { id: 11, title: 'TH AI PASSPORT', category: 'Data & AI', image: 'https://ycvrqcrekarkhxtainkd.supabase.co/storage/v1/object/public/portfolio-images/certificates/certificate%20(1).jpeg', description: 'เกียรติบัตร จาก สำนักงานคณะกรรมการดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งชาติ รับรองว่าได้เรียนจบคอร์สการฝึกอบรม เปิดโลก AI สู่โอกาสใหม่ในชีวิตและงาน', date: 'ออกให้เมื่อวันที่ 3 กันยายน 2569' },
    { id: 12, title: 'TH AI PASSPORT', category: 'Data & AI', image: 'https://ycvrqcrekarkhxtainkd.supabase.co/storage/v1/object/public/portfolio-images/certificates/certificate.jpeg', description: 'เกียรติบัตร จาก สำนักงานคณะกรรมการดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งชาติ รับรองว่าได้เรียนจบคอร์สการฝึกอบรม เพิ่มประสิทธิภาพงานประจำวันด้วย AI', date: 'ออกให้เมื่อวันที่ 3 กันยายน 2569' },
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
      { threshold: 0.02 } 
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

  // ฟังก์ชันปิด Modal
  const handleCloseModal = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setSelectedImage(null)
    }
  }

  const modalComponent = selectedImage ? (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content">
        <button className="close-btn" onClick={() => setSelectedImage(null)}>✕</button>
        <img src={selectedImage} alt="Certificate Full View" />
      </div>
    </div>
  ) : null;

  return (
    <div id="certificate" ref={sectionRef} style={{ minHeight: '100vh', padding: '15vh 5vw', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "Inter, 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
      
      <style>{`
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          width: 100%;
          max-width: 1200px;
        }
        
        .cert-card {
          background: #141824; 
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.4s ease;
          cursor: pointer;
        }
        .cert-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 221, 255, 0.4);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 221, 255, 0.1);
        }

        .cert-img-wrapper {
          width: 100%;
          height: 260px; 
          background: #0b0d14; 
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 15px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.02);
        }

        .cert-img-wrapper img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; 
          transition: transform 0.5s ease;
        }
        .cert-card:hover .cert-img-wrapper img {
          transform: scale(1.05); 
        }

        /* --- Modal CSS --- */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(5, 10, 15, 0.9);
          backdrop-filter: blur(8px);
          z-index: 99999; 
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          animation: fadeIn 0.3s forwards;
          cursor: pointer;
        }
        
        .modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          cursor: default;
        }
        
        .modal-content img {
          max-width: 100%;
          max-height: 85vh;
          border-radius: 12px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(0,221,255,0.15);
          animation: popUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .close-btn {
          position: absolute;
          top: -45px;
          right: 0;
          color: rgba(255,255,255,0.6);
          font-size: 32px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.3s;
        }
        .close-btn:hover {
          color: white;
        }

        @keyframes fadeIn { to { opacity: 1; } }
        @keyframes popUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 900px) {
          .cert-grid { grid-template-columns: 1fr; }
          .cert-img-wrapper { height: 220px; }
        }
      `}</style>

      {/* --- Header & Tabs --- */}
      <div style={{ ...popIn3D(0.1), display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px', width: '100%' }}>
        <h2 style={{ fontSize: '3rem', color: 'white', margin: '0 0 40px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>
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
                padding: '10px 24px',
                borderRadius: '30px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
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
            style={popIn3D(0.1 + ((index % 6) * 0.15))}
            onClick={() => {
              if (cert.image) {
                setSelectedImage(cert.image)
              } else {
                alert('ใส่ลิงก์รูปจาก Supabase ก่อนเพื่อน! ตอนนี้ยังไม่มีรูปให้ขยาย 🤣')
              }
            }}
          >
            {/* กล่องใส่รูปใบเซอร์ */}
            <div className="cert-img-wrapper">
              {cert.image ? (
                <img src={cert.image} alt={cert.title} loading="lazy" />
              ) : (
                <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '1rem', fontWeight: '500' }}>รอลิงก์รูปจาก Supabase</span>
              )}
            </div>

            {/* ข้อมูล */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ margin: '0 0 10px 0', color: 'white', fontSize: '1.4rem', fontWeight: '700', letterSpacing: '-0.3px' }}>
                  {cert.title}
                </h3>
                <p style={{ margin: 0, color: '#b0c4de', fontSize: '0.95rem', lineHeight: '1.5', fontWeight: '400' }}>
                  {cert.description}
                </p>
              </div>
              
              {/* ป้ายวันที่ */}
              <div style={{ marginTop: '5px' }}>
                <span style={{ 
                  display: 'inline-block',
                  background: 'rgba(0, 221, 255, 0.05)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  padding: '6px 20px', 
                  borderRadius: '30px', 
                  color: '#00ddff', 
                  fontSize: '0.85rem',
                  fontWeight: '600',
                }}>
                  {cert.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && createPortal(modalComponent, document.body)}

    </div>
  )
}