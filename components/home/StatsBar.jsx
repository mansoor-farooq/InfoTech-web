export default function StatsBar({ config }) {
  if (!config || !config.stats) return null;
  const statsArray = typeof config.stats === 'string' ? JSON.parse(config.stats) : config.stats;

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {statsArray.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 tracking-tighter">
                {stat.value}<span className="text-blue-600">{stat.suffix}</span>
              </div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
