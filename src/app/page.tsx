import React, { CSSProperties } from 'react';

export default function SSSPage() {
  const styles: { [key: string]: CSSProperties } = {
    container: {
      backgroundColor: '#09090b', color: '#a1a1aa', height: '100vh', width: '100vw',
      display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center',
      padding: '20px', position: 'relative', overflow: 'hidden', margin: 0
    },
    main: { width: '100%', maxWidth: '850px', zIndex: 10, display: 'flex', flexDirection: 'column' as const },
    header: { borderBottom: '4px solid #1f1f23', width: '100%' },
    logo: { fontWeight: '800', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.05em', lineHeight: '0.85' },
    box: { backgroundColor: '#000', border: '4px solid #1f1f23', position: 'relative', width: '100%', boxShadow: '12px 12px 0px 0px rgba(255, 69, 0, 0.15)' },
    warning: { color: '#FF4500', fontWeight: '800', fontStyle: 'italic' }
  };

  return (
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        * { font-family: 'JetBrains Mono', monospace !important; box-sizing: border-box; }
        .scanlines { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50; }
        .grid-bg { position: fixed; inset: 0; opacity: 0.08; pointer-events: none; z-index: 0; background-image: linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px); background-size: 40px 40px; }
        .blink { animation: blinker 1s steps(2, start) infinite; }
        @keyframes blinker { 50% { opacity: 0; } }
        
        /* PC - V7 Baseline Fidelity */
        @media (min-width: 769px) {
          .logo-text { font-size: 5rem; }
          .header-wrap { padding-bottom: 24px; margin-bottom: 40px; }
          .brutalist-section { padding: 48px; }
          .log-stack { gap: 12px; font-size: 16px; }
          .warning-text { font-size: 20px; margin-top: 32px; }
          .footer-wrap { margin-top: 40px; }
        }

        /* MOBILE - Zero Scroll Compression */
        @media (max-width: 768px) {
          .logo-text { font-size: 2.5rem; }
          .header-wrap { padding-bottom: 12px; margin-bottom: 15px; }
          .brutalist-section { padding: 20px; border-width: 2px; }
          .log-stack { gap: 6px; font-size: 0.75rem; }
          .warning-text { font-size: 0.9rem; margin-top: 12px; }
          .footer-wrap { margin-top: 15px; font-size: 9px !important; }
          .mobile-br { display: block; }
        }
      `}} />

      <div className="scanlines"></div>
      <div className="grid-bg"></div>

      <main style={styles.main}>
        <header className="header-wrap" style={styles.header}>
          <h1 className="logo-text" style={styles.logo}>SILICON<br />STENCIL<br />STUDIOS</h1>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.4em', color: '#52525b', fontWeight: '700', textTransform: 'uppercase', marginTop: '10px' }}>
            MONOLITH INFRASTRUCTURE // V4.0
          </p>
        </header>

        <section className="brutalist-section" style={styles.box}>
          <div style={{ position: 'absolute', top: '-4px', left: '-4px', width: '16px', height: '16px', border: '4px solid #FF4500', borderRight: 'none', borderBottom: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '16px', height: '16px', border: '4px solid #FF4500', borderLeft: 'none', borderTop: 'none' }}></div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span className="blink" style={{ width: '12px', height: '12px', backgroundColor: '#FF4500', display: 'inline-block' }}></span>
            <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase' }}>SYSTEM OFFLINE</h2>
          </div>

          <div className="log-stack" style={{ display: 'flex', flexDirection: 'column', fontWeight: '700', textTransform: 'uppercase' }}>
            <p style={{ color: '#d4d4d8' }}>&gt; INITIATING PROTOCOL 3.2.0...</p>
            <p style={{ color: '#52525b' }}>&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
            <p style={{ color: '#52525b' }}>&gt; REINFORCING CONCRETE STRUCTURES [70%].</p>
            <p style={{ color: '#52525b' }}>&gt; CALIBRATING SOUL ORANGE VALVES...</p>
            <p className="warning-text" style={styles.warning}>
              &gt; WARNING:<br className="mobile-br" style={{display:'none'}} /> MASSIVE DATA STREAM DETECTED. STANDBY FOR DEPLOYMENT<span className="blink">_</span>
            </p>
          </div>
        </section>

        <footer className="footer-wrap" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#3f3f46', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <p>THE SYSTEM PROTECTS ITS OWN BUGS.</p>
          <p style={{ color: '#FF4500' }}>ENCRYPTED BY SSS</p>
        </footer>
      </main>
    </div>
  );
}