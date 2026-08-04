'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Layers, PhoneCall, Mail, Phone, Home, Briefcase, Users, Info } from 'lucide-react';
import { getServiceIcon, getProductIcon } from '@/lib/icons';

export default function Navbar({ services = [], products = [] }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock background scrolling completely when mobile drawer is active
  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`site-header fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'scrolled bg-[#070913]/95 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-blue-950/40'
            : 'bg-[#070913]/90 backdrop-blur-md border-b border-slate-800/50 py-4'
        }`}
      >
        {/* Top Gradient Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-90" />

        <div className="container-xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative h-10 w-44 sm:w-48 flex-shrink-0">
              <Image
                src="/images/Website-Logo.png"
                alt="InfoTech Solutions"
                fill
                className="object-contain object-left filter brightness-125"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-[15px] font-bold text-slate-100 hover:text-cyan-400 transition-colors">
                Home
              </Link>
              
              <div className="relative group">
                <Link href="/services" className="flex items-center gap-1 text-[15px] font-bold text-slate-100 hover:text-cyan-400 transition-colors">
                  Services
                  <ChevronDown className="w-4 h-4 text-cyan-400 group-hover:rotate-180 transition-transform duration-200" />
                </Link>

                {/* Services Dropdown Menu */}
                <div className="absolute top-full -left-20 pt-6 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
                        >
                          <div 
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                            style={{ backgroundColor: service.accentLight || '#eff6ff', color: service.accent || '#2563eb' }}
                          >
                            {getServiceIcon(service.slug, "w-5 h-5 group-hover/item:scale-110 transition-transform")}
                          </div>
                          <div>
                            <div className="text-[15px] font-bold text-gray-900 group-hover/item:text-blue-600 transition-colors mb-1">
                              {service.title}
                            </div>
                            <p className="text-xs text-gray-500 font-medium line-clamp-2 leading-relaxed">
                              {service.subtitle || service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link href="/products" className="flex items-center gap-1 text-[15px] font-bold text-slate-100 hover:text-cyan-400 transition-colors">
                  Products
                  <ChevronDown className="w-4 h-4 text-cyan-400 group-hover:rotate-180 transition-transform duration-200" />
                </Link>

                {/* Products Dropdown Menu */}
                <div className="absolute top-full -left-[300px] pt-6 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden p-4">
                    
                    <div className="mb-4 pb-4 border-b border-gray-100">
                      <Link href="/products/cartivo" className="flex items-center justify-between p-4.5 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-slate-50 border border-blue-100 hover:border-blue-300 rounded-2xl transition-all duration-300 group/featured shadow-xs">
                        <div className="flex items-center gap-4">
                          <div className="relative h-10 w-36 flex-shrink-0 flex items-center">
                            <Image src="/images/cartivologo.jpeg" alt="Cartivo Enterprise" fill className="object-contain object-left rounded-lg" />
                          </div>
                          <div>
                            <div className="text-base font-extrabold text-slate-900 group-hover/featured:text-blue-600 transition-colors mb-0.5 flex items-center gap-2">
                              <span>Cartivo Enterprise</span>
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-600 text-white">Flagship</span>
                            </div>
                            <p className="text-xs text-slate-500 font-medium">Multi-channel Enterprise E-Commerce Platform</p>
                          </div>
                        </div>
                        <div className="px-4 py-2 bg-blue-600 group-hover/featured:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all group-hover/featured:translate-x-1">
                          View Platform &rarr;
                        </div>
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {products.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
                        >
                          <div 
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                            style={{ backgroundColor: product.accentLight || '#ecfdf5', color: product.accent || '#10b981' }}
                          >
                            {getProductIcon(product.slug, "w-5 h-5 group-hover/item:scale-110 transition-transform")}
                          </div>
                          <div>
                            <div className="text-[15px] font-bold text-gray-900 group-hover/item:text-blue-600 transition-colors mb-1">
                              {product.title}
                            </div>
                            <p className="text-xs text-gray-500 font-medium line-clamp-2 leading-relaxed">
                              {product.subtitle || product.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/case-studies" className="text-[15px] font-bold text-slate-100 hover:text-cyan-400 transition-colors">
                Case Studies
              </Link>
              <Link href="/careers" className="text-[15px] font-bold text-slate-100 hover:text-cyan-400 transition-colors">
                Careers
              </Link>
              <Link href="/about" className="text-[15px] font-bold text-slate-100 hover:text-cyan-400 transition-colors">
                About Us
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-6 py-2.5 rounded-full text-[15px] font-extrabold shadow-lg shadow-blue-500/25 border border-cyan-400/30 transition-all duration-300 hover:scale-105">
                Let's Talk
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-white hover:border-cyan-400/50 transition-all shadow-lg active:scale-95 flex items-center justify-center"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6 text-cyan-400" />
            </button>
          </div>
        </div>
      </header>

      {/* FULLSCREEN ULTRA-PREMIUM MOBILE MENU OVERLAY (Z-INDEX 100) */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-[#070913] backdrop-blur-3xl overflow-y-auto flex flex-col justify-between p-6 transition-all duration-300">
          
          {/* Header Bar inside Fullscreen Drawer */}
          <div>
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/80">
              <Link href="/" onClick={() => setMobileOpen(false)} className="relative h-10 w-44 flex-shrink-0">
                <Image
                  src="/images/Website-Logo.png"
                  alt="InfoTech Solutions"
                  fill
                  className="object-contain object-left filter brightness-125"
                  priority
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-cyan-400 flex items-center justify-center shadow-lg active:scale-90 transition-transform"
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Featured Cartivo Banner Card */}
            <Link 
              href="/products/cartivo"
              onClick={() => setMobileOpen(false)}
              className="block p-4 mb-6 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 border border-blue-500/40 shadow-2xl relative overflow-hidden group active:scale-[0.98] transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-blue-400/40 shadow-sm">
                    <Image src="/images/cartivologo.jpeg" alt="Cartivo" fill className="object-cover" />
                  </div>
                  <span className="text-base font-extrabold text-white">Cartivo Platform</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-600 text-white shadow-xs">
                  Flagship
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed mb-3">
                Multi-channel Enterprise E-Commerce Platform
              </p>
              <div className="text-xs font-bold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Explore Platform <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Mobile Navigation Categories */}
            <div className="space-y-3">
              <Link 
                href="/" 
                onClick={() => setMobileOpen(false)} 
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-base font-bold text-slate-100 hover:border-blue-500/40 active:scale-[0.99] transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Home className="w-4 h-4" />
                </div>
                Home
              </Link>

              {/* Services Mobile Accordion */}
              <div className="rounded-2xl border border-slate-800/80 overflow-hidden bg-slate-900/60">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between p-3.5 text-base font-bold text-slate-100 text-left cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    Services
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="p-3 space-y-1.5 bg-slate-950/80 border-t border-slate-800/80 max-h-72 overflow-y-auto">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-900 text-slate-200 text-xs font-semibold transition-colors"
                      >
                        <div 
                          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 border shadow-xs"
                          style={{ backgroundColor: service.accentLight || '#eff6ff', color: service.accent || '#2563eb', borderColor: service.accentBorder || '#bfdbfe' }}
                        >
                          {getServiceIcon(service.slug, "w-4 h-4")}
                        </div>
                        <span className="truncate">{service.title}</span>
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                      className="block text-center p-2.5 text-xs font-bold text-cyan-400 hover:underline"
                    >
                      View All Services &rarr;
                    </Link>
                  </div>
                )}
              </div>

              {/* Products Mobile Accordion */}
              <div className="rounded-2xl border border-slate-800/80 overflow-hidden bg-slate-900/60">
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between p-3.5 text-base font-bold text-slate-100 text-left cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <Layers className="w-4 h-4" />
                    </div>
                    Products
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180 text-emerald-400' : ''}`} />
                </button>

                {mobileProductsOpen && (
                  <div className="p-3 space-y-1.5 bg-slate-950/80 border-t border-slate-800/80 max-h-72 overflow-y-auto">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-900 text-slate-200 text-xs font-semibold transition-colors"
                      >
                        <div 
                          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 border shadow-xs"
                          style={{ backgroundColor: product.accentLight || '#ecfdf5', color: product.accent || '#10b981', borderColor: product.accentBorder || '#a7f3d0' }}
                        >
                          {getProductIcon(product.slug, "w-4 h-4")}
                        </div>
                        <span className="truncate">{product.title}</span>
                      </Link>
                    ))}
                    <Link
                      href="/products"
                      onClick={() => setMobileOpen(false)}
                      className="block text-center p-2.5 text-xs font-bold text-emerald-400 hover:underline"
                    >
                      View All Products &rarr;
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/case-studies" 
                onClick={() => setMobileOpen(false)} 
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-base font-bold text-slate-100 hover:border-blue-500/40 active:scale-[0.99] transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </div>
                Case Studies
              </Link>

              <Link 
                href="/careers" 
                onClick={() => setMobileOpen(false)} 
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-base font-bold text-slate-100 hover:border-blue-500/40 active:scale-[0.99] transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                Careers
              </Link>

              <Link 
                href="/about" 
                onClick={() => setMobileOpen(false)} 
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-base font-bold text-slate-100 hover:border-blue-500/40 active:scale-[0.99] transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <Info className="w-4 h-4" />
                </div>
                About Us
              </Link>
            </div>
          </div>

          {/* Drawer Footer CTA */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-4">
            <Link 
              href="/contact" 
              onClick={() => setMobileOpen(false)} 
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white py-4 rounded-2xl text-lg font-black shadow-xl shadow-blue-500/30 border border-cyan-400/40 active:scale-95 transition-all"
            >
              <PhoneCall className="w-5 h-5" /> Let's Talk
            </Link>

            <div className="flex items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <a href="tel:+923702874490" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-cyan-400" /> +92 370 2874490
              </a>
              <a href="mailto:info@infotechsolutions.com.pk" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> Email Us
              </a>
            </div>

            <p className="text-[11px] text-center text-slate-500 font-medium">
              &copy; {new Date().getFullYear()} InfoTech Solutions &bull; All rights reserved.
            </p>
          </div>

        </div>
      )}
      
      <div className="h-[80px]" />
    </>
  );
}
