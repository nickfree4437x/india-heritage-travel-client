import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/pushkar-travel-guide-sacred-lake-city`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1787110091/austin-curtis-cN1mrrdZ0V4-unsplash_v3emoq.jpg";

// ============================================
// PUSHKAR TRAVEL GUIDE - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title:
    "Pushkar Travel Guide: The Sacred Lake City (2026 Guide)",
  description:
    "Pushkar travel guide to Rajasthan's sacred lake city: Brahma Temple, 52 ghats, camel fair, best time to visit, luxury stays and a 2-day itinerary.",
  keywords: [
    "Pushkar Travel Guide",
    "Pushkar Travel Guide 2026",
    "Pushkar Tourism Guide",
    "Pushkar Rajasthan",
    "Sacred Lake Pushkar",
    "Pushkar Lake",
    "Places to Visit in Pushkar",
    "Things to Do in Pushkar",
    "Brahma Temple Pushkar",
    "Jagatpita Brahma Mandir",
    "Pushkar Temples",
    "Pushkar Ghats",
    "52 Ghats Pushkar",
    "Savitri Mata Temple Pushkar",
    "Varaha Temple Pushkar",
    "Rangji Temple Pushkar",
    "Pushkar History",
    "Pushkar Pilgrimage",
    "Pushkar Spiritual Tourism",
    "Pushkar Bazaar",
    "Pushkar Local Food",
    "Pushkar Cuisine",
    "Camel Safari Pushkar",
    "Pushkar Desert Safari",
    "Pushkar Camel Fair",
    "Pushkar Mela",
    "Pushkar Fair",
    "Pushkar Hot Air Balloon",
    "Pushkar Yoga Retreat",
    "Pushkar Wellness Travel",
    "Best Time to Visit Pushkar",
    "How to Reach Pushkar",
    "Pushkar Itinerary",
    "Pushkar 2 Day Itinerary",
    "Pushkar Travel Tips",
    "Luxury Hotels in Pushkar",
    "Luxury Travel Pushkar",
    "Ajmer Pushkar Tour",
    "Ajmer Pushkar Travel Guide",
    "Rajasthan Cultural Tour",
    "Rajasthan Travel Guide",
    "India Heritage Travel",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "Pushkar Travel Guide: The Sacred Lake City",
    description:
      "Explore Pushkar's sacred lake, 52 ghats, Brahma Temple, Camel Fair, temples, bazaars, desert experiences, luxury stays and practical travel tips.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Sunrise over the sacred ghats of Pushkar Lake in Rajasthan, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pushkar Travel Guide: The Sacred Lake City (2026 Guide)",
    description:
      "Discover Pushkar's sacred lake, Brahma Temple, 52 ghats, Camel Fair, desert experiences, local food, shopping and a practical 2-day itinerary.",
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