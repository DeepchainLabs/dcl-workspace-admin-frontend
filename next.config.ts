import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.minio.deepchainlabs.com',
      },
      {
        protocol: 'https',
        hostname: 'platform.deepchainlabs.com',
      },
    ],
  },
};

export default nextConfig;
