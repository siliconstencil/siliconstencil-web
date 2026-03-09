import React, { CSSProperties } from 'react';

export default function SSSPage() {
  const styles: Record<string, CSSProperties> = {
    body: {
      backgroundColor: '#09090b', color: '#a1a1aa', minHeight: '100vh', width: '100vw',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '40px', position: 'relative', overflow: 'hidden', margin: 0
    },
    header: { borderBottom: '4px solid #1f1f23', paddingBottom: '24px', width: '100%', marginBottom: '40px' },
    logo: { fontSize: '72px', fontWeight: '800', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.05em', lineHeight: '0.85' },
    box: { backgroundColor: '#000', border: '4px solid #1f1f23', padding: '48px', position: 'relative', width: '100%', boxShadow: '12px 12px 0px 0px rgba(255, 69, 0, 0.15)' },
    warning: { color: '#FF4500', fontWeight: '800', marginTop: '32px', fontStyle: 'italic', fontSize: '20px' }
  };

  return (
    <div style={styles.body}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        * { font-family: 'JetBrains Mono', monospace !important; box-sizing: border-box; }
        .scanlines { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50; }
        .grid-bg { position: fixed; inset: 0; opacity: 0.08; pointer-events: none; z-index: 0; background-image: linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px); background-size: 40px 40px; }
        .blink { animation: blinker 1s steps(2, start) infinite; }
        @keyframes blinker { 50% { opacity: 0; } }
        @media (max-width: 768px) { .logo-text { font-size: 42px !important; } }
      `}} />

      <div className="scanlines"></div>
      <div className="grid-bg"></div>

      <main style={{ width: '100%', maxWidth: '800px', zIndex: 10 }}>
        <header style={styles.header}>
          <h1 className="logo-text" style={styles.logo}>SILICON<br />STENCIL<br />STUDIOS</h1>
          <p style={{ fontSize: '14px', letterSpacing: '0.4em', color: '#52525b', fontWeight: '700', textTransform: 'uppercase', marginTop: '12px' }}>
            MONOLITH INFRASTRUCTURE // V4.0
          </p>
        </header>

        <section style={styles.box}>
          <div style={{ position: 'absolute', top: '-4px', left: '-4px', width: '16px', height: '16px', border: '4px solid #FF4500', borderRight: 'none', borderBottom: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '16px', height: '16px', border: '4px solid #FF4500', borderLeft: 'none', borderTop: 'none' }}></div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <span className="blink" style={{ width: '16px', height: '16px', backgroundColor: '#FF4500' }}></span>
            <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase' }}>SYSTEM OFFLINE</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '16px', fontWeight: '700', textTransform: 'uppercase' }}>
            <p style={{ color: '#d4d4d8' }}>&gt; INITIATING PROTOCOL 3.2.0...</p>
            <p style={{ color: '#52525b' }}>&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
            <p style={{ color: '#52525b' }}>&gt; REINFORCING CONCRETE STRUCTURES [70% COMPLETED].</p>
            <p style={{ color: '#52525b' }}>&gt; CALIBRATING SOUL ORANGE EXTRACTION VALVES...</p>
            <p style={{ color: '#52525b' }}>&gt; ANALYZING SOUL TRAITS...</p>
            <p style={styles.warning}>&gt; WARNING: MASSIVE DATA STREAM DETECTED. STANDBY FOR DEPLOYMENT<span className="blink">_</span></p>
          </div>
        </section>

        <footer style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#3f3f46', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '40px' }}>
          <p>THE SYSTEM PROTECTS ITS OWN BUGS.</p>
          <p style={{ color: '#FF4500' }}>ENCRYPTED BY SSS</p>
        </footer>
      </main>
    </div>
  );
}