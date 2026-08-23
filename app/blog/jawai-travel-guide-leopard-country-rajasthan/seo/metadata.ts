import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/jawai-travel-guide-leopard-country-rajasthan`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1787455333/advik-mehta-J7g4hCd8oDo-unsplash_iouelw.jpg";

// ============================================
// JAWAI TRAVEL GUIDE - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title:
    "Jawai Travel Guide: Where Luxury Meets Leopard Country | Rajasthan",
  description:
    "Our complete Jawai travel guide covers leopard safaris, granite hills, Rabari culture, Jawai Dam, luxury tented camps, best time to visit, itineraries and practical travel tips.",
  keywords: [
    "Jawai Travel Guide",
    "Jawai Rajasthan",
    "Jawai Leopard Safari",
    "Jawai Leopard Reserve",
    "Jawai Leopard Country",
    "Leopards in Jawai",
    "Jawai Wildlife Safari",
    "Jawai Wildlife",
    "Jawai Hills",
    "Jawai Granite Hills",
    "Jawai Dam",
    "Jawai Safari",
    "Jawai Safari Rajasthan",
    "Jawai Luxury Camps",
    "Luxury Safari Camps Jawai",
    "Jawai Luxury Travel",
    "Jawai Wildlife Tour",
    "Rajasthan Wildlife Tour",
    "Rabari Culture Jawai",
    "Rabari Tribes Jawai",
    "Jawai Village Experience",
    "Best Time to Visit Jawai",
    "How to Reach Jawai",
    "Jawai Itinerary",
    "Jawai Travel Tips",
    "Jawai Tourism",
    "Jawai Rajasthan Tourism",
    "Jawai Leopard Safari Cost",
    "Jawai Private Safari",
    "Jawai Tented Camps",
    "Jawai Luxury Safari",
    "Jawai Honeymoon",
    "Jawai Family Travel",
    "Jawai Photography",
    "Rajasthan Luxury Travel",
    "Rajasthan Heritage Travel",
    "India Wildlife Travel",
    "India Luxury Travel",
    "India Heritage Travel",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "Jawai Travel Guide: Where Luxury Meets Leopard Country | Rajasthan",
    description:
      "Explore Jawai's leopard country, granite hills, Rabari culture, wildlife safaris, Jawai Dam, luxury tented camps and practical travel tips.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Leopard resting on granite boulders at sunset in Jawai, Rajasthan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jawai Travel Guide: Leopard Safaris, Rabari Culture & Luxury Camps",
    description:
      "Discover Jawai's leopard safaris, granite hills, Rabari culture, luxury camps, best experiences and practical travel planning tips.",
    images: [IMAGE_URL],
  },
};