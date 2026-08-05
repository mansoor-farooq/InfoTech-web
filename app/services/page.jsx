import ServerNavbar from '@/components/ServerNavbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_FULL } from '@/lib/data';
import { getServiceIcon } from '@/lib/icons';

export const metadata = {
  title: 'Our Services | InfoTech Solutions',
  description: 'Explore our suite of enterprise services including Web Development, Mobile Apps, and IT Infrastructure.',
};

export default function ServicesPage() {
  const services = Object.entries(SERVICES_FULL).map(([slug, data]) => ({ slug, ...data }));

  return (
    <>
      <ServerNavbar />
      <main className="min-h-screen bg-slate-50">
        
        {/* Services Page Header */}
        <section className="pt-36 pb-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="container-xl relative z-10 text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200/60 mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Enterprise Capabilities
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Our <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
              Enterprise-grade services designed to digitize, scale, and transform your business operations with high performance.
            </p>
          </div>
        </section>

        {/* Services Grid - Reads directly from data.json */}
        <section className="section py-20 relative bg-slate-50">
          <div className="container-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const imgPath = service.cardImage || service.heroImage || '/images/dashboard.jpg';

                return (
                  <Link 
                    key={service.slug} 
                    href={`/services/${service.slug}`}
                    className="clean-card group flex flex-col h-full bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
                  >
                    {/* Inner Image Container */}
                    <div className="w-full h-52 relative rounded-2xl flex items-center justify-center p-2">
                      <Image 
                        src={imgPath}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-lg"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3.5 left-3.5 backdrop-blur-md bg-slate-950/60 border border-white/20 px-3 py-1 rounded-full text-[11px] font-semibold text-white tracking-wide shadow-sm">
                        {service.heroStat1?.label || 'Production Ready'}
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="pt-5 flex flex-col flex-grow">
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
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6 flex-grow line-clamp-3">
                        {service.subtitle || service.description}
                      </p>
                      
                      {/* Footer CTA */}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-blue-600 transition-colors">
                          Explore Service
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 text-slate-500 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
