/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Cosmic performance optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Mystical environment variables
  env: {
    COSMIC_ALIGNMENT: 'aligned',
    MYSTICAL_MODE: 'active',
  },
  // Spiritual redirects for cosmic harmony
  async redirects() {
    return [
      {
        source: '/scrum',
        destination: '/manifesto',
        permanent: true,
      },
      {
        source: '/agile',
        destination: '/manifesto', 
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; 