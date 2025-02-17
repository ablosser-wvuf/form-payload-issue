/** @type {import('next').NextConfig} */
const config = {
  // Optimize for React 19 and experimental features
  experimental: {
    // Enable modern React features
    serverActions: {
      bodySizeLimit: '2mb',
      allowedOrigins: ['*'],
    },
    // Improve hydration performance
    optimizePackageImports: ['@payloadcms/ui'],
    // Ensure proper module resolution
    esmExternals: true,
  },

  // Ensure proper module handling
  transpilePackages: [
    '@payloadcms/ui',
    '@payloadcms/richtext-lexical',
    '@react-form-builder/core',
    '@react-form-builder/components-rsuite',
  ],

  // Disable strict mode temporarily to reduce hydration issues
  reactStrictMode: false,
}

export default config
