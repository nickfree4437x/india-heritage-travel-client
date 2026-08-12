import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/india-visa-guide-for-foreign-tourists`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1786508346/global-residence-index-LPdaW746WAw-unsplash_ou5fdg.jpg";

// ============================================
// INDIA VISA GUIDE - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title:
    "India Visa Guide for Foreign Tourists (2026) | e-Visa, Fees & How to Apply",
  description:
    "Complete India Visa Guide for foreign tourists covering e-Visa eligibility, visa types, fees, passport requirements, application process, processing time, entry points, visa extensions and practical travel tips for 2026.",
  keywords: [
    "India Visa Guide for Foreign Tourists",
    "India Visa for Foreign Tourists",
    "India Tourist Visa",
    "India e-Visa",
    "India e-Tourist Visa",
    "India Visa 2026",
    "India Visa Fees 2026",
    "India e-Visa Fees",
    "India e-Visa Eligibility",
    "India e-Visa Eligible Countries",
    "India Visa Requirements",
    "India Tourist Visa Requirements",
    "India Visa Application",
    "How to Apply for India e-Visa",
    "India e-Visa Processing Time",
    "India Visa Processing Time",
    "India Visa Validity",
    "India Visa Duration of Stay",
    "India Visa Entry Points",
    "India e-Visa Airports",
    "India e-Visa Seaports",
    "India Visa Extension",
    "India Visa Scams",
    "India Visa Fraud Prevention",
    "India Travel Insurance",
    "India Travel Tips for Foreign Tourists",
    "India Travel Guide",
    "India Luxury Travel",
    "India Family Travel",
    "India Solo Female Travel",
    "India Heritage Travel",
    "India Heritage Tours",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "India Visa Guide for Foreign Tourists | e-Visa, Fees & How to Apply",
    description:
      "Everything foreign travellers need to know about visiting India in 2026, including e-Visa types, eligibility, fees, documents, application steps, processing times, entry points and practical visa advice.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "India Visa Guide for Foreign Tourists covering e-Visa requirements and travel information",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "India Visa Guide for Foreign Tourists | 2026 e-Visa & Travel Guide",
    description:
      "Learn about India e-Visa eligibility, fees, documents, application steps, processing times, entry points and essential visa tips for foreign travellers.",
    images: [IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};