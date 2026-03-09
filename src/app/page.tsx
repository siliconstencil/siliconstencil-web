export default function SSSPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative selection:bg-[#FF4500] selection:text-black overflow-hidden bg-[#09090b] text-[#a1a1aa]">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        div, h1, h2, p, footer, header, section { font-family: 'JetBrains Mono', monospace; }
        .soul-orange { color: #FF4500; }
        .scanlines {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50;
        }
        .brutalist-box { box-shadow: 12px 12px 0px 0px rgba(255, 69, 0, 0.15); }
        .blink { animation: blinker 1s linear infinite; }
        @keyframes blinker { 50% { opacity: 0; } }
      `}} />
      <div className="scanlines"></div>
      <main className="z-10 w-full max-w-2xl flex flex-col gap-6">
        <header className="border-b-2 border-zinc-800 pb-4 flex justify-between items-end">
          <div className="leading-none">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tighter">
              Silicon<br />Stencil<br />Studios
            </h1>
            <p className="text-[10px] tracking-[0.3em] uppercase mt-4 text-zinc-500">Infrastructure // v4.0</p>
          </div>
          <div className="text-right text-[10px] text-zinc-700 hidden md:block uppercase font-bold">
            <p>Loc: Sector 0</p>
            <p>Auth: Director_CD</p>
          </div>
        </header>
        <section className="border-2 border-zinc-800 p-8 brutalist-box bg-black relative">
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-soul-orange -ml-1 -mt-1"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-soul-orange -mr-1 -mb-1"></div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-soul-orange blink"></div>
              <h2 className="text-lg font-bold text-white uppercase tracking-widest">System Offline</h2>
            </div>
            <div className="space-y-1 text-xs md:text-sm tracking-tight">
              <p className="text-zinc-400 font-bold tracking-normal">&gt; INITIATING PROTOCOL 3.2.0...</p>
              <p className="text-zinc-600">&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
              <p className="text-zinc-600">&gt; REINFORCING CONCRETE STRUCTURES [70%].</p>
              <p className="text-soul-orange font-bold pt-2">&gt; STANDBY FOR DEPLOYMENT<span className="blink">_</span></p>
            </div>
          </div>
        </section>
        <footer className="flex justify-between items-center text-[10px] text-zinc-700 uppercase italic">
          <p>The system protects its own bugs.</p>
          <p className="text-soul-orange not-italic font-bold">Encrypted by SSS</p>
        </footer>
      </main>
    </div>
  )
}