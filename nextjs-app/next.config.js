/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src https://easy-market-git-main-ebayasgalan.vercel.app;
  style-src 'self' https://easy-market-git-main-ebayasgalan.vercel.app;
  font-src 'self';
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
