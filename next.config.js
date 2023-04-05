/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['*','localhost'],
  },
  env:{
    BACKEND_API:process.env.BACKEND_API
  },
  reactStrictMode: true,
}

module.exports = nextConfig
