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

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-12 text-xs font-mono text-slate-400">
            {['Next.js 16', 'React 19', 'Python AI', 'PostgreSQL', 'Cloud K8s', 'SAP Integration'].map((tech, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 3D Interactive Cyber Glass Dashboard Mockup */}
        <div className="max-w-5xl mx-auto relative mt-12">
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent z-20 pointer-events-none" />
          
          <ThreeDCard depth={50}>
            <div className="relative rounded-t-3xl border border-slate-800 bg-slate-950/90 shadow-2xl overflow-hidden ring-1 ring-white/10 backdrop-blur-2xl transition-all duration-500">
              
              {/* Mac OS Browser Window Header Bar */}
              <div className="h-12 border-b border-slate-800/80 bg-slate-950 px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 px-4 py-1 rounded-full border border-slate-800 text-xs font-mono text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>https://enterprise.infotech.com.pk/dashboard</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono hidden sm:flex">
                  <Activity className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                  <span>12ms API</span>
                </div>
              </div>
              
              {/* Dashboard Display Area */}
              <div className="relative aspect-[16/9] w-full bg-slate-950 flex items-center justify-center overflow-hidden">
                <Image 
                  src={config.heroImage || "/images/dashboard.jpg"} 
                  alt="Enterprise Dashboard Preview" 
                  fill 
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity" 
                  priority 
                />

                {/* Overlay Glass Stat Widgets in 3D */}
                <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-4 bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-700/80 shadow-2xl animate-float">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time Performance</div>
                    <div className="text-sm font-bold text-white">100/100 Speed Score</div>
                  </div>
                </div>

              </div>
            </div>
          </ThreeDCard>
        </div>

      </div>
    </section>
  );
}
