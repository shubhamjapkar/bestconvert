/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['*','localhost','api.bestconvert.in'],
  },
  env:{
    BACKEND_API:process.env.BACKEND_API
  },
  reactStrictMode: true,
}

module.exports = nextConfig
