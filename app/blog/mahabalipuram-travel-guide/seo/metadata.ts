import type { Metadata } from "next";

// ============================================
// MAHABALIPURAM TRAVEL GUIDE - SEO METADATA
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
    "Mahabalipuram Travel Guide 2026 | Shore Temple, Five Rathas & UNESCO Heritage",
  description:
    "Complete Mahabalipuram Travel Guide covering Shore Temple, Five Rathas, Arjuna's Penance, UNESCO heritage, history, food, nearby attractions, tickets, itineraries, and expert travel tips.",
  keywords: [
    "Mahabalipuram Travel Guide",
    "Mamallapuram Travel Guide",
    "Mahabalipuram UNESCO Site",
    "Shore Temple",
    "Five Rathas",
    "Arjuna's Penance",
    "Mahabalipuram Attractions",
    "Mahabalipuram History",
    "Pallava Dynasty",
    "Mahabalipuram Beach",
    "Tiger Cave",
    "Mahabalipuram Dance Festival",
    "Things to do in Mahabalipuram",
    "Chennai Day Trip",
    "Tamil Nadu Heritage Tour",
    "Mahabalipuram Tickets",
    "Mahabalipuram Travel Tips",
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
    canonical: "/blog/mahabalipuram-travel-guide",
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
    url: "https://indiaheritagetravel.com/blog/mahabalipuram-travel-guide",
    siteName: "India Heritage Travel",
    title:
      "Mahabalipuram Travel Guide 2026 | Shore Temple, Five Rathas & UNESCO Heritage",
    description:
      "Discover Shore Temple, Five Rathas, Arjuna's Penance, local food, hidden gems, travel tips, and UNESCO heritage monuments in Mahabalipuram.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783855518/brijender-dua-OFSaSqZTC4g-unsplash_yvgbwj.jpg",
        width: 1200,
        height: 630,
        alt: "Shore Temple at sunrise in Mahabalipuram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mahabalipuram Travel Guide 2026",
    description:
      "Plan the perfect Mahabalipuram trip with Shore Temple, Five Rathas, UNESCO heritage insights, local experiences, and practical travel advice.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1783855518/brijender-dua-OFSaSqZTC4g-unsplash_yvgbwj.jpg",
    ],
  },
};