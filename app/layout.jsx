import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import CursorGlow from '@/components/CursorGlow';
import Preloader from '@/components/Preloader';
import WhatsAppButton from '@/components/WhatsAppButton';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'InfoTech Solutions — Enterprise Software, ERP & AI | Karachi, Pakistan',
  description: "Pakistan's leading enterprise software engineering company. Custom ERP, SAP & Dynamics Integration, AI Agents, Cloud DevOps. 5+ years delivering enterprise solutions.",
  icons: {
    icon: '/images/Website-Logo.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-white text-slate-900 relative selection:bg-blue-600 selection:text-white">
        <Preloader />
        <ScrollProgress />
        <CursorGlow />
        {children}
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
