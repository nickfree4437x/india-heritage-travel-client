import type { Metadata } from "next";

// ============================================
// HAMPI TRAVEL GUIDE - SEO METADATA
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
    "Hampi Travel Guide 2026 | Complete UNESCO Heritage & Vijayanagara Empire Guide",
  description:
    "Complete Hampi Travel Guide covering Vijayanagara Empire history, UNESCO monuments, Vittala Temple, Virupaksha Temple, itineraries, photography spots, nearby attractions, and expert travel tips.",
  keywords: [
    "Hampi Travel Guide",
    "Hampi UNESCO World Heritage Site",
    "Hampi Karnataka",
    "Vijayanagara Empire",
    "Vittala Temple",
    "Virupaksha Temple",
    "Hampi Monuments",
    "Places to Visit in Hampi",
    "Hampi Itinerary",
    "Hampi Photography Guide",
    "Hampi Travel Tips",
    "Hampi Architecture",
    "Lotus Mahal",
    "Elephant Stables Hampi",
    "Hampi History",
    "Hampi Heritage Tour",
    "Best Time to Visit Hampi",
    "South India Heritage Tour",
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
    canonical: "/blog/hampi-travel-guide",
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
    url: "https://indiaheritagetravel.com/blog/hampi-travel-guide",
    siteName: "India Heritage Travel",
    title:
      "Hampi Travel Guide | Complete UNESCO Heritage & Vijayanagara Empire Guide",
    description:
      "Discover Hampi's UNESCO monuments, Vijayanagara history, temples, hidden gems, photography locations, travel tips, and heritage experiences.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783496231/pavan-kumaar-9eZ7rB42xow-unsplash_xfmove.jpg",
        width: 1200,
        height: 630,
        alt: "Hampi ruins and Virupaksha Temple in Karnataka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hampi Travel Guide 2026",
    description:
      "Plan the perfect Hampi trip with monument guides, history, photography spots, itineraries, and practical travel advice.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1783496231/pavan-kumaar-9eZ7rB42xow-unsplash_xfmove.jpg",
    ],
  },
};