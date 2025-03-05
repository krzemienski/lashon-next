const fs = require('fs');
const path = require('path');
const { createCanvas, registerFont, loadImage } = require('canvas');

// Register the Amsterdam font
registerFont(path.join(__dirname, '../public/fonts/Amsterdam.woff'), {
  family: 'Amsterdam',
  weight: 'normal'
});

// Function to create a canvas with text
function createTextCanvas(text, width, height, fontSize, backgroundColor = '#000000', textColor = '#DAAA40') {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Set background
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);

  // Set font and color for text
  ctx.font = `${fontSize}px Amsterdam`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = textColor;

  // Draw text in the center
  ctx.fillText(text, width / 2, height / 2);

  return canvas;
}

// Function to save canvas as PNG
function saveCanvasAsPNG(canvas, filePath) {
  return new Promise((resolve, reject) => {
    const out = fs.createWriteStream(filePath);
    const stream = canvas.createPNGStream();
    
    stream.pipe(out);
    out.on('finish', resolve);
    out.on('error', reject);
  });
}

// Function to convert PNG to ICO (simple approach just copies the PNG)
// For a proper ICO file, you would need additional dependencies
async function convertToIco(pngPath, icoPath) {
  // This is a simplified approach. In a real-world scenario, 
  // you would use a library like 'png-to-ico' to create a proper ICO file.
  fs.copyFileSync(pngPath, icoPath);
  console.log(`Created simplified ICO file: ${icoPath}`);
}

// Main function to generate all required images
async function generateLogos() {
  const publicDir = path.join(__dirname, '../public');
  
  try {
    // Create the logo image variations
    console.log("Generating logo images...");
    
    // Favicon (16x16)
    const favicon16Canvas = createTextCanvas("L", 16, 16, 8);
    await saveCanvasAsPNG(favicon16Canvas, path.join(publicDir, 'favicon-16x16.png'));
    console.log("Created favicon-16x16.png");
    
    // Apple touch icon (180x180)
    const appleTouchCanvas = createTextCanvas("L", 180, 180, 80);
    await saveCanvasAsPNG(appleTouchCanvas, path.join(publicDir, 'apple-touch-icon.png'));
    console.log("Created apple-touch-icon.png");
    
    // Logo portrait (192x192) - for manifest.json
    const logoPortraitCanvas = createTextCanvas("L", 192, 192, 85);
    await saveCanvasAsPNG(logoPortraitCanvas, path.join(publicDir, 'logo-portrait.png'));
    console.log("Created logo-portrait.png (192x192)");
    
    // Larger logo portrait (512x512) - for manifest.json
    const logoPortraitLargeCanvas = createTextCanvas("L", 512, 512, 220);
    await saveCanvasAsPNG(logoPortraitLargeCanvas, path.join(publicDir, 'logo-portrait-large.png'));
    console.log("Created logo-portrait-large.png (512x512)");
    
    // OG Image (1200x630) - with full "Lashon" text
    const ogImageCanvas = createTextCanvas("Lashon", 1200, 630, 300);
    await saveCanvasAsPNG(ogImageCanvas, path.join(publicDir, 'images/og-image.jpg'));
    console.log("Created og-image.jpg (1200x630)");
    
    // Twitter Image (1200x600)
    const twitterImageCanvas = createTextCanvas("Lashon", 1200, 600, 280);
    await saveCanvasAsPNG(twitterImageCanvas, path.join(publicDir, 'images/twitter-image.jpg'));
    console.log("Created twitter-image.jpg (1200x600)");
    
    // Create the favicon.ico from the favicon PNG
    // This is a simplified approach
    await convertToIco(
      path.join(publicDir, 'favicon-16x16.png'),
      path.join(publicDir, 'favicon.ico')
    );
    
    console.log("All logo files generated successfully!");
  } catch (error) {
    console.error("Error generating logo files:", error);
  }
}

// Execute the main function
generateLogos();
