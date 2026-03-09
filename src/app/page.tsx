export default function SSSPage() {
  return (
    <div style={{
      backgroundColor: '#09090b', color: '#a1a1aa', minHeight: '100vh', width: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '20px', position: 'relative', overflow: 'hidden', margin: 0
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        * { font-family: 'JetBrains Mono', monospace !important; margin: 0; padding: 0; box-sizing: border-box; }
        
        .scanlines {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50;
        }

        .grid-bg {
          position: fixed; inset: 0; opacity: 0.08; pointer-events: none; z-index: 0;
          background-image: linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .main-content { width: 100%; max-width: 800px; z-index: 10; display: flex; flex-direction: column; gap: 1.5rem; }
        
        .logo-h1 { 
          font-size: 5rem; font-weight: 800; color: #fff; 
          text-transform: uppercase; letter-spacing: -0.05em; line-height: 0.85; margin-bottom: 0.2rem;
        }

        .brutalist-section {
          background-color: #000; border: 4px solid #1f1f23; padding: 2.5rem; position: relative;
          box-shadow: 12px 12px 0px 0px rgba(255, 69, 0, 0.15);
        }

        .accent { position: absolute; width: 16px; height: 16px; border: 4px solid #FF4500; }
        .accent-tl { top: -4px; left: -4px; border-right: none; border-bottom: none; }
        .accent-br { bottom: -4px; right: -4px; border-left: none; border-top: none; }

        .blink { animation: blinker 1s steps(2, start) infinite; }
        @keyframes blinker { 50% { opacity: 0; } }

        /* MOBİL REVİZYONLARI */
        @media (max-width: 768px) {
          .logo-h1 { font-size: 2.8rem; }
          .brutalist-section { padding: 1.5rem; border-width: 2px; }
          .main-content { gap: 1rem; }
          .warning-br { display: block; height: 0; margin-top: 4px; }
          .mobile-hide { display: none; }
        }
      `}} />

      <div className="scanlines"></div>
      <div className="grid-bg"></div>

      <main className="main-content">
        <header style={{ borderBottom: '2px solid #27272a', paddingBottom: '0.8rem' }}>
          <h1 className="logo-h1">SILICON<br />STENCIL<br />STUDIOS</h1>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', color: '#52525b', fontWeight: '700', textTransform: 'uppercase' }}>
            MONOLITH INFRASTRUCTURE // V4.0
          </p>
        </header>

        <section className="brutalist-section">
          <div className="accent accent-tl"></div>
          <div className="accent accent-br"></div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
            <span className="blink" style={{ width: '12px', height: '12px', backgroundColor: '#FF4500', display: 'inline-block' }}></span>
            <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase' }}>SYSTEM OFFLINE</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', lineHeight: '1.4' }}>
            <p style={{ color: '#d4d4d8' }}>&gt; INITIATING PROTOCOL 3.2.0...</p>
            <p style={{ color: '#52525b' }}>&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
            <p style={{ color: '#52525b' }}>&gt; REINFORCING CONCRETE STRUCTURES [70% COMPLETED].</p>
            <p style={{ color: '#52525b' }} className="mobile-hide">&gt; CALIBRATING SOUL ORANGE EXTRACTION VALVES...</p>
            <p style={{ color: '#52525b' }} className="mobile-hide">&gt; ANALYZING SOUL TRAITS...</p>
            
            <p style={{ color: '#FF4500', fontWeight: '800', marginTop: '1rem', fontStyle: 'italic' }}>
              &gt; WARNING:<br className="warning-br" /> 
              MASSIVE DATA STREAM DETECTED.<br className="warning-br" /> 
              STANDBY FOR DEPLOYMENT<span className="blink">_</span>
            </p>
          </div>
        </section>

        <footer style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#3f3f46', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <p>THE SYSTEM PROTECTS ITS OWN BUGS.</p>
          <p style={{ color: '#FF4500' }}>ENCRYPTED BY SSS</p>
        </footer>
      </main>
    </div>
  );
}