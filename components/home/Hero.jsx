'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Activity, Play, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeDCard from '@/components/ThreeDCard';
import ScrambleText from '@/components/ScrambleText';
import CinematicWrapper from '@/components/three/CinematicWrapper';
import AnimatedReveal from '@/components/AnimatedReveal';

export default function Hero({ config }) {
  if (!config) return null;

  const videos = [
    { id: 1, title: 'Enterprise Overview', url: 'https://www.youtube.com/embed/jX4dLxiso6A' },
    { id: 2, title: 'Platform Architecture', url: 'https://www.youtube.com/embed/NPpeX_Suhpg' },
    { id: 3, title: 'Real-Time Performance', url: 'https://www.youtube.com/embed/J41q6Zljjn8' },
  ];

  const [activeVideo, setActiveVideo] = useState(videos[0].url);

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

        {/* Dashboard Mockup */}
        <AnimatedReveal delay={500} animation="fade-up">
          <div className="max-w-5xl mx-auto relative z-10 pb-20">
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
                  <div className="relative bg-slate-900/40 flex flex-col">
                    {/* Inline Video Player */}
                    <div className="w-full aspect-video relative bg-black">
                      <iframe 
                        src={activeVideo} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                      />
                    </div>
                    {/* Video Triggers */}
                    <div className="p-4 grid grid-cols-3 gap-4 w-full bg-slate-950/50 border-t border-slate-800/60">
                      {videos.map((video) => {
                        const isActive = activeVideo?.includes(video.url);
                        return (
                        <button 
                          key={video.id}
                          onClick={() => setActiveVideo(video.url + '?autoplay=1')}
                          className={`relative h-20 border rounded-xl p-3 flex flex-col justify-between items-start transition-all overflow-hidden cursor-pointer text-left ${isActive ? 'bg-blue-900/30 border-blue-500/50' : 'bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50'}`}
                        >
                          <div className={`absolute inset-0 bg-blue-500/10 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors z-10 ${isActive ? 'bg-blue-500' : 'bg-slate-700 hover:bg-blue-600'}`}>
                            <Play className="w-3 h-3 text-white ml-0.5" />
                          </div>
                          <div className="z-10 flex flex-col justify-center">
                            <span className={`text-xs sm:text-sm font-semibold transition-colors truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                              {video.title}
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium">
                              Watch Video
                            </span>
                          </div>
                        </button>
                      )})}
                    </div>
                  </div>
                </div>


          </div>
        </AnimatedReveal>

      </div>


    </section>
  );
}
