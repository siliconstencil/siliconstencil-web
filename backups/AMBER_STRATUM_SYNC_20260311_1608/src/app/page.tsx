import React from 'react';
import Header from '../components/Header';
import Terminal from '../components/Terminal';
import Footer from '../components/Footer';

export default function SSSPortal() {
  return (
    <div style={{ backgroundColor: '#09090b', color: '#a1a1aa', margin: 0, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflowX: 'hidden', position: 'relative' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        * { box-sizing: border-box; font-family: 'JetBrains Mono', monospace !important; }
        .scanlines { position: fixed; inset: 0; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50; }
        .grid-bg { position: fixed; inset: 0; opacity: 0.08; pointer-events: none; z-index: 0; background-image: linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px); background-size: 40px 40px; }
        
        main { 
          width: 85%; 
          max-width: 800px; 
          z-index: 10; 
          padding: 40px 0; 
          display: flex; 
          flex-direction: column; 
          margin: 0 auto; 
        }

        .brutalist-box { background-color: #000; border: 4px solid #1f1f23; padding: clamp(20px, 5vw, 45px); position: relative; width: 100%; box-shadow: 10px 10px 0px 0px rgba(255, 69, 0, 0.15); }
        .corner { position: absolute; width: clamp(10px, 3vw, 20px); height: clamp(10px, 3vw, 20px); border: 4px solid #FF4500; }
        .top-left { top: -4px; left: -4px; border-right: none; border-bottom: none; }
        .bottom-right { bottom: -4px; right: -4px; border-left: none; border-top: none; }
        .blink { animation: blinker 1s steps(2, start) infinite; }
        @keyframes blinker { 50% { opacity: 0; } }
        
        .warning { 
          color: #FF4500; 
          font-size: clamp(11px, 2.5vw, 16px); 
          font-weight: 800; 
          margin-top: 30px; 
          white-space: normal; 
          word-break: break-word; 
          display: block; 
          line-height: 1.4;
        }
        
        @media (max-width: 768px) { 
          main { width: 92%; }
          .brutalist-box { padding: 25px; box-shadow: 6px 6px 0px 0px rgba(255, 69, 0, 0.15); }
        }
      `}} />
      <div className="scanlines"></div>
      <div className="grid-bg"></div>
      
      <main>
        <Header />
        <Terminal />
        <Footer />
      </main>
    </div>
  );
}