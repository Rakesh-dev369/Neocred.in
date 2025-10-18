import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    domains: ['api.dicebear.com', 'neocred-backend.fly.dev'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Performance optimizations
  experimental: {
    suppressHydrationWarning: true,
    optimizeCss: true,
    scrollRestoration: true,
  },
  
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  
  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://neocred-backend.fly.dev',
    NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://neocred.in',
    NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT || 'production',
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel-analytics.com *.hotjar.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://neocred-backend.fly.dev *.vercel-analytics.com *.hotjar.com;",
          },
        ],
      },
    ];
  },
  
  // API rewrites for backend
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://neocred-backend.fly.dev/api/:path*',
      },
    ];
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/docs',
        destination: 'https://neocred-backend.fly.dev/docs',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;