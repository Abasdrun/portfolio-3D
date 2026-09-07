export default function Home({ explode }) {
    return (
      <div id="home" style={{ height: '100vh', padding: '0 5vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
          Mr.Abasdrun Maeha Computer Engineering
        </h2>
      </div>
    )
  }