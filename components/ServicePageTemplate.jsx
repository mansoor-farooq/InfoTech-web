import ServerNavbar from '@/components/ServerNavbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function ServicePageTemplate({ data }) {
  const slug = data.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

  return (
    <>
      <ServerNavbar />
      <main className="min-h-screen bg-slate-900 text-slate-100">
        
        {/* SaaS High-Tech Hero */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#020617] overflow-hidden border-b border-slate-800/80">
          {/* Animated Background Grid & Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />
          <div 
            className="absolute top-1/4 right-10 w-96 h-96 rounded-full blur-[140px] opacity-25 pointer-events-none animate-pulse"
            style={{ backgroundColor: data.accent || '#2563eb' }}
          />

          <div className="container-xl relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Heading & CTAs */}
              <div className="lg:col-span-7 animate-fade-up">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                  {data.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-10 max-w-2xl">
                  {data.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link 
                    href="/contact" 
                    className="btn-primary py-4 px-8 text-base bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/30 hover-lift w-full sm:w-auto text-center justify-center"
                  >
                    Start Technical Audit <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <a 
                    href="#architecture" 
                    className="btn-secondary py-4 px-8 text-base border-slate-700 text-slate-200 hover:bg-slate-800/60 w-full sm:w-auto text-center justify-center"
                  >
                    View Architecture
                  </a>
                </div>
              </div>

              {/* Right Column: Main Hero Image Placeholder with Floating Glass Stats */}
              <div className="lg:col-span-5 relative animate-scale-up">
                <div className="relative z-10 hover-lift">
                  {data.heroImage ? (
                    <div className="relative aspect-[4/3] w-full rounded-3xl flex items-center justify-center">
                      <Image src={data.heroImage} alt={data.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain drop-shadow-2xl" priority />
                    </div>
                  ) : (
                    <ImagePlaceholder 
                      label={`${data.title} Engineering Blueprint`}
                      pathHint={`/images/service-${slug}-hero.png`}
                      aspect="aspect-square md:aspect-[4/3]"
                    />
                  )}
                </div>

                {/* Floating Metric Badge */}
                <div className="absolute -bottom-6 -left-6 z-20 hidden sm:flex items-center gap-4 bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-700/80 shadow-2xl animate-float-slow">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Performance</div>
                    <div className="text-lg font-bold text-white">99.99% Uptime Guarantee</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Floating KPI Stats Bar */}
        <section className="py-12 bg-slate-950 border-b border-slate-800/80">
          <div className="container-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                data.heroStat1 || { value: '99.9%', label: 'Uptime SLA' },
                data.heroStat2 || { value: '24/7', label: 'Monitoring' },
                data.heroStat3 || { value: 'Enterprise', label: 'Security' },
                data.heroStat4 || { value: '100%', label: 'Compliance' }
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all text-center hover-lift">
                  <div className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Service Overview & Multi-Image Gallery */}
        <section id="architecture" className="section py-24 bg-white text-slate-900 border-b border-slate-200">
          <div className="container-xl">
            
            {/* Section Header */}
            <div className="max-w-3xl mb-16 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                Enterprise Engineering. Built for Scale.
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Dynamic Detailed Content (Alternating Left/Right layout) */}
            {data.detailedContent ? (
              <div className="max-w-5xl mx-auto space-y-24 mb-24">
                {data.detailedContent.map((section, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div key={index} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-up">
                      <div className={`order-1 ${isEven ? 'md:order-1' : 'md:order-2'} hover-lift`}>
                        {section.image ? (
                          <div className="relative aspect-square md:aspect-[4/3] w-full rounded-3xl flex items-center justify-center bg-gradient-to-tr from-slate-50 to-blue-50/30 overflow-hidden group border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-shadow duration-700">
                            <div className="absolute inset-0 bg-blue-400/5 blur-3xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-700" />
                            <Image src={section.image} alt={section.sectionTitle} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain drop-shadow-2xl group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 ease-out z-10 p-4 sm:p-6" />
                          </div>
                        ) : null}
                      </div>

                      <div className={`order-2 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight">{section.sectionTitle}</h2>
                        <div className="text-lg text-slate-600 leading-relaxed mb-6 whitespace-pre-wrap">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                {/* Image 2: Architecture / Overview Blueprint */}
                <div className="hover-lift animate-fade-up">
                  {(data.image2 || data.architectureImage) ? (
                    <div className="relative aspect-video w-full rounded-3xl flex items-center justify-center">
                      <Image src={data.image2 || data.architectureImage} alt={`${data.title} Architecture`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain drop-shadow-xl" />
                    </div>
                  ) : (
                    <ImagePlaceholder 
                      label={`${data.title} System Overview Blueprint (Image 2)`}
                      pathHint={`/images/services/${slug}-2-architecture.png`}
                      aspect="aspect-video"
                    />
                  )}
                </div>

                {/* Image 3: Live Management Dashboard */}
                <div className="hover-lift animate-fade-up">
                  {(data.image3 || data.dashboardImage) ? (
                    <div className="relative aspect-video w-full rounded-3xl flex items-center justify-center">
                      <Image src={data.image3 || data.dashboardImage} alt={`${data.title} Dashboard`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain drop-shadow-xl" />
                    </div>
                  ) : (
                    <ImagePlaceholder 
                      label={`${data.title} Live Management Dashboard (Image 3)`}
                      pathHint={`/images/services/${slug}-3-dashboard.png`}
                      aspect="aspect-video"
                    />
                  )}
                </div>

                {/* Image 4: Detailed Workflow / Module Screenshot */}
                <div className="hover-lift animate-fade-up lg:col-span-2">
                  {(data.image4 || data.featureImage) ? (
                    <div className="relative aspect-[21/9] w-full rounded-3xl flex items-center justify-center">
                      <Image src={data.image4 || data.featureImage} alt={`${data.title} Detailed Feature Module`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain drop-shadow-2xl" />
                    </div>
                  ) : (
                    <ImagePlaceholder 
                      label={`${data.title} Detailed Workflow Screenshot (Image 4)`}
                      pathHint={`/images/services/${slug}-4-workflow.png`}
                      aspect="aspect-video md:aspect-[21/9]"
                    />
                  )}
                </div>
              </div>
            )}

          </div>
        </section>

        {/* Core Engineering Capabilities Grid */}
        <section className="section py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
          <div className="container-xl">
            
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Core Engineering Modules
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Deep technical execution tailored for mission-critical enterprise environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.services?.map((service, i) => (
                <div 
                  key={i} 
                  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group hover-lift"
                >
                  <div>
                    <div 
                      className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center border shadow-xs transition-transform group-hover:scale-110"
                      style={{ 
                        backgroundColor: data.accentLight || '#eff6ff', 
                        color: data.accent || '#2563eb',
                        borderColor: data.accentBorder || '#bfdbfe'
                      }}
                    >
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-slate-500 font-medium leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
                    Production Verified <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4-Step Engineering Lifecycle Timeline */}
        <section className="section py-24 bg-slate-950 text-white relative border-b border-slate-800">
          <div className="container-xl">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
              <span className="text-blue-400 font-mono text-xs font-bold uppercase tracking-widest block mb-3">Lifecycle</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Delivery Methodology</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery & Audit', desc: 'Requirements analysis and legacy codebase evaluation.' },
                { step: '02', title: 'Architecture & Design', desc: 'Scalable cloud blueprints and API contract definitions.' },
                { step: '03', title: 'Agile Development', desc: 'Iterative sprints with automated CI/CD pipeline builds.' },
                { step: '04', title: '24/7 SLA Support', desc: 'Continuous monitoring, vulnerability patches, and scaling.' }
              ].map((item, index) => (
                <div key={index} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative hover-lift">
                  <div className="text-3xl font-extrabold text-blue-500 font-mono mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Video Demonstration (YouTube & MP4 Support) */}
        <section id="video-demo" className="section py-24 bg-slate-900 text-white border-b border-slate-800">
          <div className="container-xl">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
              <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-widest block mb-3">Live Video Demonstration</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                {data.videoTitle || `${data.title} Overview & Demo`}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 aspect-video flex items-center justify-center relative hover-lift">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto mb-4 animate-pulse">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{data.title} Demo Video</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Video walkthrough ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Call To Action Banner */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
           
           <div className="container-xl relative z-10 text-center max-w-3xl mx-auto animate-fade-up">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-400/30 text-blue-400 flex items-center justify-center mx-auto mb-8 shadow-xl">
                <ShieldCheck className="w-8 h-8" />
              </div>
              
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                Ready to elevate your {data.title.toLowerCase()}?
              </h2>
              
              <p className="text-xl text-slate-300 font-medium mb-10 leading-relaxed">
                Connect with our senior software architects to review your technical specs and receive a custom engineering proposal.
              </p>

              <Link 
                href="/contact" 
                className="btn-primary bg-white text-slate-950 hover:bg-slate-100 px-10 py-5 text-lg font-bold shadow-2xl hover-lift"
              >
                Schedule Technical Consultation
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
