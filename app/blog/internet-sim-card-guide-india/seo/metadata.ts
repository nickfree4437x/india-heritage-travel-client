import type { Metadata } from "next";

// ============================================
// INTERNET & SIM CARD GUIDE - SEO METADATA
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
    "Internet & SIM Card Guide for Tourists in India (2026) | Airtel vs Jio vs eSIM",
  description:
    "Complete Internet & SIM Card Guide for tourists visiting India. Compare Airtel, Jio, Vi, eSIMs, Pocket Wi-Fi, KYC documents, airport SIM cards, data plans, pricing and travel tips.",
  keywords: [
    "India Tourist SIM Card",
    "SIM Card India",
    "Internet in India for Tourists",
    "Airtel Tourist SIM",
    "Jio Tourist SIM",
    "Vi SIM India",
    "India eSIM",
    "Pocket WiFi India",
    "India Data Plans",
    "Travel SIM India",
    "Best SIM Card India",
    "Airport SIM India",
    "India Mobile Internet",
    "India Travel Guide",
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
    canonical: "/blog/internet-sim-card-guide-india",
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
    url: "https://indiaheritagetravel.com/blog/internet-sim-card-guide-india",
    siteName: "India Heritage Travel",
    title:
      "Internet & SIM Card Guide for Tourists in India (2026) | Airtel vs Jio vs eSIM",
    description:
      "Everything international travellers need to know about SIM cards, Airtel, Jio, eSIMs, Pocket Wi-Fi, pricing, KYC and connectivity in India.",
    images: [
      {
        url: "https://indiaheritagetravel.com/images/blogs/internet-sim-guide/hero.webp",
        width: 1200,
        height: 630,
        alt: "Internet and SIM Card Guide for Tourists in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Internet & SIM Card Guide for India (2026)",
    description:
      "Compare Airtel, Jio, eSIM, Pocket Wi-Fi, roaming and data plans before travelling to India.",
    images: [
      "https://indiaheritagetravel.com/images/blogs/internet-sim-guide/hero.webp",
    ],
  },
};