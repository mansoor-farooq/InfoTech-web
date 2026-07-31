import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local' });

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const SERVICES = {
  enterprise_software: {
    slug: "enterprise-software",
    title: "Enterprise Software",
    subtitle: "Custom-built systems that power your operations",
    description: "We design and deliver tailor-made enterprise software systems — from ground-up ERP platforms to specialized management solutions — built for scale, compliance, and longevity."
  },
  enterprise_integration: {
    slug: "enterprise-integration",
    title: "Enterprise Integration",
    subtitle: "Connect your business ecosystem seamlessly",
    description: "We bridge enterprise platforms with precision-engineered integration layers — connecting SAP, Dynamics, Oracle, and more into a unified operational backbone."
  },
  artificial_intelligence: {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    subtitle: "Intelligent automation for the modern enterprise",
    description: "From autonomous AI agents to document intelligence and LLM-powered workflows — we embed AI into your business operations to eliminate inefficiency and unlock new capabilities."
  },
  cloud_devops: {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "Scalable, secure cloud infrastructure built to last",
    description: "We architect, migrate, and manage enterprise cloud environments on AWS, Azure, and GCP — with full DevOps pipelines, infrastructure automation, and 99.99% uptime SLAs."
  },
  software_engineering: {
    slug: "software-engineering",
    title: "Software Engineering",
    subtitle: "World-class digital products built for scale",
    description: "We engineer web applications, mobile apps, SaaS platforms, and microservice architectures that stand up to real-world enterprise demands."
  },
  data_analytics: {
    slug: "data-analytics",
    title: "Data & Analytics",
    subtitle: "Turn data into your most powerful business asset",
    description: "We build BI dashboards, Power BI reports, data warehouses, and ETL pipelines that give leadership real-time visibility into what matters most."
  },
};

const TESTIMONIALS = [
  {
    quote: "InfoTech Solutions transformed our inventory and supply chain operations with a custom ERP that synced seamlessly with our existing SAP environment. Outstanding engineering team.",
    name: "Operations Director",
    company: "Young's Foods",
    initials: "YF",
  },
  {
    quote: "Their FBR digital invoicing integration was completed on time and worked flawlessly. We've been compliant and efficient since day one.",
    name: "CFO",
    company: "Dairy Life",
    initials: "DL",
  },
  {
    quote: "The team delivered a complete ERP and mobile field sales system for our distribution network. 16+ years of real enterprise experience shows in every detail.",
    name: "Managing Director",
    company: "Youngs Bazar",
    initials: "YB",
  },
];

const PRODUCTS = [
  {
    slug: "cartivo",
    title: "Cartivo Enterprise",
    subtitle: "Flagship eCommerce Platform",
    description: "Next generation digital commerce.",
    features: "[]",
  }
];

async function main() {
  console.log('Seeding dummy data...');

  // 1. Seed Services
  let order = 0;
  for (const key in SERVICES) {
    const s = SERVICES[key];
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: {
        title: s.title,
        description: s.description,
        sortOrder: order
      },
      create: {
        title: s.title,
        slug: s.slug,
        description: s.description,
        sortOrder: order
      }
    });
    order++;
  }
  console.log('Services seeded.');

  // 2. Seed Testimonials
  await prisma.testimonial.deleteMany({});
  for (const t of TESTIMONIALS) {
    await prisma.testimonial.create({
      data: {
        clientName: t.name,
        company: t.company,
        designation: t.name,
        review: t.quote,
        rating: 5,
        visibility: true
      }
    });
  }
  console.log('Testimonials seeded.');

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
