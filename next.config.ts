import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          // ── Clickjacking protection ──
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // ── MIME-type sniffing protection ──
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // ── Referrer leakage control ──
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // ── Disable unnecessary browser APIs ──
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
          },
          // ── Force HTTPS for 1 year ──
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // ── Block AI scrapers & crawlers at HTTP header level ──
          {
            key: "X-Robots-Tag",
            value: "noai, noimageai",
          },
          // ── Prevent DNS prefetch leaking to 3rd parties ──
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          // ── Cross-Origin isolation policies ──
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          // ── Content Security Policy ──
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://images.unsplash.com https://www.google-analytics.com https://www.googletagmanager.com",
              "connect-src 'self' https://www.google-analytics.com https://www.clarity.ms https://*.clarity.ms https://api.resend.com https://region1.google-analytics.com",
              "media-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "frame-src 'self' https://maps.google.com https://www.google.com",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
      // ── Cache static assets aggressively (production only) ──
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Next.js already sets immutable Cache-Control on /_next/static in prod.
      // Overriding it in dev breaks Turbopack HMR, so we skip it there.
      ...(process.env.NODE_ENV === "production"
        ? [
            {
              source: "/_next/static/(.*)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
          ]
        : []),
    ];
  },
};

export default nextConfig;
