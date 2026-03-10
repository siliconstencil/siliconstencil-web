"use client";
import React from "react";

export default function GamingBook() {
  return (
    <div className="slab-body">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
        
        .slab-body {
          background-color: #000;
          color: #d4d4d8;
          margin: 0;
          height: 100vh;
          font-family: 'Share Tech Mono', monospace;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 40px;
          position: relative;
          box-sizing: border-box;
        }

        .grid-bg {
          position: fixed;
          inset: 0;
          opacity: 0.15;
          background-image: 
            linear-gradient(#3f3f46 1px, transparent 1px),
            linear-gradient(90deg, #3f3f46 1px, transparent 1px);
          background-size: 100px 100px;
          pointer-events: none;
          z-index: 0;
        }

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
          background: radial-gradient(circle, #FF4500 0%, #8a2500 45%, #000 75%);
          box-shadow: 0 0 60px 15px rgba(255, 69, 0, 0.4);
          animation: pulse 1s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(0.96); opacity: 0.8; }
          50% { transform: scale(1.04); opacity: 1; box-shadow: 0 0 90px 25px rgba(255, 69, 0, 0.6); }
        }

        .core-ring {
          position: absolute;
          width: 280px;
          height: 280px;
          border: 1px solid rgba(255, 69, 0, 0.2);
          border-radius: 50%;
          animation: rotate 15s linear infinite;
          border-top: 2px solid #FF4500;
          top: -60px;
          left: -60px;
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
          font-size: 48px;
          margin: 0;
          letter-spacing: 0.3em;
          font-weight: 800;
        }

        main {
          text-align: center;
          z-index: 10;
          margin-bottom: 5vh;
        }

        .terminal-box {
          display: inline-block;
          background: rgba(0,0,0,0.85);
          padding: 15px 30px;
          border: 1px solid rgba(255,69,0,0.3);
          color: #FF4500;
          font-size: 18px;
          letter-spacing: 0.4em;
        }

        footer {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #1f1f23;
          padding-bottom: 10px;
          z-index: 10;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: #3f3f46;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .blink { animation: blinker 1s steps(2, start) infinite; }
        @keyframes blinker { 50% { opacity: 0; } }

        @media (min-width: 1024px) {
          header, main, footer { transform: scale(1.1); }
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
          <p style={{ fontSize: "11px", color: "#52525b", textTransform: "uppercase", letterSpacing: "0.4em", marginTop: "5px" }}>
            Lore Archive // Amber Stratum
          </p>
        </div>
        <div style={{ textAlign: "right", fontSize: "12px", color: "#52525b" }}>
          <p>STATUS: SEALED</p>
          <p>BIOMETRIC: REQUIRED</p>
        </div>
      </header>

      <main>
        <p style={{ fontSize: "13px", textTransform: "uppercase", color: "#3f3f46", letterSpacing: "0.6em", marginBottom: "25px" }}>
          Matriarch Core Resonance
        </p>
        <div className="terminal-box">
          EXTRACTING BIOLOGICAL ASSETS<span className="blink">...</span>
        </div>
      </main>

      <footer>
        <span>ENCRYPTION: SSS_LOG_3.2.0</span>
        <span style={{ color: "#FF4500" }} className="blink">AWAITING ACCESS KEY</span>
      </footer>
    </div>
  );
}