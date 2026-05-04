import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/**',
      },
      // ADD THIS FOR PRODUCTION:
      {
        protocol: 'https',
        hostname: 'https://ecoshop-backend-n4o8.onrender.com', // Replace with your actual Render URL
        pathname: '/media/**',
      },
    ],
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;