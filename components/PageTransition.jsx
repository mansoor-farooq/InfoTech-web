'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PageTransition() {
  const [show, setShow] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // Hold the loading screen briefly for premium effect, then exit
    const timer1 = setTimeout(() => setAnimateOut(true), 1200);
    // Unmount after exit animation
    const timer2 = setTimeout(() => setShow(false), 2400); 
    return () => { 
      clearTimeout(timer1); 
      clearTimeout(timer2); 
    };
  }, []);

  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070913] pointer-events-none transition-all duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
      style={{
        opacity: animateOut ? 0 : 1,
        transform: animateOut ? 'translateY(-20px)' : 'translateY(0)',
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Logo */}
        <div className="relative h-12 w-56 mb-8 transform transition-transform duration-1000" style={{ transform: animateOut ? 'scale(0.95)' : 'scale(1)' }}>
           <Image
             src="/images/Website-Logo.png"
             alt="InfoTech Solutions"
             fill
             sizes="224px"
             className="object-contain object-center filter brightness-125"
             priority
           />
        </div>

        {/* Elegant Progress Line */}
        <div className="w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden relative">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full"
            style={{
              width: '100%',
              animation: 'premiumLoad 1.2s cubic-bezier(0.76,0,0.24,1) forwards'
            }}
          />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes premiumLoad {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
      `}} />
    </div>
  );
}
