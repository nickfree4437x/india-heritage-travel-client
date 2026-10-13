import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  Caveat_Brush,
} from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import Script from "next/script";
import { Toaster } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";

import "./globals.css";

import Navbar from "@/src/navbar-layout/navbar/Navbar";
import StickyPlanButton from "@/src/common/StickyPlanButton";
import WhatsAppSupport from "@/src/common/WhatsAppSupport";

// ============================================
// FONTS
// ============================================
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const caveatBrush = Caveat_Brush({
  subsets: ["latin"],
  variable: "--font-handwritten",
  weight: "400",
  display: "swap",
});

// ============================================
// SCHEMA DATA (JSON-LD)
// ============================================

// ============================================
// ORGANIZATION ENTITY SCHEMA
// Point #1 - Brand Identity Foundation - DONE
// ============================================
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://indiaheritagetravel.com/#organization",

  // Official brand name
  name: "India Heritage Travel",

  // Legal entity name as specified in the SEO blueprint
  legalName: "India Heritage Travel Pvt. Ltd.",

  // Official website
  url: "https://indiaheritagetravel.com",

  // Official logo
  logo: {
    "@type": "ImageObject",
    url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779742948/logo2_yhlwmt.png",
  },

  // Explicit brand entity
  brand: {
    "@type": "Brand",
    "@id": "https://indiaheritagetravel.com/#brand",
    name: "India Heritage Travel",
    url: "https://indiaheritagetravel.com",
    logo: {
      "@type": "ImageObject",
      url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779742948/logo2_yhlwmt.png",
    },
  },

  // Official business address
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "15-16-17 Maa Shakambhari Nagar-D Block, Near Silver Stream World School, Gandhi Path Road",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302021",
    addressCountry: "IN",
  },

  // Exact official business location coordinates
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.897843",
    longitude: "75.7053949",
  },

  // Official customer contact information
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7062101914",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English"],
  },

  // Verified/canonical social entity signals
  sameAs: [
    "https://www.facebook.com/profile.php?id=61559592375914",
    "https://www.instagram.com/indiaheritagetravel/",
    "https://www.youtube.com/@indiaheritagetravel",
    "https://pin.it/3kPXLj6Jk",
  ],
};

// ============================================
// WEBSITE ENTITY SCHEMA
// Point #2 - Website Entity Architecture
// ============================================
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://indiaheritagetravel.com/#website",

  // Official website identity
  name: "India Heritage Travel",
  url: "https://indiaheritagetravel.com",

  // Website description
  description:
    "India Heritage Travel offers personalized heritage, cultural, wellness, festival, and luxury tours across India.",

  // Targeted international language variants
  inLanguage: ["en-US", "en-GB"],

  // Publisher explicitly connected to Organization Entity
  publisher: {
    "@type": "Organization",
    "@id": "https://indiaheritagetravel.com/#organization",
  },

  // Copyright holder explicitly connected to Organization Entity
  copyrightHolder: {
    "@type": "Organization",
    "@id": "https://indiaheritagetravel.com/#organization",
  },
};

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL("https://indiaheritagetravel.com"),

  title: {
    default: "India Heritage Travel",
    template: "%s | India Heritage Travel",
  },

  description: "Explore Incredible India Journeys",

  alternates: {
    canonical: "https://indiaheritagetravel.com",
  },
};

// ============================================
// ROOT LAYOUT
// ============================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ============================================
            PRECONNECT FOR PERFORMANCE
        ============================================ */}
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
        />

        <link
          rel="dns-prefetch"
          href="https://res.cloudinary.com"
        />
      </head>

      <body
        className={`
          ${inter.variable}
          ${playfair.variable}
          ${caveatBrush.variable}
          font-[var(--font-inter)]
          antialiased
        `}
      >
        {/* ============================================
            GOOGLE TAG MANAGER
        ============================================ */}
        <GoogleTagManager gtmId="GTM-T2N885VS" />

        {/* ============================================
            ORGANIZATION ENTITY SCHEMA
            Global Root-Level JSON-LD
            Point #1 - DONE
        ============================================ */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* ============================================
            WEBSITE ENTITY SCHEMA
            Global Root-Level JSON-LD
            Point #2 - PARTIALLY IMPLEMENTED
        ============================================ */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* ============================================
            NAVBAR
        ============================================ */}
        <Navbar />

        {/* ============================================
            PAGE CONTENT
        ============================================ */}
        <main>{children}</main>

        {/* ============================================
            STICKY PLAN YOUR TRIP BUTTON
        ============================================ */}
        <StickyPlanButton />

        {/* ============================================
            WHATSAPP SUPPORT
        ============================================ */}
        <WhatsAppSupport />

        {/* ============================================
            REACT HOT TOAST
        ============================================ */}
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

        {/* ============================================
            GOOGLE TRANSLATE INITIALIZATION
        ============================================ */}
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

        {/* ============================================
            GOOGLE TRANSLATE LIBRARY
        ============================================ */}
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        {/* ============================================
            FIX GOOGLE TRANSLATE BANNER
        ============================================ */}
        <Script
          id="google-translate-fix"
          strategy="lazyOnload"
        >
          {`
            const removeBanner = () => {
              const banner = document.querySelector(
                '.goog-te-banner-frame'
              );

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