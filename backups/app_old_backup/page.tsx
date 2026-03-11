import React from 'react';

export default function SSSPortal() {
  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center bg-[#050505] p-4 overflow-hidden font-mono selection:bg-[#FF4500]">
      <div className="scanlines"></div>
      <div className="grid-bg"></div>

      <main className="relative w-full max-w-[650px] z-10 flex flex-col">
        <header className="border-b-[2px] border-[#1f1f23] pb-3 mb-5">
          <div className="bg-[#FF4500] text-black inline-block px-1.5 py-0.5 text-[8px] font-black mb-2 uppercase">
            v4.0.0_STABLE
          </div>
          <h1 className="text-[38px] md:text-[68px] font-[900] text-white m-0 uppercase leading-[0.8] tracking-tighter drop-shadow-[2px_2px_0px_rgba(31,31,35,1)]">
            SILICON<br/>STENCIL<br/>STUDIOS
          </h1>
          <div className="text-[8px] md:text-[10px] tracking-[0.5em] text-[#52525b] font-black uppercase mt-4 border-l-[2px] border-[#FF4500] pl-3">
            Monolith Infrastructure
          </div>
        </header>

        <section className="relative bg-black border-[2px] border-[#1f1f23] p-5 md:p-8 shadow-[5px_5px_0px_0px_rgba(255,69,0,0.04)]">
          <div className="absolute w-3 h-3 border-t-[2px] border-l-[2px] border-[#FF4500] -top-0.5 -left-0.5"></div>
          <div className="absolute w-3 h-3 border-b-[2px] border-r-[2px] border-[#FF4500] -bottom-0.5 -right-0.5"></div>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2.5 h-2.5 bg-[#FF4500] animate-pulse"></div>
            <h2 className="text-white m-0 text-[14px] md:text-[20px] font-black uppercase tracking-widest">SYSTEM OFFLINE</h2>
          </div>

          <div className="space-y-1 text-[9px] md:text-[12px] font-bold uppercase leading-tight text-[#3f3f46]">
            <p className="text-[#d4d4d8]">&gt; INITIATING PROTOCOL 3.2.0...</p>
            <p>&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
            <p>&gt; REINFORCING CONCRETE STRUCTURES [73%].</p>
            <p>&gt; CALIBRATING SOUL ORANGE VALVES...</p>
            
            <p className="text-[#FF4500] text-[10px] md:text-[13px] font-black mt-6 pt-3 border-t border-[#1f1f23] block">
              &gt; WARNING: MASSIVE DATA STREAM DETECTED. STANDBY FOR DEPLOYMENT<span className="animate-blink">_</span>
            </p>
          </div>
        </section>

        <footer className="flex justify-between mt-6 text-[8px] text-[#3f3f46] font-black tracking-widest uppercase">
          <span>The system protects its own bugs.</span>
          <span className="text-[#FF4500]">Encrypted by SSS</span>
        </footer>
      </main>
    </div>
  );
}