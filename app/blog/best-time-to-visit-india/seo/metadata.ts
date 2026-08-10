import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/best-time-to-visit-india`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1786331966/monthaye-b1Ywo-ZKtTs-unsplash_d5rlup.jpg";

// ============================================
// BEST TIME TO VISIT INDIA - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title:
    "Best Time to Visit India (2026) | Month-by-Month Luxury Travel Guide",
  description:
    "Discover the best time to visit India with a month-by-month and region-by-region guide covering seasons, weather, festivals, Rajasthan, Kerala, Ladakh, Golden Triangle, luxury travel, packing tips and itineraries.",
  keywords: [
    "Best Time to Visit India",
    "Best Time to Visit India 2026",
    "India Travel Seasons",
    "India Weather by Month",
    "India Weather Guide",
    "Best Month to Visit India",
    "India Travel Guide",
    "Best Season to Visit India",
    "India Winter Travel",
    "India Summer Travel",
    "India Monsoon Travel",
    "Best Time to Visit Rajasthan",
    "Best Time to Visit Kerala",
    "Best Time to Visit Ladakh",
    "Best Time to Visit Golden Triangle",
    "Best Time to Visit Delhi",
    "Best Time to Visit Agra",
    "Best Time to Visit Taj Mahal",
    "Best Time to Visit Goa",
    "India Festival Calendar",
    "India Luxury Travel",
    "Luxury Tours in India",
    "India Heritage Travel",
    "India Heritage Tours",
    "India Honeymoon Travel",
    "India Wildlife Safari",
    "India Wellness Travel",
    "India Travel Itinerary",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "Best Time to Visit India (2026) | Month-by-Month Luxury Travel Guide",
    description:
      "Plan your India journey around the seasons. Discover the best months and regions for Rajasthan, Kerala, Ladakh, the Golden Triangle, festivals, luxury travel and more.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Luxury Rajasthan haveli courtyard during India's winter travel season",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Time to Visit India (2026) | Complete Seasonal Travel Guide",
    description:
      "A complete guide to the best time to visit India by region, month and travel style, including weather, festivals, packing tips and seasonal itineraries.",
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