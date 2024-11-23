const MillionLint = require('@million/lint');
/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = MillionLint.next({
  rsc: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gsqiyugdxwqvcuirjluv.supabase.co', // Add your Supabase storage domain
        port: '', // Leave empty unless using a specific port
        pathname: '/storage/v1/object/public/images/**', // Match your Supabase image paths
      },
    ],
  },
})(nextConfig);
