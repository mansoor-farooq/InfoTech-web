import { Quote } from 'lucide-react';

export default function Testimonials({ testimonials }) {
  const testimonialsList = testimonials || [];
  
  return (
    <section className="section bg-navy text-white overflow-hidden relative">
      <div className="absolute inset-0 dot-grid opacity-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue/10 to-transparent" />
      
      <div className="container-xl relative z-10">
        <div className="mb-16">
          <span className="eyebrow bg-white/10 border-white/20 text-white mb-6">Client Success</span>
          <h2 className="display-lg text-white">Trusted by enterprise leaders.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsList.slice(0, 4).map((t, i) => (
            <div key={t.id || i} className="card-navy p-8 md:p-10 relative group hover:-translate-y-2 transition-transform duration-500">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-white/10 transition-colors duration-500" />
              
              <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed mb-10 relative z-10">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-white"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{t.name}</h4>
                  <p className="text-sm font-medium text-white/60">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
