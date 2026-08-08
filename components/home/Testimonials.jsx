import { Quote, Star } from 'lucide-react';
import AnimatedReveal from '@/components/AnimatedReveal';

export default function Testimonials({ testimonials }) {
  const testimonialsList = testimonials || [];
  
  return (
    <section className="section bg-slate-950 text-white overflow-hidden relative py-24 border-t border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 via-cyan-500/5 to-transparent pointer-events-none" />
      
      <div className="container-xl relative z-10">
        <AnimatedReveal animation="fade-up">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800 mb-4 shadow-lg">
              Client Feedback
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Trusted by <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Enterprise Leaders</span>
            </h2>
          </div>
        </AnimatedReveal>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsList.slice(0, 4).map((t, i) => (
            <AnimatedReveal key={t.id || i} animation="fade-up" delay={i * 120}>
              <div className="group relative flex flex-col justify-between h-full p-8 md:p-10 rounded-[2rem] bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 shadow-2xl hover:shadow-[0_20px_50px_rgba(8,145,178,0.15)] hover:-translate-y-2 transition-all duration-500 backdrop-blur-xl overflow-hidden">
                {/* Ambient Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-800 group-hover:text-cyan-500/20 transition-colors duration-500" />
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6 text-amber-400 relative z-10">
                  {[...Array(5)].map((_, sIndex) => (
                    <Star key={sIndex} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-base md:text-lg font-medium text-slate-200 leading-relaxed mb-8 relative z-10">
                  &quot;{t.quote}&quot;
                </p>
                
                <div className="flex items-center gap-4 mt-auto relative z-10 pt-4 border-t border-slate-800/80">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-white text-base shadow-md group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: t.color || '#2563eb' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-base group-hover:text-cyan-400 transition-colors">{t.name}</h4>
                    <p className="text-xs font-semibold text-slate-400 font-mono">{t.company}</p>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
