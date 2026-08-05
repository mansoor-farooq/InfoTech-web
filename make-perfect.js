const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public/images/cartiovo.png');
const outputPath = path.join(__dirname, 'public/images/cartiovo.png');

async function processImage() {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let minX = info.width, minY = info.height, maxX = 0, maxY = 0;

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 4;
      const r = data[idx], g = data[idx + 1], b = data[idx + 2];
      const maxVal = Math.max(r, g, b);

      // Make dark background transparent
      if (maxVal < 25) {
        data[idx + 3] = 0;
      } else if (maxVal < 60) {
        data[idx + 3] = Math.floor((maxVal - 25) * (255 / 35));
      }

      // Find bounding box of non-transparent pixels
      if (data[idx + 3] > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // Add 2px padding just in case
  minX = Math.max(0, minX - 2);
  minY = Math.max(0, minY - 2);
  maxX = Math.min(info.width - 1, maxX + 2);
  maxY = Math.min(info.height - 1, maxY + 2);

  const w = maxX - minX + 1;
  const h = maxY - minY + 1;

  console.log(`Cropped size: ${w}x${h}`);

  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract({ left: minX, top: minY, width: w, height: h })
    // Resize physically to ensure it's high quality when scaled by Next.js
    .resize({ width: 600, kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(outputPath);
}

processImage().then(() => console.log('Perfect logo created!')).catch(console.error);
