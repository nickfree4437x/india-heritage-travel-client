import type { Metadata } from "next";

// ============================================
// TOP HERITAGE SITES IN SOUTH INDIA - SEO METADATA
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
    "Top Heritage Sites in South India (2026) | Complete Travel Guide",
  description:
    "Discover the finest heritage sites across South India including Hampi, Mahabalipuram, Great Living Chola Temples, Kerala, Hyderabad, and more with travel tips, ticket prices, and itineraries.",
  keywords: [
    "Top Heritage Sites in South India",
    "South India Heritage Guide",
    "South India UNESCO Sites",
    "Hampi",
    "Mahabalipuram",
    "Great Living Chola Temples",
    "Brihadeeswarar Temple",
    "Pattadakal",
    "Mysore Palace",
    "Fort Kochi",
    "Mattancherry Palace",
    "Golconda Fort",
    "Charminar",
    "Ramappa Temple",
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
    canonical: "/blog/top-heritage-sites-in-south-india",
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
    url: "https://indiaheritagetravel.com/blog/top-heritage-sites-in-south-india",
    siteName: "India Heritage Travel",
    title:
      "Top Heritage Sites in South India (2026) | Complete Travel Guide",
    description:
      "Explore South India's finest temples, UNESCO monuments, royal palaces, forts, and cultural landmarks with expert travel planning.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784608332/parul-gupta-UuyMc40kpv8-unsplash_svf2mh.jpg",
        width: 1200,
        height: 630,
        alt: "Top Heritage Sites in South India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Top Heritage Sites in South India (2026)",
    description:
      "Plan the ultimate South India heritage journey with temples, palaces, UNESCO sites, and expert travel tips.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1784608332/parul-gupta-UuyMc40kpv8-unsplash_svf2mh.jpg",
    ],
  },
};