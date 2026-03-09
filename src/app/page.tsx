import React from 'react';

export default function SSSPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative">
      {/* Visual Overlay Layers */}
      <div className="scanlines" />
      <div className="grid-bg" />

      <main className="z-10 w-full max-w-4xl flex flex-col gap-10">
        
        {/* Header Section */}
        <header className="border-b-4 border-zinc-800 pb-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tighter leading-[0.85] mb-4">
            SILICON<br />STENCIL<br />STUDIOS
          </h1>
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-zinc-500 font-bold">
            MONOLITH INFRASTRUCTURE // V4.0
          </p>
        </header>

        {/* Console / Calibration Box */}
        <section className="border-4 border-zinc-800 p-8 md:p-12 brutalist-box bg-black relative">
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#FF4500] -ml-1 -mt-1" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#FF4500] -mr-1 -mb-1" />

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-[#FF4500] animate-blink shadow-[0_0_10px_rgba(255,69,0,0.5)]" />
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest">
                SYSTEM OFFLINE
              </h2>
            </div>
            
            <div className="space-y-3 text-sm md:text-base font-bold uppercase tracking-tight">
              <p className="text-zinc-300">&gt; INITIATING PROTOCOL 3.2.0...</p>
              <p className="text-zinc-500">&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
              <p className="text-zinc-500">&gt; REINFORCING CONCRETE STRUCTURES [70% COMPLETED].</p>
              <p className="text-zinc-500">&gt; CALIBRATING SOUL ORANGE EXTRACTION VALVES...</p>
              <p className="text-zinc-500">&gt; ANALYZING SOUL TRAITS...</p>
              
              <div className="pt-6">
                <p className="text-[#FF4500] text-lg md:text-xl italic font-black leading-tight">
                  &gt; WARNING: MASSIVE DATA STREAM DETECTED. STANDBY FOR DEPLOYMENT<span className="animate-blink">_</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-zinc-700 uppercase font-bold tracking-[0.2em]">
          <p>THE SYSTEM PROTECTS ITS OWN BUGS.</p>
          <p className="mt-2 md:mt-0 text-[#FF4500] border-b border-[#FF4500]/20 pb-1">
            ENCRYPTED BY SSS
          </p>
        </footer>

      </main>
    </div>
  );
}