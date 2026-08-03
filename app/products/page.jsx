import { PRODUCTS_FULL } from '@/lib/data';
import ServerNavbar from '@/components/ServerNavbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getProductIcon } from '@/lib/icons';

export const metadata = {
  title: 'Our Products | InfoTech Solutions',
  description: 'Explore our suite of enterprise products including Cartivo, HRMS, LMS, and E-Commerce solutions.',
};

const PRODUCT_IMAGES = {
  'cartivo': '/images/Commerce-bnr.png',
  'hrms-payroll-management-system': '/images/Hrms&payrollsysteam.png',
  'digital-e-invocia-integration': '/images/Digital e-invociamain.png',
  'e-commerce-solutions': '/images/ecommerce soluction.png',
  'merchandizing-application': '/images/marchandizingapp.png',
  'order-booking': '/images/orderbookingnew.png',
  'secondary-sales': '/images/secondrysale.png',
  'procurement-application': '/images/procurement-application.jpg.jpeg',
  'lms': '/images/Learning-Managment-System.jpg.jpeg',
  'warehouse-management-system-wms': '/images/ChatGPT Image Jul 31, 2026, 03_02_07 PM (1).png',
  'field-force-sales-automation-sfa': '/images/saleverse secondry saleapp.png',
  'enterprise-crm-system': '/images/Sales-Verse-Bnr.jpg.jpeg',
};

export default function ProductsPage() {
  const products = Object.entries(PRODUCTS_FULL).map(([slug, data]) => ({ slug, ...data }));

  return (
    <>
      <ServerNavbar />
      <main className="min-h-screen bg-slate-950 text-white">
        
        {/* Products Hero Section */}
        <section className="pt-36 pb-24 bg-[#020617] text-white relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
          <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
          
          <div className="container-xl relative z-10 text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800 mb-6 shadow-lg shadow-cyan-950/50">
              <Sparkles className="w-3.5 h-3.5" /> Flagship Software Suite
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
              Enterprise-grade applications designed to digitize, scale, and transform your business operations.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section py-24 relative bg-slate-950">
          <div className="container-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => {
                const imgPath = PRODUCT_IMAGES[product.slug] || product.heroImage || product.image2 || '/images/dashboard.jpg';

                return (
                  <Link 
                    key={product.slug} 
                    href={`/products/${product.slug}`}
                    className="group relative flex flex-col h-full bg-slate-900/90 hover:bg-slate-900 p-6 md:p-7 rounded-[2rem] border border-slate-800/80 hover:border-cyan-500/40 shadow-2xl hover:shadow-[0_20px_50px_rgba(8,145,178,0.2)] transition-all duration-500 overflow-hidden backdrop-blur-xl hover:-translate-y-2"
                  >
                    {/* Glowing Top Ambient Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Realistic Product Image Header */}
                    <div className="w-full h-52 mb-6 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 relative group-hover:scale-[1.02] transition-transform duration-500">
                      <Image 
                        src={imgPath}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    </div>

                    {/* Card Content Area */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border shadow-md"
                        style={{ 
                          backgroundColor: 'rgba(15, 23, 42, 0.8)', 
                          color: product.accent || '#38bdf8',
                          borderColor: '#1e293b'
                        }}
                      >
                        {getProductIcon(product.slug, "w-5 h-5")}
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                          {product.title}
                        </h3>
                        <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest font-bold">
                          Enterprise Platform
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-300 font-medium text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {product.subtitle || product.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/80">
                      <span className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors">
                        Explore Product
                      </span>
                      <div className="w-9 h-9 rounded-full bg-slate-800 group-hover:bg-cyan-500 text-slate-300 group-hover:text-slate-950 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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
