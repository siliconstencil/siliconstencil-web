/* * @rev: v1.0.0_GOLDEN_LIVE
 * @status: PRODUCTION_MASTER
 * @tester: HAKAN_LEVEL_0
 * @desc: Verified 1:1 Live DNA Clone. This is the absolute source of truth.
 * @date: 2026-03-09 23:50
 */
import React, { CSSProperties } from 'react';

export default function GamingBookPage() {
  const styles: Record<string, CSSProperties> = {
    body: {
      backgroundColor: '#000000', color: '#d4d4d8', minHeight: '100vh', width: '100%',
      display: 'flex', flexDirection: 'column' as 'column', justifyContent: 'space-between',
      padding: '2rem', position: 'relative', overflowY: 'auto', margin: 0
    }
  };

  return (
    <div style={styles.body}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
        * { font-family: 'Share Tech Mono', monospace !important; margin: 0; padding: 0; box-sizing: border-box; }
        .grid-bg { position: fixed; inset: 0; opacity: 0.1; pointer-events: none; z-index: 0; background-image: linear-gradient(#3f3f46 1px, transparent 1px), linear-gradient(90deg, #3f3f46 1px, transparent 1px); background-size: 100px 100px; }
        
        /* The Core Architecture - MOVED TO FLOW */
        .core-container { position: relative; width: 100%; display: flex; justify-content: center; align-items: center; z-index: 10; margin: 60px 0; }
        .core { width: 150px; height: 150px; border-radius: 50%; background: radial-gradient(circle, #FF4500 0%, #8a2500 40%, #000000 80%); box-shadow: 0 0 50px 10px rgba(255, 69, 0, 0.4); animation: corePulse 4s ease-in-out infinite; display: flex; justify-content: center; align-items: center; }
        .core-ring { position: absolute; width: 250px; height: 250px; border-radius: 50%; border: 1px solid rgba(255, 69, 0, 0.2); border-top: 1px solid #FF4500; animation: rotateRing 10s linear infinite; }
        .core-ring-outer { position: absolute; width: 350px; height: 350px; border-radius: 50%; border: 1px dashed rgba(255, 69, 0, 0.1); animation: rotateRing 15s linear infinite reverse; }
        
        @keyframes corePulse { 0% { transform: scale(0.95); box-shadow: 0 0 40px 5px rgba(255, 69, 0, 0.3); } 50% { transform: scale(1.05); box-shadow: 0 0 80px 20px rgba(255, 69, 0, 0.6); } 100% { transform: scale(0.95); box-shadow: 0 0 40px 5px rgba(255, 69, 0, 0.3); } }
        @keyframes rotateRing { 100% { transform: rotate(360deg); } }
        
        .typewriter { overflow: hidden; white-space: nowrap; display: inline-block; border-right: 2px solid #FF4500; width: 0; animation: typing 3.5s steps(40, end) forwards, blink-caret 0.75s step-end infinite; }
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: #FF4500; } }
        .blink { animation: blinkerer 0.75s step-end infinite; }
        @keyframes blinkerer { 50% { opacity: 0; } }

        @media (max-width: 768px) {
          .core-container { margin: 30px 0 !important; }
          .core { width: 100px !important; height: 100px !important; }
          .core-ring { width: 180px !important; height: 180px !important; }
          .core-ring-outer { width: 260px !important; height: 260px !important; }
          .logo-sss { font-size: 24px !important; }
        }
      `}} />
      <div className="grid-bg"></div>

      <header style={{ position: 'relative', zIndex: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ borderLeft: '2px solid #FF4500', paddingLeft: '16px' }}>
          <h1 className="logo-sss" style={{ fontSize: '32px', fontWeight: 'bold', letterSpacing: '0.2em', color: '#FF4500', textShadow: '0 0 10px rgba(255,69,0,0.8)' }}>SLAB</h1>
          <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#52525b', marginTop: '4px' }}>The Lore Archive // Amber Stratum</p>
        </div>
        <div style={{ textAlign: 'right', fontSize: '10px', color: '#3f3f46', letterSpacing: '0.1em' }}>
          <p>STATUS: SEALED</p>
          <p>BIOMETRIC: REQUIRED</p>
        </div>
      </header>

      {/* The Core Architecture - Standalone Child */}
      <div className="core-container">
        <div className="core-ring-outer"></div>
        <div className="core-ring"></div>
        <div className="core">
          <div style={{ width: '40px', height: '40px', backgroundColor: '#fff', borderRadius: '50%', opacity: 0.2, filter: 'blur(8px)' }}></div>
        </div>
      </div>

      <main style={{ position: 'relative', zIndex: 20, textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '16px' }}>Matriarch Core Resonance</p>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '8px 16px', border: '1px solid rgba(255, 69, 0, 0.3)', backdropFilter: 'blur(4px)', borderRadius: '4px', display: 'inline-block' }}>
          <p className="typewriter" style={{ color: '#FF4500', fontSize: '16px', letterSpacing: '0.1em' }}>EXTRACTING BIOLOGICAL ASSETS...</p>
        </div>
      </main>

      <footer style={{ position: 'relative', zIndex: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #18181b', paddingBottom: '8px', marginTop: '40px' }}>
        <div style={{ fontSize: '10px', color: '#3f3f46', textTransform: 'uppercase' }}>
          <p>Encryption: SSS_LOG_3.2.0</p>
        </div>
        <div style={{ fontSize: '10px', color: '#FF4500', textTransform: 'uppercase', fontWeight: 'bold' }} className="blink">
          <p>Awaiting Access Key</p>
        </div>
      </footer>
    </div>
  );
}