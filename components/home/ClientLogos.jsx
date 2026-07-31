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
  return (
    <section className="py-16 border-b border-gray-100 bg-white">
      <div className="container-xl">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
          Trusted by Pakistan's Leading Enterprises
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {CLIENTS.map((client, i) => (
            <div key={i} className="flex items-center justify-center h-12 relative w-36">
              {client.src ? (
                <Image 
                  src={client.src} 
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              ) : (
                <span className="text-xl font-extrabold text-gray-300 tracking-tighter">
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
