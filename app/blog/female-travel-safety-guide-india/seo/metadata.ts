import type { Metadata } from "next";

// ============================================
// FEMALE TRAVEL SAFETY GUIDE - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL("https://indiaheritagetravel.com"),
  applicationName: "India Heritage Travel",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  title:
    "Female Travel Safety Guide for India (2026) | Complete Safety & Travel Planning Guide",
  description:
    "Read the ultimate female travel safety guide for India covering transport, accommodation, safety apps, scams, cultural etiquette, practical travel advice, and expert planning tips.",
  keywords: [
    "Female Travel Safety Guide India",
    "Women Travel Safety India",
    "Solo Female Travel India",
    "India Travel Safety Tips",
    "Safe Travel India",
    "Women Only Tours India",
    "India Travel Guide",
    "Female Traveller India",
    "Luxury India Tours",
    "India Heritage Travel",
  ],
  authors: [
    {
      name: "India Heritage Travel",
      url: "https://indiaheritagetravel.com",
    },
  ],
  creator: "India Heritage Travel",
  publisher: "India Heritage Travel",
  category: "Travel",
  alternates: {
    canonical: "/blog/female-travel-safety-guide-india",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://indiaheritagetravel.com/blog/female-travel-safety-guide-india",
    siteName: "India Heritage Travel",
    title:
      "Female Travel Safety Guide for India (2026) | Complete Safety & Travel Planning Guide",
    description:
      "Everything women need to know before travelling in India, including accommodation, transport, safety apps, cultural etiquette, scams, and practical travel advice.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785243228/pexels-rani-sahu-16096244_n44hwj.jpg",
        width: 1200,
        height: 630,
        alt: "Female Travel Safety Guide for India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Female Travel Safety Guide for India (2026)",
    description:
      "Expert travel safety advice for women travelling across India.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1785243228/pexels-rani-sahu-16096244_n44hwj.jpg",
    ],
  },
};