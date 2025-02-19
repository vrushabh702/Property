/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL], // Add your domain here
    // domains: ['propery-sale.local'], // Add your domain here
  },
};

module.exports = nextConfig;
