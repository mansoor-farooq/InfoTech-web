'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedReveal({ 
  children, 
  className = '', 
  animation = 'fade-up', 
  delay = 0,
  duration = 700 
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStyle = () => {
    let initialTransform = 'translateY(40px)';
    if (animation === 'fade-down') initialTransform = 'translateY(-40px)';
    if (animation === 'scale-up') initialTransform = 'scale(0.9)';
    if (animation === 'slide-right') initialTransform = 'translateX(-40px)';
    if (animation === 'slide-left') initialTransform = 'translateX(40px)';

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0) scale(1) translateX(0)' : initialTransform,
      transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      willChange: 'opacity, transform',
    };
  };

  return (
    <div ref={ref} style={getStyle()} className={className}>
      {children}
    </div>
  );
}
