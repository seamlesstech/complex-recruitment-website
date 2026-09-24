import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  // ESLint runs as its own step (`npm run lint`). The repo had no ESLint config
  // before, and existing pages still carry pre-existing lint errors, so letting
  // `next build` enforce lint would newly fail deployments.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
