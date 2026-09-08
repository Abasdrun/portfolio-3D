import { useEffect, useRef, useState } from 'react'
import profileImg from '../../assets/Yoon.png'
import mbtiIcon from '../../assets/MBTI.png'
import spuLogo from '../../assets/spu.png'
import sevenElevenLogo from '../../assets/711.png'
import kpsLogo from '../../assets/kps.png'

export default function About() {
  const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg' }, 
    { name: 'React / React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Expo', icon: 'https://cdn.simpleicons.org/expo/white' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'MariaDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg' },
    { name: 'ESP32', icon: 'https://cdn.simpleicons.org/espressif/white' },
    { name: 'Raspberry Pi', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg' },
    { name: 'MQTT', icon: 'https://cdn.simpleicons.org/mqtt/white' },
    { name: 'Cisco Packet Tracer', icon: 'https://cdn.simpleicons.org/cisco/white' },
    { name: 'EasyEDA (PCB Design)', icon: 'https://cdn.simpleicons.org/easyeda/white' },
    { name: 'Make.com', icon: 'https://cdn.simpleicons.org/make/white' },
    { name: 'Node-RED', icon: 'https://cdn.simpleicons.org/nodered/white' },
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/white' }, 
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' }
  ]

  const sectionRef = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
        else setIsVisible(false) 
      },
      { threshold: 0.05 } 
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const slideIn = (delay, direction = 'up') => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible 
      ? 'translate(0, 0)' 
      : direction === 'left' ? 'translateX(-80px)' 
      : direction === 'right' ? 'translateX(80px)' 
      : 'translateY(50px)',
    transition: `all 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
  })

  const popIn3D = (delay) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible 
      ? 'perspective(1500px) translateY(0px) rotateX(0deg) rotateY(0deg) scale(1)' 
      : 'perspective(1500px) translateY(120px) rotateX(15deg) rotateY(5deg) scale(0.9)',
    transition: `transform 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay}s, opacity 1s ease ${delay}s`,
    transformStyle: 'preserve-3d'
  })

  // ควบคุมการเอียง 3D ตามเมาส์
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8; 
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transition = 'none';
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.boxShadow = `
      ${-rotateY * 1.5}px ${rotateX * 1.5}px 30px rgba(0, 0, 0, 0.6), 
      0 0 40px rgba(0, 221, 255, 0.15)
    `;

    const flare = card.querySelector('.flare-light');
    if (flare) {
      flare.style.opacity = 1;
      flare.style.left = `${x - 200}px`; 
      flare.style.top = `${y - 200}px`;
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';

    const flare = card.querySelector('.flare-light');
    if (flare) flare.style.opacity = 0;
  };

  // ดีไซน์สี่เหลี่ยมจัตุรัส แนวนอน
  const squareCardStyle = {
    flex: '1 1 320px', 
    aspectRatio: '1 / 1', 
    background: 'linear-gradient(145deg, rgba(12, 16, 26, 0.95) 0%, rgba(6, 9, 15, 0.95) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '24px',
    padding: '35px 30px 30px 30px', // ปรับ Padding บนลงมานิดหน่อยเพื่อให้โลโก้อยู่พอดี
    position: 'relative',
    transformStyle: 'preserve-3d',
    cursor: 'default',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // เปลี่ยนเป็นเริ่มจากด้านบน
    gap: '20px' // ระยะห่างระหว่างส่วนต่างๆ ข้างใน
  };

  // โลโก้ด้านในกล่อง (ไม่ลอยตัดขอบแล้ว)
  const innerLogoStyle = {
    width: '65px',
    height: '65px',
    background: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px', // ลด Padding ลง เพื่อให้รูปข้างในขยายได้เต็มที่
    boxShadow: '0 10px 20px rgba(0,0,0,0.3), 0 0 15px rgba(255,255,255,0.05)',
    transform: 'translateZ(35px)' // ยังให้เด้งลอยขึ้นมาเป็น 3D อยู่
  };

  return (
    <div id="about" ref={sectionRef} style={{ minHeight: '200vh', padding: '10vh 5vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* ================= โซนที่ 1: Profile & Skills ================= */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '5vw', width: '100%', maxWidth: '1400px', flexWrap: 'wrap',
        fontFamily: "'Space Grotesk', 'Kanit', sans-serif",
        marginBottom: '150px' 
      }}>
        <div style={{ ...slideIn(0.1, 'left'), flex: '1.5 1 500px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
          <img src={profileImg} alt="Abasdrun Maeha" style={{ 
            width: '100%', maxWidth: '800px', height: 'auto', objectFit: 'contain', 
            filter: 'drop-shadow(0 0 40px rgba(68, 119, 255, 0.3))', 
            transform: 'scale(1.1)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
          }} />
        </div>

        <div style={{ flex: '1 1 500px', zIndex: 10 }}>
          <div style={slideIn(0.3, 'right')}>
            <h2 style={{ fontSize: '4.5rem', margin: '0 0 5px 0', fontFamily: "'Playfair Display', serif", fontWeight: '700', color: 'white', textShadow: '0px 0px 20px rgba(255,255,255,0.5)' }}>
              Abasdrun Maeha
            </h2>
            <p style={{ fontSize: '1.5rem', color: '#00ddff', margin: '0 0 45px 0', fontWeight: '500', letterSpacing: '1px', fontFamily: "'Playfair Display', serif" }}>
              Computer Engineering Student
            </p>
          </div>

          <div style={slideIn(0.5, 'up')}>
            <div style={{
              background: 'linear-gradient(90deg, rgba(0, 221, 255, 0.05) 0%, transparent 100%)',
              padding: '20px 25px', display: 'flex', gap: '30px', alignItems: 'center', marginBottom: '40px', borderRadius: '16px' 
            }}>
              <img src={mbtiIcon} alt="ENTJ Icon" style={{ width: '130px', height: '130px', objectFit: 'contain', filter: 'drop-shadow(0 0 15px rgba(0, 221, 255, 0.4))' }} />
              <div>
                <p style={{ margin: '0 0 5px 0', color: '#aaaaaa', fontSize: '1rem' }}>ประเภทบุคลิกภาพ MBTI :</p>
                <h4 style={{ margin: '0 0 8px 0', color: 'white', fontSize: '1.4rem', fontWeight: '600' }}>ผู้บัญชาการ (ENTJ-A)</h4>
                <p style={{ margin: 0, color: '#cccccc', fontSize: '1.1rem', lineHeight: '1.5', fontStyle: 'italic' }}>
                  "ผู้บัญชาการกล้าหาญ มีจินตนาการ และมีปณิธานกล้าแกร่ง มักหาทางออกหรือสร้างทางออกขึ้นมาได้"
                </p>
              </div>
            </div>
          </div>

          <div style={slideIn(0.7, 'up')}>
            <p style={{ margin: '0 0 15px 0', color: '#aaaaaa', fontSize: '1.1rem', fontWeight: '500' }}>Technical Skills & Tools :</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {skills.map((skill, index) => (
                <div key={skill.name} style={{
                    opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.5)',
                    transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.8 + (index * 0.04)}s`
                  }}>
                  <div title={skill.name} style={{
                      width: '55px', height: '55px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                      background: 'rgba(20, 30, 50, 0.6)', border: '1px solid rgba(68, 119, 255, 0.3)', borderRadius: '12px', 
                      cursor: 'pointer', boxShadow: '0 5px 0 rgba(68, 119, 255, 0.4), 0 10px 15px rgba(0,0,0,0.5)', 
                      transform: 'translateY(0)', transition: 'all 0.15s ease'
                    }}
                    onMouseOver={e => { e.currentTarget.style.transform = 'translateY(5px)'; e.currentTarget.style.boxShadow = '0 0px 0 rgba(68, 119, 255, 0.4), 0 5px 8px rgba(0,0,0,0.6)'; e.currentTarget.style.background = 'rgba(40, 60, 100, 0.8)'; }}
                    onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 0 rgba(68, 119, 255, 0.4), 0 10px 15px rgba(0,0,0,0.5)'; e.currentTarget.style.background = 'rgba(20, 30, 50, 0.6)'; }}>
                    <img src={skill.icon} alt={skill.name} style={{ width: skill.name === 'AWS' ? '40px' : '32px', height: '32px', objectFit: 'contain', filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.2))' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= โซนที่ 2: Experience & Education (3 Square Cards แนวนอน - โลโก้ในกรอบ) ================= */}
      <div style={{ width: '100%', maxWidth: '1200px', fontFamily: "'Space Grotesk', 'Kanit', sans-serif", paddingTop: '5vh', paddingBottom: '150px' }}>
        
        <div style={popIn3D(0.2)}>
          <h2 style={{ fontSize: '2.5rem', color: 'white', margin: '0 0 60px 0', fontFamily: "'Playfair Display', serif", textAlign: 'center' }}>
            Experience & Education
          </h2>
        </div>

        {/* แถวแนวนอน */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          
          {/* --- 1. Work: 7-Eleven --- */}
          <div style={{ ...popIn3D(0.3), ...squareCardStyle }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="flare-light" style={{ position: 'absolute', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 221, 255, 0.08) 0%, transparent 60%)', borderRadius: '50%', pointerEvents: 'none', opacity: 0, transition: 'opacity 0.4s ease', zIndex: 0 }}></div>
            
            {/* Header Card: โลโก้ ซ้าย / ป้าย Tag ขวา */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
              <div style={innerLogoStyle}>
                <img src={sevenElevenLogo} alt="7-Eleven" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '20px', color: '#fff', letterSpacing: '1px', transform: 'translateZ(20px)' }}>WORK</span>
            </div>

            <div style={{ position: 'relative', zIndex: 2, transform: 'translateZ(30px)' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'white', margin: '0 0 5px 0', fontFamily: "'Playfair Display', serif" }}>7-Eleven</h3>
              <h4 style={{ fontSize: '1.1rem', color: '#00ddff', margin: '0 0 10px 0', fontWeight: '500' }}>Store Assistant</h4>
              <p style={{ fontSize: '0.85rem', color: '#aaaaaa', letterSpacing: '1px', fontWeight: '500', margin: '0 0 15px 0' }}>MAY 2023 – JAN 2026</p>
            </div>

            <ul style={{ color: '#cccccc', fontSize: '0.95rem', lineHeight: '1.6', margin: 'auto 0 0 0', paddingLeft: '20px', position: 'relative', zIndex: 2, transform: 'translateZ(20px)' }}>
              <li style={{ marginBottom: '8px' }}>Handled daily store operations and provided customer service.</li>
              <li>Developed strong problem-solving and multitasking skills.</li>
            </ul>
          </div>

          {/* --- 2. Education: SPU --- */}
          <div style={{ ...popIn3D(0.5), ...squareCardStyle }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="flare-light" style={{ position: 'absolute', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255, 40, 100, 0.08) 0%, transparent 60%)', borderRadius: '50%', pointerEvents: 'none', opacity: 0, transition: 'opacity 0.4s ease', zIndex: 0 }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
              <div style={innerLogoStyle}>
                <img src={spuLogo} alt="SPU" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '20px', color: '#fff', letterSpacing: '1px', transform: 'translateZ(20px)' }}>DEGREE</span>
            </div>

            <div style={{ position: 'relative', zIndex: 2, transform: 'translateZ(30px)' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'white', margin: '0 0 5px 0', fontFamily: "'Playfair Display', serif" }}>Sripatum University</h3>
              <p style={{ color: '#cccccc', fontSize: '1rem', margin: '0 0 10px 0', lineHeight: '1.4' }}>Bachelor of Engineering in Computer Engineering</p>
              <p style={{ fontSize: '0.85rem', color: '#aaaaaa', letterSpacing: '1px', fontWeight: '500', margin: 0 }}>2023 – PRESENT</p>
            </div>

            <div style={{ position: 'relative', zIndex: 2, transform: 'translateZ(20px)', marginTop: 'auto' }}>
              <div style={{ display: 'inline-block', background: 'rgba(0, 221, 255, 0.1)', border: '1px solid rgba(0, 221, 255, 0.3)', padding: '8px 15px', borderRadius: '8px', color: '#00ddff', fontWeight: '600', fontSize: '1rem' }}>
                GPAX: 3.77
              </div>
            </div>
          </div>

          {/* --- 3. Education: KPS --- */}
          <div style={{ ...popIn3D(0.7), ...squareCardStyle }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="flare-light" style={{ position: 'absolute', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 221, 255, 0.08) 0%, transparent 60%)', borderRadius: '50%', pointerEvents: 'none', opacity: 0, transition: 'opacity 0.4s ease', zIndex: 0 }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
              <div style={innerLogoStyle}>
                <img src={kpsLogo} alt="KPS" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '20px', color: '#fff', letterSpacing: '1px', transform: 'translateZ(20px)' }}>HIGH SCHOOL</span>
            </div>

            <div style={{ position: 'relative', zIndex: 2, transform: 'translateZ(30px)' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'white', margin: '0 0 5px 0', fontFamily: "'Playfair Display', serif" }}>Kanjanasuksa Shcool</h3>
              <p style={{ color: '#cccccc', fontSize: '1rem', margin: '0 0 10px 0', lineHeight: '1.4' }}>Sciences and Mathematics Program</p>
              <p style={{ fontSize: '0.85rem', color: '#aaaaaa', letterSpacing: '1px', fontWeight: '500', margin: 0 }}>2020 – 2023</p>
            </div>

            <div style={{ position: 'relative', zIndex: 2, transform: 'translateZ(20px)', marginTop: 'auto' }}>
              <div style={{ display: 'inline-block', background: 'rgba(0, 221, 255, 0.1)', border: '1px solid rgba(0, 221, 255, 0.3)', padding: '8px 15px', borderRadius: '8px', color: '#00ddff', fontWeight: '600', fontSize: '1rem' }}>
                GPAX: 3.69
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}