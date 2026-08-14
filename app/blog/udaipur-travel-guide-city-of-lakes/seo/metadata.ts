import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/udaipur-travel-guide-city-of-lakes`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1786681413/jainam-mehta-AVFjDGbqiqE-unsplash_yyofaq.jpg";

// ============================================
// UDAIPUR TRAVEL GUIDE - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title:
    "Udaipur Travel Guide 2026 | City Palace, Lakes, Attractions & Travel Tips",
  description:
    "Complete Udaipur Travel Guide covering City Palace, Lake Pichola, Jag Mandir, Mewar history, major attractions, local food, luxury experiences, nearby day trips, itineraries and practical travel tips.",
  keywords: [
    "Udaipur Travel Guide",
    "Udaipur Travel Guide 2026",
    "Udaipur Tourism",
    "Udaipur City of Lakes",
    "Things to Do in Udaipur",
    "Udaipur Attractions",
    "Best Places to Visit in Udaipur",
    "City Palace Udaipur",
    "Lake Pichola",
    "Jag Mandir Udaipur",
    "Jagdish Temple Udaipur",
    "Saheliyon Ki Bari",
    "Fateh Sagar Lake",
    "Monsoon Palace Udaipur",
    "Sajjangarh Palace",
    "Bagore Ki Haveli",
    "Udaipur Lakes",
    "Udaipur Palaces",
    "Udaipur Heritage",
    "Mewar History",
    "Mewar Dynasty",
    "Maharana Udai Singh II",
    "Maharana Pratap",
    "Udaipur Food",
    "Mewari Cuisine",
    "Best Time to Visit Udaipur",
    "How to Reach Udaipur",
    "Udaipur Itinerary",
    "Udaipur 1 Day Itinerary",
    "Udaipur 2 Day Itinerary",
    "Udaipur Day Trips",
    "Kumbhalgarh Fort",
    "Ranakpur Jain Temples",
    "Chittorgarh Fort",
    "Eklingji Temple",
    "Udaipur Luxury Travel",
    "Udaipur Luxury Hotels",
    "Udaipur Honeymoon",
    "Udaipur Family Travel",
    "Udaipur Solo Travel",
    "Udaipur Travel Tips",
    "Rajasthan Travel Guide",
    "Rajasthan Heritage Travel",
    "India Heritage Travel",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "Udaipur Travel Guide 2026 | City of Lakes, Palaces & Mewar Heritage",
    description:
      "Explore Udaipur's magnificent palaces, lakes, Mewar heritage, major attractions, local cuisine, luxury experiences, nearby destinations, itineraries and essential travel tips.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Udaipur City Palace overlooking Lake Pichola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Udaipur Travel Guide 2026 | City Palace, Lakes & Mewar Heritage",
    description:
      "A complete Udaipur travel guide covering City Palace, Lake Pichola, Mewar history, attractions, food, luxury travel, itineraries and practical travel advice.",
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