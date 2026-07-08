import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Explicitly set the workspace root to suppress the multi-lockfile warning.
    // See: https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
