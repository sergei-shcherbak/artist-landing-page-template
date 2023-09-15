/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com"],
  },
};

module.exports = nextConfig;
