import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly set Turbopack workspace root to the project directory
  turbopack: {
    root: './',
  },
};

export default nextConfig;
