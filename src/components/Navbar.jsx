export default function Navbar({ explode }) {
  return (
    <nav style={{
      position: 'fixed', 
      top: '30px', 
      left: '50%',
      width: '90%',
      maxWidth: '800px', 
      // ปรับ Padding ให้ลดลงเมื่อจอเล็ก เพื่อไม่ให้เมนูล้น
      padding: '12px clamp(10px, 3vw, 30px)', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center', 
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.03)', 
      backdropFilter: 'blur(16px)', 
      WebkitBackdropFilter: 'blur(16px)', 
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '50px', 
      opacity: explode ? 1 : 0,
      boxShadow: explode ? '0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(68, 119, 255, 0.15)' : 'none',
      transform: explode ? 'translateX(-50%) translateY(0) scale(1)' : 'translateX(-50%) translateY(-150px) scale(0.5)', 
      transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s',
      pointerEvents: explode ? 'auto' : 'none',
      // เพิ่ม flex-wrap เพื่อป้องกันการดันกรอบแตก
      flexWrap: 'nowrap'
    }}>
      
      <style>{`
        .nav-link {
          display: block;
          color: #aaaaaa; 
          text-decoration: none; 
          font-size: 1rem;
          font-weight: 500;
          padding: 8px 20px;
          border-radius: 30px; 
          transition: all 0.3s ease;
          transform: translateY(0);
        }
        .nav-link:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
        }
        /* --- Media Query สำหรับจอมือถือ --- */
        @media (max-width: 768px) {
          .nav-link {
            font-size: 0.85rem; /* ลดขนาดตัวอักษรเมนู */
            padding: 6px 8px; /* ลดระยะห่างระหว่างเมนู */
          }
          .logo-text {
            font-size: 1.2rem !important; /* ลดขนาดโลโก้ YOON */
          }
        }
        @media (max-width: 400px) {
          .nav-link {
            font-size: 0.75rem; /* ถ้าจอเล็กจัดๆ ก็เล็กลงอีก */
            padding: 6px 5px;
          }
        }
      `}</style>

      {/* --- โลโก้ YOON --- */}
      <div style={{ 
        display: 'flex', alignItems: 'center', gap: '8px',
        opacity: explode ? 1 : 0,
        transform: explode ? 'translateX(0)' : 'translateX(-30px)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.4s' 
      }}>
        <div style={{ width: '8px', height: '8px', background: '#4477ff', borderRadius: '50%', boxShadow: '0 0 12px #4477ff' }}></div>
        <div className="logo-text" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>
          YOON.
        </div>
      </div>

      {/* --- เมนู --- */}
      <div style={{ display: 'flex', gap: '2px' }}>
        {['About', 'Projects', 'Certificate', 'Contact'].map((item, index) => (
          <div 
            key={item}
            style={{
              opacity: explode ? 1 : 0,
              transform: explode ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${1.5 + (index * 0.1)}s` 
            }}
          >
            <a href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          </div>
        ))}
      </div>
    </nav>
  )
}