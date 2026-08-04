'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Play } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <section className="bg-transparent text-white pt-24 sm:pt-32 pb-0 relative overflow-hidden">
      {/* Cinematic 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen">
        <CinematicWrapper height="100%" />
      </div>
      <div className="absolute inset-0 bg-slate-950/60 z-0 pointer-events-none" /> {/* Dark overlay for readability */}
      
      {/* Mont-Fort Style Ambient Glowing Mesh Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none z-0" />

      <div className="container-xl relative z-10 px-4 sm:px-6">
        
        {/* Hero Main Heading & Description */}
        <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 relative z-20">
          <AnimatedReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs sm:text-sm font-medium text-slate-300 mb-6 shadow-md backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Next-Gen Enterprise Solutions
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={100}>
            <h1 className="text-[2.25rem] sm:text-[4rem] lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.1] mb-6">
              <ScrambleText text={config.heroTitle || 'Enterprise Software'} delay={600} duration={1200} /> <br className="hidden sm:block" />
              <span className="text-blue-500 inline-block mt-1 sm:mt-0">
                <ScrambleText text={config.heroSubtitle || 'Engineering Company'} delay={800} duration={1200} />
              </span>
            </h1>
          </AnimatedReveal>
          
          <AnimatedReveal delay={200}>
            <p className="text-base sm:text-2xl text-slate-300 font-medium mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              {config.heroDescription || 'Engineering mission-critical enterprise platforms, ERP systems, AI automation, and custom software.'}
            </p>
          </AnimatedReveal>

          {/* Action CTAs - Responsive Mobile Flex */}
          <AnimatedReveal delay={300}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <Link 
                href={config.heroPrimaryLink || '/services'} 
                className="btn-primary anim-btn text-base sm:text-lg px-8 sm:px-10 py-4 shadow-[0_0_40px_rgba(37,99,235,0.4)] text-center justify-center"
              >
                {config.heroPrimaryBtn || 'Explore Services'}
              </Link>
              
              <Link 
                href={config.heroSecondaryLink || '/products'} 
                className="btn-secondary anim-btn text-base sm:text-lg px-8 sm:px-10 py-4 border-slate-800 bg-slate-900/80 hover:bg-slate-800/80 transition-all text-center justify-center flex items-center"
              >
                {config.heroSecondaryBtn || 'View Products'} <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </AnimatedReveal>

          {/* Tech Stack Badges */}
          <AnimatedReveal delay={400}>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10 sm:mt-12 text-[11px] sm:text-xs font-mono text-slate-300">
              {['Next.js 16', 'React 19', 'Python AI', 'PostgreSQL', 'Cloud K8s', 'SAP Integration'].map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 shadow-sm backdrop-blur-md">
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedReveal>
        </div>

        {/* Dashboard Video Mockup - Optimized for Mobile */}
        <AnimatedReveal delay={500} animation="fade-up">
          <div className="max-w-5xl mx-auto relative z-10 pb-16 sm:pb-20">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800/80 shadow-[0_0_80px_rgba(37,99,235,0.2)] bg-slate-900/60 backdrop-blur-md">
              {/* Fake Browser Chrome */}
              <div className="bg-slate-950/90 px-3.5 py-2.5 sm:px-4 sm:py-3 border-b border-slate-800/80 flex items-center justify-between gap-2 backdrop-blur-md">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-[9px] sm:text-[11px] text-slate-300 font-mono flex items-center gap-1.5 truncate max-w-[200px] sm:max-w-none">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="truncate">secure.infotech.com</span>
                </div>
                <div className="w-12 hidden sm:block" />
              </div>

              {/* Dashboard Content Mockup */}
              <div className="relative bg-slate-950 flex flex-col">
                {/* Inline Video Player */}
                <div className="w-full aspect-video relative bg-black">
                  <iframe 
                    src={activeVideo} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>

                {/* Video Triggers - Responsive Stack on Mobile */}
                <div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 w-full bg-slate-950/90 border-t border-slate-800/80">
                  {videos.map((video) => {
                    const isActive = activeVideo?.includes(video.url);
                    return (
                      <button 
                        key={video.id}
                        onClick={() => setActiveVideo(video.url + '?autoplay=1')}
                        className={`relative min-h-[56px] sm:h-20 border rounded-xl p-3 flex items-center sm:flex-col sm:justify-between sm:items-start gap-3 sm:gap-0 transition-all overflow-hidden cursor-pointer text-left ${
                          isActive 
                            ? 'bg-blue-950/70 border-blue-500/80 shadow-lg shadow-blue-500/10' 
                            : 'bg-slate-900/80 border-slate-800/80 hover:border-blue-500/50'
                        }`}
                      >
                        <div className={`absolute inset-0 bg-blue-500/10 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                        <div className={`w-8 h-8 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors z-10 ${isActive ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-300'}`}>
                          <Play className="w-3.5 h-3.5 sm:w-3 sm:h-3 ml-0.5" />
                        </div>
                        <div className="z-10 flex flex-col justify-center min-w-0">
                          <span className={`text-xs sm:text-sm font-bold transition-colors truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                            {video.title}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                            Watch Video &rarr;
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>

      </div>
    </section>
  );
}
