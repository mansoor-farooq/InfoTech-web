
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { NAV_SERVICES, COMPANY_INFO, slugify } from '@/lib/data';

export default function Footer() {
  const services = NAV_SERVICES.flatMap(cat => cat.items).map(name => ({ title: name, slug: slugify(name) }));
  
  const companyInfo = {
    email: COMPANY_INFO.email,
    phone: COMPANY_INFO.phone,
    address: COMPANY_INFO.address
  };

  return (
    <footer className="bg-[#020617] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-16 mb-24 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Brand & Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="relative block h-12 mb-8 transition-opacity w-52 hover:opacity-90">
              <Image src="/images/Website-Logo.png" alt="InfoTech Solutions" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain object-left" priority />
            </Link>
            <p className="max-w-sm mb-10 font-medium leading-relaxed text-slate-400">
              We design, build, and scale enterprise software systems for organizations that demand performance, reliability, and security.
            </p>
            <div className="space-y-6">
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-4 font-medium transition-colors text-slate-300 hover:text-white">
                <Mail className="w-5 h-5 text-slate-500" /> {companyInfo.email}
              </a>
              <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-4 font-medium transition-colors text-slate-300 hover:text-white">
                <Phone className="w-5 h-5 text-slate-500" /> {companyInfo.phone}
              </a>
              <div className="flex items-center gap-4 font-medium text-slate-300">
                <MapPin className="w-5 h-5 text-slate-500" /> {companyInfo.address}
              </div>
            </div>
          </div>

          {/* Links: Capabilities */}
          <div className="lg:col-span-5 lg:pl-12">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-8">Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="flex items-center gap-2 font-semibold transition-colors text-slate-300 hover:text-blue-400 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors" />
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Links: Company & Products */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-8">Products & Company</h4>
            <div className="mb-8">
              <Link href="/products/cartivo" className="inline-flex items-center gap-3 transition-all group hover:opacity-90">
                <div className="relative w-36 h-10">
                  <Image src="/images/cartiovo.png" alt="Cartivo Platform" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain object-left scale-[3] origin-left" priority />
                </div>
                <span className="text-sm font-bold text-blue-400 group-hover:translate-x-1.5 transition-transform ml-8">
                  &rarr;
                </span>
              </Link>
            </div>
            <ul className="space-y-4">
              {['About Us', 'Case Studies', 'Careers', 'Contact'].map(link => {
                const href = link === 'Contact' ? '/contact' : `/${link.toLowerCase().replace(/ /g, '-')}`;
                return (
                  <li key={link}>
                    <Link href={href} className="font-semibold transition-colors text-slate-300 hover:text-white">
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Big CTA */}
        <div className="relative flex flex-col items-center text-center md:text-left justify-between gap-8 p-8 sm:p-10 mb-16 overflow-hidden bg-blue-600 rounded-2xl lg:p-16 md:flex-row">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-white md:text-4xl">Ready to transform your business?</h3>
            <p className="text-lg sm:text-xl font-medium text-blue-100">Let&apos;s discuss your enterprise requirements.</p>
          </div>
          <Link href="/contact" className="relative z-10 text-base sm:text-lg text-blue-600 bg-white border-none btn-secondary hover:bg-slate-50 min-h-[44px] min-w-[44px]">
            Consult Our Experts
          </Link>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 border-t border-white/10 md:flex-row">
          <p className="text-sm font-medium text-slate-500">
            &copy; {new Date().getFullYear()} InfoTech Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            <Link href="#" className="text-sm font-medium transition-colors text-slate-500 hover:text-white p-2 -m-2">Privacy Policy</Link>
            <Link href="#" className="text-sm font-medium transition-colors text-slate-500 hover:text-white p-2 -m-2">Terms of Service</Link>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium transition-colors text-slate-500 hover:text-white p-2 -m-2">
              LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

