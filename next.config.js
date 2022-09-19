/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['react-hook-mousetrap']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTM(nextConfig);
