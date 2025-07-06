import withBundleAnalyzer from "@next/bundle-analyzer"
import { type NextConfig } from "next"

import { env } from "./env.mjs"

const config: NextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  env: {
    NEXT_PUBLIC_WIN_EXE_URL: process.env.NEXT_PUBLIC_WIN_EXE_URL,
    NEXT_PUBLIC_WIN_SETUP_URL: process.env.NEXT_PUBLIC_WIN_SETUP_URL,
    NEXT_PUBLIC_MAC_INTEL_URL: process.env.NEXT_PUBLIC_MAC_INTEL_URL,
    NEXT_PUBLIC_MAC_ARM_URL: process.env.NEXT_PUBLIC_MAC_ARM_URL,
    NEXT_PUBLIC_LINUX_DEB_URL: process.env.NEXT_PUBLIC_LINUX_DEB_URL,
    NEXT_PUBLIC_LINUX_RPM_URL: process.env.NEXT_PUBLIC_LINUX_RPM_URL,
    NEXT_PUBLIC_LINUX_APPIMAGE_URL: process.env.NEXT_PUBLIC_LINUX_APPIMAGE_URL,
  },
  rewrites: async () => [
    { source: "/healthz", destination: "/api/health" },
    { source: "/api/healthz", destination: "/api/health" },
    { source: "/health", destination: "/api/health" },
    { source: "/ping", destination: "/api/health" },
  ],
}

export default env.ANALYZE ? withBundleAnalyzer({ enabled: env.ANALYZE })(config) : config
