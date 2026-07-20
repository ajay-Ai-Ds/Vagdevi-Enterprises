import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Request Booking Confirmed | Vagdevi Enterprises",
  description:
    "Your request for a free site measurement and quote has been successfully received by Vagdevi Enterprises. We will contact you shortly.",
  alternates: {
    canonical: "/thank-you",
  },
  openGraph: {
    title: "Thank You | Request Booking Confirmed | Vagdevi Enterprises",
    description:
      "Your request for a free site measurement and quote has been successfully received by Vagdevi Enterprises. We will contact you shortly.",
    url: "https://vagdevienterprises.com/thank-you",
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
    title: "Thank You | Request Booking Confirmed | Vagdevi Enterprises",
    description:
      "Your request for a free site measurement and quote has been successfully received by Vagdevi Enterprises. We will contact you shortly.",
    images: ["/images/hero/invisible-grill.webp"],
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center select-none">
      {/* Google Ads Conversion Event — fires when user lands on /thank-you */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof gtag === 'function') {
              gtag('event', 'generate_lead', {
                'send_to': 'GT-K52RNPSL',
                'event_category': 'Lead',
                'event_label': 'Contact Form Submission'
              });
              gtag('event', 'conversion', {
                'send_to': 'GT-K52RNPSL'
              });
            }
          `,
        }}
      />
      <div className="max-w-md bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md flex flex-col items-center gap-6">
        <div className="p-4 bg-emerald-50 text-success-green rounded-full shadow-xs border border-emerald-100/50">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight leading-none">
            Request Received!
          </h1>
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
            Booking Confirmed
          </h2>
        </div>

        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
          Thank you for contacting Vagdevi Enterprises. Our local Chennai team will review your service requirements and contact you within 24 hours to schedule your free site inspection.
        </p>

        {/* Back channels */}
        <div className="flex flex-col gap-3 w-full border-t border-slate-100 pt-6">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
            Need Instant Booking?
          </span>
          <div className="grid grid-cols-2 gap-3">
            <a
              href="tel:+918019091366"
              className="flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-250 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/918019091366?text=Hi%20Vagdevi%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20invisible%20grills%2Fsports%20nets."
              className="flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-250 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <Link
          href="/"
          className="w-full flex items-center justify-center gap-2 bg-primary-700 hover:bg-accent-orange text-white font-bold py-3.5 rounded-xl transition-all shadow-xs text-xs"
        >
          <span>Return to Homepage</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}


