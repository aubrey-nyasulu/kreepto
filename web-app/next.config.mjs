/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'coin-images.coingecko.com',
                port: ''
            }
        ]
    }
};

export default nextConfig;
