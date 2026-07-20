import { Metadata } from "next";
import Link from "next/link";
import { Home, Shield, Users, Award, Hammer } from "lucide-react";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/utils/schema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "About Us | Invisible Grills & Sports Nets Specialists Chennai | Vagdevi Enterprises",
  description:
    "Learn about Vagdevi Enterprises, Chennai's trusted provider of high-tension balcony invisible grills, staircase grills, window grills, and sports netting systems. Custom installations.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Invisible Grills & Sports Nets Specialists Chennai | Vagdevi Enterprises",
    description:
      "Learn about Vagdevi Enterprises, Chennai's trusted provider of high-tension balcony invisible grills, staircase grills, window grills, and sports netting systems.",
    url: "https://vagdevienterprises.com/about",
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
    title: "About Us | Invisible Grills & Sports Nets Specialists Chennai | Vagdevi Enterprises",
    description:
      "Learn about Vagdevi Enterprises, Chennai's trusted provider of high-tension balcony invisible grills, staircase grills, window grills, and sports netting systems.",
    images: ["/images/hero/invisible-grill.webp"],
  },
};

export default function AboutPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">About Us</span>
        </nav>

        {/* Hero Section */}
        <div className="text-left max-w-3xl mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-800 bg-orange-100 px-3.5 py-1.5 rounded-full inline-block self-start">
            Company Profile
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            About Vagdevi Enterprises
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            We are Chennai&apos;s leading safety invisible steel wire grill and sports netting specialists, securing residential balconies, open window frames, and commercial play courts.
          </p>
        </div>

        {/* Split Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Mission & Story (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs flex flex-col gap-5">
              <h2 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-orange shrink-0" />
                <span>Our Safety Commitment</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Vagdevi Enterprises was established in Chennai to address critical safety gaps in high-rise living. With the rapid development of residential townships along omr, adyar, and tambaram, open balconies and low railings have become active hazards for children and household pets.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our business model is built on utilizing premium, heavy-duty copolymer nylon nets and marine-grade SS316 stainless steel wire invisible grills. We customize every anchoring system to verify that load limits are child-safe.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-orange-100 rounded-xl text-orange-850 self-start">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">Expert Crew</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Our technicians are highly trained in concrete drilling, safety anchoring, and high-tensile wire tensioning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-orange-100 rounded-xl text-orange-850 self-start">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">Premium Materials</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Copolymer UV-stabilized monofilament nets and SS316 steel wires with high weathering resistance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-orange-100 rounded-xl text-orange-850 self-start">
                  <Hammer className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">Clean Finishing</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  We verify safety anchors, clean up dust debris, and run tension checks before leaving your premises.
                </p>
              </div>
            </div>
          </div>

          {/* Verification Stats (Right) */}
          <div className="lg:col-span-4 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col gap-6">
            <h3 className="text-base font-bold text-white border-b border-white/10 pb-3">
              Corporate Credentials
            </h3>

            {/* Factual Data placeholders */}
            <div className="flex flex-col gap-5 text-left">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-500">Years in Business</span>
                <span className="text-xs font-bold text-accent-orange uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-md self-start">
                  Content Required From Client
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-500">Completed Installations</span>
                <span className="text-xs font-bold text-accent-orange uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-md self-start">
                  Content Required From Client
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-500">Certifications & Licenses</span>
                <span className="text-xs font-bold text-accent-orange uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-md self-start">
                  Content Required From Client
                </span>
              </div>
            </div>

            <p className="text-slate-500 text-[10px] leading-relaxed pt-2 border-t border-white/10">
              Vagdevi Enterprises maintains strict compliance standards. All ratings, years of operation, and structural safety certs will be published once the client submits certified copies.
            </p>
          </div>
        </div>

        {/* Lead Inquiry Form */}
        <ContactForm />
      </div>
    </div>
  );
}


