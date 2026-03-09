export default function SSSPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative selection:bg-[#FF4500] selection:text-black overflow-hidden bg-[#09090b] text-[#a1a1aa]">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        * { font-family: 'JetBrains Mono', monospace !important; margin: 0; padding: 0; box-sizing: border-box; }
        .soul-orange { color: #FF4500; }
        .bg-soul-orange { background-color: #FF4500; }
        .scanlines {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50;
        }
        .blink { animation: blinker 1s steps(2, start) infinite; }
        @keyframes blinker { 50% { opacity: 0; } }
      `}} />

      <div className="scanlines"></div>

      <main className="z-10 w-full max-w-[600px] flex flex-col gap-10">
        <header className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tighter leading-none">
            Silicon<br />Stencil<br />Studios
          </h1>
          <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-zinc-500 font-bold">
            Monolith Infrastructure // v4.0
          </p>
        </header>

        <section className="border-2 border-white p-6 md:p-8 bg-black relative">
          {/* Header - SYSTEM CALIBRATION Correction */}
          <div className="flex items-center gap-4 border-b-2 border-white pb-4 mb-6 uppercase">
            <div className="w-8 h-8 bg-[#FF4500]"></div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-widest leading-none">System Calibration</h2>
          </div>
          
          <div className="space-y-2 text-xs md:text-sm tracking-tight font-bold uppercase">
            <p className="text-zinc-300 font-bold">&gt; INITIATING PROTOCOL 3.2.0...</p>
            <p className="text-zinc-300 font-bold">&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
            <p className="text-zinc-300 font-bold">&gt; REINFORCING CONCRETE STRUCTURES [70% COMPLETED].</p>
            <p className="text-zinc-300 font-bold">&gt; CALIBRATING SOUL ORANGE EXTRACTION VALVES...</p>
            <p className="text-zinc-300 font-bold">&gt; ANALYZING SOUL TRAITS...</p>
            <p className="text-[#FF4500] pt-4 italic font-extrabold">
              &gt; STANDBY FOR DEPLOYMENT<span className="blink">_</span>
            </p>
          </div>
        </section>

        <footer className="text-[10px] md:text-xs text-zinc-600 uppercase font-bold tracking-widest text-center mt-4">
          <p>The system protects its own bugs. Encrypted by SSS.</p>
        </footer>
      </main>

      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
    </div>
  )
}