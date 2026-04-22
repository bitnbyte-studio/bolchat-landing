import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     HTTPS enforcement — 301 permanent redirect for all http:// → https://
     This eliminates the duplicate http://bolchat.tech/ indexed by Google.
     ───────────────────────────────────────────────────────────────────────── */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://bolchat.tech/:path*",
        permanent: true, // 301 — tells Google to consolidate PageRank to HTTPS
      },
    ];
  },

  /* ─────────────────────────────────────────────────────────────────────────
     Security + SEO headers applied to every page response.
     ───────────────────────────────────────────────────────────────────────── */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Force HTTPS for 1 year (HSTS)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // Prevent clickjacking
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Stop MIME sniffing (security + crawl quality)
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Control referrer data sent to third parties
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

