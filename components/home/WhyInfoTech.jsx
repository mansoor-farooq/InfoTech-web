import { CheckCircle2 } from 'lucide-react';

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
    <section className="section bg-white">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
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
              {whyReasons.map((reason) => (
                <div key={reason.id} className="flex gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{reason.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block relative h-full min-h-[600px] bg-slate-50 rounded-3xl border border-gray-100 overflow-hidden">
            {/* Minimalist Tech Visual */}
            <div className="absolute inset-0 p-12 flex flex-col justify-center">
               <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-8 w-3/4 transform -rotate-3 transition-transform hover:rotate-0">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg mb-6" />
                  <div className="h-3 bg-gray-100 rounded w-1/2 mb-4" />
                  <div className="h-3 bg-gray-100 rounded w-full mb-3" />
                  <div className="h-3 bg-gray-100 rounded w-5/6" />
               </div>
               <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-8 w-3/4 transform translate-x-32 rotate-2 transition-transform hover:rotate-0 -mt-12">
                  <div className="w-10 h-10 bg-slate-900 rounded-lg mb-6" />
                  <div className="h-3 bg-gray-100 rounded w-1/3 mb-4" />
                  <div className="h-3 bg-gray-100 rounded w-11/12 mb-3" />
                  <div className="h-3 bg-gray-100 rounded w-4/5" />
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
