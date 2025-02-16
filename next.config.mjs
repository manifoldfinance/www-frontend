// @ts-check

/** @type {import('next').NextConfig} */

//

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
  },
  optimizeFonts: true,
  experimental: {
    optimizeCss: true,
    webpackBuildWorker: true,
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
    optimizePackageImports: [
      '@radix-ui/colors',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-avatar',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-icons',
      '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-slider',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
      "@vercel/analytics",
      "cmdk",
      "framer-motion",
      "lucide-react",
      "react-hook-form",
      "react-resizable-panels",
      "recharts",
    ],
  },
}

export default nextConfig
