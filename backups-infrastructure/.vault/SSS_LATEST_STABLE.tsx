/* @rev: v5.9.0_PIXEL_PERFECT
   @status: GOLDEN_MASTER
   @desc: Final calibration for Silicon Stencil Studios. Zero-Gap DNA.
*/

"use client";

import React, { useEffect, useState } from 'react';

export default function SSSPortal() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div style={{ backgroundColor: '#09090b', minHeight: '100vh' }} />;

  return (
    <div className="sss-viewport">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        
        * { box-sizing: border-box; font-family: 'JetBrains Mono', monospace !important; }
        
        .sss-viewport {
          background-color: #09090b !important;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          overflow: hidden;
          position: relative;
        }

        .scanlines { 
          position: fixed; inset: 0; z-index: 100; pointer-events: none;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.2) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.05), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.05)); 
          background-size: 100% 4px, 3px 100%; 
        }

        .grid-bg { 
          position: fixed; inset: 0; opacity: 0.1; pointer-events: none; z-index: 1; 
          background-image: linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px); 
          background-size: 40px 40px; 
        }

        .main-frame { 
          width: 95%; max-width: 850px; z-index: 10; padding: 40px 20px; 
          display: flex; flex-direction: column; 
        }

        .title-crunch { 
          font-size: clamp(48px, 10vw, 82px); font-weight: 800; color: #fff; margin: 0; 
          text-transform: uppercase; letter-spacing: -0.06em; line-height: 0.82; italic;
          background: linear-gradient(to bottom, #fff 0%, #fff 45%, #52525b 50%, #fff 55%, #fff 100%);
          background-size: 100% 4px; -webkit-background-clip: text;
        }

        .brutalist-box { 
          background-color: #000; border: 4px solid #1f1f23; padding: 45px; 
          position: relative; width: 100%; box-shadow: 18px 18px 0px 0px rgba(255, 69, 0, 0.12); 
        }

        .corner { position: absolute; width: 24px; height: 24px; border: 4px solid #FF4500; }
        .top-left { top: -4px; left: -4px; border-right: none; border-bottom: none; }
        .bottom-right { bottom: -4px; right: -4px; border-left: none; border-top: none; }

        .glow-text { text-shadow: 0 0 12px rgba(255, 69, 0, 0.4); }
        
        @keyframes blink { 50% { opacity: 0; } }
        .blinker { animation: blink 0.8s steps(2, start) infinite; }

        @media (max-width: 768px) {
          .title-crunch { font-size: 44px !important; }
          .brutalist-box { padding: 30px !important; }
        }
      `}</style>

      <div className="scanlines"></div>
      <div className="grid-bg"></div>

      <main className="main-frame">
        <header style={{ borderBottom: '4px solid #1f1f23', paddingBottom: '24px', marginBottom: '32px' }}>
          <div style={{ background: '#FF4500', color: '#000', display: 'inline-block', padding: '2px 8px', fontSize: '10px', fontWeight: 900, marginBottom: '10px' }}>v4.0.0_STABLE</div>
          <h1 className="title-crunch">SILICON<br />STENCIL<br />STUDIOS</h1>
          <div style={{ fontSize: '13px', letterSpacing: '0.45em', color: '#52525b', fontWeight: 700, textTransform: 'uppercase', marginTop: '18px', borderLeft: '5px solid #FF4500', paddingLeft: '14px' }}>
            Monolith Infrastructure
          </div>
        </header>

        <section className="brutalist-box">
          <div className="corner top-left"></div>
          <div className="corner bottom-right"></div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '28px' }}>
            <div style={{ width: '18px', height: '18px', backgroundColor: '#FF4500' }} className="blinker"></div>
            <h2 className="glow-text" style={{ color: '#fff', margin: 0, fontSize: '30px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 800 }}>SYSTEM OFFLINE</h2>
          </div>

          <div style={{ fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.7, color: '#52525b' }}>
            <p style={{ color: '#d4d4d8', margin: '0 0 12px 0' }}>&gt; INITIATING PROTOCOL 3.2.0...</p>
            <p style={{ margin: '0 0 12px 0' }}>&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
            <p style={{ margin: '0 0 12px 0' }}>&gt; REINFORCING CONCRETE STRUCTURES [100% completed].</p>
            <p style={{ margin: '0 0 12px 0' }}>&gt; CALIBRATING SOUL ORANGE VALVES...</p>
            <p className="glow-text" style={{ color: '#FF4500', fontSize: '17px', fontWeight: 800, marginTop: '34px' }}>
              &gt; WARNING: MASSIVE DATA STREAM DETECTED. STANDBY FOR DEPLOYMENT<span className="blinker">_</span>
            </p>
          </div>
        </section>

        <footer style={{ display: 'flex', justifyContent: 'space-between', marginTop: '55px', fontSize: '11px', color: '#3f3f46', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          <span>The system protects its own bugs.</span>
          <span style={{ color: '#FF4500' }}>Encrypted by SSS</span>
        </footer>
      </main>
    </div>
  );
}