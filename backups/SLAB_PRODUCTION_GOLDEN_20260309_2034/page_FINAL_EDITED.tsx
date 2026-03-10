"use client";
import React, { useEffect, useState } from "react";

export default function GamingBook() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slab-body">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
        
        .slab-body {
          background-color: #000;
          color: #d4d4d8;
          margin: 0;
          min-height: 100vh;
          font-family: 'Share Tech Mono', monospace;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 40px;
          position: relative;
        }

        .grid-bg {
          position: fixed;
          inset: 0;
          opacity: 0.12;
          background-image: 
            linear-gradient(#3f3f46 1px, transparent 1px),
            linear-gradient(90deg, #3f3f46 1px, transparent 1px);
          background-size: 100px 100px;
          pointer-events: none;
          z-index: 0;
        }

        /* MATRIARCH CORE - VOLUMETRIC GLOW */
        .core-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;
        }

        .core {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, #FF4500 0%, #a12b00 35%, #5e1900 60%, #000 85%);
          box-shadow: 
            0 0 40px rgba(255, 69, 0, 0.4),
            0 0 80px rgba(255, 69, 0, 0.25),
            0 0 120px rgba(255, 69, 0, 0.15),
            inset 0 0 30px rgba(0, 0, 0, 0.8);
          animation: pulse 1s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(0.96); opacity: 0.85; filter: brightness(1); }
          50% { transform: scale(1.06); opacity: 1; filter: brightness(1.2); box-shadow: 0 0 100px rgba(255, 69, 0, 0.7), 0 0 160px rgba(255, 69, 0, 0.3); }
        }

        .core-ring {
          position: absolute;
          width: 300px;
          height: 300px;
          border: 1px solid rgba(255, 69, 0, 0.1);
          border-radius: 50%;
          animation: rotate 20s linear infinite;
          border-top: 2px solid rgba(255, 69, 0, 0.4);
          top: -70px;
          left: -70px;
        }

        @keyframes rotate { 100% { transform: rotate(360deg); } }

        header {
          display: flex;
          justify-content: space-between;
          border-left: 4px solid #FF4500;
          padding-left: 20px;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        h1 {
          color: #FF4500;
          font-size: 52px;
          margin: 0;
          letter-spacing: 0.45em;
          font-weight: 800;
          text-shadow: 0 0 20px rgba(255, 69, 0, 0.5);
        }

        main {
          text-align: center;
          z-index: 10;
          margin-top: 10vh;
          opacity: ${isLoaded ? 1 : 0};
          transition: opacity 0.8s ease-in;
        }

        .terminal-box {
          display: inline-block;
          background: rgba(0,0,0,0.9);
          padding: 18px 35px;
          border: 1px solid rgba(255,69,0,0.4);
          color: #FF4500;
          font-size: 19px;
          letter-spacing: 0.5em;
          backdrop-filter: blur(8px);
          box-shadow: 0 0 30px rgba(0,0,0,0.5);
        }

        footer {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #1f1f23;
          padding-bottom: 15px;
          z-index: 10;
          font-size: 11px;
          letter-spacing: 0.3em;
          color: #4b4b53;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .blink { animation: blinker 1s steps(2, start) infinite; }
        @keyframes blinker { 50% { opacity: 0; } }

        @media (min-width: 1024px) {
          header, main, footer { transform: scale(1.1); }
        }

        @media (max-width: 768px) {
          h1 { font-size: 30px; letter-spacing: 0.25em; }
          .terminal-box { font-size: 13px; padding: 12px 20px; width: 80%; }
          .core { width: 130px; height: 130px; }
          .core-ring { width: 220px; height: 220px; top: -45px; left: -45px; }
        }
      `}</style>

      <div className="grid-bg" />
      
      <div className="core-container">
        <div className="core-ring" />
        <div className="core" />
      </div>

      <header>
        <div>
          <h1>SLAB</h1>
          <p style={{ fontSize: "11px", color: "#52525b", textTransform: "uppercase", letterSpacing: "0.5em", marginTop: "8px" }}>
            Amber Stratum // Deep Lore Cache
          </p>
        </div>
        <div style={{ textAlign: "right", fontSize: "12px", color: "#52525b", letterSpacing: "0.2em" }}>
          <p>STATUS: <span style={{color: "#FF4500"}}>SEALED</span></p>
          <p>BIOMETRIC: REQUIRED</p>
        </div>
      </header>

      <main>
        <p style={{ fontSize: "14px", textTransform: "uppercase", color: "#4b4b53", letterSpacing: "0.8em", marginBottom: "30px" }}>
          Resonance Synchronization: Active
        </p>
        <div className="terminal-box">
          EXTRACTING ASSETS<span className="blink">...</span>
        </div>
      </main>

      <footer>
        <span>ENCRYPTION: SLAB_CORE_4.1.8</span>
        <span style={{ color: "#FF4500" }} className="blink">ACCESS KEY REQUIRED</span>
      </footer>
    </div>
  );
}