/** @type {import(''next'').NextConfig} */
const canonicalHost = 'byabdullah.dev';

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.byabdullah.dev',
          },
        ],
        destination: `https://${canonicalHost}/:path*`,
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'myportfoliowebsite-jade.vercel.app',
          },
        ],
        destination: `https://${canonicalHost}/:path*`,
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;