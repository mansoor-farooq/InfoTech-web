'use client';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const CLIENTS = [
  { name: 'Youngs Foods', src: '/images/youngs food logo.png' },
  { name: 'Dairy Life', src: '/images/dairylifelogo.png' },
  { name: 'Youngs Bazar', src: '/images/newYoungs-bazar.png' },
  { name: 'Fusion', src: '/images/Fusion.png'},
];

export default function ClientLogos() {
  const shouldReduceMotion = useReducedMotion();
  
  // Create a continuous array by duplicating it enough times so the loop is seamless even on ultrawide screens
  const baseClients = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];
  const duplicatedClients = [...baseClients, ...baseClients]; // 32 items

  return (
    <section className="py-12 border-y border-gray-100 bg-white overflow-hidden relative">
      <div className="container-xl mb-8 relative z-10">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
          Trusted by Pakistan&apos;s Leading Enterprises
        </p>
      </div>

      <div className="w-full relative flex items-center overflow-hidden">
        {/* Fading Edges for better visual effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center w-max"
          animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
          transition={shouldReduceMotion ? {} : {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedClients.map((client, i) => (
            <div key={i} className="flex items-center justify-center h-16 relative w-36 flex-shrink-0 group mx-8 md:mx-12">
              {client.src ? (
                <Image 
                  src={client.src} 
                  alt={client.name}
                  width={140}
                  height={60}
                  className="object-contain max-h-16 w-auto group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300"
                />
              ) : (
                <span className="text-xl font-extrabold text-slate-300 tracking-tighter group-hover:text-blue-600 group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300">
                  {client.textLogo}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
