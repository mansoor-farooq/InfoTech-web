import Image from 'next/image';

const CLIENTS = [
  { name: 'Youngs Foods', src: '/images/youngs food logo.png' },
  { name: 'Dairy Life', src: '/images/dairylifelogo.png' },
  { name: 'Youngs Bazar', src: '/images/newYoungs-bazar.png' },
  { name: 'Enterprise Client 1', textLogo: 'ENTERPRISE' },
  { name: 'Global Tech', textLogo: 'GLOBALTECH' },
  { name: 'Systems', textLogo: 'SYSTEMS' },
];

export default function ClientLogos() {
  // Duplicate array to create a seamless infinite loop
  const infiniteClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="py-12 border-b border-gray-100 bg-white overflow-hidden">
      <div className="container-xl mb-8">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
          Trusted by Pakistan&apos;s Leading Enterprises
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track items-center">
          {infiniteClients.map((client, i) => (
            <div key={i} className="flex items-center justify-center h-12 relative w-36 flex-shrink-0">
              {client.src ? (
                <Image 
                  src={client.src} 
                  alt={client.name}
                  width={140}
                  height={50}
                  className="object-contain max-h-12 w-auto"
                />
              ) : (
                <span className="text-xl font-extrabold text-slate-300 tracking-tighter hover:text-blue-600 transition-colors">
                  {client.textLogo}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
