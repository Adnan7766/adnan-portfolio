/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'standalone' - Vercel doesn't need it
  trailingSlash: true,
  images: {
    unoptimized: true
  }
  // Remove experimental.appDir - it's not needed in Next.js 14
}

module.exports = nextConfig
