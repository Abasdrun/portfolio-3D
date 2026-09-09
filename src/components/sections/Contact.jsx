import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser' 

export default function Contact() {
  const sectionRef = useRef()
  const formRef = useRef() 
  const [isVisible, setIsVisible] = useState(false)
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) 

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

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const serviceID = 'service_rmfqo5k' 
    const templateID = 'template_2aphr4f'
    const publicKey = 'QPSDID_hH_FaPDR0N'

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setSubmitStatus('success')
          setIsSubmitting(false)
          formRef.current.reset() 
          setTimeout(() => setSubmitStatus(null), 3000)
      }, (error) => {
          console.log(error.text);
          setSubmitStatus('error')
          setIsSubmitting(false)
      });
  }

  return (
    <div id="contact" ref={sectionRef} style={{ minHeight: '100vh', padding: '15vh 5vw', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "Inter, 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
      
      <style>{`
        .sci-fi-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-left: 3px solid rgba(0, 221, 255, 0.5);
          padding: 15px 20px;
          color: white;
          font-size: 1rem;
          font-family: inherit;
          border-radius: 8px;
          outline: none;
          transition: all 0.3s ease;
          margin-bottom: 20px;
        }
        .sci-fi-input:focus {
          background: rgba(0, 221, 255, 0.05);
          border-color: rgba(0, 221, 255, 0.2);
          border-left: 3px solid #00ddff;
          box-shadow: 0 0 20px rgba(0, 221, 255, 0.1);
        }
        .sci-fi-input::placeholder { color: rgba(255, 255, 255, 0.2); }

        .sci-fi-btn {
          width: 100%;
          background: rgba(0, 221, 255, 0.05);
          border: 1px solid rgba(0, 221, 255, 0.3);
          color: #00ddff;
          padding: 15px 30px;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 1px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          font-family: inherit;
        }
        .sci-fi-btn:hover:not(:disabled) {
          background: #00ddff;
          color: #050a0f;
          box-shadow: 0 0 20px rgba(0, 221, 255, 0.3);
          transform: translateY(-2px);
        }
        .sci-fi-btn:disabled {
          border-color: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.3);
          background: transparent;
          cursor: not-allowed;
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
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transform: translateX(5px);
        }
        .icon-box {
          width: 48px;
          height: 48px;
          background: rgba(0, 221, 255, 0.05);
          border: 1px solid rgba(0, 221, 255, 0.2);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #00ddff;
          box-shadow: 0 0 15px rgba(0, 221, 255, 0.05);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .contact-item:hover .icon-box {
          background: rgba(0, 221, 255, 0.1);
          border-color: #00ddff;
        }

        .social-icon-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 50%;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .social-icon-btn:hover {
          background: rgba(0, 221, 255, 0.1);
          color: #00ddff;
          border-color: #00ddff;
          box-shadow: 0 0 15px rgba(0, 221, 255, 0.2);
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
        <p style={{ color: '#00ddff', fontWeight: '600', letterSpacing: '2px', margin: '0 0 10px 0', textTransform: 'uppercase', fontSize: '0.9rem' }}>Get In Touch</p>
        <h2 style={{ fontSize: '3rem', color: 'white', margin: '0 0 10px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>
          Let's Work Together
        </h2>
        <p style={{ color: '#8892b0', fontSize: '1.05rem', textAlign: 'center', maxWidth: '600px', lineHeight: '1.6' }}>
          Interested in collaborating or have an amazing project in mind? Feel free to reach out through the channels below.
        </p>
      </div>

      {/* --- Main Terminal Box --- */}
      <div 
        style={{
          ...popIn3D(0.3),
          width: '100%',
          maxWidth: '1100px',
          background: '#141824', /* เปลี่ยนสีพื้นหลังให้คลีนเหมือนหน้าใบเซอร์ */
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          padding: '50px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          transition: 'all 0.5s ease',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0, 221, 255, 0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255, 40, 100, 0.03) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>

        <div className="contact-container">
          
          {/* === ฝั่งซ้าย: ข้อมูลการติดต่อ === */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 2 }}>
            <h3 style={{ fontSize: '1.6rem', color: 'white', margin: '0 0 10px 0', fontWeight: '700', letterSpacing: '-0.3px' }}>Contact Info</h3>
            
            <div className="contact-item">
              <div className="icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <p style={{ margin: '0 0 4px 0', color: '#8892b0', fontSize: '0.85rem' }}>Email</p>
                <h4 style={{ margin: 0, color: 'white', fontSize: '1.1rem', fontWeight: '500' }}>abasdrun.run@gmail.com</h4>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <p style={{ margin: '0 0 4px 0', color: '#8892b0', fontSize: '0.85rem' }}>Phone</p>
                <h4 style={{ margin: 0, color: 'white', fontSize: '1.1rem', fontWeight: '500' }}>+66 98 743 3230</h4>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <p style={{ margin: '0 0 4px 0', color: '#8892b0', fontSize: '0.85rem' }}>Location</p>
                <h4 style={{ margin: 0, color: 'white', fontSize: '1.1rem', fontWeight: '500' }}>Bangkok, Thailand</h4>
              </div>
            </div>

            <div style={{ marginTop: '10px', padding: '0 15px' }}>
              <p style={{ margin: '0 0 12px 0', color: '#8892b0', fontSize: '0.85rem' }}>Social Profiles</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="https://github.com/Abasdrun" target="_blank" rel="noreferrer" className="social-icon-btn" title="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/abasdrun-maeha/" target="_blank" rel="noreferrer" className="social-icon-btn" title="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://www.facebook.com/abasdroon.maeha/" target="_blank" rel="noreferrer" className="social-icon-btn" title="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.8l.2-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
          </div>

          <div style={{ width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)' }}></div>

          {/* === ฝั่งขวา: แบบฟอร์มส่งข้อความ === */}
          <div style={{ flex: '1.2', zIndex: 2 }}>
            <h3 style={{ fontSize: '1.6rem', color: 'white', margin: '0 0 25px 0', fontWeight: '700', letterSpacing: '-0.3px' }}>Send a Message</h3>
            
            <form ref={formRef} onSubmit={sendEmail}>
              <input 
                type="text" 
                name="user_name"
                placeholder="Your Name" 
                className="sci-fi-input"
                required
              />
              <input 
                type="email" 
                name="user_email"
                placeholder="Your Email" 
                className="sci-fi-input"
                required
              />
              <textarea 
                name="message"
                placeholder="Your Message..." 
                className="sci-fi-input"
                style={{ height: '140px', resize: 'none' }}
                required
              ></textarea>
              
              <button 
                type="submit" 
                className="sci-fi-btn"
                disabled={isSubmitting} 
              >
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent Successfully! ✅' : submitStatus === 'error' ? 'Error! Try Again ❌' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
      
      <div style={{ marginTop: '100px', color: 'rgba(255,255,255,0.2)', fontSize: '0.85rem' }}>
        © {new Date().getFullYear()} Abasdrun Maeha. Crafted with React & Three.js
      </div>

    </div>
  )
}