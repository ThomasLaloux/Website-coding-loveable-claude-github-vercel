/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en', // This means yourdomain.com loads English by default
  },
};

module.exports = nextConfig;
