export default function SSSPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative selection:bg-[#FF4500] selection:text-black overflow-hidden bg-[#09090b] text-[#a1a1aa]">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        div, h1, h2, p, footer, header, section { font-family: 'JetBrains Mono', monospace !important; }
        .soul-orange { color: #FF4500; }
        .scanlines {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50;
        }
        .brutalist-box { box-shadow: 10px 10px 0px 0px rgba(255, 69, 0, 0.2); }
        .blink { animation: blinker 1s linear infinite; }
        @keyframes blinker { 50% { opacity: 0; } }
      `}} />
      <div className="scanlines"></div>
      <main className="z-10 w-full max-w-4xl flex flex-col gap-8">
        <header className="border-b-4 border-zinc-800 pb-4 flex justify-between items-end">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter leading-[0.85]">
              Silicon<br />Stencil<br />Studios
            </h1>
            <p className="text-xs md:text-sm mt-2 tracking-widest uppercase text-zinc-600 font-bold">Monolith Infrastructure // v4.0</p>
          </div>
          <div className="text-right hidden md:block text-[10px] md:text-xs text-zinc-800 uppercase leading-tight">
            <p>Loc: Sector 0</p>
            <p>Auth: SYSTEM_ROOT</p>
          </div>
        </header>
        <section className="border-4 border-zinc-800 p-6 md:p-10 brutalist-box bg-black relative text-center">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-soul-orange -ml-1 -mt-1"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-soul-orange -mr-1 -mb-1"></div>
          <div className="flex flex-col gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-soul-orange blink"></div>
              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-[0.2em]">System Offline</h2>
            </div>
            <div className="space-y-1 text-xs md:text-sm">
              <p className="text-zinc-300">&gt; INITIATING PROTOCOL 3.2.0...</p>
              <p className="text-zinc-500">&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
              <p className="text-soul-orange font-bold mt-4">&gt; STANDBY FOR DEPLOYMENT<span className="blink">_</span></p>
            </div>
          </div>
        </section>
        <footer className="flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-800 uppercase font-bold">
          <p className="italic">The system protects its own bugs.</p>
          <p className="text-soul-orange font-bold tracking-widest">SSS_SIGNAL</p>
        </footer>
      </main>
    </div>
  )
}