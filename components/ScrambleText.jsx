
'use client';
import { useState, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export default function ScrambleText({ text, duration = 1200, delay = 0, className = "" }) {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay || 0);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      // Use easing out so it slows down at the end
      const rawProgress = Math.min((timestamp - startTime) / duration, 1);
      const progress = 1 - Math.pow(1 - rawProgress, 3); // easeOutCubic

      const revealCount = Math.floor(text.length * progress);

      let scrambled = '';
      for (let i = revealCount; i < text.length; i++) {
        if (text[i] === ' ') {
          scrambled += ' ';
        } else {
          scrambled += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplayText(text.substring(0, revealCount) + scrambled);

      if (rawProgress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, text, duration]);

  return <span className={className}>{displayText || '\u00A0'}</span>;
}

