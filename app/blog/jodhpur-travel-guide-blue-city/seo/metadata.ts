import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/jodhpur-travel-guide-blue-city`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1786763699/makm-photography-u0irC_UnbOk-unsplash_m0rqt5.jpg";

// ============================================
// JODHPUR TRAVEL GUIDE - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title:
    "Jodhpur Travel Guide 2026 | Blue City, Mehrangarh Fort & Travel Tips",
  description:
    "Explore Jodhpur, the Blue City of Rajasthan, with this complete travel guide covering Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, old-city markets, food, luxury stays, desert experiences, itineraries and practical travel tips.",
  keywords: [
    "Jodhpur Travel Guide",
    "Jodhpur Travel Guide 2026",
    "Jodhpur Blue City",
    "Blue City of Rajasthan",
    "Jodhpur Tourism",
    "Things to Do in Jodhpur",
    "Jodhpur Attractions",
    "Best Places to Visit in Jodhpur",
    "Mehrangarh Fort",
    "Mehrangarh Fort Jodhpur",
    "Jaswant Thada",
    "Umaid Bhawan Palace",
    "Umaid Bhawan Jodhpur",
    "Mandore Gardens",
    "Sardar Market Jodhpur",
    "Clock Tower Jodhpur",
    "Toorji Ka Jhalra",
    "Rao Jodha Desert Rock Park",
    "Jodhpur Food",
    "Jodhpur Shopping",
    "Jodhpur Local Food",
    "Jodhpur Mewari Cuisine",
    "Jodhpur Honeymoon",
    "Jodhpur Luxury Travel",
    "Jodhpur Luxury Hotels",
    "Jodhpur Palace Hotels",
    "Jodhpur Desert Safari",
    "Jodhpur Desert Experience",
    "Jodhpur Itinerary",
    "Jodhpur 1 Day Itinerary",
    "Jodhpur 2 Day Itinerary",
    "Jodhpur Travel Tips",
    "Best Time to Visit Jodhpur",
    "How to Reach Jodhpur",
    "Jodhpur Solo Travel",
    "Jodhpur Family Travel",
    "Rajasthan Travel Guide",
    "Rajasthan Heritage Travel",
    "Marwar Kingdom",
    "Marwar History",
    "Rathore Dynasty",
    "India Heritage Travel",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "Jodhpur Travel Guide: The Blue City | Mehrangarh Fort & Rajasthan Heritage",
    description:
      "A complete Jodhpur travel guide covering the Blue City, Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, local markets, food, desert experiences, itineraries and practical travel advice.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Panoramic view of Jodhpur Blue City with Mehrangarh Fort",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jodhpur Travel Guide 2026 | Blue City, Mehrangarh Fort & Travel Tips",
    description:
      "Discover Jodhpur's forts, blue houses, palaces, markets, food, desert experiences, luxury stays and practical travel tips.",
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