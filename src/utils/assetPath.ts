// Get the base path for assets based on environment
let assetBasePath = '';

// This is only executed once during build time in Node.js, not in browser
// Check for base path environment variable for GitHub Pages deployment
if (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_BASE_PATH) {
  assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
}

export function getAssetPath(path: string): string {
  return `${assetBasePath}${path}`;
}
