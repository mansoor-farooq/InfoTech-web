const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'lib', 'data.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const serviceMap = {
  "bi-reports": "Powerbi",
  "web-development": "web-development",
  "infrastructure-management": "Infrastructure Management",
  "maintenance-enhancements": "Maintenance & Enhancements",
  "migration-and-modernization": "Migration And Modernization",
  "custom-erp-development": "Custom ERP Development",
  "ai-and-machine-learning": "AI & Machine Learning",
  "cloud-devops": "Cloud and deveops",
  "fbr-e-invoicing-compliance": "FBR E-Invoicing & Compliance"
};

const imagesBaseDir = path.join(__dirname, 'public', 'images');

for (const [serviceKey, folderName] of Object.entries(serviceMap)) {
  const folderPath = path.join(imagesBaseDir, folderName);
  if (fs.existsSync(folderPath)) {
    const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
    if (files.length > 0 && data.SERVICES_FULL[serviceKey]) {
      
      const getImgPath = (index) => `/images/${folderName}/${files[index % files.length]}`;
      
      // Try to intelligently map images
      // If there are specific naming conventions we can pick them, but for now we distribute them
      data.SERVICES_FULL[serviceKey].heroImage = getImgPath(0);
      data.SERVICES_FULL[serviceKey].cardImage = getImgPath(0);
      
      data.SERVICES_FULL[serviceKey].architectureImage = files.length > 1 ? getImgPath(1) : getImgPath(0);
      
      if (data.SERVICES_FULL[serviceKey].dashboardImage !== null) {
          data.SERVICES_FULL[serviceKey].dashboardImage = files.length > 2 ? getImgPath(2) : getImgPath(0);
      }
      
      data.SERVICES_FULL[serviceKey].image2 = files.length > 3 ? getImgPath(3) : getImgPath(0);
      data.SERVICES_FULL[serviceKey].image3 = files.length > 4 ? getImgPath(4) : getImgPath(0);
      data.SERVICES_FULL[serviceKey].image4 = files.length > 5 ? getImgPath(5) : getImgPath(0);
      
      console.log(`Updated images for service: ${serviceKey}`);
    }
  }
}

// E-Commerce
const ecommerceFolder = "E-Commerce Solutions";
const ecoFolderPath = path.join(imagesBaseDir, ecommerceFolder);
if (fs.existsSync(ecoFolderPath)) {
    const files = fs.readdirSync(ecoFolderPath).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
    if (files.length > 0) {
      const getImgPath = (index) => `/images/${ecommerceFolder}/${files[index % files.length]}`;
      const prodKey = 'e-commerce-solutions';
      
      if (data.PRODUCTS_FULL && data.PRODUCTS_FULL[prodKey]) {
          data.PRODUCTS_FULL[prodKey].heroImage = getImgPath(0);
          data.PRODUCTS_FULL[prodKey].cardImage = getImgPath(0);
          data.PRODUCTS_FULL[prodKey].image2 = files.length > 1 ? getImgPath(1) : getImgPath(0);
          data.PRODUCTS_FULL[prodKey].image3 = files.length > 2 ? getImgPath(2) : getImgPath(0);
          data.PRODUCTS_FULL[prodKey].image4 = files.length > 3 ? getImgPath(3) : getImgPath(0);
          console.log(`Updated images for product: ${prodKey}`);
      }
      
      if (data.SERVICES_FULL && data.SERVICES_FULL[prodKey]) {
          data.SERVICES_FULL[prodKey].heroImage = getImgPath(0);
          data.SERVICES_FULL[prodKey].cardImage = getImgPath(0);
          data.SERVICES_FULL[prodKey].architectureImage = files.length > 1 ? getImgPath(1) : getImgPath(0);
          data.SERVICES_FULL[prodKey].image2 = files.length > 2 ? getImgPath(2) : getImgPath(0);
          data.SERVICES_FULL[prodKey].image3 = files.length > 3 ? getImgPath(3) : getImgPath(0);
          data.SERVICES_FULL[prodKey].image4 = files.length > 4 ? getImgPath(4) : getImgPath(0);
          console.log(`Updated images for service: ${prodKey}`);
      }
    }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully updated lib/data.json');
