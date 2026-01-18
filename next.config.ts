import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-contributions-api.deno.dev",
      },
    ],
  },
};

export default nextConfig;
