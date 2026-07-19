import type { Metadata } from "next";

// ============================================
// HUMAYUN'S TOMB GUIDE - SEO METADATA
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
    "Humayun's Tomb Guide (2026) | Delhi's First Great Mughal Garden Tomb",
  description:
    "Complete Humayun's Tomb Guide covering Mughal history, Charbagh gardens, UNESCO heritage, architecture, attractions, travel tips, tickets, timings, and nearby places in Delhi.",
  keywords: [
    "Humayun's Tomb",
    "Humayun's Tomb Guide",
    "Humayun Tomb Delhi",
    "Humayun's Tomb Travel Guide",
    "Charbagh Garden",
    "Mughal Architecture",
    "UNESCO Delhi",
    "Humayun's Tomb Tickets",
    "Humayun's Tomb Timings",
    "Isa Khan Tomb",
    "Sunder Nursery",
    "Nizamuddin Dargah",
    "Delhi Heritage Tour",
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
    canonical: "/blog/humayuns-tomb-guide",
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
    url: "https://indiaheritagetravel.com/blog/humayuns-tomb-guide",
    siteName: "India Heritage Travel",
    title:
      "Humayun's Tomb Guide (2026) | Delhi's First Great Mughal Garden Tomb",
    description:
      "Discover Humayun's Tomb, its Charbagh gardens, Mughal architecture, UNESCO heritage, nearby attractions, and practical travel tips.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784445556/pexels-miheertewari-13256094_nhkdrh.jpg",
        width: 1200,
        height: 630,
        alt: "Humayun's Tomb in Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Humayun's Tomb Guide (2026)",
    description:
      "Plan your visit to Humayun's Tomb with expert travel advice, architecture highlights, nearby attractions, and visitor information.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1784445556/pexels-miheertewari-13256094_nhkdrh.jpg",
    ],
  },
};