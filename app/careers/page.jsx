import ServerNavbar from '@/components/ServerNavbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Briefcase, CheckCircle2, Zap, Rocket, Users, ShieldCheck, Award } from 'lucide-react';

export const metadata = {
  title: 'Careers | Join InfoTech Solutions',
  description: 'Explore career opportunities at InfoTech Solutions. Build mission-critical enterprise software, AI systems, and cloud infrastructure.',
};

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior Full Stack Engineer (Next.js / Node.js)',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Hybrid / Remote',
      experience: '5+ Years',
      description: 'Architect scalable web applications, microservices, and enterprise web portals using Next.js, TypeScript, and cloud services.',
    },
    {
      title: 'Mobile Application Engineer (React Native / Flutter)',
      department: 'Mobile Engineering',
      type: 'Full-time',
      location: 'Hybrid / Remote',
      experience: '4+ Years',
      description: 'Develop high-performance iOS & Android enterprise mobile applications for sales force automation and field operations.',
    },
    {
      title: 'Cloud DevOps & Infrastructure Specialist',
      department: 'DevOps & Cloud',
      type: 'Full-time',
      location: 'On-site / Hybrid',
      experience: '4+ Years',
      description: 'Manage Kubernetes clusters, Docker pipelines, AWS/GCP cloud environments, and CI/CD automated deployments.',
    },
    {
      title: 'Enterprise ERP & Supply Chain Consultant',
      department: 'Enterprise Solutions',
      type: 'Full-time',
      location: 'On-site',
      experience: '5+ Years',
      description: 'Design and deploy custom ERP solutions, warehouse management systems, and inventory sync modules.',
    },
    {
      title: 'AI & Machine Learning Solutions Engineer',
      department: 'AI & Data Science',
      type: 'Full-time',
      location: 'Hybrid',
      experience: '3+ Years',
      description: 'Build predictive AI models, automated document OCR processing engines, and natural language interfaces.',
    },
    {
      title: 'FBR E-Invoicing & Compliance Specialist',
      department: 'Tax & Compliance',
      type: 'Full-time',
      location: 'Hybrid',
      experience: '3+ Years',
      description: 'Implement real-time digital e-invoicing integrations with FBR and enterprise billing systems.',
    },
  ];

  const culturePerks = [
    {
      icon: Rocket,
      title: 'High-Impact Enterprise Projects',
      desc: 'Work on mission-critical software powering real-world supply chains, retail networks, and financial systems.',
    },
    {
      icon: Users,
      title: 'Collaborative Tech Culture',
      desc: 'Join an agile team of senior architects, designers, and engineers dedicated to code quality and engineering excellence.',
    },
    {
      icon: Zap,
      title: 'Modern Technology Stack',
      desc: 'Build with Next.js 16, React 19, TypeScript, Docker, Kubernetes, Python AI, and cloud-native serverless stacks.',
    },
    {
      icon: Award,
      title: 'Growth & Competitive Pay',
      desc: 'Enjoy competitive compensation packages, performance bonuses, continuous learning stipends, and clear career growth.',
    },
  ];

  return (
    <>
      <ServerNavbar />
      <main className="min-h-screen bg-slate-950 text-white">
        
        {/* Careers Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container-xl relative z-10 text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800 mb-6">
              Join Our Engineering Team
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
              Build the Future of <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Enterprise Software
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
              At InfoTech Solutions, we design and scale complex software systems that power industries. Explore open roles and build software that matters.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#positions" className="btn-primary py-4 px-8 text-base bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/30">
                View Open Positions <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Link href="/contact" className="btn-secondary py-4 px-8 text-base border-slate-700 text-slate-200 hover:bg-slate-800">
                Contact HR Team
              </Link>
            </div>
          </div>
        </section>

        {/* Culture & Benefits Section */}
        <section className="section py-24 bg-slate-900 border-b border-slate-800">
          <div className="container-xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                Why Work With Us?
              </h2>
              <p className="text-slate-400 text-lg font-medium">
                We foster an engineering environment focused on innovation, autonomy, and professional mastery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {culturePerks.map((perk, idx) => {
                const IconComponent = perk.icon;
                return (
                  <div key={idx} className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all hover-lift">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{perk.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{perk.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions Grid */}
        <section id="positions" className="section py-24 bg-slate-950 border-b border-slate-800">
          <div className="container-xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-400 font-mono text-xs font-bold uppercase tracking-widest block mb-3">Careers</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Current Opportunities</h2>
              <p className="text-slate-400 text-lg">
                Find a role where you can apply your skills to challenge complex engineering problems.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {openPositions.map((job, idx) => (
                <div key={idx} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between hover-lift">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600/20 text-blue-400 border border-blue-500/30">
                        {job.department}
                      </span>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                        <span>{job.type}</span> • <span>{job.location}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{job.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{job.description}</p>
                  </div>

                  <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono font-medium">Req Exp: {job.experience}</span>
                    <Link
                      href={`/contact?job=${encodeURIComponent(job.title)}`}
                      className="btn-primary py-2.5 px-5 text-sm bg-blue-600 hover:bg-blue-700 shadow-md"
                    >
                      Apply Now &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-24 bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-center">
          <div className="container-xl max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Don't See Your Role?</h2>
            <p className="text-xl text-slate-300 mb-8 font-medium">
              We are always looking for exceptional software talent. Send us your CV and portfolio.
            </p>
            <Link href="/contact" className="btn-primary py-4 px-10 text-lg bg-blue-600 hover:bg-blue-700">
              Submit General Application
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
