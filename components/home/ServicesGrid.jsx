import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES_FULL } from '@/lib/data';
import { getServiceIcon } from '@/lib/icons';
import ServiceCardGraphic from '@/components/ServiceCardGraphic';
import AnimatedReveal from '@/components/AnimatedReveal';
import ThreeDCard from '@/components/ThreeDCard';

export default function ServicesGrid() {
  const services = Object.entries(SERVICES_FULL).map(([slug, data]) => ({ slug, ...data }));

  return (
    <section className="section bg-slate-50 overflow-hidden">
      <div className="container-xl">
        
        <AnimatedReveal animation="fade-up">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Digital Solutions for Business Growth
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              We deliver end-to-end software engineering services, from core ERP systems to advanced e-commerce and mobile applications.
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <AnimatedReveal key={service.slug} animation="fade-up" delay={(index % 3) * 120}>
                <ThreeDCard depth={25}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="clean-card anim-card group flex flex-col h-full bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-400 overflow-hidden"
                  >
                    {/* Top Interactive Service Graphic Container */}
                    <div className="w-full h-44 mb-6 rounded-2xl overflow-hidden shadow-inner group-hover:scale-[1.03] transition-transform duration-500">
                      <ServiceCardGraphic slug={service.slug} accent={service.accent} />
                    </div>

                    {/* Service Icon & Title Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border shadow-xs transition-transform group-hover:rotate-6"
                        style={{ 
                          backgroundColor: service.accentLight || '#eff6ff', 
                          color: service.accent || '#2563eb',
                          borderColor: service.accentBorder || '#bfdbfe'
                        }}
                      >
                        {getServiceIcon(service.slug, "w-5 h-5")}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 flex-grow line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-600 group-hover:text-blue-600 transition-colors">
                        Explore Service
                      </span>
                      <div className="anim-arrow text-slate-400">
                        <ArrowRight className="w-4 h-4" />
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
