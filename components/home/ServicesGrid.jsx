import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { SERVICES_FULL, slugify } from '@/lib/data';

export default function ServicesGrid() {
  // Fetch services from DB
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
                className="clean-card group flex flex-col h-full"
              >
                {/* Image Placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 mb-8 flex items-center justify-center overflow-hidden relative">
                  {/* <Image src="/images/your-icon.png" alt={data.title} fill className="object-cover" /> */}
                  <span className="text-xs text-gray-400 font-bold text-center">Add<br/>Icon</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center text-sm font-bold text-blue-600 mt-auto">
                  View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
