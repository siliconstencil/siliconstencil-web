export default function SSSPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative selection:bg-[#FF4500] selection:text-black overflow-hidden bg-[#09090b] text-[#a1a1aa]">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        * { font-family: 'JetBrains Mono', monospace !important; margin: 0; padding: 0; box-sizing: border-box; }
        .soul-orange { color: #FF4500; }
        .bg-soul-orange { background-color: #FF4500; }
        .border-soul-orange { border-color: #FF4500; }
        
        .scanlines {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 4px, 3px 100%;
          pointer-events: none;
          z-index: 50;
        }

        .brutalist-box {
          box-shadow: 12px 12px 0px 0px rgba(255, 69, 0, 0.15);
        }
        
        .blink { animation: blinker 1s steps(2, start) infinite; }
        @keyframes blinker { 50% { opacity: 0; } }

        .glitch-load { animation: glitchIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
        @keyframes glitchIn {
          0% { transform: translate(0); opacity: 0; }
          20% { transform: translate(-5px, 5px); opacity: 0.5; }
          40% { transform: translate(-5px, -5px); opacity: 1; }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
          100% { transform: translate(0); }
        }
      `}} />

      <div className="scanlines"></div>

      <main className="z-10 w-full max-w-4xl flex flex-col gap-8">
        
        {/* Header - 3 Satırlı Revize Logotype */}
        <header className="border-b-4 border-zinc-800 pb-4 flex justify-between items-end glitch-load" style={{ animationDelay: '0.2s' }}>
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tighter leading-[0.85] mb-2">
              Silicon<br />Stencil<br />Studios
            </h1>
            <p className="text-xs md:text-sm tracking-widest uppercase text-zinc-500 font-bold">Monolith Infrastructure // v4.0</p>
          </div>
          {/* Right side removed as requested */}
        </header>

        {/* Main Content Area */}
        <section className="border-4 border-zinc-800 p-6 md:p-10 brutalist-box bg-black relative glitch-load" style={{ animationDelay: '0.4s' }}>
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-soul-orange -ml-1 -mt-1"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-soul-orange -mr-1 -mb-1"></div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-soul-orange blink shadow-[0_0_10px_rgba(255,69,0,0.5)]"></div>
              <h2 className="text-xl md:text-3xl font-bold text-white uppercase tracking-widest">System Offline</h2>
            </div>
            
            <div className="space-y-2 text-sm md:text-base font-bold">
              <p className="text-zinc-300">> INITIATING PROTOCOL 3.2.0...</p>
              <p className="text-zinc-500">> REBUILDING FOUNDATION ARCHITECTURE.</p>
              <p className="text-zinc-500">> REINFORCING CONCRETE STRUCTURES [70% COMPLETED].</p>
              <p className="text-zinc-500">> CALIBRATING SOUL ORANGE EXTRACTION VALVES...</p>
              <p className="text-soul-orange font-extrabold mt-6 text-lg md:text-xl italic">
                > WARNING: MASSIVE DATA STREAM DETECTED. STANDBY FOR DEPLOYMENT<span className="blink">_</span>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-zinc-700 uppercase font-bold tracking-widest glitch-load" style={{ animationDelay: '0.6s' }}>
          <p>The system protects its own bugs.</p>
          <p className="mt-2 md:mt-0 text-soul-orange border-b border-soul-orange/20">Encrypted by SSS</p>
        </footer>

      </main>

      {/* Background decorative grid */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

    </div>
  )
}