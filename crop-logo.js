const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imagePath = path.join(__dirname, 'public/images/cartivo-transparent.png');
const tempPath = path.join(__dirname, 'public/images/cartivo-temp.png');

async function cropImage() {
  try {
    await sharp(imagePath)
      .trim() // Trims transparent padding
      .toFile(tempPath);
    
    // Replace original with cropped
    fs.renameSync(tempPath, imagePath);
    console.log('Successfully cropped logo!');
  } catch (error) {
    console.error('Error cropping image:', error);
  }
}

cropImage();
