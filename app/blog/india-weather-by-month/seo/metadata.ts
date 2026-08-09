import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/india-weather-by-month`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1786161165/pexels-a-g-47132025-37168988_ju9gfy.jpg";

// ============================================
// INDIA WEATHER BY MONTH - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title:
    "India Weather by Month (2026) | Best Time to Visit India by Region",
  description:
    "Discover India weather by month with a complete season-by-season guide covering regional climates, best travel months, monsoon, festivals, packing tips, itineraries, and practical travel advice.",
  keywords: [
    "India Weather by Month",
    "India Weather 2026",
    "Best Time to Visit India",
    "India Weather Guide",
    "India Climate by Month",
    "Best Time to Visit India by Region",
    "India Travel Seasons",
    "India Monsoon Season",
    "India Winter Weather",
    "India Summer Weather",
    "India Weather in January",
    "India Weather in February",
    "India Weather in March",
    "India Weather in April",
    "India Weather in May",
    "India Weather in June",
    "India Weather in July",
    "India Weather in August",
    "India Weather in September",
    "India Weather in October",
    "India Weather in November",
    "India Weather in December",
    "Rajasthan Weather",
    "Kerala Weather",
    "North India Weather",
    "South India Weather",
    "Himalayan Weather",
    "Ladakh Weather",
    "Best Season to Visit India",
    "India Monsoon Travel",
    "India Travel Guide",
    "India Travel Tips",
    "India Heritage Travel",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "India Weather by Month (2026) | Complete Season-by-Season Travel Guide",
    description:
      "Plan your India trip around the weather. Explore India's climate month by month, regional weather patterns, monsoon, festivals, packing tips, and the best time to visit major regions.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "India weather by month and seasonal travel guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "India Weather by Month (2026) | Best Time to Visit India",
    description:
      "A complete month-by-month India weather guide covering seasons, regions, monsoon, festivals, packing, and practical travel tips.",
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