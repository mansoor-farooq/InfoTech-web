export default function StatsBar({ config }) {
  if (!config || !config.stats) return null;
  const statsArray = typeof config.stats === 'string' ? JSON.parse(config.stats) : config.stats;

  return (
    <section className="py-20 bg-slate-950 text-white border-y border-slate-800/80 relative overflow-hidden">
      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsArray.map((stat, i) => (
            <div 
              key={i} 
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-slate-700 transition-all duration-300 text-center hover-lift group"
            >
              <div className="text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 -webkit-background-clip-text text-transparent group-hover:scale-105 transition-transform">
                {stat.value}<span className="text-blue-500 font-extrabold">{stat.suffix}</span>
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
