import React from 'react';

export default function Header() {
  return (
    <header style={{ borderBottom: '4px solid #1f1f23', paddingBottom: '20px', marginBottom: '30px' }}>
      <div style={{ background: '#FF4500', color: '#000', display: 'inline-block', padding: '2px 6px', fontSize: '9px', fontWeight: 900, marginBottom: '8px' }}>
        v4.0.0_STABLE
      </div>
      <h1 style={{ fontSize: 'clamp(32px, 8vw, 64px)', fontWeight: 800, color: '#fff', margin: 0, textTransform: 'uppercase', letterSpacing: '-0.05em', lineHeight: 0.85 }}>
        SILICON<br/>STENCIL<br/>STUDIOS
      </h1>
      <div style={{ fontSize: 'clamp(10px, 2vw, 13px)', letterSpacing: '0.3em', color: '#52525b', fontWeight: 700, textTransform: 'uppercase', marginTop: '15px', borderLeft: '4px solid #FF4500', paddingLeft: '12px' }}>
        Monolith Infrastructure
      </div>
    </header>
  );
}