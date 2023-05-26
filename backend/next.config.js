module.exports = {
    async rewrites() {
        return {
            afterFiles: [
                {
                source: '/admin',
                destination: `${process.env.FRONTEND_URL}/admin`,
                },
            ],
        }
    },
};