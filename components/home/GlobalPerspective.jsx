'use client';

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function GlobalPerspective() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;
    
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0,
      dark: 1, // Render a dark globe
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3], // Grayish base
      markerColor: [0.1, 0.8, 1], // Light blue markers
      glowColor: [0.15, 0.38, 0.92], // Blue glowing aura
      markers: [
        // Location markers [latitude, longitude]
        { location: [31.5204, 74.3587], size: 0.1 }, // Lahore
        { location: [40.7128, -74.0060], size: 0.1 }, // NY
        { location: [51.5074, -0.1278], size: 0.1 }, // London
        { location: [25.2048, 55.2708], size: 0.1 }, // Dubai
      ],
      onRender: (state) => {
        // Called on every animation frame.
        state.phi = phi;
        phi += 0.005; // Adjust rotation speed here
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <section className="py-24 bg-[#020617] text-white relative overflow-hidden">
      
      {/* Background Starry pattern or glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15)_0%,transparent_60%)] pointer-events-none" />

      <div className="container-xl relative z-10 flex flex-col items-center">
        
        <AnimatedReveal animation="fade-up" className="text-center w-full max-w-4xl mx-auto mb-10 z-20 relative">
          <div className="inline-flex items-center justify-center border border-blue-500/30 bg-blue-500/10 px-6 py-2 rounded-full text-sm font-bold text-blue-400 mb-6 backdrop-blur-md">
            Global Reach
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Design with a Global <br className="hidden md:block" />
            <span className="text-slate-400">Perspective, Innovate with Ease.</span>
          </h2>
        </AnimatedReveal>

        {/* Globe Container */}
        <AnimatedReveal animation="fade-up" delay={200} className="w-full flex justify-center relative mt-[-2rem] md:mt-[-4rem]">
          <div className="relative w-full max-w-[700px] aspect-square flex items-center justify-center pointer-events-none">
            <canvas
              ref={canvasRef}
              style={{
                width: "100%",
                height: "100%",
                aspectRatio: "1/1",
                opacity: 0.9
              }}
              className="absolute pointer-events-none"
            />
          </div>
        </AnimatedReveal>

      </div>
    </section>
  );
}
