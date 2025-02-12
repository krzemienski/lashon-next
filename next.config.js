/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/lashon-next' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lashon-next' : '',
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
  webpack: (config, { isServer }) => {
    // Optimize video imports
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: process.env.NODE_ENV === 'production' 
              ? '/lashon-next/_next/static/videos/'
              : '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
}

module.exports = nextConfig
