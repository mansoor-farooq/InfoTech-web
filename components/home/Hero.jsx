'use client';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ThreeDCard from '@/components/ThreeDCard';
import ScrambleText from '@/components/ScrambleText';
import CinematicWrapper from '@/components/three/CinematicWrapper';
import AnimatedReveal from '@/components/AnimatedReveal';

export default function Hero({ config }) {
  if (!config) return null;

  return (
    <section className="bg-transparent text-white pt-32 pb-0 relative overflow-hidden">
      {/* Cinematic 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen">
        <CinematicWrapper height="100%" />
      </div>
      <div className="absolute inset-0 bg-slate-950/60 z-0 pointer-events-none" /> {/* Dark overlay for readability */}
      
      {/* Mont-Fort Style Ambient Glowing Mesh Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none z-0" />

      <div className="container-xl relative z-10">
        
        {/* Hero Main Heading & Description */}
        <div className="max-w-5xl mx-auto text-center mb-16 relative z-20">
          <AnimatedReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-sm font-medium text-slate-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Next-Gen Enterprise Solutions
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={100}>
            <h1 className="text-[3rem] sm:text-[4.5rem] lg:text-[6rem] font-extrabold tracking-tight leading-[1.05] mb-8">
              <ScrambleText text={config.heroTitle || 'Enterprise Software'} delay={600} duration={1200} /> <br className="hidden sm:block" />
              <span className="text-blue-500 block">
                <ScrambleText text={config.heroSubtitle || 'Engineering Company'} delay={800} duration={1200} />
              </span>
            </h1>
          </AnimatedReveal>
          
          <AnimatedReveal delay={200}>
            <p className="text-lg sm:text-2xl text-slate-400 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
              {config.heroDescription || 'Engineering mission-critical enterprise platforms, ERP systems, AI automation, and custom software.'}
            </p>
          </AnimatedReveal>

          {/* Action CTAs */}
          <AnimatedReveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href={config.heroPrimaryLink || '/services'} 
                className="btn-primary anim-btn text-base sm:text-lg px-10 py-4 shadow-[0_0_40px_rgba(37,99,235,0.4)]"
              >
                {config.heroPrimaryBtn || 'Explore Services'}
              </Link>
              
              <Link 
                href={config.heroSecondaryLink || '/products'} 
                className="btn-secondary anim-btn text-base sm:text-lg px-10 py-4 border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 hover:translate-y-[-2px] transition-all"
              >
                {config.heroSecondaryBtn || 'View Products'} <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </AnimatedReveal>

          {/* Tech Stack Badges */}
          <AnimatedReveal delay={400}>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-12 text-xs font-mono text-slate-400">
              {['Next.js 16', 'React 19', 'Python AI', 'PostgreSQL', 'Cloud K8s', 'SAP Integration'].map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedReveal>
        </div>

        {/* Dashboard Mockup with Continuous Float Animation */}
        <AnimatedReveal delay={500} animation="fade-up">
          <div className="max-w-5xl mx-auto relative z-10 pb-20 perspective-[2000px]">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <ThreeDCard depth={30}>
                <div className="relative rounded-2xl overflow-hidden border border-slate-800/60 shadow-[0_0_80px_rgba(37,99,235,0.15)] bg-slate-900/50 backdrop-blur-sm">
                  {/* Fake Browser Chrome */}
                  <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800/60 flex items-center gap-2 backdrop-blur-md">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-slate-700" />
                      <div className="w-3 h-3 rounded-full bg-slate-700" />
                      <div className="w-3 h-3 rounded-full bg-slate-700" />
                    </div>
                    <div className="mx-auto bg-slate-900 border border-slate-800 rounded-md px-3 py-1 text-[10px] text-slate-400 font-mono flex items-center gap-2">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" /> secure.infotech.com
                    </div>
                  </div>
                  {/* Dashboard Content Mockup */}
                  <div className="relative aspect-video bg-slate-900/40 p-6 flex flex-col justify-between">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent" />
                    {/* Header Row */}
                    <div className="flex justify-between items-start w-full relative z-10">
                      <div className="space-y-2 w-1/3">
                        <div className="h-4 bg-slate-800 rounded w-2/3" />
                        <div className="h-2 bg-slate-800 rounded w-1/2" />
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded bg-slate-800" />
                        <div className="w-8 h-8 rounded bg-blue-600" />
                      </div>
                    </div>
                    {/* Main Stats Row */}
                    <div className="grid grid-cols-3 gap-4 w-full relative z-10">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-24 bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 flex flex-col justify-between">
                          <div className="w-6 h-6 rounded-full bg-slate-700" />
                          <div className="space-y-2">
                            <div className="h-3 bg-slate-700 rounded w-1/2" />
                            <div className="h-2 bg-slate-700/50 rounded w-1/4" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ThreeDCard>
            </motion.div>

            {/* Performance Badges with Pop-in Animation */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
              className="absolute -right-6 top-20 bg-slate-900/90 backdrop-blur-md border border-slate-700 shadow-2xl rounded-xl p-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Activity className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Performance</p>
                <p className="text-sm font-extrabold text-white">Real-time Sync</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: 'spring', stiffness: 100 }}
              className="absolute -left-6 bottom-32 bg-slate-900/90 backdrop-blur-md border border-slate-700 shadow-2xl rounded-xl p-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Speed Score</p>
                <p className="text-sm font-extrabold text-white">100 / 100</p>
              </div>
            </motion.div>
          </div>
        </AnimatedReveal>

      </div>
    </section>
  );
}
