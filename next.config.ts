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
      // HTTPS enforcement — 301 for all http:// → https://
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://bolchat.tech/:path*",
        permanent: true,
      },
      // /contact → /demo consolidation (permanent redirect)
      {
        source: "/contact",
        destination: "/demo",
        permanent: true,
      },
    ];
  },

  /* ─────────────────────────────────────────────────────────────────────────
     Security + SEO headers applied to every page response.
     ───────────────────────────────────────────────────────────────────────── */
  async headers() {
    return [
      {
        source: "/.well-known/http-message-signatures-directory",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
      {
        source: "/.well-known/api-catalog",
        headers: [
          {
            key: "Content-Type",
            value: "application/linkset+json",
          },
        ],
      },
      {
        source: "/.well-known/agent-skills/index.json",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
      {
        source: "/.well-known/mcp/server-card.json",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
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
          // Link response headers for agent discovery (RFC 8288)
          {
            key: "Link",
            value: '</docs>; rel="service-doc", </privacy>; rel="privacy-policy", </terms>; rel="terms-of-service"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

