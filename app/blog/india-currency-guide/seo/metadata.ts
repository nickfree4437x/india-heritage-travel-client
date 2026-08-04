import type { Metadata } from "next";

// ============================================
// INDIA CURRENCY GUIDE - SEO METADATA
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
    "India Currency Guide (2026) | Cash, Cards, ATMs & UPI for Tourists",
  description:
    "Complete India Currency Guide for international travellers covering Indian Rupee, UPI, cash, cards, ATMs, forex cards, currency exchange, travel budgets and payment tips for 2026.",
  keywords: [
    "India Currency Guide",
    "Indian Rupee",
    "Cash in India",
    "Cards in India",
    "UPI for Tourists",
    "India UPI One World",
    "India ATM Guide",
    "Currency Exchange India",
    "Forex Card India",
    "India Payment Guide",
    "Travel Money India",
    "India Travel Budget",
    "India Currency Exchange",
    "India Travel Tips",
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
    canonical: "/blog/india-currency-guide",
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
    url: "https://indiaheritagetravel.com/blog/india-currency-guide",
    siteName: "India Heritage Travel",
    title:
      "India Currency Guide (2026) | Cash, Cards, ATMs & UPI for Tourists",
    description:
      "Learn how to pay in India using cash, cards, ATMs, forex cards and UPI. Complete payment guide for international travellers.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785760139/pexels-ravi-roshan-2875998-14907379_qpa43m.jpg",
        width: 1200,
        height: 630,
        alt: "India Currency Guide for Tourists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "India Currency Guide (2026) | Cash, Cards, UPI & ATMs",
    description:
      "Everything you need to know about paying in India before your trip.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1785760139/pexels-ravi-roshan-2875998-14907379_qpa43m.jpg",
    ],
  },
};