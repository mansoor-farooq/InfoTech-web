import ServerNavbar from '@/components/ServerNavbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { CheckCircle2, LayoutDashboard, Truck, Warehouse, Smartphone, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Cartivo | Enterprise Commerce Platform',
  description: 'A complete Enterprise Commerce Platform built for modern businesses requiring scalability, automation, and seamless operations.',
};

export default function CartivoPage() {
  return (
    <>
      <ServerNavbar />
      <main className="bg-white">
        
        {/* Hero Section with Video */}
        <section className="pt-32 pb-24 bg-[#020617] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
          
          <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              {/* Premium Cartivo Brand Badge */}
              <div className="mb-8">
                <div className="relative w-80 md:w-[32rem] h-32 md:h-48">
                  <Image 
                    src="/images/cartiovo.png" 
                    alt="Cartivo Logo" 
                    fill 
                    className="object-contain object-left scale-[1.5] md:scale-[2] origin-left" 
                    priority 
                  />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Cartivo Platform
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10 leading-relaxed">
                A complete Enterprise Commerce Platform built for modern businesses that require scalability, automation, and seamless operations across the entire supply chain.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary py-4 px-8 text-lg bg-blue-600 hover:bg-blue-700">
                  Request a Demo
                </Link>
                <a href="#video-demo" className="btn-secondary py-4 px-8 text-lg border-white/20 text-white hover:bg-white/10">
                  Watch Video
                </a>
              </div>
            </div>
            
            {/* Video Player */}
            <div id="video-demo" className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10 bg-slate-900 aspect-video flex items-center justify-center group">
              <video 
                suppressHydrationWarning
                className="w-full h-full object-cover"
                controls 
                autoPlay 
                muted 
                loop
                poster="/images/Commerce-bnr.png"
              >
                <source src="/videos/cartivo-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors pointer-events-none" />
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section bg-white border-b border-gray-100">
          <div className="container-xl max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">More than a traditional e-commerce website.</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
              Cartivo connects customers, distributors, warehouses, delivery riders, and enterprise systems into one intelligent ecosystem. It is designed for retailers, wholesalers, distributors, pharmaceutical companies, manufacturers, healthcare organizations, and businesses operating across multiple locations.
            </p>
          </div>
        </section>

        {/* Platform Screenshots - Loaded with Real Product Images */}
        <section className="section bg-slate-50 border-b border-gray-200">
          <div className="container-xl">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 text-blue-600 bg-blue-100 border border-blue-200 uppercase tracking-widest">
                Platform Screenshots
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">See Cartivo in Action</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* App Screenshot 1 - Merchandising */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200/80 group transition-all duration-500">
                <div className="relative h-64 bg-slate-100 overflow-hidden p-4">
                  <Image 
                    src="/images/marchandizingapp.png"
                    alt="Merchandising Management"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-xl group-hover:text-blue-600 transition-colors">Merchandising Management</h3>
                  <p className="text-slate-600 text-sm mt-2 font-medium">Track shelf share, competitor pricing, out-of-stock items, and field compliance in real time.</p>
                </div>
              </div>

              {/* App Screenshot 2 - Secondary Sales */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200/80 group transition-all duration-500">
                <div className="relative h-64 bg-slate-100 overflow-hidden p-4">
                  <Image 
                    src="/images/saleverse secondry saleapp.png"
                    alt="Secondary Sales Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-xl group-hover:text-blue-600 transition-colors">Secondary Sales Dashboard</h3>
                  <p className="text-slate-600 text-sm mt-2 font-medium">Complete visibility into downstream distribution channels, stock movement, and retailer sell-out data.</p>
                </div>
              </div>

              {/* App Screenshot 3 - Order Booking */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200/80 group transition-all duration-500">
                <div className="relative h-64 bg-slate-100 overflow-hidden p-4">
                  <Image 
                    src="/images/orderbookingnew.png"
                    alt="Mobile Order Booking"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-xl group-hover:text-blue-600 transition-colors">Mobile Order Booking</h3>
                  <p className="text-slate-600 text-sm mt-2 font-medium">Empower field sales reps to capture orders, check live inventory, and sync offline seamlessly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Modules */}
        <section className="section bg-slate-50">
          <div className="container-xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Core Modules</h2>
              <p className="text-lg text-slate-500 font-medium">An integrated suite of applications that powers your entire operational lifecycle.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Customer Website', icon: <LayoutDashboard />, desc: 'A modern, responsive web application where customers can browse products, manage their shopping cart, upload prescriptions, and place orders securely.' },
                { title: 'Customer Mobile App', icon: <Smartphone />, desc: 'Provides the same seamless shopping experience with real-time inventory, location-based pricing, secure ordering, and order tracking on iOS and Android.' },
                { title: 'Distributor Portal', icon: <Warehouse />, desc: 'A centralized portal allowing distributors to receive orders automatically, manage inventory, assign riders, print invoices, and monitor operations.' },
                { title: 'Rider Application', icon: <Truck />, desc: 'A dedicated delivery application that enables riders to receive assigned deliveries, navigate to customer locations, update delivery status, and collect COD.' },
                { title: 'Warehouse Management', icon: <ShieldCheck />, desc: 'Synchronizes inventory across multiple warehouses, maintains stock availability, and supports automated order fulfillment.' },
                { title: 'Intelligent Order Routing', icon: <Zap />, desc: 'Identifies delivery territories, locates nearest warehouses, and routes orders to assigned distributors automatically without manual intervention.' }
              ].map((module, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{module.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{module.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
