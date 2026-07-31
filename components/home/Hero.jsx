import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero({ config }) {
  if (!config) return null;

  return (
    <section className="bg-[#020617] text-white pt-24 pb-0 relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-xl relative z-10">
        <div className="max-w-5xl mx-auto text-center mt-12 mb-16 relative z-20">
          <h1 className="text-[3.5rem] md:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-8">
            {config.heroTitle || 'Missing Title'} <br className="hidden md:block" />
            <span className="text-blue-500">{config.heroSubtitle || 'Missing Subtitle'}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium mb-12 max-w-3xl mx-auto leading-snug">
            {config.heroDescription || 'Missing Description'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={config.heroPrimaryLink || '/'} className="btn-primary text-lg px-10 py-4 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] transition-all">
              {config.heroPrimaryBtn || 'Primary Button'}
            </Link>
            <Link href={config.heroSecondaryLink || '/'} className="btn-secondary text-lg px-10 py-4">
              {config.heroSecondaryBtn || 'Secondary Button'} <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Dashboard Image Mockup */}
        <div className="max-w-5xl mx-auto relative perspective-1000 mt-20">
          {/* Fade out bottom edge */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020617] to-transparent z-20 pointer-events-none" />
          
          <div className="relative rounded-t-2xl border border-gray-800 bg-gray-900/80 shadow-2xl overflow-hidden ring-1 ring-white/10 backdrop-blur-md transform transition-all duration-700 ease-out">
            
            {/* Browser Bar */}
            <div className="h-10 border-b border-gray-800 bg-gray-950 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="flex-1"></div>
              <div className="w-64 h-6 bg-gray-900 rounded-md border border-gray-800 hidden sm:block"></div>
              <div className="flex-1"></div>
            </div>
            
            {/* Image/Video Placeholder */}
            <div className="relative aspect-[16/9] w-full bg-[#0a0f1c] flex items-center justify-center overflow-hidden">
              {config.heroVideo ? (
                <video 
                  src={config.heroVideo}
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image 
                  src={config.heroImage || "/images/dashboard.jpg"} 
                  alt="Enterprise Dashboard Preview" 
                  fill 
                  className="object-cover" 
                  priority 
                />
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
