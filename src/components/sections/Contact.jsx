import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
        else setIsVisible(false) 
      },
      { threshold: 0.1 } 
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const popIn3D = (delay) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible 
      ? 'perspective(1500px) translateY(0px) rotateX(0deg) scale(1)' 
      : 'perspective(1500px) translateY(80px) rotateX(15deg) scale(0.9)',
    transition: `transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay}s, opacity 0.8s ease ${delay}s`,
  })

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -3; 
    const rotateY = ((x - centerX) / centerX) * 3;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div id="contact" ref={sectionRef} style={{ minHeight: '100vh', padding: '15vh 5vw', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "'Space Grotesk', 'Kanit', sans-serif" }}>
      
      <style>{`
        .sci-fi-input {
          width: 100%;
          background: rgba(0, 221, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-left: 3px solid rgba(0, 221, 255, 0.5);
          padding: 15px 20px;
          color: white;
          font-size: 1rem;
          font-family: 'Space Grotesk', 'Kanit', sans-serif;
          border-radius: 8px;
          outline: none;
          transition: all 0.3s ease;
          margin-bottom: 20px;
        }
        .sci-fi-input:focus {
          background: rgba(0, 221, 255, 0.08);
          border-color: rgba(0, 221, 255, 0.5);
          border-left: 3px solid #00ddff;
          box-shadow: 0 0 20px rgba(0, 221, 255, 0.2);
        }
        .sci-fi-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .sci-fi-btn {
          width: 100%;
          background: transparent;
          border: 1px solid #00ddff;
          color: #00ddff;
          padding: 15px 30px;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 2px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.4s ease;
          text-transform: uppercase;
        }
        .sci-fi-btn:hover {
          background: #00ddff;
          color: #050a0f;
          box-shadow: 0 0 30px rgba(0, 221, 255, 0.4);
          transform: translateY(-3px);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 15px;
          border-radius: 12px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .contact-item:hover {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          transform: translateX(10px);
        }
        .icon-box {
          width: 50px;
          height: 50px;
          background: rgba(0, 221, 255, 0.1);
          border: 1px solid rgba(0, 221, 255, 0.3);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #00ddff;
          box-shadow: 0 0 15px rgba(0, 221, 255, 0.1);
          flex-shrink: 0;
        }

        .social-icon-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .social-icon-btn:hover {
          background: #00ddff;
          color: #050a0f;
          border-color: #00ddff;
          box-shadow: 0 0 20px rgba(0, 221, 255, 0.4);
          transform: translateY(-3px);
        }

        .contact-container {
          display: flex;
          gap: 50px;
          width: 100%;
        }
        @media (max-width: 900px) {
          .contact-container { flex-direction: column; }
        }
      `}</style>

      {/* --- Header --- */}
      <div style={{ ...popIn3D(0.1), display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '50px', width: '100%' }}>
        <p style={{ color: '#00ddff', fontWeight: '600', letterSpacing: '3px', margin: '0 0 10px 0', textTransform: 'uppercase' }}>Get In Touch</p>
        <h2 style={{ fontSize: '3.5rem', color: 'white', margin: '0 0 10px 0', fontFamily: "'Playfair Display', serif" }}>
          Let's Work Together
        </h2>
        <p style={{ color: '#aaaaaa', fontSize: '1.1rem', textAlign: 'center', maxWidth: '600px' }}>
          Interested in collaborating or have an amazing project in mind? Feel free to reach out through the channels below.
        </p>
      </div>

      {/* --- Main Terminal Box --- */}
      <div 
        style={{
          ...popIn3D(0.3),
          width: '100%',
          maxWidth: '1100px',
          background: 'linear-gradient(145deg, rgba(10, 15, 25, 0.8) 0%, rgba(5, 10, 15, 0.9) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '24px',
          padding: '50px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 40px rgba(0, 221, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          transition: 'all 0.5s ease',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0, 221, 255, 0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255, 40, 100, 0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>

        <div className="contact-container">
          
          {/* === ฝั่งซ้าย: ข้อมูลการติดต่อ (ใส่ SVG Icons) === */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 2 }}>
            <h3 style={{ fontSize: '2rem', color: 'white', margin: '0 0 20px 0', fontFamily: "'Playfair Display', serif" }}>Contact Info</h3>
            
            {/* Email Icon */}
            <div className="contact-item">
              <div className="icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <p style={{ margin: '0 0 5px 0', color: '#aaaaaa', fontSize: '0.9rem' }}>Email</p>
                <h4 style={{ margin: 0, color: 'white', fontSize: '1.2rem', fontWeight: '500' }}>abasdrun.run@gmail.com</h4>
              </div>
            </div>

            {/* Phone Icon */}
            <div className="contact-item">
              <div className="icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <p style={{ margin: '0 0 5px 0', color: '#aaaaaa', fontSize: '0.9rem' }}>Phone</p>
                <h4 style={{ margin: 0, color: 'white', fontSize: '1.2rem', fontWeight: '500' }}>+66 98 743 3230</h4>
              </div>
            </div>

            {/* Location Icon */}
            <div className="contact-item">
              <div className="icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <p style={{ margin: '0 0 5px 0', color: '#aaaaaa', fontSize: '0.9rem' }}>Location</p>
                <h4 style={{ margin: 0, color: 'white', fontSize: '1.2rem', fontWeight: '500' }}>Bangkok, Thailand</h4>
              </div>
            </div>

            {/* Social Profiles (GitHub & Facebook SVG) */}
            <div style={{ marginTop: '20px', padding: '0 15px' }}>
              <p style={{ margin: '0 0 15px 0', color: '#aaaaaa', fontSize: '0.9rem' }}>Social Profiles</p>
              <div style={{ display: 'flex', gap: '15px' }}>
                {/* GitHub */}
                <a href="https://github.com/Abasdrun" target="_blank" rel="noreferrer" className="social-icon-btn" title="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                {/* Facebook */}
                <a href="https://web.facebook.com/abasdroon.maeha/?locale=th_TH" target="_blank" rel="noreferrer" className="social-icon-btn" title="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.8l.2-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
          </div>

          <div style={{ width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)' }}></div>

          {/* === ฝั่งขวา: แบบฟอร์มส่งข้อความ === */}
          <div style={{ flex: '1.2', zIndex: 2 }}>
            <h3 style={{ fontSize: '2rem', color: 'white', margin: '0 0 30px 0', fontFamily: "'Playfair Display', serif" }}>Send a Message</h3>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="sci-fi-input"
                required
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="sci-fi-input"
                required
              />
              <textarea 
                placeholder="Your Message..." 
                className="sci-fi-input"
                style={{ height: '150px', resize: 'none' }}
                required
              ></textarea>
              
              <button type="submit" className="sci-fi-btn">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
      
      <div style={{ marginTop: '100px', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Abasdrun Maeha. Crafted with React & Three.js
      </div>

    </div>
  )
}