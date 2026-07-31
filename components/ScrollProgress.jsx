'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[100] pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(37,99,235,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
