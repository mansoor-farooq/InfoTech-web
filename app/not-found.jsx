import Link from 'next/link';
import ServerNavbar from '@/components/ServerNavbar';
import Footer from '@/components/Footer';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <ServerNavbar />
      <main className="min-h-screen bg-slate-50 flex items-center justify-center relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[#020617]">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
          <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30">
              <AlertTriangle className="w-12 h-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)]"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link 
              href="/contact"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full text-lg font-bold transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
