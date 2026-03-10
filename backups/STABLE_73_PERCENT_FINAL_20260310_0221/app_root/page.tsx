import React from 'react';

export default function SSSPortal() {
  return (
    <div style={{ backgroundColor: '#09090b', color: '#a1a1aa', margin: 0, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflowX: 'hidden' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        * { box-sizing: border-box; font-family: 'JetBrains Mono', monospace !important; }
        .scanlines { position: fixed; inset: 0; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50; }
        .grid-bg { position: fixed; inset: 0; opacity: 0.08; pointer-events: none; z-index: 0; background-image: linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px); background-size: 40px 40px; }
        main { width: 95%; max-width: 850px; z-index: 10; padding: 40px 20px; display: flex; flex-direction: column; }
        header { border-bottom: 4px solid #1f1f23; padding-bottom: 20px; margin-bottom: 30px; }
        h1 { font-size: 64px; font-weight: 800; color: #fff; margin: 0; text-transform: uppercase; letter-spacing: -0.05em; line-height: 0.85; }
        .sub-header { font-size: 13px; letter-spacing: 0.4em; color: #52525b; font-weight: 700; text-transform: uppercase; margin-top: 15px; border-left: 4px solid #FF4500; padding-left: 12px; }
        .brutalist-box { background-color: #000; border: 4px solid #1f1f23; padding: 45px; position: relative; width: 100%; box-shadow: 15px 15px 0px 0px rgba(255, 69, 0, 0.15); }
        .corner { position: absolute; width: 20px; height: 20px; border: 4px solid #FF4500; }
        .top-left { top: -4px; left: -4px; border-right: none; border-bottom: none; }
        .bottom-right { bottom: -4px; right: -4px; border-left: none; border-top: none; }
        .status { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; }
        .blink-dot { width: 16px; height: 16px; background-color: #FF4500; animation: blinker 1s steps(2, start) infinite; }
        @keyframes blinker { 50% { opacity: 0; } }
        .blink { animation: blinker 1s steps(2, start) infinite; }
        .terminal-text { font-size: 15px; font-weight: 700; text-transform: uppercase; line-height: 1.6; color: #52525b; }
        .warning { color: #FF4500; font-size: 16px; font-weight: 800; margin-top: 30px; white-space: nowrap; display: block; }
        footer { display: flex; justify-content: space-between; margin-top: 50px; font-size: 11px; color: #3f3f46; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; }
        @media (max-width: 768px) { h1 { font-size: 42px; } .brutalist-box { padding: 25px; } .warning { font-size: 12px; } main { padding: 20px 10px; } }
      `}} />
      <div className="scanlines"></div>
      <div className="grid-bg"></div>
      <main>
        <header>
          <div style={{ background: '#FF4500', color: '#000', display: 'inline-block', padding: '2px 6px', fontSize: '9px', fontWeight: 900, marginBottom: '8px' }}>v4.0.0_STABLE</div>
          <h1>SILICON<br/>STENCIL<br/>STUDIOS</h1>
          <div className="sub-header">Monolith Infrastructure</div>
        </header>
        <section className="brutalist-box">
          <div className="corner top-left"></div>
          <div className="corner bottom-right"></div>
          <div className="status">
            <div className="blink-dot"></div>
            <h2 style={{ color: '#fff', margin: 0, fontSize: '28px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>SYSTEM OFFLINE</h2>
          </div>
          <div className="terminal-text">
            <p style={{ color: '#d4d4d8' }}>&gt; INITIATING PROTOCOL 3.2.0...</p>
            <p>&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
            <p>&gt; REINFORCING CONCRETE STRUCTURES [73%].</p>
            <p>&gt; CALIBRATING SOUL ORANGE VALVES...</p>
            <p className="warning">&gt; WARNING: MASSIVE DATA STREAM DETECTED. STANDBY FOR DEPLOYMENT<span className="blink">_</span></p>
          </div>
        </section>
        <footer>
          <span>The system protects its own bugs.</span>
          <span style={{ color: '#FF4500' }}>Encrypted by SSS</span>
        </footer>
      </main>
    </div>
  );
}