'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
export default function Navbar({ services = [], products = [] }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
            <Link href="/" className="relative h-10 w-48 flex-shrink-0">
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
                            style={{ backgroundColor: service.accentLight, color: service.accent }}
                          >
                            <svg className="w-5 h-5 group-hover/item:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-[15px] font-bold text-gray-900 group-hover/item:text-blue-600 transition-colors mb-1">
                              {service.title}
                            </div>
                            <p className="text-xs text-gray-500 font-medium line-clamp-2 leading-relaxed">
                              {service.subtitle}
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
                            <Image src="/images/cartivo-transparent.png" alt="Cartivo Enterprise" fill className="object-contain object-left" />
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
                            style={{ backgroundColor: product.accentLight, color: product.accent }}
                          >
                            <svg className="w-5 h-5 group-hover/item:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-[15px] font-bold text-gray-900 group-hover/item:text-blue-600 transition-colors mb-1">
                              {product.title}
                            </div>
                            <p className="text-xs text-gray-500 font-medium line-clamp-2 leading-relaxed">
                              {product.subtitle}
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
              <Link href="/about" className="text-[15px] font-bold text-slate-100 hover:text-cyan-400 transition-colors">
                About Us
              </Link>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-6 py-2.5 rounded-full text-[15px] font-extrabold shadow-lg shadow-blue-500/25 border border-cyan-400/30 transition-all duration-300 hover:scale-105">
                Let's Talk
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl px-4 py-6 max-h-[85vh] overflow-y-auto">
            <div className="space-y-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest px-3 mb-2">Services</div>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block p-3 rounded-lg bg-gray-50 text-gray-900 font-bold text-sm"
                >
                  {service.title}
                </Link>
              ))}
              <div className="border-t border-gray-100 pt-4 space-y-4">
                <Link href="/products" onClick={() => setMobileOpen(false)} className="block text-gray-900 font-bold px-3">
                  Products
                </Link>
                <Link href="/case-studies" onClick={() => setMobileOpen(false)} className="block text-gray-900 font-bold px-3">
                  Case Studies
                </Link>
                <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-gray-900 font-bold px-3">
                  About Us
                </Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-gray-900 font-bold px-3">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="h-[80px]" />
    </>
  );
}
