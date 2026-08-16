import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/jaisalmer-travel-guide-golden-city`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1786850130/hotel-lal-garh-fort-and-palace-9hz-7Qpg5wc-unsplash_z3rlbe.jpg";

// ============================================
// JAISALMER TRAVEL GUIDE - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title:
    "Jaisalmer Travel Guide 2026 | Golden City, Fort, Desert & Luxury Travel",
  description:
    "Complete Jaisalmer Travel Guide covering the Golden City, Jaisalmer Fort, historic havelis, Gadisar Lake, Sam Sand Dunes, luxury desert camps, itineraries, practical travel tips and more.",
  keywords: [
    "Jaisalmer Travel Guide",
    "Jaisalmer Travel Guide 2026",
    "Jaisalmer Golden City",
    "Golden City of India",
    "Jaisalmer Tourism",
    "Things to Do in Jaisalmer",
    "Jaisalmer Attractions",
    "Jaisalmer Fort",
    "Jaisalmer Fort Travel Guide",
    "Sonar Quila",
    "Jaisalmer Havelis",
    "Patwon Ki Haveli",
    "Salim Singh Ki Haveli",
    "Nathmal Ki Haveli",
    "Gadisar Lake",
    "Sam Sand Dunes",
    "Thar Desert Safari",
    "Jaisalmer Desert Safari",
    "Jaisalmer Camel Safari",
    "Jaisalmer Jeep Safari",
    "Jaisalmer Luxury Desert Camp",
    "Jaisalmer Luxury Camps",
    "Jaisalmer Heritage Hotels",
    "Jaisalmer Honeymoon",
    "Jaisalmer Solo Travel",
    "Jaisalmer Family Travel",
    "Jaisalmer Travel Tips",
    "Best Time to Visit Jaisalmer",
    "Jaisalmer Itinerary",
    "Jaisalmer 2 Day Itinerary",
    "Jaisalmer 3 Day Itinerary",
    "Kuldhara Village",
    "Bada Bagh Jaisalmer",
    "Desert National Park",
    "Thar Desert Travel",
    "Rajasthan Travel Guide",
    "Rajasthan Desert Travel",
    "Rajasthan Heritage Travel",
    "India Heritage Travel",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "Jaisalmer Travel Guide: The Golden City | Fort, Desert & Luxury Travel",
    description:
      "Explore Jaisalmer's golden sandstone architecture, living fort, historic havelis, Gadisar Lake, Sam Sand Dunes, luxury desert camps and the best ways to experience the Golden City.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Jaisalmer Fort glowing gold at sunset above the old city",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jaisalmer Travel Guide 2026 | Golden City, Fort & Thar Desert",
    description:
      "Discover Jaisalmer's living fort, golden sandstone havelis, desert safaris, luxury camps, itineraries and practical travel tips.",
    images: [IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};