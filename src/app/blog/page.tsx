import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import BlogFilterClient from "./BlogFilterClient";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { blogData } from "@/utils/blogData";

export const metadata: Metadata = {
  title: "Balcony Safety & Home Childproofing Blog | Vagdevi Enterprises",
  description:
    "Expert tips on child safety, bird netting, and invisible grill installations from Vagdevi Enterprises in Chennai.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Balcony Safety & Home Childproofing Blog | Vagdevi Enterprises",
    description:
      "Expert tips on child safety, bird netting, and invisible grill installations from Vagdevi Enterprises in Chennai.",
    url: "https://vagdevienterprises.com/blog",
    siteName: "Vagdevi Enterprises",
    images: [
      {
        url: "/images/hero/invisible-grill.webp",
        width: 1200,
        height: 630,
        alt: "Vagdevi Enterprises - Premium Safety Installations Chennai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balcony Safety & Home Childproofing Blog | Vagdevi Enterprises",
    description:
      "Expert tips on child safety, bird netting, and invisible grill installations from Vagdevi Enterprises in Chennai.",
    images: ["/images/hero/invisible-grill.webp"],
  },
};

export default async function BlogPage() {
  // Fetch all articles from local static registry
  const posts = Object.values(blogData);

  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Safety and Home Childproofing Blog | Vagdevi Enterprises",
    "url": "https://vagdevienterprises.com/blog",
    "description": "Resources on balcony netting, invisible grills, and safety advice.",
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Blog</span>
        </nav>

        {/* Title Header */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-850 bg-orange-100 px-3.5 py-1.5 rounded-full inline-block self-start">
            Safety Resources
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Safety Guides & Home Tips
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Read guides on apartment toddler protection, bird netting setups, and invisible grill rust-proofing.
          </p>
        </div>

        {/* Dynamic client filter page */}
        <BlogFilterClient initialPosts={posts || []} />
      </div>
    </div>
  );
}


