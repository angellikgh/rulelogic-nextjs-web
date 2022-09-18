/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['react-hook-mousetrap']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
};

module.exports = withTM(nextConfig);
