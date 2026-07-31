import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES_FULL } from '@/lib/data';
import { getServiceIcon } from '@/lib/icons';

export default function ServicesGrid() {
  const services = Object.entries(SERVICES_FULL).map(([slug, data]) => ({ slug, ...data }));

  return (
    <section className="section bg-slate-50">
      <div className="container-xl">
        
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Digital Solutions for Business Growth
          </h2>
          <p className="text-xl text-slate-500 font-medium">
            We deliver end-to-end software engineering services, from core ERP systems to advanced e-commerce and mobile applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            return (
              <Link 
                key={service.slug} 
                href={`/services/${service.slug}`}
                className="clean-card group flex flex-col h-full bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Service Icon Badge */}
                <div 
                  className="w-14 h-14 rounded-2xl mb-8 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm border"
                  style={{ 
                    backgroundColor: service.accentLight || '#eff6ff', 
                    color: service.accent || '#2563eb',
                    borderColor: service.accentBorder || '#bfdbfe'
                  }}
                >
                  {getServiceIcon(service.slug, "w-7 h-7")}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow line-clamp-3">
                  {service.description}
                </p>
                
                <div className="flex items-center text-sm font-bold mt-auto uppercase tracking-wider" style={{ color: service.accent || '#2563eb' }}>
                  Explore Service <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
