import { Metadata } from "next";
import Link from "next/link";
import { Home, MapPin, Phone, Mail, Clock } from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";
import MapFrame from "@/components/ui/map-frame";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Free Site Measurement & Quote Chennai | Vagdevi Enterprises",
  description:
    "Get in touch with Vagdevi Enterprises for professional sports nets and invisible grill setup. Call +91 80190 91366 or request a free quote online.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Free Site Measurement & Quote Chennai | Vagdevi Enterprises",
    description:
      "Get in touch with Vagdevi Enterprises for professional sports nets and invisible grill setup. Call +91 80190 91366 or request a free quote online.",
    url: "https://vagdevienterprises.com/contact",
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
    title: "Contact Us | Free Site Measurement & Quote Chennai | Vagdevi Enterprises",
    description:
      "Get in touch with Vagdevi Enterprises for professional sports nets and invisible grill setup. Call +91 80190 91366 or request a free quote online.",
    images: ["/images/hero/invisible-grill.webp"],
  },
};

export default function ContactPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Contact Us", item: "/contact" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Contact Us</span>
        </nav>

        {/* Hero Title */}
        <div className="text-left max-w-3xl mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-800 bg-orange-100 px-3.5 py-1.5 rounded-full inline-block self-start">
            Support Hub
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Get in Touch with Vagdevi Enterprises
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Have questions about wire spacing or invisible grills? Schedule a free site visit or call our support desk directly.
          </p>
        </div>

        {/* NAP Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Business Details (Left) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col gap-6 text-left">
            <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
              Office Information
            </h2>

            <div className="flex flex-col gap-5">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Head Office Address</span>
                  <span className="text-sm font-bold text-slate-700 mt-1">
                    Office: anna-nagar, Chennai,<br />
                    Tamil Nadu 411038
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Phone Number</span>
                  <a href="tel:+918019091366" className="text-sm font-bold text-slate-700 hover:text-accent-orange transition-colors">
                    +91 80190 91366
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Email Address</span>
                  <a href="mailto:vagdevienterprises@gmail.com" className="text-sm font-bold text-slate-700 hover:text-accent-orange transition-colors">
                    vagdevienterprises@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Operating Hours</span>
                  <span className="text-xs font-bold text-slate-700">
                    Monday - Sunday: 08:00 AM - 08:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Frame (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider text-left">Service Map Embed</h3>
            <MapFrame areaName="Chennai" className="h-[360px]" />
          </div>
        </div>

        {/* Lead Inquiry Form */}
        <ContactForm />
      </div>
    </div>
  );
}


