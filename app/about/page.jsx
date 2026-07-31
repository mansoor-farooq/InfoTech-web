import ServerNavbar from '@/components/ServerNavbar';
import Footer from '@/components/Footer';
import { COMPANY_INFO } from '@/lib/data';
import { ShieldCheck, Award, Users, Cpu, CheckCircle } from 'lucide-react';

export const metadata = {
  title: `About Us | ${COMPANY_INFO.name}`,
  description: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}. Over ${COMPANY_INFO.years} years of enterprise software excellence.`,
};

export default function AboutPage() {
  return (
    <>
      <ServerNavbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#020617] text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
          <div className="container-xl relative z-10 text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-6">
              Established {COMPANY_INFO.established}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Enterprise Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
              {COMPANY_INFO.tagline}. Delivering mission-critical software, custom ERP solutions, and AI innovation for over {COMPANY_INFO.years} years.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-slate-50">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  Who We Are
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {COMPANY_INFO.name} is a premier technology transformation partner serving enterprise clients across retail, manufacturing, logistics, and healthcare sectors.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  From robust backend architectures to intelligent BI reporting dashboards, our solutions empower organization leaders to streamline operations, cut overhead costs, and maintain regulatory compliance out of the box.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Proven track record with 12+ enterprise implementations",
                    "Deep expertise in ERP integration & FBR tax compliance",
                    "Dedicated 24/7 technical SLAs & SLA management",
                    "Full lifecycle ownership from architecture to cloud hosting"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700 font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm text-center">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-extrabold text-slate-900 mb-2">{COMPANY_INFO.years}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Years Experience</div>
                </div>

                <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm text-center">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-extrabold text-slate-900 mb-2">12+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Projects Completed</div>
                </div>

                <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm text-center">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-extrabold text-slate-900 mb-2">99.9%</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">SLA Uptime</div>
                </div>

                <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm text-center">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-extrabold text-slate-900 mb-2">12+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Active Clients</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
