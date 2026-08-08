import ServerNavbar from '@/components/ServerNavbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Case Studies | InfoTech Solutions',
  description: 'Discover how InfoTech Solutions helped enterprise clients achieve digital transformation and operational scale.',
};

const CASE_STUDIES = [
  {
    title: 'Nationwide Commerce & ERP Integration for Retail Giant',
    client: 'Leading FMCG Distributor',
    category: 'E-Commerce & ERP',
    impact: '300% increase in daily order throughput',
    description: 'Integrated Cartivo Enterprise with existing legacy accounting and inventory systems, establishing real-time B2B ordering across 1,200 retail partners.',
    highlights: [
      'Automated sales order sync with zero manual data entry',
      'Real-time inventory visibility across 5 warehouses',
      'Integrated FBR electronic invoicing compliance'
    ]
  },
  {
    title: 'Custom BI Reporting Dashboard for Manufacturing Operations',
    client: 'Industrial Textiles Corp',
    category: 'BI & Analytics',
    impact: '40% reduction in reporting delays',
    description: 'Designed interactive executive dashboards connecting SQL Server, Oracle, and IoT factory equipment metrics into a single real-time PowerBI portal.',
    highlights: [
      'Real-time production output monitoring',
      'Automated daily shift summary reports to executive staff',
      'Predictive maintenance alerts reducing machine downtime'
    ]
  },
  {
    title: 'Enterprise Mobile Field Force Tracking App',
    client: 'Pharma & Healthcare Logistics',
    category: 'Mobile Application',
    impact: '99.8% on-time delivery rate',
    description: 'Built a cross-platform mobile application with offline ordering capabilities, real-time GPS route tracking, and automated proof-of-delivery.',
    highlights: [
      'Offline-first architecture for remote regions',
      'Live route optimization for 150+ field reps',
      'Instant digital signature & photo capture on delivery'
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <ServerNavbar />
      <main className="min-h-screen bg-slate-50">
        <section className="pt-32 pb-20 bg-[#020617] text-white relative overflow-hidden flex flex-col items-center">
          <div className="absolute right-0 top-0 w-full md:w-2/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
          <div className="container-xl relative z-10 text-center max-w-full md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0 w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 break-words w-full min-w-0">
              Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Studies</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-medium leading-relaxed w-full min-w-0">
              Real enterprise challenges solved with scalable software engineering.
            </p>
          </div>
        </section>

        <section className="py-20 flex flex-col items-center w-full min-w-0">
          <div className="container-xl px-4 sm:px-6 lg:px-8 min-w-0 w-full">
            <div className="space-y-12 max-w-full md:max-w-5xl mx-auto min-w-0 w-full">
              {CASE_STUDIES.map((study, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center min-w-0 w-full max-w-full">
                  <div className="lg:col-span-2 min-w-0 w-full">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-extrabold uppercase tracking-wider">
                        {study.category}
                      </span>
                      <span className="text-xs font-bold text-slate-400">Client: {study.client}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-snug break-words">
                      {study.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6">
                      {study.description}
                    </p>

                    <div className="space-y-2">
                      {study.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm font-semibold text-slate-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full">
                    <div>
                      <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Key Result</div>
                      <div className="text-2xl md:text-3xl font-extrabold leading-tight break-words">{study.impact}</div>
                    </div>
                    
                    <button className="mt-8 inline-flex items-center text-sm font-bold text-blue-400 hover:text-blue-300">
                      Read Full Story <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
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
