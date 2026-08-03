import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react';
import Image from 'next/image';
import ThreeDCard from '@/components/ThreeDCard';
import ScrambleText from '@/components/ScrambleText';
import CinematicWrapper from '@/components/three/CinematicWrapper';

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
        <div className="max-w-5xl mx-auto text-center mb-16 relative z-20 animate-fade-up">
          <h1 className="text-[3rem] sm:text-[4.5rem] lg:text-[6rem] font-extrabold tracking-tight leading-[1.05] mb-8">
            <ScrambleText text={config.heroTitle || 'Enterprise Software'} delay={600} duration={1200} /> <br className="hidden sm:block" />
            <span className="text-blue-500 block">
              <ScrambleText text={config.heroSubtitle || 'Engineering Company'} delay={800} duration={1200} />
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-slate-400 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            {config.heroDescription || 'Engineering mission-critical enterprise platforms, ERP systems, AI automation, and custom software.'}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href={config.heroPrimaryLink || '/services'} 
              className="btn-primary anim-btn text-base sm:text-lg px-10 py-4 shadow-[0_0_40px_rgba(37,99,235,0.4)]"
            >
              {config.heroPrimaryBtn || 'Explore Services'}
            </Link>
            
            <Link 
              href={config.heroSecondaryLink || '/products'} 
              className="btn-secondary anim-btn text-base sm:text-lg px-10 py-4 border-slate-800 bg-slate-900/60 hover:bg-slate-800/80"
            >
              {config.heroSecondaryBtn || 'View Products'} <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Tech Stack Badges Removed as per user request */}
        </div>

        {/* Removed Dashboard Mockup as per user feedback */}

      </div>
    </section>
  );
}
