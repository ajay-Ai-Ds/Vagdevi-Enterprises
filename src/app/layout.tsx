import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import MobileBottomBar from "@/components/shared/MobileBottomBar";
import { imageAssets } from "@/utils/images";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  themeColor: "#800f2f",
};

export const metadata: Metadata = {
  title: "Vagdevi Enterprises | Premium Invisible Grills & Sports Nets Chennai",
  description:
    "Vagdevi Enterprises offers professional balcony, window, and staircase invisible grills, sports nets, and cricket practice nets in Chennai, Tamil Nadu. Fast installation with premium materials.",
  keywords: [
    "Invisible Grills Chennai",
    "Balcony Invisible Grills Chennai",
    "Window Invisible Grills Chennai",
    "Staircase Invisible Grills Chennai",
    "Sports Nets Chennai",
    "Cricket Practice Nets Chennai",
    "Vagdevi Enterprises Chennai",
  ],
  metadataBase: new URL("https://vagdevienterprises.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vagdevi Enterprises | Premium Invisible Grills & Sports Nets",
    description:
      "Expert invisible steel wire grills and modern sports netting installation in Chennai. Rest assured with safety systems built for high durability and style.",
    url: "https://vagdevienterprises.com",
    siteName: "Vagdevi Enterprises",
    images: [
      {
        url: imageAssets.ogImage.url,
        width: 1200,
        height: 630,
        alt: imageAssets.ogImage.alt,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vagdevi Enterprises | Premium Invisible Grills & Sports Nets",
    description:
      "Premium invisible steel wire grills and sports nets in Chennai, Tamil Nadu.",
    images: [imageAssets.ogImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <head />
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-accent-orange selection:text-white">
        <Navbar />
        <main className="flex-grow pt-[72px] xl:pt-[84px] pb-16 xl:pb-0">{children}</main>
        <Footer />
        <FloatingCTA />
        <MobileBottomBar />

        {/* Google Analytics — loaded after page is interactive */}
        <Script
          id="gtag-src"
          src="https://www.googletagmanager.com/gtag/js?id=G-J35RSXQ5F0"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J35RSXQ5F0');
            gtag('config', 'GT-K52RNPSL');
          `}
        </Script>

        {/* Microsoft Clarity — lazy loaded after page is idle */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            const clarityId = 'CLARITY_PROJECT_ID';
            if (clarityId && !clarityId.includes('PROJECT')) {
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", clarityId);
            }
          `}
        </Script>
      </body>
    </html>
  );
}


