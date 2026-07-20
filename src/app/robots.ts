import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ✅ Allow all legitimate search engines
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Slurp", // Yahoo
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // ❌ Block AI content scrapers & training harvesters
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        disallow: "/",
      },
      {
        userAgent: "Google-Extended",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
      },
      {
        userAgent: "ClaudeBot",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "omgili",
        disallow: "/",
      },
      {
        userAgent: "omgilibot",
        disallow: "/",
      },
      // ❌ Block known malicious & spam bots
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",
      },
      {
        userAgent: "MJ12bot",
        disallow: "/",
      },
      {
        userAgent: "DotBot",
        disallow: "/",
      },
      {
        userAgent: "BLEXBot",
        disallow: "/",
      },
      {
        userAgent: "DataForSeoBot",
        disallow: "/",
      },
      // ✅ Default rule for all other bots
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/test/",
          "/temp/",
          "/development/",
        ],
      },
    ],
    sitemap: "https://vagdevienterprises.com/sitemap.xml",
  };
}


