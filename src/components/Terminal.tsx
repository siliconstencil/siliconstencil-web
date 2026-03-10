'use client';
import { useState } from 'react';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(['V4.0 MONOLITH INITIALIZED...', 'READY_FOR_COMMAND...']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase();
    let res = 'UNKNOWN_PROTOCOL';
    if (cmd === 'help') res = 'AVAILABLE: STATUS, ABOUT';
    if (cmd === 'status') res = 'SYSTEM: STABLE // PORT: 3000';
    setHistory([...history, '> ' + input, res]);
    setInput('');
  };

  return (
    <div className="bg-black border border-[#FF4500] p-4 font-mono text-xs h-64 overflow-y-auto">
      {history.map((line, i) => <div key={i} className="text-[#FF4500]">{line}</div>)}
      <form onSubmit={handleSubmit} className="flex mt-2">
        <span className="text-[#FF4500] mr-2">$</span>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="bg-transparent outline-none flex-1 text-white uppercase" autoFocus />
      </form>
    </div>
  );
}
