import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputSvg = path.join(__dirname, '..', 'public', 'base-icon.svg');
const outDir = path.join(__dirname, '..', 'public');

async function generate() {
  try {
    // 192x192
    await sharp(inputSvg)
      .resize(192, 192)
      .png()
      .toFile(path.join(outDir, 'pwa-192x192.png'));

    // 512x512
    await sharp(inputSvg)
      .resize(512, 512)
      .png()
      .toFile(path.join(outDir, 'pwa-512x512.png'));

    // apple-touch-icon (180x180)
    await sharp(inputSvg)
      .resize(180, 180)
      .png()
      .toFile(path.join(outDir, 'apple-touch-icon.png'));

    // favicon.ico (32x32)
    // Sharp technically generates pngs, most modern browsers handle .ico files that are actually PNGs
    // To be perfectly safe, we can just use favicon.svg since it's already linked in index.html!
    
    console.log('Icons generated successfully!');
  } catch (err) {
    console.error('Error generating icons:', err);
  }
}

generate();
