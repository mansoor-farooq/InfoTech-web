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
            <div className="hidden lg:block relative h-full min-h-[620px] bg-slate-950 rounded-3xl border border-slate-800/80 overflow-hidden shadow-2xl">
              {/* High-Tech Grid Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
              <div className="absolute inset-0 p-8 flex flex-col justify-center gap-6">
                 
                 {/* Card 01 */}
                 <div className="bg-slate-900/90 border border-blue-500/30 shadow-2xl rounded-2xl p-6 w-[88%] transform -rotate-2 transition-all duration-300 hover:rotate-0 hover:border-blue-500/60 backdrop-blur-xl group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-md shadow-blue-500/30 flex items-center justify-center text-white font-extrabold text-sm">01</div>
                      <span className="text-[11px] font-extrabold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                        Enterprise Architecture
                      </span>
                    </div>
                    <h4 className="text-lg font-extrabold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      High-Performance Infrastructure
                    </h4>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">
                      Engineered for 99.99% uptime, handling high-volume transactions with secure microservice architecture and automated cloud scaling.
                    </p>
                 </div>

                 {/* Card 02 */}
                 <div className="bg-slate-900/90 border border-purple-500/30 shadow-2xl rounded-2xl p-6 w-[88%] transform translate-x-12 rotate-2 transition-all duration-300 hover:rotate-0 hover:border-purple-500/60 backdrop-blur-xl group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-md shadow-purple-500/30 flex items-center justify-center text-white font-extrabold text-sm">02</div>
                      <span className="text-[11px] font-extrabold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                        Supply Chain Sync
                      </span>
                    </div>
                    <h4 className="text-lg font-extrabold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      Cartivo Multi-Channel Integration
                    </h4>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">
                      Real-time inventory routing, distributor dispatch, and rider tracking connected directly into core financial ledgers.
                    </p>
                 </div>

                 {/* Card 03 */}
                 <div className="bg-slate-900/90 border border-emerald-500/30 shadow-2xl rounded-2xl p-6 w-[88%] transform -translate-x-2 rotate-1 transition-all duration-300 hover:rotate-0 hover:border-emerald-500/60 backdrop-blur-xl group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-md shadow-emerald-500/30 flex items-center justify-center text-white font-extrabold text-sm">03</div>
                      <span className="text-[11px] font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                        100% Tax Compliant
                      </span>
                    </div>
                    <h4 className="text-lg font-extrabold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      FBR & Local E-Invoicing
                    </h4>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">
                      Native compliance out of the box with real-time tax validation, automated annexure generation, and zero manual overhead.
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
