export default function GamingBookPage() {
  return (
    <div style={{
      backgroundColor: '#000000', color: '#d4d4d8', minHeight: '100vh', width: '100vw',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      padding: '2rem', position: 'relative', overflow: 'hidden', margin: 0
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
        * { font-family: 'Share Tech Mono', monospace !important; margin: 0; padding: 0; box-sizing: border-box; }
        
        /* Ambient Grid */
        .grid-bg {
          position: fixed; inset: 0; opacity: 0.1; pointer-events: none; z-index: 0;
          background-image: linear-gradient(#3f3f46 1px, transparent 1px), linear-gradient(90deg, #3f3f46 1px, transparent 1px);
          background-size: 100px 100px;
        }

        /* The Core Architecture */
        .core-container {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          display: flex; justify-content: center; align-items: center; z-index: 10;
        }

        .core {
          width: 150px; height: 150px; border-radius: 50%;
          background: radial-gradient(circle, #FF4500 0%, #8a2500 40%, #000000 80%);
          box-shadow: 0 0 50px 10px rgba(255, 69, 0, 0.4);
          animation: corePulse 4s ease-in-out infinite;
          display: flex; justify-content: center; align-items: center;
        }

        .core-ring {
          position: absolute; width: 250px; height: 250px; border-radius: 50%;
          border: 1px solid rgba(255, 69, 0, 0.2); border-top: 1px solid #FF4500;
          animation: rotateRing 10s linear infinite;
        }

        .core-ring-outer {
          position: absolute; width: 350px; height: 350px; border-radius: 50%;
          border: 1px dashed rgba(255, 69, 0, 0.1);
          animation: rotateRing 15s linear infinite reverse;
        }

        @keyframes corePulse {
          0% { transform: scale(0.95); box-shadow: 0 0 40px 5px rgba(255, 69, 0, 0.3); }
          50% { transform: scale(1.05); box-shadow: 0 0 80px 20px rgba(255, 69, 0, 0.6); }
          100% { transform: scale(0.95); box-shadow: 0 0 40px 5px rgba(255, 69, 0, 0.3); }
        }

        @keyframes rotateRing { 100% { transform: rotate(360deg); } }

        /* Typewriter & UI */
        .text-glow { text-shadow: 0 0 10px rgba(255, 69, 0, 0.8); }
        .blink { animation: blinker 0.75s step-end infinite; }
        @keyframes blinker { 50% { opacity: 0; } }

        .typewriter-box {
          background-color: rgba(0, 0, 0, 0.5); padding: 8px 16px;
          border: 1px solid rgba(255, 69, 0, 0.3); backdrop-filter: blur(4px);
          border-radius: 4px; display: inline-block;
        }
      `}} />

      <div className="grid-bg"></div>

      {/* Center Core */}
      <div className="core-container">
        <div className="core-ring-outer"></div>
        <div className="core-ring"></div>
        <div className="core">
          <div style={{ width: '40px', height: '40px', backgroundColor: '#fff', borderRadius: '50%', opacity: 0.2, filter: 'blur(8px)' }}></div>
        </div>
      </div>

      {/* Top HUD */}
      <header style={{ position: 'relative', zIndex: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ borderLeft: '2px solid #FF4500', paddingLeft: '16px' }}>
          <h1 className="text-glow" style={{ fontSize: '32px', fontWeight: 'bold', letterSpacing: '0.2em', color: '#FF4500' }}>SLAB</h1>
          <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#52525b', marginTop: '4px' }}>
            The Lore Archive // Amber Stratum
          </p>
        </div>
        <div style={{ textAlign: 'right', fontSize: '10px', color: '#3f3f46', letterSpacing: '0.1em' }}>
          <p>STATUS: SEALED</p>
          <p>BIOMETRIC: REQUIRED</p>
        </div>
      </header>

      {/* Center HUD */}
      <main style={{ position: 'relative', zIndex: 20, textAlign: 'center', marginTop: '30vh' }}>
        <p style={{ fontSize: '12px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '16px' }}>
          Matriarch Core Resonance
        </p>
        <div className="typewriter-box">
          <p style={{ color: '#FF4500', fontSize: '16px', letterSpacing: '0.1em' }}>
            EXTRACTING BIOLOGICAL ASSETS...<span className="blink">|</span>
          </p>
        </div>
      </main>

      {/* Bottom HUD */}
      <footer style={{ position: 'relative', zIndex: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #18181b', paddingBottom: '8px' }}>
        <div style={{ fontSize: '10px', color: '#3f3f46', textTransform: 'uppercase' }}>
          <p>Encryption: SSS_LOG_3.2.0</p>
        </div>
        <div className="blink" style={{ fontSize: '10px', color: '#FF4500', textTransform: 'uppercase', fontWeight: 'bold' }}>
          <p>Awaiting Access Key</p>
        </div>
      </footer>
    </div>
  );
}