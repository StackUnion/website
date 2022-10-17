const withPlugins = require('next-compose-plugins')
const withAnalyzer = require('@next/bundle-analyzer')

const bundleAnalyzer = withAnalyzer({ enabled: process.env.ANALYZE === 'true' })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru'
  }
}

module.exports = withPlugins([bundleAnalyzer], nextConfig)
