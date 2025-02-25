/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/lashon-next',
  assetPrefix: '/lashon-next',
}

module.exports = nextConfig
