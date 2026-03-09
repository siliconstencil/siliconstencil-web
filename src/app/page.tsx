export default function SSSPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-6 relative bg-[#09090b] text-[#a1a1aa] overflow-hidden selection:bg-[#FF4500] selection:text-black">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        * { font-family: 'JetBrains Mono', monospace !important; }
        .scanlines { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50; }
        .brutalist-box { box-shadow: 10px 10px 0px 0px rgba(255, 69, 0, 0.2); }
        .blink { animation: blink 1s steps(2) infinite; }
        @keyframes blink { 0% { opacity: 0; } }
      `}} />
      <div className="scanlines"></div>
      <main className="z-10 w-full max-w-[500px] flex flex-col gap-6 scale-90 md:scale-100">
        <header className="border-b-2 border-zinc-800 pb-4">
          <h1 className="text-5xl font-extrabold text-white uppercase leading-[0.85] tracking-tighter">
            Silicon<br />Stencil<br />Studios
          </h1>
          <div className="flex justify-between mt-4 text-[10px] tracking-widest text-zinc-500 uppercase">
            <span>Infrastructure // v4.0</span>
            <span className="text-zinc-700">Auth: Director_CD</span>
          </div>
        </header>
        <section className="border-2 border-zinc-800 p-8 brutalist-box bg-black relative">
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FF4500] -ml-1 -mt-1"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FF4500] -mr-1 -mb-1"></div>
          <div className="flex flex-col gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-[#FF4500] blink"></div>
              <h2 className="text-lg font-bold text-white uppercase">System Offline</h2>
            </div>
            <div className="space-y-1 text-xs text-zinc-500 uppercase">
              <p className="text-zinc-300 font-bold">&gt; PROTOCOL 3.2.0 ACTIVE</p>
              <p>&gt; ARCHITECTURE STABILIZED</p>
              <p>&gt; READY FOR DEPLOYMENT<span className="blink">_</span></p>
            </div>
          </div>
        </section>
        <footer className="flex justify-between text-[9px] text-zinc-700 uppercase italic">
          <p>The system protects its own bugs.</p>
          <p className="text-[#FF4500] not-italic font-bold tracking-widest">SSS_ENCRYPTED</p>
        </footer>
      </main>
    </div>
  )
}