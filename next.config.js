/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/lashon-next',
  assetPrefix: '/lashon-next/',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ttf|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/lashon-next/',
        },
      },
    });
    return config;
  },
}

module.exports = nextConfig
