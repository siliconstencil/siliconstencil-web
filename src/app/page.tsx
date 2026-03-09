export default function SSSPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative selection:bg-[#FF4500] selection:text-black overflow-hidden bg-[#09090b] text-[#a1a1aa]">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        div, h1, h2, p, footer, header, section { font-family: 'JetBrains Mono', monospace !important; }
        .soul-orange { color: #FF4500; }
        .bg-soul-orange { background-color: #FF4500; }
        .border-soul-orange { border-color: #FF4500; }
        .scanlines {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50;
        }
        .brutalist-box { box-shadow: 12px 12px 0px 0px rgba(255, 69, 0, 0.15); transition: all 0.2s ease; }
        .blink { animation: blinker 1s linear infinite; }
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
        { /* Cerrahi Müdahale: items-center ve leading-none mühürlendi */ }
        <header className="border-b-4 border-zinc-800 pb-4 flex justify-between items-center glitch-load" style={{ animationDelay: '0.2s' }}>
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter leading-none">
              Silicon<br />Stencil<br />Studios
            </h1>
            <p className="text-xs md:text-sm mt-2 tracking-widest uppercase text-zinc-600">Monolith Infrastructure // v4.0</p>
          </div>
          <div className="text-right hidden md:block text-xs text-zinc-700 uppercase leading-relaxed">
            <p>Loc: Sector 0</p>
            <p>Auth: Director_CD</p>
          </div>
        </header>

        <section className="border-4 border-zinc-800 p-6 md:p-10 brutalist-box bg-black relative glitch-load" style={{ animationDelay: '0.4s' }}>
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-soul-orange -ml-1 -mt-1"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-soul-orange -mr-1 -mb-1"></div>

          <div className="flex flex-col gap-6 items-center text-center">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-soul-orange blink"></div>
              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest">System Offline</h2>
            </div>
            
            <div className="space-y-2 text-sm md:text-base w-full max-w-xl">
              <p className="text-zinc-300">&gt; INITIATING PROTOCOL 3.2.0...</p>
              <p className="text-zinc-500">&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
              <p className="text-zinc-500">&gt; REINFORCING CONCRETE STRUCTURES [70% COMPLETED].</p>
              <p className="text-zinc-500">&gt; CALIBRATING SOUL ORANGE EXTRACTION VALVES...</p>
              <p className="text-soul-orange font-bold mt-4">&gt; WARNING: MASSIVE DATA STREAM DETECTED. STANDBY FOR DEPLOYMENT<span className="blink">_</span></p>
            </div>
          </div>
        </section>

        <footer className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 uppercase glitch-load" style={{ animationDelay: '0.6s' }}>
          <p>The system protects its own bugs.</p>
          <p className="mt-2 md:mt-0 text-soul-orange">Encrypted by SSS</p>
        </footer>
      </main>

      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
    </div>
  )
}