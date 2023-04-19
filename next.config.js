/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["puppeteer"] 
  },
  images: {
    domains: ["images.unsplash.com", "images.pexels.com"],
  }
}

module.exports = nextConfig
