'use client';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully.');
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
          <input 
            type="text" 
            placeholder="John Doe"
            required
            className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900" 
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
          <input 
            type="email" 
            placeholder="john@company.com"
            required
            className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900" 
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
          <input 
            type="text" 
            placeholder="+92 300 1234567"
            className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900" 
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
          <select className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 bg-white">
            <option value="">Select Service or Platform</option>
            <option>Web Development</option>
            <option>Mobile Application</option>
            <option>BI Reports & Analytics</option>
            <option>Custom ERP Development</option>
            <option>AI & Machine Learning</option>
            <option>Cloud & DevOps Solutions</option>
            <option>FBR E-Invoicing & Compliance</option>
            <option>Audit</option>
            <option>Enterprise UI/UX Design</option>
            <option>Infrastructure Management</option>
            <option>Maintenance & Enhancements</option>
            <option>Migration And Modernization</option>
            <option>Cartivo Commerce Platform</option>
            <option>HRMS & Payroll System</option>
            <option>Other / Custom Project</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Project Details</label>
        <textarea 
          rows={5}
          placeholder="Tell us about your project requirements, scope, or timeline..."
          required
          className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900" 
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 text-lg"
      >
        Submit Inquiry <Send className="w-5 h-5" />
      </button>
    </form>
  );
}
