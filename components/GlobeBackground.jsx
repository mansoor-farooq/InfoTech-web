'use client';
import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export default function GlobeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;
    
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000 * 2,
      height: 1000 * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.2],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.2, 0.2, 0.5],
      markers: [
        { location: [31.5204, 74.3587], size: 0.1 }, // Lahore
        { location: [24.8607, 67.0011], size: 0.08 }, // Karachi
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-10] w-full h-full overflow-hidden bg-slate-950 flex items-center justify-center">
      {/* Radial gradient to fade out the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#020617_80%)] pointer-events-none z-10" />
      <div className="w-[1000px] h-[1000px] max-w-[100vw] aspect-square flex-shrink-0 opacity-40">
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            contain: 'layout paint size',
            opacity: 1,
            transition: 'opacity 1s ease',
          }}
        />
      </div>
    </div>
  );
}
