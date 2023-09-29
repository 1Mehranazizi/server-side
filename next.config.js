/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: [process.env.BACKEND_DOMAIN],
  },
};

module.exports = nextConfig;
