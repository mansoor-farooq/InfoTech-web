import ServerNavbar from '@/components/ServerNavbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import ClientLogos from '@/components/home/ClientLogos';
import StatsBar from '@/components/home/StatsBar';
import ServicesGrid from '@/components/home/ServicesGrid';
import WhyInfoTech from '@/components/home/WhyInfoTech';
import Testimonials from '@/components/home/Testimonials';
import { COMPANY_INFO, TESTIMONIALS } from '@/lib/data';

const heroConfig = {
  heroTitle: 'Enterprise Software',
  heroSubtitle: 'Engineering Company.',
  heroDescription: `${COMPANY_INFO.tagline}. ${COMPANY_INFO.years} Years of delivering mission-critical enterprise systems.`,
  heroPrimaryBtn: 'Explore Services',
  heroPrimaryLink: '/services',
  heroSecondaryBtn: 'View Products',
  heroSecondaryLink: '/products',
  heroImage: '/images/dashboard.jpg',
};

const statsConfig = {
  stats: [
    { value: '5', suffix: '+', label: 'Years Experience' },
    { value: '12', suffix: '+', label: 'Projects Completed' },
    { value: '12', suffix: '+', label: 'Active Clients' },
    { value: '99.9', suffix: '%', label: 'System Uptime' },
  ]
};

const whyConfig = {
  whyTitle: 'We don\'t just write code. We engineer enterprise systems.',
  whyDescription: 'Our team combines deep business process knowledge with modern software engineering to deliver systems that actually work in the real world.',
};

const whyReasons = [
  { id: 1, title: 'Enterprise-Grade Architecture', description: 'We build systems that handle millions of transactions securely, with clean code that your internal teams can maintain.' },
  { id: 2, title: 'Business Process Expertise', description: "We don't just write code. We understand supply chain, accounting, and manufacturing processes deeply." },
  { id: 3, title: 'FBR & Local Compliance', description: 'Our financial and ERP systems are built with native FBR integration and comply with local tax regulations out of the box.' },
  { id: 4, title: 'Full Lifecycle Ownership', description: 'From initial requirements gathering to deployment, cloud hosting, and 24/7 SLAs — we own the outcome.' },
];

export default function Home() {
  return (
    <>
      <ServerNavbar />
      <main>
        <Hero config={heroConfig} />
        <ClientLogos />
        <StatsBar config={statsConfig} />
        <ServicesGrid />
        <WhyInfoTech config={whyConfig} reasons={whyReasons} />
        <Testimonials testimonials={TESTIMONIALS} />
      </main>
      <Footer />
    </>
  );
}
