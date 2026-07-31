import ServerNavbar from '@/components/ServerNavbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicePageTemplate({ data }) {
  return (
    <>
      <ServerNavbar />
      <main>
        {/* Service Hero */}
        <section className="pt-32 pb-20 bg-[#020617] text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" />
          
          <div className="container-xl relative z-10">
            <div className="max-w-3xl">
              <Link href="/" className="inline-flex items-center text-sm font-bold text-white/50 hover:text-white mb-6 transition-colors">
                Home <span className="mx-2">/</span> Capabilities <span className="mx-2">/</span> <span className="text-white">{data.title}</span>
              </Link>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">{data.title}</h1>
              <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 leading-relaxed">
                {data.subtitle}
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="btn-primary py-4 px-10 text-lg">
                  Discuss Requirements <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview & Image & Stats */}
        <section className="section bg-white border-b border-gray-100">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-6" style={{ color: data.accent, backgroundColor: data.accentLight, borderColor: data.accentBorder, borderWidth: '1px' }}>
                  Overview
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Enterprise capability. Delivered.</h2>
                <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                  {data.description}
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {[data.heroStat1, data.heroStat2, data.heroStat3].filter(Boolean).map((stat, i) => (
                    <div key={i} className={`p-8 rounded-2xl bg-slate-50 border border-gray-100 ${i === 2 ? 'col-span-2' : ''}`}>
                      <div className="text-4xl font-extrabold mb-2" style={{ color: data.accent }}>{stat.value}</div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Service Image Placeholder */}
              <ImagePlaceholder 
                label={`${data.title} Feature Image`}
                pathHint={`/images/${data.title.toLowerCase().replace(/ /g, '-')}-hero.jpg`}
                aspect="aspect-square lg:aspect-auto min-h-[450px]"
              />

            </div>
          </div>
        </section>

        {/* Detailed Offerings Grid */}
        <section className="section bg-slate-50">
          <div className="container-xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Core Capabilities</h2>
              <p className="text-xl text-slate-500 font-medium">Deep engineering expertise across the entire spectrum of {data.title.toLowerCase()}.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.services?.map((service, i) => (
                <div key={i} className="clean-card bg-white group hover:border-blue-500 transition-colors">
                  <div className="mb-6">
                    <CheckCircle2 className="w-8 h-8" style={{ color: data.accent }} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{service.name}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="py-24 bg-[#020617] text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
           <div className="container-xl relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to scale your {data.title.toLowerCase()}?</h2>
              <p className="text-xl text-slate-300 font-medium mb-10">Our enterprise architects are ready to evaluate your requirements and design a solution tailored to your operational scale.</p>
              <Link href="/contact" className="btn-secondary bg-white text-slate-900 border-none hover:bg-slate-100 px-10 py-4 text-lg font-bold">
                Schedule Technical Consultation
              </Link>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
