import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Eye, Shield, ArrowRight, Home } from "lucide-react";
import { servicesData } from "@/utils/servicesData";

export const metadata: Metadata = {
  title: "Professional Invisible Grill & Sports Netting Services in Chennai | Vagdevi Enterprises",
  description:
    "Explore our 8 premium safety netting and invisible grill installation services in Chennai: balcony, window, and staircase invisible grills, sports nets, and cricket practice nets.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Professional Invisible Grill & Sports Netting Services in Chennai | Vagdevi Enterprises",
    description:
      "Explore our 8 premium safety netting and invisible grill installation services in Chennai: balcony, window, and staircase invisible grills, sports nets, and cricket practice nets.",
    url: "https://vagdevienterprises.com/services",
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
    title: "Professional Invisible Grill & Sports Netting Services in Chennai | Vagdevi Enterprises",
    description:
      "Explore our 8 premium safety netting and invisible grill installation services in Chennai: balcony, window, and staircase invisible grills, sports nets, and cricket practice nets.",
    images: ["/images/hero/invisible-grill.webp"],
  },
};

export default function ServicesPage() {
  const servicesList = Object.values(servicesData);

  const categories = [
    {
      id: "invisible-grills",
      name: "Invisible Grills (6 Services)",
      icon: <Eye className="w-5 h-5 text-orange-850" />,
      description: "Elegant, marine-grade SS316 cable grills for balconies, windows, staircases, children safety, pet safety, and pigeon control.",
      items: servicesList.filter((s) => s.category === "invisible-grills"),
    },
    {
      id: "sports-nets",
      name: "Sports Nets (2 Services)",
      icon: <Shield className="w-5 h-5 text-orange-850" />,
      description: "Custom-fitted, high-tensile sports and boundary netting for cricket turfs, football grounds, and terraces.",
      items: servicesList.filter((s) => s.category === "sports-nets"),
    },
  ];

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vagdevienterprises.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://vagdevienterprises.com/services",
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Breadcrumb Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation UI */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Services</span>
        </nav>

        {/* Page Title Header */}
        <div className="text-left max-w-3xl mb-16 flex flex-col gap-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Our Installation Services
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Choose from our 5 certified invisible steel wire grills and sports netting services in Chennai. Handcrafted to protect your space cleanly.
          </p>
        </div>

        {/* Categories Loop */}
        <div className="flex flex-col gap-20">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-28">
              {/* Category Title */}
              <div className="border-b border-slate-200 pb-5 mb-10">
                <h2 className="text-2xl font-extrabold text-slate-800 flex items-center gap-3">
                  <span className="p-2 bg-white rounded-xl shadow-xs border border-slate-100 shrink-0">
                    {cat.icon}
                  </span>
                  <span>{cat.name}</span>
                </h2>
                <p className="text-slate-500 text-sm mt-2 max-w-2xl">{cat.description}</p>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((service) => (
                  <div
                    key={service.slug}
                    className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-slate-100 transition-all duration-300 group flex flex-col h-full"
                  >
                    <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-accent-orange transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary-700 hover:text-accent-orange transition-colors group/btn pt-4 border-t border-slate-50 mt-auto"
                      >
                        <span>View Installation Details</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


