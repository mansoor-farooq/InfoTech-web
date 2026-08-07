const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./lib/data.json', 'utf8'));

const merch = data.PRODUCTS_FULL['merchandizing-application'];
const IMAGES_DIR = '/images/Merchandizing Application';

merch.heroImage = '/images/marchandizingapp.png';
merch.cardImage = '/images/marchandizingapp.png';

merch.detailedContent = [
  {
    type: 'list-text',
    sectionTitle: 'Visual Shelf Management & Planogram Compliance',
    content: 'Ensure your products are displayed exactly as intended. Our visual compliance tools allow field teams to capture shelf layouts and instantly verify them against approved planograms.',
    points: [
      'Share of Shelf (SOS) Tracking: Automatically calculate your brand visual presence compared to competitors.',
      'Out-of-Stock (OOS) Alerts: Instantly flag empty shelves to trigger rapid restocking workflows.',
      'Planogram Verification: Compare live shelf photos with visual guidelines.',
      'Display Compliance: Ensure secondary displays and promotional end-caps are fully stocked and accurately priced.'
    ],
    image: `${IMAGES_DIR}/WhatsApp Image 2026-08-07 at 10.04.56 AM.jpeg`
  },
  {
    type: 'grid',
    sectionTitle: 'Real-Time Field Analytics & KPI Tracking',
    content: 'Transform raw field data into actionable intelligence. Provide your merchandisers and managers with a unified dashboard for tracking daily targets, route efficiency, and store-level performance.',
    items: [
      { title: 'Dynamic Journey Plans', desc: 'Route optimization and geo-fenced check-ins to ensure 100% store visit compliance.' },
      { title: 'SKU Availability', desc: 'Track core SKU presence across all mapped outlets in real-time.' },
      { title: 'Promo Execution', desc: 'Verify that trade promotions and discounts are actively presented to consumers.' }
    ],
    image: `${IMAGES_DIR}/WhatsApp Image 2026-08-07 at 10.04.57 AM.jpeg`
  },
  {
    type: 'text',
    sectionTitle: 'Intelligent Competitor Intelligence',
    content: 'Stay ahead of the market by systematically capturing competitor movements. Equip your field force to record competitor pricing, new product launches, and aggressive promotional campaigns directly from the retail floor, allowing your strategy team to react instantly.',
    image: `${IMAGES_DIR}/WhatsApp Image 2026-08-07 at 10.04.59 AM.jpeg`
  },
  {
    type: 'tags',
    sectionTitle: 'Complete Field Force Ecosystem',
    content: 'Built to operate seamlessly in both online and offline environments, ensuring your merchandisers never miss a beat regardless of network connectivity.',
    tagsGroups: [
      {
        group: 'Core Capabilities',
        tags: ['Offline Mode', 'Photo Evidence', 'GPS Tagging', 'Timestamp Verification']
      },
      {
        group: 'Analytics & Reporting',
        tags: ['Custom Surveys', 'Stock Audits', 'Pricing Indexes', 'Asset Management']
      }
    ],
    image: `${IMAGES_DIR}/WhatsApp Image 2026-08-07 at 10.05.00 AM (1).jpeg`
  },
  {
    type: 'text',
    sectionTitle: 'Instant Executive Reporting',
    content: 'Consolidate nationwide merchandising data into a single source of truth. Generate beautiful, exportable reports that highlight market share trends, team productivity, and critical retail execution gaps.',
    image: `${IMAGES_DIR}/WhatsApp Image 2026-08-07 at 10.05.00 AM.jpeg`
  }
];

fs.writeFileSync('./lib/data.json', JSON.stringify(data, null, 2));
console.log('Merchandizing application fully updated with premium layout and unique images.');
