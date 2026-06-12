import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  Caveat_Brush,
} from "next/font/google";

import Script from "next/script";

import { Toaster } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";

import "./globals.css";

import Navbar from "@/src/navbar-layout/navbar/Navbar";
import StickyPlanButton from "@/src/common/StickyPlanButton";
import WhatsAppSupport from "@/src/common/WhatsAppSupport";

// Body Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Heading Font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Handwritten Font
const caveatBrush = Caveat_Brush({
  subsets: ["latin"],
  variable: "--font-handwritten",
  weight: "400",
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "India Heritage Travel",

  url: "https://indiaheritagetravel.com",

  logo:
    "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779742948/logo2_yhlwmt.png",

  contactPoint: {
    "@type": "ContactPoint",

    telephone: "+91-7062101914",

    contactType: "customer service",

    areaServed: "IN",

    availableLanguage: ["English"],
  },

  sameAs: [
    "https://www.facebook.com/profile.php?id=61559592375914",

    "https://www.instagram.com/indiaheritagetravel",

    "https://youtube.com/@indiaheritagetravel?si=vFEfLrYnv_1DWHqM",

    "https://pin.it/3kPXLj6Jk",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  name: "India Heritage Travel",

  url: "https://indiaheritagetravel.com",

  description:
    "India Heritage Travel offers personalized heritage, cultural, wellness, festival, and luxury tours across India.",

  inLanguage: "en",

  publisher: {
    "@type": "Organization",

    name: "India Heritage Travel",

    url: "https://indiaheritagetravel.com",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://indiaheritagetravel.com"),
  title: "India Heritage Travel",
  description: "Explore Incredible India Journeys",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body
          className={`${inter.variable} ${playfair.variable} ${caveatBrush.variable} font-[var(--font-inter)] antialiased`}
        >

          {/* Organization Schema */}
          <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                organizationSchema
              ),
            }}
          />

          {/* Website Schema */}
          <Script
            id="website-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                websiteSchema
              ),
            }}
          />

          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <main>{children}</main>

          {/* Sticky Plan Your Trip Button */}
          <StickyPlanButton />

          {/* WhatsApp Support */}
          <WhatsAppSupport />

          {/* React Hot Toast */}
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4000,

              style: {
                background: "#fff",
                color: "#333",
                border: "1px solid white",
                padding: "14px 16px",
                fontSize: "13px",
                borderRadius: "12px",
              },

              success: {
                style: {
                  border: "1px solid white",
                },
              },

              error: {
                style: {
                  border: "1px solid white",
                },
              },
            }}
          />

          {/* Google Translate Init */}
          <Script
            id="google-translate-init"
            strategy="afterInteractive"
          >
            {`
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  { pageLanguage: 'en' },
                  'google_translate_element'
                );
              }
            `}
          </Script>

          {/* Google Translate Library */}
          <Script
            src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            strategy="afterInteractive"
          />

          {/* Fix Google Translate Banner */}
          <Script
            id="google-translate-fix"
            strategy="afterInteractive"
          >
            {`
              const removeBanner = () => {
                const banner = document.querySelector('.goog-te-banner-frame');

                if (banner) {
                  banner.remove();
                }

                document.body.style.top = '0px';
              };

              removeBanner();

              const observer = new MutationObserver(() => {
                removeBanner();
              });

              observer.observe(document.body, {
                childList: true,
                subtree: true,
              });
            `}
          </Script>
        </body>
    </html>
  );
}