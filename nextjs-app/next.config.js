/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' https://easy-market-iota.vercel.app;
  child-src 'self';
  style-src 'self' https://easy-market-iota.vercel.app;
  font-src 'self' https://easy-market-iota.vercel.app;
`

const nextConfig = {
    async headers() {
        return [
          {
            source: '/',
            headers: [
              {
                key: 'Content-Security-Policy',
                value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
              },
            ],
          },
        ]
    },
    experimental: {
        serverActions: true
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
