import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Home, Phone, Shield, Award, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/utils/servicesData";
import { targetLocalities, localityProfiles, serviceProfiles, generateLocalityServiceContent } from "@/utils/localSEOData";
import { generateBreadcrumbSchema } from "@/utils/schema";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import ContactForm from "@/components/sections/ContactForm";

interface PageProps {
  params: Promise<{ service: string; locality: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  try {
    const content = generateLocalityServiceContent(resolvedParams.service, resolvedParams.locality);
    return {
      title: content.title,
      description: content.description,
      alternates: {
        canonical: `/services/${resolvedParams.service}/${resolvedParams.locality}`,
      },
      openGraph: {
        title: content.title,
        description: content.description,
        url: `https://vagdevienterprises.com/services/${resolvedParams.service}/${resolvedParams.locality}`,
        images: [
          {
            url: "/images/hero/invisible-grill.webp",
            width: 1200,
            height: 630,
            alt: content.h1,
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: content.title,
        description: content.description,
        images: ["/images/hero/invisible-grill.webp"],
      },
    };
  } catch (e) {
    return {
      title: "Service Area Not Found | Vagdevi Enterprises",
    };
  }
}

export async function generateStaticParams() {
  const paramsList: { service: string; locality: string }[] = [];
  const services = Object.keys(serviceProfiles);
  for (const s of services) {
    for (const l of targetLocalities) {
      paramsList.push({
        service: s,
        locality: l,
      });
    }
  }
  return paramsList;
}

export default async function LocalityServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const { service, locality } = resolvedParams;

  const serviceDetail = servicesData[service];
  const localityDetail = localityProfiles[locality];

  if (!serviceDetail || !localityDetail) {
    notFound();
  }

  const content = generateLocalityServiceContent(service, locality);

  // Breadcrumb schema
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: serviceDetail.name, item: `/services/${service}` },
    { name: localityDetail.name, item: `/services/${service}/${locality}` },
  ];

  // Locality specific schema variation
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://vagdevienterprises.com/#localbusiness-${locality}-${service}`,
    "name": `Vagdevi Enterprises - ${serviceDetail.name} in ${localityDetail.name}`,
    "url": `https://vagdevienterprises.com/services/${service}/${locality}`,
    "telephone": "+91 80190 91366",
    "email": "vagdevienterprises@gmail.com",
    "image": serviceDetail.image,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office: Anna Nagar",
      "addressLocality": localityDetail.name,
      "addressRegion": "Tamil Nadu",
      "postalCode": "600040",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0827,
      "longitude": 80.2707,
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${localityDetail.name}, Chennai, Tamil Nadu`,
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
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Inject Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      {/* Inject Locality Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Localized Banner Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden py-16 sm:py-24 shadow-md border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation UI */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-accent-orange">
              Services
            </Link>
            <span>/</span>
            <Link href={`/services/${service}`} className="hover:text-accent-orange">
              {serviceDetail.name}
            </Link>
            <span>/</span>
            <span className="text-slate-200 font-bold truncate max-w-[200px]">
              {localityDetail.name}
            </span>
          </nav>

          <div className="max-w-3xl flex flex-col gap-5 items-start text-left">
            <span className="bg-accent-orange text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              Local SEO Serving {localityDetail.name}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight font-sans tracking-tight">
              {content.h1}
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Professional, highly durable {serviceDetail.name.toLowerCase()} installation services in {localityDetail.name}, Chennai by Vagdevi Enterprises.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: Rich Articles */}
          <div className="lg:col-span-2 flex flex-col gap-10 text-left">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xs border border-slate-100 flex flex-col gap-6">
              <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">
                {serviceDetail.name} Solutions in {localityDetail.name}
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {content.intro}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {content.whyMatters}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {content.installationDetails}
              </p>
            </div>

            {/* Before After Showcase */}
            {serviceDetail.beforeImage && serviceDetail.afterImage && (
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xs border border-slate-100 flex flex-col gap-6">
                <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">
                  Visual Difference & Aesthetics
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm">
                  Drag the central divider bar to see the direct difference between an open, hazard-prone balcony and a secure Vagdevi Enterprises setup.
                </p>
                <div className="w-full rounded-2xl overflow-hidden aspect-[4/3] relative shadow-md">
                  <BeforeAfterSlider
                    beforeImage={serviceDetail.beforeImage}
                    afterImage={serviceDetail.afterImage}
                    beforeLabel="Before Installation"
                    afterLabel="After Secure Setup"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Column: CTA & Trust Metrics */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            {/* Quick Contact Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md relative overflow-hidden text-left border border-slate-800">
              <div className="relative z-10 flex flex-col gap-5">
                <h3 className="text-lg font-bold">Book a Free Measurement</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  We offer free home visits and accurate measurements in {localityDetail.name} with material catalogs.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+918019091366"
                    className="flex items-center justify-center gap-2 bg-accent-orange text-white text-sm font-bold py-3.5 px-6 rounded-full hover:bg-accent-hover transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +91 80190 91366</span>
                  </a>
                  <a
                    href={`https://wa.me/918019091366?text=Hi%20Vagdevi%20Enterprises%2C%20I%20would%20like%20to%20book%20a%20free%20site%20visit%20for%20${serviceDetail.name.toLowerCase()}%20in%20${localityDetail.name}.`}
                    className="flex items-center justify-center gap-2 bg-emerald-600 text-white text-sm font-bold py-3.5 px-6 rounded-full hover:bg-emerald-700 transition-all shadow-md"
                  >
                    <span>Message on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-3xl p-8 shadow-xs border border-slate-100 flex flex-col gap-6 text-left">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Why Vagdevi Enterprises
              </h4>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3.5">
                  <Shield className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">SS316 Marine Grade</h5>
                    <p className="text-slate-500 text-xs">Only premium, rust-proof stainless steel wire meshes used.</p>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <Award className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">5-Year Warranty</h5>
                    <p className="text-slate-500 text-xs">Warranty certificate shared immediately upon completion.</p>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Certified Installers</h5>
                    <p className="text-slate-500 text-xs">Technicians trained for high-rise apartment safety setups.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* General Contact Form Section */}
      <div className="bg-white border-t border-slate-100">
        <ContactForm />
      </div>
    </div>
  );
}
