import { 
  BarChart3, 
  Code, 
  Smartphone, 
  Server, 
  Wrench, 
  CloudUpload, 
  Database, 
  Sparkles, 
  Cloud, 
  FileCheck, 
  ShieldCheck, 
  Layout,
  Terminal,
  Cpu,
  TrendingUp,
  CheckCircle,
  Activity
} from 'lucide-react';

export default function ServiceCardGraphic({ slug, accent = '#2563eb' }) {
  switch (slug) {
    case 'bi-reports':
      return (
        <div className="w-full h-full bg-slate-900 p-4 rounded-2xl relative overflow-hidden flex flex-col justify-between text-white border border-slate-800 shadow-inner">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">BI Analytics</span>
            </div>
            <span className="text-[9px] bg-emerald-500/20 text-emerald-400 font-mono px-2 py-0.5 rounded-full border border-emerald-500/30">+24.8% YoY</span>
          </div>

          {/* Bar Chart Graphic */}
          <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
            {[40, 65, 30, 85, 55, 95, 75].map((val, i) => (
              <div key={i} className="flex-1 bg-slate-800 rounded-t flex flex-col justify-end overflow-hidden h-full">
                <div 
                  className="w-full rounded-t transition-all duration-500 bg-gradient-to-t from-blue-600 to-indigo-400" 
                  style={{ height: `${val}%` }} 
                />
              </div>
            ))}
          </div>

          {/* Stat Summary Row */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-[10px]">
            <div className="bg-slate-800/60 p-1.5 rounded border border-slate-700/50">
              <span className="text-slate-400 block text-[9px]">Revenue</span>
              <span className="font-bold text-white">$142.8K</span>
            </div>
            <div className="bg-slate-800/60 p-1.5 rounded border border-slate-700/50">
              <span className="text-slate-400 block text-[9px]">Active KPIs</span>
              <span className="font-bold text-emerald-400">99.4%</span>
            </div>
          </div>
        </div>
      );

    case 'web-development':
      return (
        <div className="w-full h-full bg-slate-950 p-3.5 rounded-2xl relative overflow-hidden font-mono text-[11px] text-slate-300 border border-slate-800 shadow-inner flex flex-col">
          {/* Mac OS Window Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <span className="text-[9px] text-slate-500 font-sans font-medium">App.jsx — React 19</span>
          </div>

          {/* Code Snippet */}
          <div className="space-y-1 text-[10px] leading-relaxed text-slate-400 flex-1">
            <div><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-emerald-300">'react'</span>;</div>
            <div><span className="text-blue-400">const</span> <span className="text-yellow-300">WebApp</span> = () =&#123;</div>
            <div className="pl-3"><span className="text-purple-400">return</span> (</div>
            <div className="pl-6 text-emerald-400">&lt;<span className="text-blue-300">Header</span> <span className="text-purple-300">title</span>=<span className="text-amber-300">"Next.js App"</span> /&gt;</div>
            <div className="pl-3">);</div>
            <div>&#125;;</div>
          </div>

          {/* Status Bar */}
          <div className="flex items-center justify-between text-[9px] text-slate-500 pt-1.5 border-t border-slate-800/80 font-sans">
            <span className="text-emerald-400 font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Live Ready</span>
            <span>UTF-8 • JSX</span>
          </div>
        </div>
      );

    case 'mobile-application':
      return (
        <div className="w-full h-full bg-slate-900 p-3 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-800">
          {/* Mock Smartphone Frame */}
          <div className="w-40 h-full bg-slate-950 rounded-xl border-2 border-slate-700 p-2 flex flex-col justify-between shadow-2xl relative">
            <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-1" />
            <div className="flex-1 bg-gradient-to-b from-blue-950 to-slate-900 rounded-lg p-2 flex flex-col justify-between text-white border border-blue-500/20">
              <div className="flex items-center justify-between text-[8px] text-blue-300">
                <span>9:41</span>
                <span>5G 100%</span>
              </div>
              <div className="my-auto space-y-1.5 text-center">
                <div className="w-8 h-8 rounded-full bg-blue-600/30 border border-blue-400 flex items-center justify-center mx-auto text-blue-400">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div className="text-[9px] font-bold text-white">iOS & Android</div>
                <div className="text-[8px] text-slate-400">React Native / Flutter</div>
              </div>
              <div className="h-1 w-10 bg-slate-700 rounded-full mx-auto" />
            </div>
          </div>
        </div>
      );

    case 'infrastructure-management':
      return (
        <div className="w-full h-full bg-slate-950 p-4 rounded-2xl relative overflow-hidden flex flex-col justify-between text-white border border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <Server className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">Server Rack Status</span>
            </div>
            <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">99.99% Up</span>
          </div>

          <div className="space-y-2 py-1">
            {['Node-01 (Primary Cluster)', 'Node-02 (Database Replica)', 'Node-03 (Edge Cache)'].map((server, i) => (
              <div key={i} className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex items-center justify-between text-[9px]">
                <span className="text-slate-300 font-mono">{server}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center text-[9px] text-slate-400 pt-1 border-t border-slate-800">
            <span>AWS / Azure / GCP</span>
            <span className="text-blue-400 font-bold">0 Dropouts</span>
          </div>
        </div>
      );

    case 'ai-and-machine-learning':
      return (
        <div className="w-full h-full bg-slate-950 p-4 rounded-2xl relative overflow-hidden flex flex-col justify-between text-white border border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
              <span className="text-[10px] font-bold tracking-wider text-purple-300 uppercase">AI Neural Engine</span>
            </div>
            <span className="text-[9px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full font-bold">Gemini / LLM</span>
          </div>

          <div className="bg-slate-900/90 p-2.5 rounded-xl border border-purple-500/20 text-[10px] space-y-1.5 my-auto">
            <div className="text-slate-400 flex items-center gap-1">
              <span className="text-purple-400 font-bold">&gt;</span> Analyzing Enterprise BigData...
            </div>
            <div className="bg-purple-950/50 p-1.5 rounded text-purple-200 font-mono text-[9px] border border-purple-800/40">
              ✓ Prediction Accuracy: 99.2%
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-slate-800">
            <span>Deep Learning Models</span>
            <span className="text-purple-400 font-bold">Active Inference</span>
          </div>
        </div>
      );

    case 'cloud-devops':
      return (
        <div className="w-full h-full bg-slate-950 p-4 rounded-2xl relative overflow-hidden flex flex-col justify-between text-white border border-slate-800 font-mono">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">CI/CD Pipeline</span>
            </div>
            <span className="text-[9px] text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">Docker & K8s</span>
          </div>

          <div className="space-y-1 text-[9px] text-slate-400 my-auto">
            <div className="text-emerald-400">✔ Step 1: Build Docker Container (Done)</div>
            <div className="text-emerald-400">✔ Step 2: Automated Tests Passed</div>
            <div className="text-cyan-300 font-bold animate-pulse">➜ Step 3: Kubernetes Rolling Deploy...</div>
          </div>

          <div className="flex justify-between items-center text-[9px] text-slate-500 pt-1 border-t border-slate-800">
            <span>Auto-Scaling</span>
            <span className="text-emerald-400">Status: Healthy</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-slate-900 p-4 rounded-2xl relative overflow-hidden flex flex-col justify-between text-white border border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4" style={{ color: accent }} />
              <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">Enterprise Solution</span>
            </div>
            <span className="text-[9px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full font-bold">Verified</span>
          </div>

          <div className="my-auto text-center space-y-1">
            <div className="text-sm font-bold text-white">InfoTech Suite</div>
            <div className="text-[10px] text-slate-400">Scalable & Secure Architecture</div>
          </div>

          <div className="flex justify-between items-center text-[9px] text-slate-500 pt-1 border-t border-slate-800">
            <span>Production Ready</span>
            <span className="text-blue-400 font-bold">100% Uptime</span>
          </div>
        </div>
      );
  }
}
