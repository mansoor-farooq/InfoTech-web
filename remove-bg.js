const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public/images/cartiovo.png');
const outputPath = path.join(__dirname, 'public/images/cartiovo.png');

async function removeBlackBackground() {
  try {
    const { data, info } = await sharp(inputPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const maxVal = Math.max(r, g, b);

      // If the pixel is close to black, make it transparent
      if (maxVal < 25) {
        data[i + 3] = 0;
      } else if (maxVal < 60) {
        // smooth anti-aliasing transition for edges
        data[i + 3] = Math.floor((maxVal - 25) * (255 / 35));
      }
    }

    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
      .png()
      .toFile(outputPath);

    console.log('Successfully created transparent logo!');
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

removeBlackBackground();
