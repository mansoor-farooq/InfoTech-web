import { CheckCircle2, Sparkles, Shield, Cpu, Zap } from 'lucide-react';
import AnimatedReveal from '@/components/AnimatedReveal';
const REASONS = [
  {
    title: 'Enterprise-Grade Architecture',
    desc: 'We build systems that handle millions of transactions securely, with clean code that your internal teams can maintain.',
  },
  {
    title: 'Business Process Expertise',
    desc: 'We don\'t just write code. We understand supply chain, accounting, and manufacturing processes deeply.',
  },
  {
    title: 'FBR & Local Compliance',
    desc: 'Our financial and ERP systems are built with native FBR integration and comply with local tax regulations out of the box.',
  },
  {
    title: 'Full Lifecycle Ownership',
    desc: 'From initial requirements gathering to deployment, cloud hosting, and 24/7 SLAs — we own the outcome.',
  },
];

export default function WhyInfoTech({ config, reasons }) {
  if (!config) return null;
  const whyReasons = reasons || REASONS;

  return (
    <section className="section bg-white overflow-hidden py-24 relative">
      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text Column */}
          <AnimatedReveal animation="slide-right">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold uppercase tracking-widest text-blue-700 mb-6 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Why Partner With Us
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-[1.1]">
                We don&apos;t just write code. <br className="hidden lg:block" />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                  We engineer enterprise systems.
                </span>
              </h2>

              <p className="text-lg md:text-xl text-slate-600 font-medium mb-12 leading-relaxed">
                {config.whyDescription}
              </p>
              
              <div className="space-y-8">
                {whyReasons.map((reason, idx) => (
                  <AnimatedReveal key={reason.id || idx} animation="fade-up" delay={idx * 100}>
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-9 h-9 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                          {reason.title}
                        </h4>
                        <p className="text-slate-600 text-sm font-medium leading-relaxed">
                          {reason.description || reason.desc}
                        </p>
                      </div>
                    </div>
                  </AnimatedReveal>
                ))}
              </div>
            </div>
          </AnimatedReveal>
          
          {/* Right Visual Column */}
          <AnimatedReveal animation="slide-left" delay={200}>
            <div className="relative">
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] opacity-15 blur-2xl pointer-events-none" />

              <div className="relative bg-slate-950 rounded-[2.5rem] border border-slate-800/80 p-8 sm:p-10 overflow-hidden shadow-2xl space-y-6">
                {/* Tech Grid Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-20 pointer-events-none" />
                
                {/* Card 01 */}
                <div className="relative z-10 bg-slate-900/90 border border-blue-500/30 shadow-2xl rounded-2xl p-6 transform hover:-translate-y-1 hover:border-blue-500/60 transition-all duration-300 backdrop-blur-xl group">
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 font-extrabold text-sm">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-extrabold text-white group-hover:text-blue-400 transition-colors">
                        High-Performance Core
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      99.99% Uptime
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    Engineered for enterprise scale, handling high-volume transactions with microservices, auto-scaling, and sub-second SLAs.
                  </p>
                </div>

                {/* Card 02 */}
                <div className="relative z-10 bg-slate-900/90 border border-purple-500/30 shadow-2xl rounded-2xl p-6 transform hover:-translate-y-1 hover:border-purple-500/60 transition-all duration-300 backdrop-blur-xl group">
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-600/20 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400 font-extrabold text-sm">
                        <Zap className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-extrabold text-white group-hover:text-purple-400 transition-colors">
                        Cartivo Commerce Engine
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      Live Sync
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    Automated inventory dispatch, distributor order booking, and real-time rider tracking connected to your financial ledger.
                  </p>
                </div>

                {/* Card 03 */}
                <div className="relative z-10 bg-slate-900/90 border border-emerald-500/30 shadow-2xl rounded-2xl p-6 transform hover:-translate-y-1 hover:border-emerald-500/60 transition-all duration-300 backdrop-blur-xl group">
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-600/20 border border-emerald-500/30 rounded-xl flex items-center justify-center text-emerald-400 font-extrabold text-sm">
                        <Shield className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                        FBR & Tax Compliance
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      FBR Certified
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    Native digital tax compliance with real-time QR code printing, automated monthly return exports, and zero manual errors.
                  </p>
                </div>

              </div>
            </div>
          </AnimatedReveal>
          
        </div>
      </div>
    </section>
  );
}
