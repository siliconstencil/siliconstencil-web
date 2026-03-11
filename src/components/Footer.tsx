import React from 'react';

export default function Footer() {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', fontSize: '9px', color: '#3f3f46', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
      <span>The system protects its own bugs.</span>
      <span style={{ color: '#FF4500' }}>Encrypted by SSS</span>
    </footer>
  );
}