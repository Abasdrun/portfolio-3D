import { useEffect, useRef, useState } from 'react'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const categories = ['All', 'Hardware & IoT', 'Web App', 'AI & Bot', 'UI/UX']

  // ข้อมูลโปรเจ็กต์ (เอาระบบ colSpan ออก เพราะเราจะจัดเรียงแบบคอลัมน์คู่แทน)
  const projectsData = [
    { id: 1, title: 'LoRaWAN Container Tracking', category: 'Hardware & IoT', image: '', height: '400px' },
    { id: 2, title: 'Smart Classroom (QR Location)', category: 'Web App', image: '', height: '300px' },
    { id: 3, title: 'Shopee Affiliate Auto-Post', category: 'AI & Bot', image: '', height: '350px' },
    { id: 4, title: 'BioSync Registration UI/UX', category: 'UI/UX', image: '', height: '450px' },
    { id: 5, title: 'Project Title 5', category: 'Web App', image: '', height: '300px' },
    { id: 6, title: 'Project Title 6', category: 'Hardware & IoT', image: '', height: '350px' },
    { id: 7, title: 'Project Title 7', category: 'UI/UX', image: '', height: '400px' },
    { id: 8, title: 'Project Title 8', category: 'AI & Bot', image: '', height: '300px' },
    { id: 9, title: 'Project Title 9', category: 'Web App', image: '', height: '450px' },
    { id: 10, title: 'Project Title 10', category: 'Hardware & IoT', image: '', height: '350px' },
    { id: 11, title: 'Project Title 11', category: 'Web App', image: '', height: '300px' },
    { id: 12, title: 'Project Title 12', category: 'UI/UX', image: '', height: '350px' },
    { id: 13, title: 'Project Title 13', category: 'AI & Bot', image: '', height: '400px' },
    { id: 14, title: 'Project Title 14', category: 'Hardware & IoT', image: '', height: '300px' },
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter)

  // หั่นโปรเจ็กต์เป็น 2 กอง (กองซ้าย กับ กองขวา)
  const leftColumnProjects = filteredProjects.filter((_, index) => index % 2 === 0)
  const rightColumnProjects = filteredProjects.filter((_, index) => index % 2 !== 0)

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

  // คอมโพเนนต์การ์ดแยกออกมา จะได้โค้ดคลีนๆ
  const ProjectCard = ({ project, index }) => (
    <div 
      className="proj-card"
      style={{ 
        width: '100%',
        height: project.height, // ความสูงสลับกันตามข้อมูลที่ตั้งไว้
        ...popIn3D(0.2 + (index * 0.05)) 
      }}
    >
      <div 
        className="proj-img-placeholder"
        style={{ 
          width: '100%', height: '100%', 
          background: project.image ? `url(${project.image}) center/cover` : 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          transition: 'transform 0.5s ease',
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
      >
        {!project.image && <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '1.5rem' }}>No Image</span>}
      </div>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%',
        background: 'linear-gradient(to top, rgba(5,10,15,0.95) 0%, rgba(5,10,15,0.7) 50%, transparent 100%)',
        padding: '30px 25px 20px 25px',
        display: 'flex', flexDirection: 'column', gap: '5px'
      }}>
        <span style={{ color: '#00ddff', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px' }}>
          {project.category}
        </span>
        <h3 style={{ margin: 0, color: 'white', fontSize: '1.3rem', fontFamily: "'Playfair Display', serif" }}>
          {project.title}
        </h3>
      </div>
    </div>
  )

  return (
    <div id="projects" ref={sectionRef} style={{ minHeight: '100vh', padding: '15vh 5vw', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "'Space Grotesk', 'Kanit', sans-serif" }}>
      
      <style>{`
        .proj-card {
          position: relative;
          background: linear-gradient(145deg, rgba(15, 20, 30, 0.6) 0%, rgba(5, 10, 15, 0.8) 100%);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
          cursor: pointer;
          margin-bottom: 30px; /* ระยะห่างแนวตั้งระหว่างกล่อง */
        }
        .proj-card:hover {
          transform: translateY(-10px);
          border-color: rgba(0, 221, 255, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 221, 255, 0.1);
        }
        .proj-card:hover .proj-img-placeholder {
          transform: scale(1.05);
        }
        /* เลย์เอาต์หลัก 2 คอลัมน์ */
        .masonry-layout {
          display: flex;
          gap: 30px;
          width: 100%;
          max-width: 1200px;
        }
        .masonry-column {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        /* ย่อจอเหลือคอลัมน์เดียว */
        @media (max-width: 800px) {
          .masonry-layout { flex-direction: column; }
        }
      `}</style>

      {/* --- Header & Tabs --- */}
      <div style={{ ...popIn3D(0.1), display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px', width: '100%' }}>
        <p style={{ color: '#00ddff', fontWeight: '600', letterSpacing: '2px', margin: '0 0 10px 0', textTransform: 'uppercase' }}>Creative Works</p>
        <h2 style={{ fontSize: '3.5rem', color: 'white', margin: '0 0 40px 0', fontFamily: "'Playfair Display', serif" }}>
          Check My Portfolio
        </h2>

        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                background: activeFilter === cat ? 'rgba(0, 221, 255, 0.15)' : 'transparent',
                border: activeFilter === cat ? '1px solid #00ddff' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeFilter === cat ? '#00ddff' : '#aaaaaa',
                padding: '10px 24px',
                borderRadius: '30px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Space Grotesk', 'Kanit', sans-serif"
              }}
              onMouseOver={e => { if (activeFilter !== cat) e.currentTarget.style.color = 'white' }}
              onMouseOut={e => { if (activeFilter !== cat) e.currentTarget.style.color = '#aaaaaa' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- Masonry Grid (จัดเรียง 2 คอลัมน์ ไร้รอยต่อ) --- */}
      <div className="masonry-layout">
        <div className="masonry-column">
          {leftColumnProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="masonry-column">
          {rightColumnProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + leftColumnProjects.length} />
          ))}
        </div>
      </div>

    </div>
  )
}