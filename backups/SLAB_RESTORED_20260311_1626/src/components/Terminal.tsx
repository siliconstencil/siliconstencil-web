"use client";

import React from 'react';
import Link from 'next/link';

export default function Terminal() {
  return (
    <section className="brutalist-box">
      <div className="corner top-left"></div>
      <div className="corner bottom-right"></div>
      
      {/* 1. SENKRONİZE KUTU */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
        <div style={{ width: '16px', height: '16px', backgroundColor: '#FF4500' }} className="blink"></div>
        <h2 style={{ color: '#fff', margin: 0, fontSize: 'clamp(18px, 4vw, 28px)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          SYSTEM_OFFLINE
        </h2>
      </div>

      <div style={{ fontSize: 'clamp(11px, 2.8vw, 15px)', fontWeight: 700, textTransform: 'uppercase', lineHeight: '1.6', color: '#52525b' }}>
        <p style={{ color: '#d4d4d8', margin: '8px 0' }}>&gt; INITIATING PROTOCOL 3.2.0...</p>
        <p style={{ margin: '8px 0' }}>&gt; REBUILDING FOUNDATION ARCHITECTURE.</p>
        <p style={{ margin: '8px 0' }}>&gt; REINFORCING CONCRETE STRUCTURES [73%].</p>
        
        <div style={{ marginTop: '35px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ color: '#FF4500' }}>&gt; JOIN TO AMBER STRATUM:</span>
          
          {/* 2. SENKRONİZE SLAB */}
          <Link href="/slab" style={{ 
            color: '#FF4500', 
            textDecoration: 'none', 
            fontWeight: 900,
            fontSize: '18px',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
          className="blink"
          onMouseOver={(e) => { 
            e.currentTarget.style.textShadow = '0 0 15px #FF4500'; 
            e.currentTarget.style.color = '#fff';
            e.currentTarget.classList.remove('blink'); 
          }}
          onMouseOut={(e) => { 
            e.currentTarget.style.textShadow = 'none'; 
            e.currentTarget.style.color = '#FF4500';
            e.currentTarget.classList.add('blink'); 
          }}
          >
            SLAB
          </Link>
        </div>

        {/* 3. SENKRONİZE CURSOR */}
        <p className="warning" style={{ color: '#FF4500', marginTop: '30px', whiteSpace: 'normal', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
          &gt; WARNING: MASSIVE DATA STREAM DETECTED. STANDBY FOR DEPLOYMENT<span className="blink">_</span>
        </p>
      </div>
    </section>
  );
}