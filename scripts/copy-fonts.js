const fs = require('fs');
const path = require('path');

// Ensure font directory exists in public folder
const publicFontsDir = path.join(process.cwd(), 'public', 'fonts');
if (!fs.existsSync(publicFontsDir)) {
  fs.mkdirSync(publicFontsDir, { recursive: true });
}

// Copy fonts from src/fonts to public/fonts
const srcFontsDir = path.join(process.cwd(), 'src', 'fonts');
if (fs.existsSync(srcFontsDir)) {
  const fontFiles = fs.readdirSync(srcFontsDir).filter(file => 
    !fs.statSync(path.join(srcFontsDir, file)).isDirectory()
  );
  
  fontFiles.forEach(file => {
    const srcPath = path.join(srcFontsDir, file);
    const destPath = path.join(publicFontsDir, file);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} to public/fonts/`);
  });
}

console.log('Font copying complete!');
