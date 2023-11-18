/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
              }
        ]
    }
}

const withNextIntl = require('next-intl/plugin')();
 
module.exports = withNextIntl({
    nextConfig
});

