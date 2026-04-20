import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rangerover-garage.co.uk',
          },
        ],
        destination: 'https://www.rangerover-garage.co.uk/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
