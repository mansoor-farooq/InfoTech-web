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
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-14 w-52 flex items-center justify-center">
                  <Image 
                    src="/images/cartivo-transparent.png" 
                    alt="Cartivo Official Logo" 
                    fill 
                    className="object-contain object-left" 
                    priority 
                  />
                </div>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  Flagship Platform
                </span>
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
                poster="/images/cartivologo.jpeg"
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

        {/* Platform Screenshots */}
        <section className="section bg-slate-50 border-b border-gray-200">
          <div className="container-xl">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 text-blue-600 bg-blue-100 border border-blue-200 uppercase tracking-widest">
                Platform Screenshots
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">See Cartivo in Action</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* App Screenshot 1 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group">
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-slate-900" />
                  {/* Using a placeholder. In real app, put image in public/images/app-merchandising.png */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-emerald-400 font-bold">Merchandiser App</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">Merchandising Management</h3>
                </div>
              </div>

              {/* App Screenshot 2 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group">
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-slate-900" />
                  {/* Using a placeholder. In real app, put image in public/images/app-sales.png */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-emerald-400 font-bold">Sales App</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">Secondary Sales Dashboard</h3>
                </div>
              </div>

              {/* App Screenshot 3 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group">
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-slate-900" />
                  {/* Using a placeholder. In real app, put image in public/images/app-booking.png */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-emerald-400 font-bold">Booking App</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">Mobile Order Booking</h3>
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
                { title: 'Rider Application', icon: <Truck />, desc: 'A dedicated delivery app that enables riders to navigate to customers, update status, collect COD payments, and upload proof of delivery.' },
                { title: 'Warehouse Management', icon: <ShieldCheck />, desc: 'Synchronizes inventory across multiple warehouses, maintains stock availability, and supports automated order fulfillment.' },
                { title: 'Dynamic Pricing & Engine', icon: <Zap />, desc: 'Pricing rules based on territory, warehouse, customer type, distributors, and business agreements.' }
              ].map((module, i) => (
                <div key={i} className="clean-card bg-white hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{module.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{module.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflows (Journey) */}
        <section className="section bg-white border-b border-gray-100">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="sticky top-32">
                <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Intelligent Order Routing & Automation</h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                  Once an order is confirmed, Cartivo automatically starts its business workflow. It identifies the delivery territory, locates the nearest warehouse, checks real-time inventory, and routes the order to the correct distributor without manual intervention.
                </p>
                
                <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-4 text-xl">Territory Based Distribution</h4>
                  <p className="text-blue-800 font-medium">Businesses can assign distributors to specific cities, regions, or territories. Orders are automatically routed according to predefined business rules. No manual assignment is required.</p>
                </div>
              </div>
              
              <div className="space-y-12">
                {/* Customer Journey */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm">1</span> Customer Journey
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Selects a delivery location.',
                      'Cartivo automatically displays products available within the service area.',
                      'Browses products, adjusts quantities, and adds to cart.',
                      'Provides shipping, billing, and can upload prescriptions during checkout.',
                      'Immediately receives order confirmation and email notification.'
                    ].map((step, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600 font-medium">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Distributor Workflow */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm">2</span> Distributor Workflow
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Receives the routed order instantly.',
                      'Inventory availability is verified and order is approved.',
                      'Assigns the order to an available rider.',
                      'Invoice is generated automatically.',
                      'Order status is continuously updated throughout fulfillment.'
                    ].map((step, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600 font-medium">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rider Workflow */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm">3</span> Rider Workflow
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Receives the delivery request instantly with customer information.',
                      'Navigation is available directly inside the application.',
                      'Collects payment if Cash on Delivery is selected.',
                      'Uploads proof of delivery and marks order as delivered.',
                      'Customer receives a delivery confirmation notification.'
                    ].map((step, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600 font-medium">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture & Integration */}
        <section className="section bg-slate-900 text-white">
          <div className="container-xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Enterprise Architecture</h2>
              <p className="text-lg text-slate-400 font-medium">Cartivo follows a modular layered architecture built for extreme scale.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mb-20">
              {[
                { name: 'Presentation Layer', desc: 'Provides responsive web and mobile user interfaces.' },
                { name: 'Business Logic Layer', desc: 'Processes workflows, validations, pricing, territory management, and automation.' },
                { name: 'Data Access Layer', desc: 'Handles database operations ensuring scalability, maintainability, and security.' },
                { name: 'Integration Layer', desc: 'Connects with ERP systems, APIs, suppliers, and payment gateways.' }
              ].map((layer, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
                  <h4 className="text-xl font-bold text-white mb-3">{layer.name}</h4>
                  <p className="text-slate-400 font-medium text-sm">{layer.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-6">Third-Party Integration</h3>
                <p className="text-slate-400 font-medium mb-6 leading-relaxed">Cartivo integrates with virtually any business system via REST APIs, CSV/Excel import, or direct database connections.</p>
                <div className="flex flex-wrap gap-3">
                  {['SAP', 'Oracle ERP', 'Microsoft Dynamics', 'ERPNext', 'Payment Gateways', 'Logistics Providers', 'CRM Platforms', 'Accounting Software'].map((sys, i) => (
                    <span key={i} className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-bold text-sm border border-slate-700">{sys}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-6">Business Workflow Automation</h3>
                <p className="text-slate-400 font-medium mb-6 leading-relaxed">Automates repetitive business operations to drastically reduce manual work and human error.</p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-slate-300 font-medium text-sm">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Order Processing</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Inventory Sync</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Distributor Assignment</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Warehouse Selection</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Rider Assignment</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Invoice Generation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision / Outro */}
        <section className="py-24 bg-blue-600 text-white text-center">
          <div className="container-xl max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">Cartivo Vision</h2>
            <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed mb-12">
              Cartivo is built to simplify complex business operations through intelligent automation, real-time synchronization, and enterprise-grade technology. It unifies customer commerce, distribution, warehouse operations, and delivery management into a single integrated platform, enabling businesses to operate faster, smarter, and more efficiently from order placement to final delivery.
            </p>
            <Link href="/contact" className="btn-secondary bg-white text-blue-600 border-none hover:bg-slate-50 text-lg py-4 px-10">
              Transform Your Supply Chain
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
