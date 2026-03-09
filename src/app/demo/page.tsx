import React, { CSSProperties } from 'react';

export default function DemoPage() {
  const styles: Record<string, CSSProperties> = {
    body: {
      backgroundColor: '#09090b', color: '#a1a1aa', minHeight: '100vh', width: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '20px', position: 'relative', overflow: 'hidden', margin: 0
    }
  };
  return (
    <div style={styles.body}>
      <h1 style={{ color: '#FF4500', fontSize: '3rem', fontWeight: '800' }}>LOREM IPSUM WM</h1>
      <p style={{ color: '#52525b', letterSpacing: '0.3em' }}>EXPERIMENTAL_SANDBOX_V0.1</p>
    </div>
  );
}