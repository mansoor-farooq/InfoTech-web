const sharp = require('sharp');
const fs = require('fs');

async function processImage() {
  const inputPath = 'C:\\Users\\m.mansoor\\.gemini\\antigravity\\brain\\c310c2f5-deb7-4365-b797-576233fdfe33\\.user_uploaded\\media__1785476978534.png';
  const outputPath = 'public/images/cartivo-logo.png';

  const image = sharp(inputPath);
  const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // If pixel is black (r < 30 && g < 30 && b < 30) or near white (r > 220 && g > 220 && b > 220)
    if ((r < 35 && g < 35 && b < 35) || (r > 220 && g > 220 && b > 220)) {
      data[i + 3] = 0; // Alpha 0 transparent
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
  .trim() // Crop transparent edges
  .png()
  .toFile(outputPath + '.tmp');

  fs.renameSync(outputPath + '.tmp', outputPath);
  console.log('Successfully saved clean transparent Cartivo logo!');
}

processImage();
