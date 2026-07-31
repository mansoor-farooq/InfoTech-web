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
            <div className="hidden lg:block relative h-full min-h-[600px] bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
              {/* High-Tech Mont-Fort Visual */}
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
              <div className="absolute inset-0 p-12 flex flex-col justify-center gap-6">
                 <div className="bg-slate-800/90 border border-slate-700/80 shadow-2xl rounded-2xl p-8 w-4/5 transform -rotate-3 transition-transform hover:rotate-0 hover-lift backdrop-blur-xl">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl mb-6 shadow-lg shadow-blue-500/30 flex items-center justify-center text-white font-bold">01</div>
                    <div className="h-3 bg-slate-700 rounded w-1/2 mb-4" />
                    <div className="h-3 bg-slate-700/60 rounded w-full mb-3" />
                    <div className="h-3 bg-slate-700/60 rounded w-5/6" />
                 </div>
                 <div className="bg-slate-800/90 border border-slate-700/80 shadow-2xl rounded-2xl p-8 w-4/5 transform translate-x-20 rotate-2 transition-transform hover:rotate-0 hover-lift backdrop-blur-xl">
                    <div className="w-10 h-10 bg-purple-600 rounded-xl mb-6 shadow-lg shadow-purple-500/30 flex items-center justify-center text-white font-bold">02</div>
                    <div className="h-3 bg-slate-700 rounded w-1/3 mb-4" />
                    <div className="h-3 bg-slate-700/60 rounded w-11/12 mb-3" />
                    <div className="h-3 bg-slate-700/60 rounded w-4/5" />
                 </div>
              </div>
            </div>
          </AnimatedReveal>
          
        </div>
      </div>
    </section>
  );
}
