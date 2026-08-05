const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imagePath = path.join(__dirname, 'public/images/cartivo-transparent.png');
const tempPath = path.join(__dirname, 'public/images/cartivo-temp.png');

async function extractBbox() {
  try {
    const { data, info } = await sharp(imagePath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    let minX = info.width, minY = info.height, maxX = 0, maxY = 0;

    for (let y = 0; y < info.height; y++) {
      for (let x = 0; x < info.width; x++) {
        const idx = (y * info.width + x) * 4;
        const a = data[idx + 3];
        
        // If pixel is significantly visible
        if (a > 10) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    if (minX > maxX || minY > maxY) {
      console.log('Image is completely transparent!');
      return;
    }

    // Add a small 10px padding
    minX = Math.max(0, minX - 10);
    minY = Math.max(0, minY - 10);
    maxX = Math.min(info.width - 1, maxX + 10);
    maxY = Math.min(info.height - 1, maxY + 10);

    const width = maxX - minX + 1;
    const height = maxY - minY + 1;

    console.log(`Cropping to: x=${minX}, y=${minY}, w=${width}, h=${height}`);

    await sharp(imagePath)
      .extract({ left: minX, top: minY, width, height })
      .toFile(tempPath);
      
    fs.renameSync(tempPath, imagePath);
    console.log('Successfully tightly cropped logo!');

  } catch (error) {
    console.error('Error extracting bbox:', error);
  }
}

extractBbox();
