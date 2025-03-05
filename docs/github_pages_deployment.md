# GitHub Pages Deployment with Custom Domain

This document describes how the Lashon Music website is configured for deployment to GitHub Pages with the custom domain `lashon.me`.

## Configuration Overview

### Custom Domain Setup

1. **CNAME File**: 
   - Location: `public/CNAME`
   - Contents: `lashon.me`
   - This file is automatically copied to the build output and tells GitHub Pages to use the custom domain.

2. **package.json**:
   - The `homepage` field is set to `https://lashon.me`
   - This helps React/Next.js understand the root URL of the deployed application.

### Base Path Configuration

For GitHub Pages with a custom domain, we don't need a base path prefix. This is configured in multiple places:

1. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
   - Sets `NEXT_PUBLIC_BASE_PATH` to an empty string during build
   - This ensures the site builds correctly for the root domain

2. **next.config.js**:
   - Uses the environment variable for `basePath` and `assetPrefix`
   - When deploying with our custom domain, these will be empty strings
   - For local development, these will also be empty by default

3. **Asset Path Utility** (`src/utils/assetPath.ts`):
   - Provides a function to generate the correct asset URLs based on the environment
   - Used throughout the application to ensure assets are loaded from the correct path

### Metadata Configuration

In `src/app/layout.tsx`, we set:
- `metadataBase`: Set to `https://lashon.me` for proper canonical URLs
- Open Graph and Twitter card metadata with absolute URLs

## Deploying Changes

Changes are automatically deployed when pushed to the `main` branch via GitHub Actions. The workflow:
1. Builds the Next.js application with the static export option
2. Uploads the built artifacts
3. Deploys to GitHub Pages

You can also trigger a manual deployment from the GitHub Actions tab by running the workflow manually.

## Local Testing

To test locally with the same configuration as production:
```bash
npm run dev
```

No additional configuration is needed for local development.
