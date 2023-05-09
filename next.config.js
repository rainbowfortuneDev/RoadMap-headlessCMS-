const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env['ANALYZE'] === 'true',
})


const useWebpack5 = true;
const config = {
  reactStrictMode: true,
  poweredByHeader: false,
  future: {
    webpack5: useWebpack5,
  },
  webpack: (config, {isServer}) => {
    if (!isServer) {
      if (useWebpack5) {
        config.resolve.fallback.fs = false;
      } else {
        config.node = {
          fs: 'empty',
        };
      }
    }
    return config;
  },
};


/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  swcMinify: true,
    
  images: {
    domains: [
      ...(process.env['NEXT_PUBLIC_BASE_URL']
        ? [new URL(process.env['NEXT_PUBLIC_BASE_URL']).hostname]
        : []),
      ...(process.env['SPACES_ENDPOINT']
        ? [process.env['SPACES_ENDPOINT']]
        : []),
      ...(process.env['SPACES_CDN_BASE_URL']
        ? [new URL(process.env['SPACES_CDN_BASE_URL']).hostname]
        : []),
  
    ],
     
  },
})
