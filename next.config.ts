import type { NextConfig } from "next";

const contentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
  connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://analytics.google.com;
  frame-ancestors 'self';
  base-uri 'self';
  form-action 'self';
`.replace(/\n/g, ' ').trim();

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: contentSecurityPolicy },
        ],
      },
    ];
  },
};

export default nextConfig;
