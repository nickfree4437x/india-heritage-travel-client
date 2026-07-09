import type { Metadata } from "next";

// ============================================================
// METADATA
// ============================================================

export const metadata: Metadata = {
  // ----- BASE -----
  metadataBase: new URL("https://indiaheritagetravel.com"),
  applicationName: "India Heritage Travel",
  referrer: "origin-when-cross-origin",

  // ----- FORMAT DETECTION -----
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  // ----- BASIC SEO -----
  title:
    "Ajanta & Ellora Caves Guide 2026 | History, Architecture, Tickets & Travel Tips",

  description:
    "Complete Ajanta and Ellora Caves travel guide covering history, architecture, UNESCO significance, Kailasa Temple, tickets, timings, photography tips, nearby attractions, and practical travel advice.",

  keywords: [
    "Ajanta Caves",
    "Ellora Caves",
    "Ajanta Ellora Guide",
    "Kailasa Temple",
    "Ajanta Murals",
    "UNESCO World Heritage Sites India",
    "Ellora Architecture",
    "Ajanta History",
    "Aurangabad Tourism",
    "Maharashtra Heritage Tour",
    "Ajanta Ellora Tickets",
    "Ajanta Ellora Travel Guide",
    "Ajanta Cave Paintings",
    "Ellora Jain Caves",
    "India Heritage Travel",
  ],

  // ----- AUTHOR & PUBLISHER -----
  authors: [
    {
      name: "India Heritage Travel",
      url: "https://indiaheritagetravel.com",
    },
  ],

  creator: "India Heritage Travel",
  publisher: "India Heritage Travel",
  category: "Travel",

  // ----- CANONICAL -----
  alternates: {
    canonical: "/blog/ajanta-ellora-caves-guide",
  },

  // ----- ROBOTS -----
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

  // ----- OPEN GRAPH (Facebook / LinkedIn) -----
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://indiaheritagetravel.com/blog/ajanta-ellora-caves-guide",
    siteName: "India Heritage Travel",

    title:
      "Ajanta & Ellora Caves Guide 2026 | History, Architecture, Tickets & Travel Tips",

    description:
      "Explore Ajanta murals, Ellora's Kailasa Temple, UNESCO heritage, tickets, travel tips, and Maharashtra's most extraordinary cave monuments.",

    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783592350/pexels-roman-saienko-1867764487-36098238_kouz4s.jpg",
        width: 1200,
        height: 630,
        alt: "Ajanta Cave Paintings and Ellora Kailasa Temple",
      },
    ],
  },

  // ----- TWITTER (X) -----
  twitter: {
    card: "summary_large_image",
    title: "Ajanta & Ellora Caves Guide 2026",
    description:
      "Plan the perfect Ajanta and Ellora journey with cave highlights, UNESCO heritage insights, tickets, itineraries, and practical travel advice.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1783592350/pexels-roman-saienko-1867764487-36098238_kouz4s.jpg",
    ],
  },
};