export default function SSSPage() {
  return (
    <div style={{
      backgroundColor: '#09090b', color: '#a1a1aa', minHeight: '100dvh', width: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: 'clamp(1rem, 5vw, 3rem)', position: 'relative', overflow: 'hidden', margin: 0
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        * { font-family: 'JetBrains Mono', monospace !important; box-sizing: border-box; margin: 0; padding: 0; }
        .scanlines { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50; }
        .grid-bg { position: fixed; inset: 0; opacity: 0.05; pointer-events: none; z-index: 0; background-image: linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px); background-size: 40px 40px; }
        .blink { animation: blinker 1.5s steps(2, start) infinite; }
        @keyframes blinker { 50% { opacity: 0; } }
        .main-container { width: 100%; max-width: 900px; z-index: 10; display: flex; flex-direction: column; gap: 2vh; }
        @media (max-height: 700px) { .logo-h1 { font-size: 3rem !important; } .brutalist-section { padding: 1.5rem !important; } }
      `}} />
      <div className="scanlines"></div>
      <div className="grid-bg"></div>
      <main className="main-container">
        <header style={{ borderBottom: '4px solid #1f1f23', paddingBottom: '1rem' }}>
          <h1 className="logo-h1" style={{ fontSize: 'min(10vw, 4.5rem)', fontWeight: '800', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.05em', lineHeight: '0.85' }}>
            SILICON<br />STENCIL<br />STUDIOS
          </h1>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.4em', color: '#52525b', fontWeight: '700', textTransform: 'uppercase', marginTop: '0.5rem' }}>
            MONOLITH INFRASTRUCTURE // V4.0
          </p>
        </header>
        <section style={{ backgroundColor: '#000', border: '4px solid #1f1f23', padding: 'min(5vw, 3rem)', position: 'relative', boxShadow: '10px 10px 0px 0px rgba(255, 69, 0, 0.15)' }}>
          <div style={{ position: 'absolute', top: '-4px', left: '-4px', width: '16px', height: '16px', border: '4px solid #FF4500', borderRight: 'none', borderBottom: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '16px', height: '16px', border: '4px solid #FF4500', borderLeft: 'none', borderTop: 'none' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span className="blink" style={{ width: '12px', height: '12px', backgroundColor: '#FF4500' }}></span>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '700', letterSpacing: '0.1em' }}>SYSTEM_OFFLINE</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '700' }}>
            <p style={{ color: '#d4d4d8' }}>&gt; INITIATING_GAMING_BOOK_ENGINE...</p>
            <p style={{ color: '#52525b' }}>&gt; RESOLVING_VIEWPORT_SCALING [SUCCESS]</p>
            <p style={{ color: '#52525b' }}>&gt; DEPLOYING_STABLE_GRID_RECOVERY...</p>
            <p style={{ color: '#FF4500', marginTop: '1rem', fontStyle: 'italic' }}>&gt; STANDBY: SYSTEM READY FOR SEQUENTIAL INSTRUCTION_</p>
          </div>
        </section>
        <footer style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#3f3f46', fontWeight: '700', textTransform: 'uppercase' }}>
          <p>STABILITY_LOCKED</p>
          <p style={{ color: '#FF4500' }}>S.S.S. DEV_ROOT</p>
        </footer>
      </main>
    </div>
  );
}