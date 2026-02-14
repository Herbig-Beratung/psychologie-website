import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const portrait = path.join(root, "public", "lukas-herbig.png");

async function createCircularImage(inputPath, outputPath, size) {
  const circle = Buffer.from(
    `<svg width="${size}" height="${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
    </svg>`
  );

  // Resize portrait to square, then mask with circle
  const resized = await sharp(inputPath)
    .resize(size, size, { fit: "cover", position: "top" })
    .toBuffer();

  await sharp(resized)
    .composite([{ input: circle, blend: "dest-in" }])
    .png()
    .toFile(outputPath);

  console.log(`Created: ${outputPath} (${size}x${size})`);
}

async function createOgImage(inputPath, outputPath) {
  const W = 1200;
  const H = 630;
  const portraitSize = 280;
  const ringSize = portraitSize + 12; // 6px ring on each side

  // Brand colors
  const bgDark = "#2a2e1f";
  const bgMid = "#3d4a3a";
  const accent = "#c4813a";
  const textWhite = "#ffffff";
  const textMuted = "#ffffff99";

  // Create circular portrait
  const circle = Buffer.from(
    `<svg width="${portraitSize}" height="${portraitSize}">
      <circle cx="${portraitSize / 2}" cy="${portraitSize / 2}" r="${portraitSize / 2}" fill="white"/>
    </svg>`
  );

  const resizedPortrait = await sharp(inputPath)
    .resize(portraitSize, portraitSize, { fit: "cover", position: "top" })
    .toBuffer();

  const circularPortrait = await sharp(resizedPortrait)
    .composite([{ input: circle, blend: "dest-in" }])
    .png()
    .toBuffer();

  // Create ring behind portrait
  const ring = Buffer.from(
    `<svg width="${ringSize}" height="${ringSize}">
      <circle cx="${ringSize / 2}" cy="${ringSize / 2}" r="${ringSize / 2}" fill="#dfe5db" opacity="0.4"/>
    </svg>`
  );

  // Create branded background with text
  const bgSvg = Buffer.from(
    `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${bgDark};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${bgMid};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#bg)"/>
      
      <!-- Subtle accent line -->
      <rect x="80" y="485" width="60" height="3" rx="1.5" fill="${accent}"/>
      
      <!-- Text -->
      <text x="80" y="420" fill="${accent}" font-family="system-ui, sans-serif" font-size="14" font-weight="600" letter-spacing="3" text-transform="uppercase">PSYCHOLOGISCHE BERATUNG</text>
      <text x="80" y="465" fill="${textWhite}" font-family="system-ui, sans-serif" font-size="42" font-weight="700">Lukas Herbig</text>
      <text x="80" y="530" fill="${textMuted}" font-family="system-ui, sans-serif" font-size="18">MPU-Vorbereitung · Mentale Gesundheit · Workshops</text>
      <text x="80" y="570" fill="${textMuted}" font-family="system-ui, sans-serif" font-size="16">herbig-beratung.de</text>
    </svg>`
  );

  const portraitX = W - 80 - ringSize;
  const portraitY = Math.round((H - ringSize) / 2);
  const innerOffset = 6; // ring padding

  await sharp(bgSvg)
    .composite([
      {
        input: ring,
        left: portraitX,
        top: portraitY,
      },
      {
        input: circularPortrait,
        left: portraitX + innerOffset,
        top: portraitY + innerOffset,
      },
    ])
    .png({ quality: 90 })
    .toFile(outputPath);

  console.log(`Created: ${outputPath} (${W}x${H})`);
}

async function main() {
  // Round favicon 32x32
  await createCircularImage(
    portrait,
    path.join(root, "src", "app", "icon.png"),
    32
  );

  // Round apple icon 180x180
  await createCircularImage(
    portrait,
    path.join(root, "src", "app", "apple-icon.png"),
    180
  );

  // OG image 1200x630
  await createOgImage(
    portrait,
    path.join(root, "public", "og-image.png")
  );

  console.log("\nAll images generated successfully!");
}

main().catch(console.error);
