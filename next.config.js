/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com"],
  },
};

module.exports = nextConfig;
