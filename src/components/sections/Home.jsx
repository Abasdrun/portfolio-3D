export default function Home({ explode }) {
  return (
    <div id="home" style={{ height: '100vh', padding: '0 5vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ 
        // ใช้ clamp เพื่อให้ตัวอักษรยืดหยุ่น: ต่ำสุด 3rem, ยืดตามจอ 8vw, ใหญ่สุด 5rem
        fontSize: 'clamp(3rem, 8vw, 5rem)', 
        fontFamily: "'Playfair Display', serif", 
        fontWeight: '700',
        margin: '0 0 10px 0', 
        textShadow: '0px 0px 20px rgba(255,255,255,0.5)', 
        textAlign: 'center',
        lineHeight: '1.2', // ลดความห่างระหว่างบรรทัด
        opacity: explode ? 1 : 0, 
        transform: explode ? 'translateY(0px)' : 'translateY(40px)', 
        transition: 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)' 
      }}>
        {/* แนะนำให้จับแยกบรรทัดด้วย <br/> เฉพาะบนมือถือ หรือปล่อยให้ย่อหน้าเอง */}
        Welcome to Portfolio
      </h1>
      
      <h2 style={{
        // ใช้ clamp: ต่ำสุด 1.2rem, ยืดตามจอ 4vw, ใหญ่สุด 2rem
        fontSize: 'clamp(1.2rem, 4vw, 2rem)', 
        fontFamily: "'Playfair Display', serif", 
        fontWeight: '400', 
        fontStyle: 'italic', 
        color: '#cccccc', 
        margin: 0, 
        textShadow: '0px 0px 15px rgba(255,255,255,0.3)', 
        textAlign: 'center',
        lineHeight: '1.4',
        opacity: explode ? 1 : 0, 
        transform: explode ? 'translateY(0px)' : 'translateY(30px)', 
        transition: 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1) 0.8s' 
      }}>
        Mr.Abasdrun Maeha <br style={{ display: 'block', content: '""', marginTop: '5px' }} /> Computer Engineering
      </h2>
    </div>
  )
}