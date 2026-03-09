export default function DemoPage() {
  return (
    <div style={{
      backgroundColor: '#09090b', color: '#a1a1aa', minHeight: '100vh', width: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '20px', position: 'relative', overflow: 'hidden', margin: 0
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        * { font-family: 'JetBrains Mono', monospace !important; margin: 0; padding: 0; box-sizing: border-box; }
        .scanlines { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50; }
        .grid-bg { position: fixed; inset: 0; opacity: 0.08; pointer-events: none; z-index: 0; background-image: linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px); background-size: 40px 40px; }
        .blink { animation: blinker 1s steps(2, start) infinite; }
        @keyframes blinker { 50% { opacity: 0; } }
        .brutalist-section { background-color: #000; border: 4px solid #1f1f23; padding: 2.2rem; position: relative; box-shadow: 12px 12px 0px 0px rgba(255, 69, 0, 0.15); }
        @media (max-width: 768px) { .logo-h1 { font-size: 2.6rem !important; } .brutalist-section { padding: 1.4rem; border-width: 2px; } .log-line { font-size: 0.72rem !important; } .warning-br { display: block; } }
      `}} />
      <div className="scanlines"></div>
      <div className="grid-bg"></div>
      <main style={{ width: '100%', maxWidth: '800px', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <header style={{ borderBottom: '2px solid #27272a', paddingBottom: '0.6rem' }}>
          <h1 className="logo-h1" style={{ fontSize: '4.8rem', fontWeight: '800', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.05em', lineHeight: '0.85' }}>SILICON<br />STENCIL<br />STUDIOS</h1>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: '#52525b', fontWeight: '700', textTransform: 'uppercase' }}>WM_MOBILE_DRAFT // V0.1</p>
        </header>
        <section className="brutalist-section">
          <div style={{ position: 'absolute', top: '-4px', left: '-4px', width: '16px', height: '16px', border: '4px solid #FF4500', borderRight: 'none', borderBottom: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '16px', height: '16px', border: '4px solid #FF4500', borderLeft: 'none', borderTop: 'none' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
            <span className="blink" style={{ width: '12px', height: '12px', backgroundColor: '#FF4500', display: 'inline-block' }}></span>
            <h2 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase' }}>SYSTEM OFFLINE</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>
            <p className="log-line" style={{ color: '#d4d4d8' }}>&gt; INITIATING PROTOCOL 3.2.0...</p>
            <p className="log-line" style={{ color: '#52525b' }}>&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
            <p className="log-line" style={{ color: '#52525b' }}>&gt; REINFORCING CONCRETE STRUCTURES [70% COMPLETED].</p>
            <p style={{ color: '#FF4500', fontWeight: '800', marginTop: '0.8rem', fontStyle: 'italic', lineHeight: '1.2' }}>&gt; WARNING:<br className="warning-br" /> MASSIVE DATA STREAM DETECTED.<br className="warning-br" /> STANDBY FOR DEPLOYMENT<span className="blink">_</span></p>
          </div>
        </section>
        <footer style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', color: '#3f3f46', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <p>LOREM IPSUM WM // EXPERIMENTAL</p>
          <p style={{ color: '#FF4500' }}>ENCRYPTED BY SSS</p>
        </footer>
      </main>
    </div>
  );
}