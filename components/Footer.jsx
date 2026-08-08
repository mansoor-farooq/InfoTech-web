
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { SERVICES_FULL, COMPANY_INFO } from '@/lib/data';

export default function Footer() {
  const services = Object.entries(SERVICES_FULL || {}).map(([slug, s]) => ({ title: s.title, slug }));
  
  const companyInfo = {
    email: COMPANY_INFO.email,
    phone: COMPANY_INFO.phone,
    address: COMPANY_INFO.address,
    mapsLink: COMPANY_INFO.mapsLink
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
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${companyInfo.email}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 font-medium transition-colors text-slate-300 hover:text-white">
                <Mail className="w-5 h-5 flex-shrink-0 text-slate-500" /> 
                <span>{companyInfo.email}</span>
              </a>
              <a href={`https://wa.me/${companyInfo.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 font-medium transition-colors text-slate-300 hover:text-white">
                <Phone className="w-5 h-5 flex-shrink-0 text-slate-500" /> 
                <span>{companyInfo.phone}</span>
              </a>
              <a href={companyInfo.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 font-medium transition-colors text-slate-300 hover:text-white">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-slate-500" /> 
                <span className="leading-relaxed">{companyInfo.address}</span>
              </a>
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
                const href = link === 'About Us' ? '/about' : link === 'Contact' ? '/contact' : `/${link.toLowerCase().replace(/ /g, '-')}`;
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
          <div className="absolute top-0 right-0 w-full max-w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-white md:text-4xl">Ready to transform your business?</h3>
            <p className="text-lg sm:text-xl font-medium text-blue-100">Let&apos;s discuss your enterprise requirements.</p>
          </div>
          <Link href="/contact" className="relative z-10 text-base sm:text-lg text-blue-600 bg-white border-none btn-secondary hover:bg-slate-50 min-h-[44px] min-w-[44px]">
            Consult Our Experts
          </Link>
        </div>

        {/* Bottom */}
       {/* Bottom */}
<div className="flex flex-col items-center justify-between gap-6 pt-8 border-t border-white/10 md:flex-row">
  <p className="text-sm font-medium text-slate-500 hover:text-slate-300 transition-all duration-300 hover:scale-105">
    &copy; {new Date().getFullYear()} InfoTech Solutions. All rights reserved.
  </p>
  
  <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
    {/* Facebook */}
    <a 
      href="https://www.facebook.com/profile.php?id=61588919881446" 
      target="_blank" 
      rel="noreferrer" 
      className="group relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-300 text-slate-500 hover:text-white rounded-lg hover:bg-white/5 hover:scale-105 active:scale-95"
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-sky-500/10 group-hover:to-blue-600/10 transition-all duration-500"></div>
      <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
      <span className="relative">Facebook</span>
      <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400 group-hover:w-full transition-all duration-300"></span>
    </a>

    {/* Instagram */}
    <a 
      href="https://www.instagram.com/infotech_solutions_official" 
      target="_blank" 
      rel="noreferrer" 
      className="group relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-300 text-slate-500 hover:text-white rounded-lg hover:bg-white/5 hover:scale-105 active:scale-95"
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-600/0 via-purple-600/0 to-orange-600/0 group-hover:from-pink-600/10 group-hover:via-purple-500/10 group-hover:to-orange-500/10 transition-all duration-500"></div>
      <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
      <span className="relative">Instagram</span>
      <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
    </a>

    {/* LinkedIn */}
    <a 
      href="https://www.linkedin.com/company/infotechsolutions-official/posts/?feedView=all" 
      target="_blank" 
      rel="noreferrer" 
      className="group relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-300 text-slate-500 hover:text-white rounded-lg hover:bg-white/5 hover:scale-105 active:scale-95"
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-700/0 via-sky-700/0 to-blue-700/0 group-hover:from-blue-700/10 group-hover:via-sky-600/10 group-hover:to-blue-700/10 transition-all duration-500"></div>
      <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      <span className="relative">LinkedIn</span>
      <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-sky-400 group-hover:w-full transition-all duration-300"></span>
    </a>
  </div>
</div>
      </div>
    </footer>
  );
}

