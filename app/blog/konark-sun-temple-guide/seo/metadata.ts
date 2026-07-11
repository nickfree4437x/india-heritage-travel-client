import type { Metadata } from "next";

// ============================================
// KONARK SUN TEMPLE GUIDE - SEO METADATA
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
    "Konark Sun Temple Guide 2026 | History, Architecture, Tickets & Travel Tips",
  description:
    "Complete Konark Sun Temple travel guide covering history, architecture, UNESCO significance, Konark Dance Festival, photography tips, tickets, timings, nearby attractions, and Odisha travel advice.",
  keywords: [
    "Konark Sun Temple",
    "Konark Sun Temple Guide",
    "Konark Travel Guide",
    "Sun Temple Odisha",
    "Konark UNESCO World Heritage Site",
    "Konark Dance Festival",
    "Konark Architecture",
    "Konark Chariot Wheels",
    "Konark Photography Guide",
    "Konark Temple Tickets",
    "Konark Temple Timings",
    "Konark History",
    "Odisha Heritage Tour",
    "Puri Konark Tour",
    "Bhubaneswar Konark Tour",
    "Chandrabhaga Beach",
    "Odisha Tourism",
    "Surya Temple Konark",
    "Kalinga Architecture",
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
    canonical: "/blog/konark-sun-temple-guide",
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
    url: "https://indiaheritagetravel.com/blog/konark-sun-temple-guide",
    siteName: "India Heritage Travel",
    title:
      "Konark Sun Temple Guide 2026 | History, Architecture, Tickets & Travel Tips",
    description:
      "Discover the history, architecture, dance festival, photography spots, tickets, nearby attractions, and travel tips for Konark Sun Temple.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783746654/pexels-pkpexels-32888176_battih.jpg",
        width: 1200,
        height: 630,
        alt: "Konark Sun Temple chariot wheel at sunrise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Konark Sun Temple Guide 2026",
    description:
      "Plan the perfect Konark trip with temple highlights, UNESCO heritage insights, tickets, photography advice, and Odisha travel recommendations.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1783746654/pexels-pkpexels-32888176_battih.jpg",
    ],
  },
};