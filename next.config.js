/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      'img.esa.io',
      'heartbeat.sysken.net'
    ],
  },
}

module.exports = nextConfig