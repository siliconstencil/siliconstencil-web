export default function DemoPage() {
  return (
    <div style={{
      backgroundColor: '#09090b', color: '#a1a1aa', minHeight: '100vh', width: '100vw',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '20px', position: 'relative', overflow: 'hidden', margin: 0
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        * { font-family: 'JetBrains Mono', monospace !important; margin: 0; padding: 0; box-sizing: border-box; }
        
        .scanlines { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50; }
        .grid-bg { position: fixed; inset: 0; opacity: 0.08; pointer-events: none; z-index: 0; background-image: linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px); background-size: 30px 30px; }
        
        .blink { animation: blinker 1s steps(2, start) infinite; }
        @keyframes blinker { 50% { opacity: 0; } }

        .main-content { width: 100%; max-width: 800px; z-index: 10; display: flex; flex-direction: column; }
        
        /* PC STYLES */
        .header-root { border-bottom: 4px solid #1f1f23; padding-bottom: 1.5rem; margin-bottom: 2.5rem; }
        .logo-h1 { font-size: 4.5rem; font-weight: 800; color: #fff; text-transform: uppercase; letter-spacing: -0.05em; line-height: 0.85; }
        .brutalist-section { background-color: #000; border: 4px solid #1f1f23; padding: 3rem; position: relative; box-shadow: 12px 12px 0px 0px rgba(255, 69, 0, 0.15); }
        .warning-text { color: #FF4500; font-weight: 800; margin-top: 1.5rem; font-style: italic; font-size: 1.1rem; line-height: 1.2; }

        /* MOBILE STYLES */
        @media (max-width: 768px) {
          .header-root { padding-bottom: 1rem; margin-bottom: 1.5rem; }
          .logo-h1 { font-size: 2.8rem; }
          .brutalist-section { padding: 1.5rem; border-width: 3px; box-shadow: 8px 8px 0px 0px rgba(255, 69, 0, 0.15); }
          .warning-text { font-size: 0.95rem; margin-top: 1rem; }
          .warning-break { display: block; margin-top: 0.2rem; }
          .main-content { gap: 1rem; }
        }
      `}} />

      <div className="scanlines"></div>
      <div className="grid-bg"></div>

      <main className="main-content">
        <header className="header-root">
          <h1 className="logo-h1">SILICON<br />STENCIL<br />STUDIOS</h1>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', color: '#52525b', fontWeight: '700', textTransform: 'uppercase', marginTop: '0.5rem' }}>
            MONOLITH INFRASTRUCTURE // V4.0 [DEMO]
          </p>
        </header>

        <section className="brutalist-section">
          <div style={{ position: 'absolute', top: '-3px', left: '-3px', width: '12px', height: '12px', border: '3px solid #FF4500', borderRight: 'none', borderBottom: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: '-3px', right: '-3px', width: '12px', height: '12px', border: '3px solid #FF4500', borderLeft: 'none', borderTop: 'none' }}></div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
            <div className="blink" style={{ width: '12px', height: '12px', backgroundColor: '#FF4500' }}></div>
            <h2 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase' }}>SYSTEM OFFLINE</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>
            <p style={{ color: '#d4d4d8' }}>&gt; INITIATING PROTOCOL 3.2.0...</p>
            <p style={{ color: '#3f3f46' }}>&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
            <p style={{ color: '#3f3f46' }}>&gt; REINFORCING CONCRETE STRUCTURES [70%].</p>
            
            <p className="warning-text">
              &gt; WARNING: <br className="md:hidden" />
              <span className="warning-break">MASSIVE DATA STREAM DETECTED.</span>
              <span className="warning-break">STANDBY FOR DEPLOYMENT<span className="blink">_</span></span>
            </p>
          </div>
        </section>

        <footer style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#27272a', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2.5rem' }}>
          <p>DEMO.ISOLATION.MODE</p>
          <p style={{ color: '#FF4500' }}>ENCRYPTED BY SSS</p>
        </footer>
      </main>
    </div>
  );
}