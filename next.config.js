/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disables the floating Next.js dev ("N") indicator (defaults to bottom-left).
  // Dev-only overlay — never ships in production builds. Errors still surface.
  devIndicators: false,

  // Smaller responses + no version fingerprinting.
  compress: true,
  poweredByHeader: false,

  // Tree-shake heavy icon/motion barrels so only used modules ship.
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons"],
  },
};

module.exports = nextConfig;
