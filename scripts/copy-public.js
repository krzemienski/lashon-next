const fs = require('fs-extra');
const path = require('path');

async function copyPublicToOut() {
  const publicDir = path.join(__dirname, '..', 'public');
  const outDir = path.join(__dirname, '..', 'out');

  try {
    // Ensure the out directory exists
    await fs.ensureDir(outDir);

    // Copy the entire public directory to out
    await fs.copy(publicDir, outDir, {
      overwrite: true,
      errorOnExist: false,
    });

    console.log('Successfully copied public directory to out');
  } catch (err) {
    console.error('Error copying public directory:', err);
    process.exit(1);
  }
}

copyPublicToOut();
