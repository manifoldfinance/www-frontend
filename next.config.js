const plugin = require("@tailwindcss/typography")
const Beasties = require("beasties-webpack-plugin")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable production mode and disable development checks
  reactStrictMode: false, // Disables strict mode checks for better performance
  productionBrowserSourceMaps: false, // Disables source maps in production

  // Aggressive JavaScript optimization
  swcMinify: true, // Uses SWC for minification instead of Terser
  compiler: {
    removeConsole: {
      exclude: ["error"], // Removes all console.* calls except errors
    },
    emotion: false, // Disables emotion CSS-in-JS processing if you're not using it
  },

  // Experimental features for better performance
  experimental: {
    // Enable modern JavaScript features
    serverActions: {
      bodySizeLimit: "2mb", // Limits server action payload size
    },
    optimizeCss: true, // Enables CSS optimization
    turbo: {
      loaders: {
        // Configure Turbopack loaders for faster builds
        ".png": ["file-loader"],
        ".svg": ["raw-loader"],
      },
    },
    // Enables partial pre-rendering for faster initial page loads
    //    ppr: true,

    // Memory optimizations
    optimizeServerReact: true,
    optimizePackageImports: [],
  },

  // Image optimization settings
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200], // Limited sizes for better caching
    minimumCacheTTL: 60 * 60 * 24 * 365, // Cache images for 1 year
  },

  // Webpack configuration for additional optimizations
  webpack: (config, { dev, isServer }) => {
    // Production-only optimizations
    if (!dev) {
      ;(config.optimization = {
        ...config.optimization,
        mergeDuplicateChunks: true,
        minimize: true,
        sideEffects: true,
        providedExports: true,
        usedExports: true,
        concatenateModules: true,
      }),
        new Beasties({
          // optional configuration
          preload: "swap",
        })
    }

    // Aggressive code splitting
    config.optimization.splitChunks = {
      chunks: "all",
      minSize: 10000,
      maxSize: 250000,
      minChunks: 1,
      maxAsyncRequests: 10,
      maxInitialRequests: 5,
      automaticNameDelimiter: "~",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    }

    return config
  },

  // Headers for better caching and security
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ]
  },
}

module.exports = withBundleAnalyzer(nextConfig)
