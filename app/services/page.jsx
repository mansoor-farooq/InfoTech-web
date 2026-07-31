import ServerNavbar from '@/components/ServerNavbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, LayoutGrid } from 'lucide-react';
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
        <section className="pt-32 pb-20 bg-[#020617] text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
          <div className="container-xl relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
              Enterprise-grade services designed to digitize, scale, and transform your business operations.
            </p>
          </div>
        </section>
        <section className="section pb-24 relative -mt-8">
          <div className="container-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-[4/3] bg-slate-50 border-b border-slate-100 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                    <div 
                      className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-3 border border-slate-200"
                      style={{ color: service.accent }}
                    >
                      {getServiceIcon(service.slug, "w-8 h-8")}
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-600 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-xs">
                      Path: /images/service-{service.slug}.png
                    </span>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed mb-6 flex-grow line-clamp-3">{service.subtitle || service.description}</p>
                    <div className="mt-auto flex items-center font-bold text-sm uppercase tracking-wider transition-colors" style={{ color: service.accent }}>
                      Explore Service <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
