export default function SSSPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative selection:bg-[#FF4500] selection:text-black overflow-hidden bg-[#09090b] text-[#a1a1aa]">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        * { font-family: 'JetBrains Mono', monospace !important; margin: 0; padding: 0; box-sizing: border-box; }
        .soul-orange { color: #FF4500; }
        .scanlines {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50;
        }
        .brutalist-box { box-shadow: 12px 12px 0px 0px rgba(255, 69, 0, 0.15); }
        .blink { animation: blinker 1s steps(2, start) infinite; }
        @keyframes blinker { 50% { opacity: 0; } }
      `}} />

      <div className="scanlines"></div>

      <main className="z-10 w-full max-w-4xl flex flex-col">
        {/* Header - Master görseline sadık, sağ blok temizlendi */}
        <header className="border-b-4 border-zinc-800 pb-4 mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tighter leading-none">
            Silicon<br />Stencil<br />Studios
          </h1>
          <p className="text-xs md:text-sm mt-4 tracking-widest uppercase text-zinc-600 font-bold italic">
            Monolith Infrastructure // v4.0
          </p>
        </header>

        {/* Content Section - Pixel-Perfect Frame */}
        <section className="border-4 border-zinc-800 p-10 md:p-16 brutalist-box bg-black relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#FF4500] -ml-1.5 -mt-1.5"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#FF4500] -mr-1.5 -mb-1.5"></div>

          <div className="flex flex-col gap-8 items-center text-center">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-[#FF4500] blink"></div>
              <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-[0.3em]">System Offline</h2>
            </div>
            
            <div className="space-y-3 text-sm md:text-lg tracking-tight max-w-2xl">
              <p className="text-zinc-300 font-bold">&gt; INITIATING PROTOCOL 3.2.0...</p>
              <p className="text-zinc-500">&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
              <p className="text-[#FF4500] font-extrabold pt-6 text-lg md:text-2xl uppercase tracking-tighter italic">
                &gt; STANDBY FOR DEPLOYMENT<span className="blink">_</span>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-zinc-700 uppercase font-bold tracking-[0.2em]">
          <p className="italic font-normal">The system protects its own bugs.</p>
          <p className="mt-2 md:mt-0 text-[#FF4500] border-b border-[#FF4500]/20">SILICON STENCIL STUDIOS</p>
        </footer>
      </main>

      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
    </div>
  )
}