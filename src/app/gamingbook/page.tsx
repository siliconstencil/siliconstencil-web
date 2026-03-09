export default function GamingbookPage() {
  return (
    <div className="min-h-screen w-full bg-black text-zinc-300 overflow-hidden relative m-0 p-0 selection:bg-[#FF4500] selection:text-black">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
        div, h1, p, span, footer, header, main { font-family: 'Share Tech Mono', monospace; }
        .core-container { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; justify-content: center; align-items: center; z-index: 10; }
        .core { width: 150px; height: 150px; border-radius: 50%; background: radial-gradient(circle, #FF4500 0%, #8a2500 40%, #000000 80%); box-shadow: 0 0 50px 10px rgba(255, 69, 0, 0.4); animation: pulse 4s ease-in-out infinite; display: flex; justify-content: center; align-items: center; position: relative; }
        .core-ring { position: absolute; width: 250px; height: 250px; border: 1px solid rgba(255, 69, 0, 0.2); border-radius: 50%; animation: rotate-ring 10s linear infinite; border-top: 1px solid #FF4500; }
        .core-ring-2 { position: absolute; width: 350px; height: 350px; border: 1px dashed rgba(255, 69, 0, 0.1); border-radius: 50%; animation: rotate-ring 15s linear infinite reverse; }
        @keyframes pulse { 0% { transform: scale(0.95); box-shadow: 0 0 40px 5px rgba(255, 69, 0, 0.3); } 50% { transform: scale(1.05); box-shadow: 0 0 80px 20px rgba(255, 69, 0, 0.6); } 100% { transform: scale(0.95); box-shadow: 0 0 40px 5px rgba(255, 69, 0, 0.3); } }
        @keyframes rotate-ring { 100% { transform: rotate(360deg); } }
        .ui-layer { position: relative; z-index: 20; height: 100vh; display: flex; flex-direction: column; justify-content: space-between; padding: 2rem; pointer-events: none; }
        .text-glow { text-shadow: 0 0 10px rgba(255, 69, 0, 0.8); }
        .typewriter { overflow: hidden; border-right: .15em solid #FF4500; white-space: nowrap; margin: 0 auto; animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite; }
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: #FF4500; } }
        .blink { animation: blink-caret .75s step-end infinite; }
      `}} />

      <div className="fixed inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#3f3f46 1px, transparent 1px), linear-gradient(90deg, #3f3f46 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

      <div className="core-container">
        <div className="core-ring-2"></div>
        <div className="core-ring"></div>
        <div className="core">
          <div className="w-10 h-10 bg-white rounded-full opacity-20 blur-sm"></div>
        </div>
      </div>

      <div className="ui-layer">
        <header className="flex justify-between items-start">
          <div className="border-l-2 border-[#FF4500] pl-4">
            <h1 className="text-2xl md:text-4xl font-bold tracking-widest text-[#FF4500] text-glow">SLAB</h1>
            <p className="text-xs tracking-widest uppercase mt-1 text-zinc-500">The Lore Archive // Amber Stratum</p>
          </div>
          <div className="text-right text-xs text-zinc-600">
            <p>STATUS: SEALED</p>
            <p>BIOMETRIC: REQUIRED</p>
          </div>
        </header>

        <main className="text-center mt-[30vh]">
          <p className="text-zinc-400 text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-70">Matriarch Core Resonance</p>
          <div className="inline-block bg-black/50 px-4 py-2 border border-[#FF4500]/30 backdrop-blur-sm rounded">
            <p className="typewriter text-[#FF4500] text-sm md:text-lg">EXTRACTING BIOLOGICAL ASSETS...</p>
          </div>
        </main>

        <footer className="flex justify-between items-end border-b border-zinc-800 pb-2">
          <div className="text-xs text-zinc-500 uppercase">
            <p>Encryption: SSS_LOG_3.2.0</p>
          </div>
          <div className="text-xs text-[#FF4500] uppercase blink">
            <p>Awaiting Access Key</p>
          </div>
        </footer>
      </div>
    </div>
  )
}