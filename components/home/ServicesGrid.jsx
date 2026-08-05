import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_FULL } from '@/lib/data';
import { getServiceIcon } from '@/lib/icons';
import AnimatedReveal from '@/components/AnimatedReveal';
import ThreeDCard from '@/components/ThreeDCard';

export default function ServicesGrid() {
  const services = Object.entries(SERVICES_FULL).map(([slug, data]) => ({ slug, ...data }));

  return (
    <section className="section bg-slate-50 relative overflow-hidden py-16 sm:py-24">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-xl relative z-10 px-4 sm:px-6">
        
        {/* Header */}
        <AnimatedReveal animation="fade-up">
          <div className="max-w-3xl mb-12 sm:mb-16 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold uppercase tracking-widest text-blue-700 mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Enterprise Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-5 sm:mb-6 leading-[1.15]">
              Digital Solutions for <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                Business Growth
              </span>
            </h2>
            <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed">
              We deliver end-to-end software engineering services, from core ERP systems to advanced AI automation and high-scale mobile platforms.
            </p>
          </div>
        </AnimatedReveal>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const imgPath = service.cardImage || service.heroImage || '/images/dashboard.jpg';

            return (
              <AnimatedReveal key={service.slug} animation="fade-up" delay={(index % 3) * 100}>
                <ThreeDCard depth={15}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="clean-card group flex flex-col h-full bg-white p-4.5 sm:p-5 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-blue-500/30 transition-all duration-500 overflow-hidden active:scale-[0.99]"
                  >
                    {/* Realistic Image Container */}
                    <div className="w-full h-48 sm:h-52 relative rounded-2xl flex items-center justify-center p-2">
                      <Image 
                        src={imgPath}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-lg"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 backdrop-blur-md bg-slate-950/70 border border-white/20 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold text-white tracking-wide shadow-sm">
                        {service.heroStat1?.label || 'Enterprise'}
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="pt-4 sm:pt-5 flex flex-col flex-grow">
                      {/* Service Icon & Title Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                          style={{ 
                            backgroundColor: service.accentLight || '#eff6ff', 
                            color: service.accent || '#2563eb',
                            borderColor: service.accentBorder || '#bfdbfe'
                          }}
                        >
                          {getServiceIcon(service.slug, "w-5 h-5")}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-5 flex-grow line-clamp-3">
                        {service.description}
                      </p>
                      
                      {/* Footer CTA */}
                      <div className="flex items-center justify-between mt-auto pt-3.5 border-t border-slate-100">
                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-blue-600 transition-colors">
                          Explore Service
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 text-slate-500 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ThreeDCard>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
