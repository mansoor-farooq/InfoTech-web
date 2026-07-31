'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-30 transition-opacity duration-500 hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: opacity,
        transform: 'translate(-50%, -50%)',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(124,58,237,0.03) 45%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
      }}
    />
  );
}
