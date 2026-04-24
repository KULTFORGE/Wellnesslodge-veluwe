import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // NEXT_PUBLIC_BASE_PATH is set by the GitHub Actions configure-pages action.
  // Empty string locally and when a custom domain is used.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

export default nextConfig
