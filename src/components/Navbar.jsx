export default function Navbar({ explode }) {
    return (
      <nav style={{
        position: 'fixed', 
        top: '30px', 
        left: '50%',
        width: '90%',
        maxWidth: '800px', 
        padding: '12px 30px',
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.03)', 
        backdropFilter: 'blur(16px)', 
        WebkitBackdropFilter: 'blur(16px)', 
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '50px', 
        
        /* --- 1. อนิเมชั่นกรอบแคปซูล (พุ่งลงมาแล้วเด้งสปริงนิดๆ) --- */
        opacity: explode ? 1 : 0,
        boxShadow: explode ? '0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(68, 119, 255, 0.15)' : 'none',
        // ดึงให้เล็กลง (scale 0.5) และอยู่สูงมากๆ พอมันระเบิดให้พุ่งลงมาพร้อมขยายร่าง
        transform: explode ? 'translateX(-50%) translateY(0) scale(1)' : 'translateX(-50%) translateY(-150px) scale(0.5)', 
        // ใช้ cubic-bezier สูตร Elastic Bounce ให้มันเด้งดึ๋งสมจริง (หน่วงเวลา 0.8s หลังกาแล็กซี่ระเบิด)
        transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s',
        pointerEvents: explode ? 'auto' : 'none' 
      }}>
        
        {/* --- 2. อนิเมชั่นโลโก้ (สไลด์มาจากทางซ้าย) --- */}
        <div style={{ 
          display: 'flex', alignItems: 'center', gap: '12px',
          opacity: explode ? 1 : 0,
          transform: explode ? 'translateX(0)' : 'translateX(-30px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.4s' /* โผล่มาหลังจากแคปซูลเด้งเสร็จ */
        }}>
          <div style={{ 
            width: '8px', height: '8px', 
            background: '#4477ff', borderRadius: '50%', 
            boxShadow: '0 0 12px #4477ff'
          }}></div>
          <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>
            YOON.
          </div>
        </div>
  
        {/* --- 3. อนิเมชั่นเมนู (ทยอยสไลด์ขึ้นมาจากข้างล่าง ทีละอัน) --- */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {['About', 'Projects', 'Certificate', 'Contact'].map((item, index) => (
            <div 
              key={item}
              style={{
                /* เอา index มาคูณเวลา เพื่อให้มันหน่วงเวลาไม่เท่ากัน (Staggered effect) */
                opacity: explode ? 1 : 0,
                transform: explode ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${1.5 + (index * 0.1)}s` 
              }}
            >
              <a 
                href={`#${item.toLowerCase()}`} 
                style={{ 
                  display: 'block',
                  color: '#aaaaaa', 
                  textDecoration: 'none', 
                  fontSize: '1rem',
                  fontWeight: '500',
                  padding: '8px 20px',
                  borderRadius: '30px', 
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)'
                }} 
                // Hover เอฟเฟกต์ (เด้งสู้มือนิดนึง)
                onMouseOver={e => {
                  e.target.style.color = 'white';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(-3px)'; // ชี้แล้วปุ่มลอยขึ้นนิดๆ
                }} 
                onMouseOut={e => {
                  e.target.style.color = '#aaaaaa';
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {item}
              </a>
            </div>
          ))}
        </div>
      </nav>
    )
  }