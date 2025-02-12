/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/lashon-next' : '';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    path: `${basePath}/_next/image`
  },
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  webpack: (config, { isServer }) => {
    // Handle media files (images and videos)
    config.module.rules.push({
      test: /\.(mp4|jpe?g|png|svg|gif|ico|webp)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: `${basePath}/_next/static/media/`,
            outputPath: 'static/media/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
}

module.exports = nextConfig
