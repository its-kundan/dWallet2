/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    webpack: (config) => {
      config.externals.push('pino-pretty', 'lokijs', 'encoding')
      config.resolve.fallback = { 
        fs: false,
        net: false,
        tls: false
      }
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
  
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY'
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block'
            }
          ]
        }
      ]
    },
  
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.energiswap.exchange',
          pathname: '/**',
        },
      ],
      minimumCacheTTL: 60,
    },
  
    experimental: {
      optimizePackageImports: ['ethers'],
    }
  }
  
  export default nextConfig