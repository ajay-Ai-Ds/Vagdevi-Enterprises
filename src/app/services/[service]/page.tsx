import { notFound } from "next/navigation";
import Link from "next/link";
import { Home } from "lucide-react";
import { servicesData } from "@/utils/servicesData";
import { ServiceHero, ServiceStickyBar, ServiceTrustBar } from "@/components/sections/service-page/ServiceHero";
import { ServiceAbout, ServiceImages, ServiceBenefits, ServiceSpecs } from "@/components/sections/service-page/ServiceContent";
import { ServiceTimeline, ServiceWhyChoose, ServiceRelated, ServiceFAQs } from "@/components/sections/service-page/ServiceProcess";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import LightboxGallery from "@/components/ui/lightbox-gallery";
import ContactForm from "@/components/sections/ContactForm";
import { generateBreadcrumbSchema, generateFAQPageSchema } from "@/utils/schema";

interface PageProps {
  params: Promise<{ service: string }>;
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const serviceDetail = servicesData[resolvedParams.service];

  if (!serviceDetail) {
    return {
      title: "Service Not Found | Vagdevi Enterprises",
    };
  }

  return {
    title: `${serviceDetail.title}`,
    description: serviceDetail.description,
    alternates: {
      canonical: `/services/${resolvedParams.service}`,
    },
    openGraph: {
      title: `${serviceDetail.title}`,
      description: serviceDetail.description,
      url: `https://vagdevienterprises.com/services/${resolvedParams.service}`,
      images: [
        {
          url: serviceDetail.image,
          width: 1200,
          height: 630,
          alt: serviceDetail.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceDetail.title}`,
      description: serviceDetail.description,
      images: [serviceDetail.image],
    },
  };
}

// Generate static params for Next.js static page generation (SSG)
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    service: slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const serviceDetail = servicesData[resolvedParams.service];

  if (!serviceDetail) {
    notFound();
  }

  // Related Services (related services from same category, excluding current service)
  const relatedServices = Object.values(servicesData)
    .filter((s) => s.category === serviceDetail.category && s.slug !== serviceDetail.slug)
    .slice(0, 5);

  // Dynamic Service Schema details
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceDetail.name,
    "serviceType": serviceDetail.categoryName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Vagdevi Enterprises",
      "telephone": "+91 80190 91366",
      "email": "vagdevienterprises07@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
      },
    },
    "description": serviceDetail.description,
    "areaServed": {
      "@type": "State",
      "name": "Chennai, Tamil Nadu",
    },
  };

  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: serviceDetail.categoryName, item: `/services/${serviceDetail.category}` },
    { name: serviceDetail.name, item: `/services/${serviceDetail.slug}` },
  ];

  const faqSchema = generateFAQPageSchema(serviceDetail.faqs);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Inject Dynamic Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Inject Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />

      {/* Inject FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Sticky Bottom/Top Contact Bar */}
      <ServiceStickyBar name={serviceDetail.name} />

      {/* Hero Section */}
      <ServiceHero
        name={serviceDetail.name}
        categoryName={serviceDetail.categoryName}
        title={serviceDetail.title}
        subtitle={serviceDetail.description}
        aiOverview={serviceDetail.aiOverview}
        image={serviceDetail.image}
      />

      {/* Trust Badges Bar */}
      <ServiceTrustBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Localized Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-accent-orange">
            Services
          </Link>
          <span>/</span>
          <Link href={`/services/${serviceDetail.category}`} className="hover:text-accent-orange capitalize">
            {serviceDetail.categoryName}
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold truncate max-w-[200px]">
            {serviceDetail.name}
          </span>
        </nav>
      </div>

      {/* About Section */}
      <ServiceAbout
        name={serviceDetail.name}
        longDescription={serviceDetail.longDescription}
        benefits={serviceDetail.benefits}
      />

      {/* Collage Gallery Section */}
      <ServiceImages
        name={serviceDetail.name}
        image={serviceDetail.image}
        supportingImages={serviceDetail.supportingImages}
      />

      {/* Benefits Card Grid */}
      <ServiceBenefits benefits={serviceDetail.benefits} />

      {/* 6-Step Installation Process Timeline */}
      <ServiceTimeline />

      {/* Technical Specifications Table */}
      <ServiceSpecs specsTable={serviceDetail.specsTable} />

      {/* Why Choose Vagdevi Enterprises Section */}
      <ServiceWhyChoose />

      {/* Interactive Before & After Comparison Slider */}
      <section className="bg-white py-20 scroll-mt-12" id="comparison-slider">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-center">
              Visual Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              Interactive Before & After Demonstration
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Drag the central divider bar to see the direct aesthetic difference between unprotected spaces and a secure Vagdevi Enterprises setup.
            </p>
          </div>
          <BeforeAfterSlider
            beforeImage={serviceDetail.beforeImage}
            afterImage={serviceDetail.afterImage}
          />
        </div>
      </section>

      {/* Interactive Lightbox 6-Image Grid */}
      <section className="bg-slate-50 py-20 scroll-mt-12" id="lightbox-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-100 px-3.5 py-1.5 rounded-full inline-block self-center">
              Installation Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              Photo Gallery & Close-Ups
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Click on any thumbnail below to expand the image in high-resolution, navigate through options, or toggle escape.
            </p>
          </div>
          <LightboxGallery images={serviceDetail.gallery} serviceName={serviceDetail.name} />
        </div>
      </section>

      {/* 12-Item Voice Search Friendly FAQs Accordion */}
      <ServiceFAQs faqs={serviceDetail.faqs} serviceName={serviceDetail.name} />

      {/* Localities Serviced List for this Service */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h3 className="text-xl font-extrabold text-slate-800 mb-2">
            Local {serviceDetail.name} Installation Areas
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mb-6">
            We provide specialized, high-tension safety installations customized for local residential codes across key Chennai localities:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["anna-nagar", "adyar", "velachery", "omr"].map((locSlug) => {
              const locName = locSlug
                .replace("-", " ")
                .replace(/\b\w/g, (c) => c.toUpperCase());
              return (
                <Link
                  key={locSlug}
                  href={`/services/${serviceDetail.slug}/${locSlug}`}
                  className="flex items-center gap-2.5 p-3.5 bg-slate-50 hover:bg-orange-50 border border-slate-100 hover:border-accent-orange/30 rounded-xl transition-all group font-semibold text-xs sm:text-sm text-slate-700 hover:text-slate-900"
                >
                  <span className="w-2 h-2 rounded-full bg-accent-orange shrink-0"></span>
                  <span>{locName}</span>
                </Link>
              );
            })}
          </div>
          <div className="mt-4 text-xs font-semibold">
            <Link href="/areas" className="text-accent-orange hover:underline">
              View all Chennai service areas &gt;
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Contact Form */}
      <ContactForm />
    </div>
  );
}
