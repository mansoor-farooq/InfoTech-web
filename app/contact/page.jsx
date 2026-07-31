import ServerNavbar from '@/components/ServerNavbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { COMPANY_INFO } from '@/lib/data';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const metadata = {
  title: `Contact Us | ${COMPANY_INFO.name}`,
  description: `Get in touch with ${COMPANY_INFO.name}. Address: ${COMPANY_INFO.address}. Phone: ${COMPANY_INFO.phone}. Email: ${COMPANY_INFO.email}`,
};

export default function ContactPage() {
  return (
    <>
      <ServerNavbar />
      <main className="min-h-screen bg-slate-50">
        {/* Header */}
        <section className="pt-32 pb-20 bg-[#020617] text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
          <div className="container-xl relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
              Have an enterprise project or custom software requirement? Our technical team is here to assist.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="container-xl">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Our Office</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-4">
                    {COMPANY_INFO.address}
                  </p>
                  <a 
                    href={COMPANY_INFO.mapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    View on Google Maps <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="lg:col-span-2 bg-white p-10 md:p-14 rounded-3xl border border-slate-200 shadow-sm">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-500 mb-8 font-medium">Fill out the form below and an enterprise specialist will get back to you within 24 hours.</p>

                <ContactForm />
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

