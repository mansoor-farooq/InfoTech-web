import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local' });

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Migrating remaining pages to DB...');

  // 1. Make sure all components exist
  const componentNames = ['Hero', 'ServicesGrid', 'Testimonials', 'ClientLogos', 'StatsBar', 'WhyInfoTech', 'RichText', 'ContactForm'];
  const components = {};

  for (const name of componentNames) {
    components[name] = await prisma.component.upsert({
      where: { name },
      update: {},
      create: { name, description: `${name} Component` }
    });
  }

  // Helper to create page with components
  async function createPage(title, slug, pageComponentsData) {
    const page = await prisma.page.upsert({
      where: { slug },
      update: { title, status: 'PUBLISHED' },
      create: {
        title,
        slug,
        status: 'PUBLISHED',
        seo: {
          create: {
            title: `${title} | InfoTech`,
            metaDescription: `Discover more about ${title} at InfoTech.`
          }
        }
      }
    });

    // Clear existing components
    await prisma.pageComponent.deleteMany({ where: { pageId: page.id } });

    // Add components
    for (let i = 0; i < pageComponentsData.length; i++) {
      const { compName, props } = pageComponentsData[i];
      if (components[compName]) {
        await prisma.pageComponent.create({
          data: {
            pageId: page.id,
            componentId: components[compName].id,
            order: i,
            props
          }
        });
      }
    }
    console.log(`Created page: ${slug}`);
  }

  // --- Create Home Page ---
  await createPage('Home', '/', [
    {
      compName: 'Hero',
      props: {
        heroTitle: "Enterprise Software Solutions",
        heroSubtitle: "Build for the Future",
        heroDescription: "We craft high-performance, scalable web applications for businesses.",
        heroPrimaryBtnText: "Our Services",
        heroPrimaryBtnLink: "/services",
        heroSecondaryBtnText: "Contact Us",
        heroSecondaryBtnLink: "/contact"
      }
    },
    { compName: 'ClientLogos', props: {} },
    { compName: 'ServicesGrid', props: {} },
    { compName: 'WhyInfoTech', props: {} },
    { compName: 'StatsBar', props: {} },
    { compName: 'Testimonials', props: {} }
  ]);

  // --- Create Services Page ---
  await createPage('Services', 'services', [
    {
      compName: 'Hero',
      props: {
        heroTitle: "Our Services",
        heroSubtitle: "What We Do",
        heroDescription: "Comprehensive software solutions tailored to your business needs.",
      }
    },
    { compName: 'ServicesGrid', props: {} }
  ]);



  // --- Create About Page ---
  await createPage('About Us', 'about', [
    {
      compName: 'Hero',
      props: {
        heroTitle: "About InfoTech",
        heroSubtitle: "Our Journey",
        heroDescription: "We are a team of passionate technologists dedicated to providing the best enterprise CMS solutions.",
        heroPrimaryBtn: "Contact Us",
        heroPrimaryLink: "/contact"
      }
    },
    {
      compName: 'WhyInfoTech',
      props: {
        whyTitle: "Why Choose Us?",
        whySubtitle: "Our Core Values",
        whyDescription: "Integrity, Innovation, and Excellence"
      }
    }
  ]);

  // --- Create Careers Page ---
  await createPage('Careers', 'careers', [
    {
      compName: 'Hero',
      props: {
        heroTitle: "Join Our Team",
        heroSubtitle: "Careers at InfoTech",
        heroDescription: "Help us build the next generation of dynamic web experiences.",
        heroPrimaryBtn: "View Openings",
        heroPrimaryLink: "#openings"
      }
    }
  ]);

  // --- Create Case Studies Page ---
  await createPage('Case Studies', 'case-studies', [
    {
      compName: 'Hero',
      props: {
        heroTitle: "Our Work",
        heroSubtitle: "Case Studies",
        heroDescription: "See how we've helped our clients achieve digital transformation.",
        heroPrimaryBtn: "Get a Quote",
        heroPrimaryLink: "/contact"
      }
    },
    {
      compName: 'Testimonials',
      props: {}
    }
  ]);

  // --- Create Contact Page ---
  await createPage('Contact Us', 'contact', [
    {
      compName: 'Hero',
      props: {
        heroTitle: "Get in Touch",
        heroSubtitle: "Contact InfoTech",
        heroDescription: "We would love to hear from you. Drop us a message.",
      }
    }
  ]);

  console.log('Migration complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
