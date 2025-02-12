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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });

    return config;
  },
}

module.exports = nextConfig
