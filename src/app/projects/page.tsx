import { Metadata } from "next";
import Link from "next/link";
import ProjectsFilterClient from "./ProjectsFilterClient";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Completed Invisible Grills & Sports Nets Projects Chennai | Vagdevi Enterprises",
  description:
    "Explore Vagdevi Enterprises portfolio of professional sports nets and invisible grills across Chennai housing complexes.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Completed Invisible Grills & Sports Nets Projects Chennai | Vagdevi Enterprises",
    description:
      "Explore Vagdevi Enterprises portfolio of professional sports nets and invisible grills across Chennai housing complexes.",
    url: "https://vagdevienterprises.com/projects",
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
    title: "Completed Invisible Grills & Sports Nets Projects Chennai | Vagdevi Enterprises",
    description:
      "Explore Vagdevi Enterprises portfolio of professional sports nets and invisible grills across Chennai housing complexes.",
    images: ["/images/hero/invisible-grill.webp"],
  },
};

export default function ProjectsPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Projects", item: "/projects" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Projects</span>
        </nav>

        {/* Title Header */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-850 bg-orange-100 px-3.5 py-1.5 rounded-full inline-block self-start">
            Visual Proof
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Our Installation Portfolio
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Review case profiles of completed sports nets and invisible grills installed by Vagdevi Enterprises in residential complexes and sports turfs across Chennai.
          </p>
        </div>

        {/* Client filter and search panel */}
        <ProjectsFilterClient />
      </div>
    </div>
  );
}


