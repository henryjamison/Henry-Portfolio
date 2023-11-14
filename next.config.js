/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        ppr: true,
      },
}

module.exports = nextConfig
const withVideos = require('next-videos')
module.exports = withVideos()