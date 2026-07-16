import type { Metadata } from "next";

// ============================================
// QUTUB MINAR TRAVEL GUIDE - SEO METADATA
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
    "Qutub Minar Travel Guide 2026 | History, Architecture & Delhi Heritage",
  description:
    "Complete Qutub Minar Travel Guide covering history, architecture, Iron Pillar, Qutub Complex monuments, tickets, timings, nearby attractions, photography tips, and travel advice.",
  keywords: [
    "Qutub Minar",
    "Qutub Minar Travel Guide",
    "Qutub Complex",
    "Delhi Heritage",
    "UNESCO World Heritage Site Delhi",
    "Iron Pillar Delhi",
    "Quwwat ul Islam Mosque",
    "Alai Darwaza",
    "Alai Minar",
    "Tomb of Iltutmish",
    "Qutub Minar Tickets",
    "Qutub Minar Timings",
    "Delhi Sultanate Architecture",
    "Qutub Minar Photography Guide",
    "Mehrauli Archaeological Park",
    "South Delhi Attractions",
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
    canonical: "/blog/qutub-minar-travel-guide",
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
    url: "https://indiaheritagetravel.com/blog/qutub-minar-travel-guide",
    siteName: "India Heritage Travel",
    title:
      "Qutub Minar Travel Guide 2026 | History, Architecture & Delhi Heritage",
    description:
      "Explore Qutub Minar, the Iron Pillar, Alai Darwaza, medieval Delhi history, photography spots, travel tips, and nearby attractions.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784173008/daniel-dara--sJRd0qmQJk-unsplash_cvt7ek.jpg",
        width: 1200,
        height: 630,
        alt: "Qutub Minar rising above the historic Qutub Complex in Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Qutub Minar Travel Guide 2026",
    description:
      "Discover Qutub Minar, the Iron Pillar, Delhi Sultanate architecture, travel tips, and nearby heritage attractions.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1784173008/daniel-dara--sJRd0qmQJk-unsplash_cvt7ek.jpg",
    ],
  },
};