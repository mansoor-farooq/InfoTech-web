'use client';
import { useEffect, useState } from 'react';

export default function PageTransition() {
  const [show, setShow] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimate(true), 100);
    const timer2 = setTimeout(() => setShow(false), 2000); // wait for 1s transition + 400ms delay + buffer
    return () => { 
      clearTimeout(timer1); 
      clearTimeout(timer2); 
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex-1 bg-slate-950 h-full w-full origin-top"
          style={{
            transform: animate ? 'scaleY(0)' : 'scaleY(1)',
            transition: 'transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)',
            transitionDelay: `${i * 120}ms`,
          }}
        />
      ))}
    </div>
  );
}
