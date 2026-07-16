import type { Metadata } from "next";

// ============================================
// SANCHI STUPA TRAVEL GUIDE - SEO METADATA
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
    "Sanchi Stupa Travel Guide 2026 | History, Architecture & UNESCO Heritage",
  description:
    "Complete Sanchi Stupa Travel Guide covering Emperor Ashoka, Buddhist heritage, Great Stupa architecture, toranas, tickets, timings, nearby attractions, photography tips, and travel advice.",
  keywords: [
    "Sanchi Stupa",
    "Sanchi Stupa Travel Guide",
    "Sanchi UNESCO World Heritage Site",
    "Great Stupa Sanchi",
    "Sanchi Toranas",
    "Emperor Ashoka",
    "Buddhist Heritage India",
    "Sanchi Architecture",
    "Sanchi Photography Guide",
    "Sanchi Tickets",
    "Sanchi Timings",
    "Bhopal to Sanchi",
    "Bhimbetka and Sanchi Tour",
    "Udayagiri Caves",
    "Vidisha",
    "Madhya Pradesh Heritage Tour",
    "Buddhist Sites in India",
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
    canonical: "/blog/sanchi-stupa-travel-guide",
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
    url: "https://indiaheritagetravel.com/blog/sanchi-stupa-travel-guide",
    siteName: "India Heritage Travel",
    title:
      "Sanchi Stupa Travel Guide 2026 | History, Architecture & UNESCO Heritage",
    description:
      "Explore the Great Stupa, the famous toranas, Buddhist heritage, photography spots, travel tips, and nearby attractions in Sanchi.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784089284/ameena-tasneem-uT3yN3WqHnM-unsplash_eg4h4n.jpg",
        width: 1200,
        height: 630,
        alt: "The Great Stupa at Sanchi UNESCO World Heritage Site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sanchi Stupa Travel Guide 2026",
    description:
      "Plan the perfect Sanchi visit with expert heritage insights, tickets, timings, nearby attractions, and Buddhist history.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1784089284/ameena-tasneem-uT3yN3WqHnM-unsplash_eg4h4n.jpg",
    ],
  },
};