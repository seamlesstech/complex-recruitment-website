import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  // The canonical database sector slugs resolve to the existing public sector routes.
  async redirects() {
    return [
      { source: '/sectors/driving-transport', destination: '/sectors/driving', permanent: true },
      { source: '/sectors/industrial-warehouse', destination: '/sectors/industrial', permanent: true },
    ];
  },
};

export default nextConfig;
