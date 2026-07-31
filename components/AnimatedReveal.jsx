'use client';

export default function AnimatedReveal({ 
  children, 
  className = '', 
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
