import { imageAssets } from "./images";

export interface SchemaBreadcrumb {
  name: string;
  item: string;
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vagdevi Enterprises",
    "url": "https://vagdevienterprises.com",
    "logo": imageAssets.logoIcon.url,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-80190-91366",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"],
    },
  };
}

export function generateLocalBusinessSchema(areaName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://vagdevienterprises.com/#localbusiness${areaName ? `-${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    "name": `Vagdevi Enterprises${areaName ? ` - ${areaName}` : ""}`,
    "url": `https://vagdevienterprises.com${areaName ? `/areas/${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    "telephone": "+91 80190 91366",
    "email": "vagdevienterprises@gmail.com",
    "image": imageAssets.ogImage.url,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office: Anna Nagar",
      "addressLocality": areaName || "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600040",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0827,
      "longitude": 80.2707,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Invisible Grills and Safety Net Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Invisible Grills",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Balcony Invisible Grills",
                "description": "High-tensile SS316 marine-grade invisible wire grills for high-rise balconies."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Window Invisible Grills",
                "description": "Sleek and highly secure invisible window grids without blocking natural light."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Staircase Invisible Grills",
                "description": "Vertical safety invisible cable grids for staircase handrails and open banisters."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Children Safety Invisible Grills",
                "description": "Closely spaced high-tension wire grids designed for high balcony child protection."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pet Safety Invisible Grills",
                "description": "Bite-proof and scratch-resistant SS316 wire configurations to protect household pets."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pigeon & Bird Exclusion Invisible Grills",
                "description": "Closely spaced thin cable grids that prevent birds from entering balconies and windows."
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Safety Nets",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sports Boundary Nets",
                "description": "Durable and impact-resistant boundary nets for stadiums, courts, and school turfs."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cricket Practice Nets",
                "description": "Heavy-duty UV-stabilized nylon cricket netting box enclosures for terraces and academies."
              }
            }
          ]
        }
      ]
    }
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://vagdevienterprises.com",
    "name": "Vagdevi Enterprises",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vagdevienterprises.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(links: SchemaBreadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": links.map((link, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": link.name,
      "item": link.item.startsWith("http") ? link.item : `https://vagdevienterprises.com${link.item}`,
    })),
  };
}

export function generateServiceSchema(serviceName: string, categoryName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "serviceType": categoryName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Vagdevi Enterprises",
      "telephone": "+91 80190 91366",
      "email": "vagdevienterprises@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
      },
    },
    "description": description,
    "areaServed": {
      "@type": "State",
      "name": "Chennai, Tamil Nadu",
    },
  };
}

export function generateFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(title: string, description: string, image: string, datePublished: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "author": {
      "@type": "Organization",
      "name": "Vagdevi Enterprises",
      "url": "https://vagdevienterprises.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vagdevi Enterprises",
      "logo": {
        "@type": "ImageObject",
        "url": imageAssets.logoIcon.url,
      },
    },
  };
}


