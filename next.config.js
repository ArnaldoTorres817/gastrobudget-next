/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  rewrites: async () => {
    return [
      {
        source: '/api/businesses/:path*',
        destination: 'https://api.yelp.com/v3/businesses/:path*',
      },
      {
        source: '/api/geocode/:path*',
        destination: 'https://api.geoapify.com/v1/geocode/:path*',
      },
    ]
  },
}

module.exports = nextConfig
