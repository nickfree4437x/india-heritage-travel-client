import type { Metadata } from "next";

// ============================================
// TOP HERITAGE SITES IN NORTH INDIA - SEO METADATA
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
    "Top Heritage Sites in North India (2026) | Complete Travel Guide",
  description:
    "Discover the best heritage sites across North India including Delhi, Agra, Rajasthan, Amritsar, and Varanasi with travel tips, itineraries, ticket prices, and expert planning advice.",
  keywords: [
    "Top Heritage Sites in North India",
    "North India Heritage Guide",
    "North India UNESCO Sites",
    "Delhi Heritage",
    "Agra Heritage",
    "Rajasthan Heritage",
    "Golden Triangle Guide",
    "Taj Mahal",
    "Red Fort",
    "Humayun's Tomb",
    "Qutub Minar",
    "Amber Fort",
    "Mehrangarh Fort",
    "Golden Temple",
    "Varanasi Ghats",
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
    canonical: "/blog/top-heritage-sites-in-north-india",
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
    url: "https://indiaheritagetravel.com/blog/top-heritage-sites-in-north-india",
    siteName: "India Heritage Travel",
    title:
      "Top Heritage Sites in North India (2026) | Complete Travel Guide",
    description:
      "Plan the ultimate North India heritage journey covering Delhi, Agra, Rajasthan, Amritsar, and Varanasi.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784526694/pexels-absoluteabhi-37967925_ousrlv.jpg",
        width: 1200,
        height: 630,
        alt: "Top Heritage Sites in North India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Top Heritage Sites in North India (2026)",
    description:
      "Explore North India's greatest heritage destinations with expert travel insights and itinerary planning.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1784526694/pexels-absoluteabhi-37967925_ousrlv.jpg",
    ],
  },
};