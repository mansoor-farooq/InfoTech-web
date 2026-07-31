import { CheckCircle2 } from 'lucide-react';
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
  const whyReasons = reasons || [];

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          <AnimatedReveal animation="slide-right">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8">
                {config.whyTitle.split('. ').map((part, index, array) => (
                  <span key={index} className={index === array.length - 1 ? "text-blue-600" : ""}>
                    {part}{index !== array.length - 1 ? ". " : ""}
                    {index !== array.length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
                {config.whyDescription}
              </p>
              
              <div className="space-y-10">
                {whyReasons.map((reason, idx) => (
                  <AnimatedReveal key={reason.id || idx} animation="fade-up" delay={idx * 100}>
                    <div className="flex gap-5 group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{reason.title}</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">{reason.description}</p>
                      </div>
                    </div>
                  </AnimatedReveal>
                ))}
              </div>
            </div>
          </AnimatedReveal>
          
          <AnimatedReveal animation="slide-left" delay={200}>
            <div className="hidden lg:block relative h-full min-h-[640px] bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
              {/* High-Tech Grid & Gradient Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

              <div className="absolute inset-0 p-8 flex flex-col justify-center gap-6 z-10">
                
                {/* Card 01 - Real-Time System Engine */}
                <div className="bg-slate-900/90 border border-slate-800 shadow-2xl rounded-2xl p-6 w-11/12 transform -rotate-1 transition-all duration-300 hover:rotate-0 hover:border-blue-500/50 backdrop-blur-xl group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center text-white font-extrabold text-sm">01</div>
                      <div>
                        <h4 className="text-white font-bold text-base group-hover:text-blue-400 transition-colors">Enterprise SLA & Telemetry</h4>
                        <p className="text-xs text-slate-400 font-medium">Real-Time Core Architecture</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      99.99% Operational
                    </span>
                  </div>

                  {/* Real Metrics Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                    <div>
                      <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Latency</div>
                      <div className="text-sm font-extrabold text-blue-400">&lt; 15ms</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">FBR Sync</div>
                      <div className="text-sm font-extrabold text-emerald-400">Instant</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Deployments</div>
                      <div className="text-sm font-extrabold text-purple-400">12+ Active</div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80 text-[11px] font-mono text-slate-300 flex items-center justify-between">
                    <span className="text-slate-400">status: <span className="text-emerald-400">synced</span> | inv: <span className="text-blue-400">FBR-2026-9812</span></span>
                    <span className="text-slate-500">v5.2.0</span>
                  </div>
                </div>

                {/* Card 02 - Cartivo Supply Chain Engine */}
                <div className="bg-slate-900/90 border border-slate-800 shadow-2xl rounded-2xl p-6 w-11/12 transform translate-x-6 rotate-2 transition-all duration-300 hover:rotate-0 hover:border-purple-500/50 backdrop-blur-xl group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-xl shadow-lg shadow-purple-500/30 flex items-center justify-center text-white font-extrabold text-sm">02</div>
                      <div>
                        <h4 className="text-white font-bold text-base group-hover:text-purple-400 transition-colors">Automated Supply Chain</h4>
                        <p className="text-xs text-slate-400 font-medium">Cartivo Multi-Channel Engine</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Auto Routing
                    </span>
                  </div>

                  {/* Progress Metric */}
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-300">Order Fulfillment Accuracy</span>
                      <span className="text-purple-400">99.4%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-[99.4%]" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-400">
                    <span>Warehouse Sync: <strong className="text-white">Active</strong></span>
                    <span>Rider Dispatch: <strong className="text-emerald-400">Automated</strong></span>
                  </div>
                </div>

                {/* Floating Compliance Badge */}
                <div className="bg-slate-900/95 border border-slate-800 shadow-xl rounded-xl px-4 py-3 text-xs font-bold text-slate-300 flex items-center justify-between w-4/5 mx-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span>FBR E-Invoicing Compliant System</span>
                  </div>
                  <span className="text-blue-400 text-[11px]">ISO-27001 Ready</span>
                </div>

              </div>
            </div>
          </AnimatedReveal>
          
        </div>
      </div>
    </section>
  );
}
