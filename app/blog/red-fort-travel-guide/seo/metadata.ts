import type { Metadata } from "next";

// ============================================
// RED FORT TRAVEL GUIDE - SEO METADATA
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
    "Red Fort Travel Guide 2026 | History, Architecture & Old Delhi Heritage",
  description:
    "Complete Red Fort Travel Guide covering Mughal history, architecture, museums, Chandni Chowk, tickets, timings, itineraries, nearby attractions, and travel tips.",
  keywords: [
    "Red Fort",
    "Red Fort Travel Guide",
    "Lal Qila",
    "Delhi Heritage",
    "Old Delhi Attractions",
    "Red Fort UNESCO",
    "Shah Jahan Red Fort",
    "Red Fort Architecture",
    "Red Fort Sound and Light Show",
    "Chandni Chowk",
    "Jama Masjid",
    "Red Fort Tickets",
    "Red Fort Timings",
    "Red Fort Museums",
    "Old Delhi Food Tour",
    "Delhi Tourism",
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
    canonical: "/blog/red-fort-travel-guide",
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
    url: "https://indiaheritagetravel.com/blog/red-fort-travel-guide",
    siteName: "India Heritage Travel",
    title:
      "Red Fort Travel Guide 2026 | History, Architecture & Old Delhi Heritage",
    description:
      "Explore the Red Fort, Mughal architecture, museums, Chandni Chowk, nearby attractions, travel tips, and heritage experiences.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784270425/pexels-varan-6776755_i3hlhj.jpg",
        width: 1200,
        height: 630,
        alt: "Red Fort Delhi UNESCO World Heritage Site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Red Fort Travel Guide 2026",
    description:
      "Plan the perfect Red Fort visit with museums, Chandni Chowk experiences, travel tips, and nearby attractions.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1784270425/pexels-varan-6776755_i3hlhj.jpg",
    ],
  },
};