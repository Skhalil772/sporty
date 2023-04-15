/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["images.unsplash.com", "cdn.shopify.com", "drive.google.com"],
	},
};

module.exports = nextConfig;
