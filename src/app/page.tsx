export default function SSSPage() {
  return (
    <div style={{
      backgroundColor: '#09090b', color: '#a1a1aa', minHeight: '100dvh', width: '100dvw',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: 'clamp(10px, 4vw, 40px)', position: 'relative', overflow: 'hidden', margin: 0
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        * { font-family: 'JetBrains Mono', monospace !important; box-sizing: border-box; }
        .scanlines { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50; }
        .grid-bg { position: fixed; inset: 0; opacity: 0.06; pointer-events: none; z-index: 0; background-image: linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px); background-size: 40px 40px; }
        .blink { animation: blinker 1.5s steps(2, start) infinite; }
        @keyframes blinker { 50% { opacity: 0; } }
        .main-container { width: 100%; max-width: 900px; z-index: 10; display: flex; flex-direction: column; gap: 2vh; }
        .logo-h1 { font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: 800; color: #fff; text-transform: uppercase; letter-spacing: -0.05em; line-height: 0.85; }
        .brutalist-section { backgroundColor: #000; border: 4px solid #1f1f23; padding: clamp(20px, 5vw, 48px); position: relative; width: 100%; boxShadow: 10px 10px 0px 0px rgba(255, 69, 0, 0.15); }
        .protocol-text { font-size: clamp(14px, 2vw, 16px); gap: 1vh; }
        @media (max-height: 700px) { .main-container { gap: 1vh; } .logo-h1 { font-size: 2.5rem !important; } .brutalist-section { padding: 16px !important; } }
      `}} />

      <div className="scanlines"></div>
      <div className="grid-bg"></div>

      <main className="main-container">
        <header style={{ borderBottom: '4px solid #1f1f23', paddingBottom: '1.5rem', width: '100%' }}>
          <h1 className="logo-h1">SILICON<br />STENCIL<br />STUDIOS</h1>
          <p style={{ fontSize: 'clamp(10px, 1.5vw, 14px)', letterSpacing: '0.4em', color: '#52525b', fontWeight: '700', textTransform: 'uppercase', marginTop: '0.5rem' }}>
            MONOLITH INFRASTRUCTURE // V4.0
          </p>
        </header>

        <section className="brutalist-section">
          <div style={{ position: 'absolute', top: '-4px', left: '-4px', width: '16px', height: '16px', border: '4px solid #FF4500', borderRight: 'none', borderBottom: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '16px', height: '16px', border: '4px solid #FF4500', borderLeft: 'none', borderTop: 'none' }}></div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '2vh' }}>
            <span className="blink" style={{ width: '12px', height: '12px', backgroundColor: '#FF4500' }}></span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.2rem, 3vw, 1.75rem)', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase' }}>SYSTEM_STABLE</h2>
          </div>

          <div className="protocol-text" style={{ display: 'flex', flexDirection: 'column', fontWeight: '700', textTransform: 'uppercase' }}>
            <p style={{ color: '#d4d4d8' }}>&gt; INITIATING PROTOCOL 3.2.0...</p>
            <p style={{ color: '#52525b' }}>&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
            <p style={{ color: '#52525b' }}>&gt; REINFORCING CONCRETE STRUCTURES [100% COMPLETED].</p>
            <p style={{ color: '#52525b' }}>&gt; CALIBRATING SOUL ORANGE EXTRACTION VALVES...</p>
            <p style={{ color: '#52525b' }}>&gt; ANALYZING SOUL TRAITS...</p>
            <p style={{ color: '#FF4500', fontWeight: '800', marginTop: '2vh', fontStyle: 'italic', fontSize: 'clamp(16px, 2.5vw, 20px)' }}>&gt; STANDBY: SCALING CALIBRATED. SYSTEM READY_</p>
          </div>
        </section>

        <footer style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#3f3f46', fontWeight: '700', textTransform: 'uppercase', marginTop: 'auto' }}>
          <p>STABILITY_LOCKED</p>
          <p style={{ color: '#FF4500' }}>S.S.S. DEV_ROOT</p>
        </footer>
      </main>
    </div>
  );
}