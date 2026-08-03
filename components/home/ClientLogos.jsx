'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const CLIENTS = [
  { name: 'Youngs Foods', src: '/images/youngs food logo.png' },
  { name: 'Dairy Life', src: '/images/dairylifelogo.png' },
  { name: 'Youngs Bazar', src: '/images/newYoungs-bazar.png' },
  { name: 'Fusion', src: '/images/Fusion.png' },
];

// Duplicate only once for a seamless loop
const LOGOS = [...CLIENTS, ...CLIENTS];

export default function ClientLogos() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white py-16 border-b border-slate-100">
      <div className="container-xl mb-10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.35em] text-slate-400">
          Trusted by Pakistan&apos;s Leading Enterprises
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Premium fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white via-white/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white via-white/90 to-transparent" />

        <motion.div
          className="flex w-max items-center gap-24"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: ['0%', '-50%'],
                }
          }
          transition={
            shouldReduceMotion
              ? {}
              : {
                  duration: 24,
                  ease: 'linear',
                  repeat: Infinity,
                }
          }
        >
          {LOGOS.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group flex h-24 w-52 flex-shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white px-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
            >
              <Image
                src={client.src}
                alt={client.name}
                width={170}
                height={70}
                priority={index < CLIENTS.length}
                className="h-auto max-h-14 w-auto object-contain transition-all duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}