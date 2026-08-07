const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./lib/data.json', 'utf8'));

const webDev = data.SERVICES_FULL['web-development'];
const IMAGES_DIR = '/images/web-development';

webDev.heroImage = '/images/webdevelopment.png';
webDev.cardImage = '/images/webdevelopment.png';

webDev.detailedContent = [
  {
    type: 'list-text',
    sectionTitle: 'Frontend Modernization & UI/UX',
    content: 'We craft highly interactive, blazing-fast, and accessible user interfaces that engage customers and streamline complex workflows. Our frontend architectures are built on modern frameworks to ensure future-proof scalability.',
    points: [
      'Component-Driven Architecture: Reusable React/Next.js components for UI consistency.',
      'Core Web Vitals Optimization: Sub-second load times and flawless interactive performance.',
      'Responsive Design: Fluid layouts that look native on desktop, tablet, and mobile browsers.',
      'State Management: Robust client-side data handling for complex dashboards.'
    ],
    image: `${IMAGES_DIR}/Web development (1).png`
  },
  {
    type: 'grid',
    sectionTitle: 'Enterprise Backend Systems',
    content: 'The powerhouse of your digital operations. We engineer secure, highly-available backend systems capable of processing massive transaction volumes while maintaining absolute data integrity.',
    items: [
      { title: 'Microservices', desc: 'Decoupled services for independent scaling and deployment.' },
      { title: 'Database Architecture', desc: 'Optimized SQL/NoSQL schemas for high-speed queries.' },
      { title: 'API Gateways', desc: 'Secure endpoints with rate limiting and JWT authentication.' }
    ],
    image: `${IMAGES_DIR}/Web development (2).png`
  },
  {
    type: 'text',
    sectionTitle: 'Cloud-Native Deployment & DevOps',
    content: 'Deploy with confidence. Our web applications are designed to thrive in modern cloud environments like AWS, Azure, and GCP. We implement complete CI/CD pipelines, containerization with Docker, and orchestration with Kubernetes to ensure zero-downtime releases and infinite scalability.',
    image: `${IMAGES_DIR}/Web development (3).png`
  },
  {
    type: 'tags',
    sectionTitle: 'Comprehensive Tech Stack',
    content: 'We utilize the most advanced and stable technologies available to build web solutions that stand the test of time.',
    tagsGroups: [
      {
        group: 'Frontend Ecosystem',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript']
      },
      {
        group: 'Backend & Infrastructure',
        tags: ['Node.js', '.NET', 'PostgreSQL', 'Redis', 'Docker', 'AWS']
      }
    ],
    image: `${IMAGES_DIR}/Web development (4).png`
  }
];

fs.writeFileSync('./lib/data.json', JSON.stringify(data, null, 2));
console.log('Web Development fully updated with premium layout and unique images.');
