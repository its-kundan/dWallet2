/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    webpack: (config) => {
      config.externals.push('pino-pretty', 'lokijs', 'encoding')
      return config
    },
  
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://api.energiswap.exchange/:path*'
        }
      ]
    },
  
    // Optional: Keep these if you need them
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.energiswap.exchange',
          pathname: '/**',
        },
      ],
    }
  }
  
  export default nextConfig