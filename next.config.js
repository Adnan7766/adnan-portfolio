/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Or for static export:
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
