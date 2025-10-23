/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
   experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'], // add explicitly
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
