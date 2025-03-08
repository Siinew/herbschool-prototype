/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true, // Ensures Next.js allows images without optimization issues
    },
  };
  
  module.exports = nextConfig;