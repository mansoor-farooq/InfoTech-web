import { SERVICES_FULL, getServiceData } from '@/lib/data';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return Object.keys(SERVICES_FULL).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const data = getServiceData(resolvedParams.slug);
  if (!data) return { title: 'Service Not Found' };
  return {
    title: `${data.title} | InfoTech Solutions`,
    description: data.subtitle,
  };
}

export default async function ServiceRoute({ params }) {
  const resolvedParams = await params;
  const data = getServiceData(resolvedParams.slug);
  if (!data) return notFound();
  return <ServicePageTemplate data={data} />;
}
