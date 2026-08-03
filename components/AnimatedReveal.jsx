'use client';
import { motion, useReducedMotion } from 'framer-motion';

export default function AnimatedReveal({ 
  children, 
  className = '', 
  animation = 'fade-up', // fade-up, fade, scale-up
  delay = 0, // delay in ms
  duration = 0.6 // duration in s
}) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { 
      opacity: 0, 
      y: animation === 'fade-up' ? 40 : 0,
      scale: animation === 'scale-up' ? 0.95 : 1
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  // If user prefers reduced motion, just do a simple fade without translation or scaling
  if (shouldReduceMotion) {
    variants.hidden = { opacity: 0 };
    variants.visible = { opacity: 1 };
  }

  return (
    <motion.div 
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }} // Trigger once, slightly before it comes into view
      transition={{ 
        duration, 
        delay: delay / 1000, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
