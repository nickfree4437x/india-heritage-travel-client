
import type { Metadata } from "next";

// ============================================
// BLOG PAGE SEO METADATA
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
    "India Travel Blog | Heritage, Food, Solo & Honeymoon Guides | India Heritage Travel",

  description:
    "Explore India's rich heritage, authentic food, cultural experiences, solo travel guides, honeymoon ideas, destination itineraries, and expert travel tips. Discover inspiring stories and trusted travel insights with India Heritage Travel.",

  keywords: [
    "India Travel Blog",
    "India Travel Guide",
    "Travel Blogs India",
    "India Heritage Travel",
    "India Tourism",
    "Indian Heritage",
    "Cultural Travel India",
    "Solo Travel India",
    "Honeymoon in India",
    "India Food Guide",
    "Jaipur Travel Guide",
    "Rajasthan Travel Blog",
    "Golden Triangle Guide",
    "Luxury India Tours",
    "Travel Tips India",
    "India Itinerary",
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

  // Base canonical for the main blog listing.
  // Paginated canonicals will be handled in app/blog/page.tsx.
  alternates: {
    canonical: "/blog",
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
    type: "website",
    locale: "en_IN",
    url: "https://indiaheritagetravel.com/blog",
    siteName: "India Heritage Travel",

    title:
      "India Travel Blog | Heritage, Food, Solo & Honeymoon Guides | India Heritage Travel",

    description:
      "Discover India's rich heritage, authentic travel experiences, cultural journeys, food guides, honeymoon ideas, and expert travel blogs from India Heritage Travel.",

    images: [
      {
        url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779634924/hero-1_xs9azf.jpg",
        width: 1200,
        height: 630,
        alt: "India Heritage Travel Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "India Travel Blog | Heritage, Food, Solo & Honeymoon Guides | India Heritage Travel",

    description:
      "Explore authentic India travel guides, heritage destinations, food experiences, solo travel tips, and expert travel insights.",

    images: [
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779634924/hero-1_xs9azf.jpg",
    ],
  },
};
