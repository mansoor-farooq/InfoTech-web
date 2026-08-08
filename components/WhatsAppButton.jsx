
'use client';

import { COMPANY_INFO } from '@/lib/data';

export default function WhatsAppButton() {
  // Format phone number for WhatsApp URL (removes spaces, +, etc.)
  const rawPhone = (COMPANY_INFO.phone || '+923702874490').replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
    'Hello InfoTech Solutions! I would like to inquire about your enterprise software services.'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 transition-transform duration-300 hover:scale-110 active:scale-95"
    >
      {/* Tooltip on Hover */}
      <span className="hidden sm:inline-block bg-slate-900/90 text-white text-xs font-bold font-mono px-3.5 py-2 rounded-xl shadow-xl border border-slate-700/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat on WhatsApp
      </span>

      {/* Floating Green WhatsApp Circle */}
      <div className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 border-2 border-white/20">
        {/* Pulse Glow Effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 pointer-events-none" />
        
        {/* WhatsApp Icon SVG */}
        <svg
          className="w-8 h-8 fill-current relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.993L2 22l5.233-1.237a9.96 9.96 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.037-5.176-2.922-7.062A9.925 9.925 0 0012.012 2zM12.01 19.981h-.003a8.31 8.31 0 01-4.24-1.164l-.304-.18-3.15.746.829-3.07-.198-.315a8.293 8.293 0 01-1.272-4.415c0-4.584 3.73-8.314 8.317-8.314 2.221 0 4.31.866 5.88 2.436a8.27 8.27 0 012.435 5.877c0 4.584-3.73 8.313-8.294 8.313zm4.56-6.225c-.25-.125-1.478-.729-1.707-.812-.229-.084-.396-.125-.562.125-.167.25-.646.812-.792.979-.146.167-.292.188-.542.063a6.837 6.837 0 01-2.01-1.238 7.55 7.55 0 01-1.39-1.73c-.146-.25-.015-.385.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438-.063-.125-.563-1.354-.771-1.854-.203-.487-.41-.421-.563-.429h-.479c-.167 0-.438.063-.667.313-.229.25-.875.854-.875 2.083 0 1.229.896 2.417 1.021 2.583.125.167 1.762 2.69 4.269 3.771.596.257 1.062.41 1.425.525.599.19 1.144.163 1.575.099.48-.071 1.478-.604 1.687-1.188.208-.583.208-1.083.146-1.188-.063-.104-.229-.167-.479-.292z" />
        </svg>
      </div>
    </a>
  );
}

