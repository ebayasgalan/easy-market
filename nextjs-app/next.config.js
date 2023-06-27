/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        serverActions: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tech-challenges.s3.us-east-2.amazonaws.com',
            },
        ],
    },
}

module.exports = nextConfig
