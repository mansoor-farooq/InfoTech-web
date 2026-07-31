import { Image as ImageIcon } from 'lucide-react';

export default function ImagePlaceholder({ 
  label = "Image Placeholder", 
  pathHint = "/images/your-image.png", 
  aspect = "aspect-[16/9]",
  className = ""
}) {
  return (
    <div className={`relative ${aspect} w-full rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center group hover:border-blue-500 hover:bg-blue-50/30 transition-all ${className}`}>
      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all mb-3 border border-slate-200">
        <ImageIcon className="w-6 h-6" />
      </div>
      <span className="text-sm font-extrabold text-slate-800 tracking-wide uppercase mb-1">
        {label}
      </span>
      <span className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-mono text-blue-600 font-semibold shadow-xs">
        Path: {pathHint}
      </span>
    </div>
  );
}
