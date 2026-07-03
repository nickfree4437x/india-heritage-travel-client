import type { Metadata } from "next";

// ============================================
// BEST TIME TO VISIT GOLDEN TRIANGLE - SEO METADATA
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
    "Best Time to Visit the Golden Triangle India: Weather, Seasons & Travel Tips | India Heritage Travel",
  description:
    "Discover the best time to visit the Golden Triangle India with detailed weather insights, seasonal travel advice, festivals, crowd levels, and expert tips for Delhi, Agra, and Jaipur.",
  keywords: [
    "Best Time to Visit Golden Triangle India",
    "Golden Triangle India Weather",
    "Golden Triangle Travel Guide",
    "Delhi Agra Jaipur Weather",
    "Golden Triangle Seasons",
    "Golden Triangle Travel Tips",
    "Golden Triangle India Itinerary",
    "Best Month to Visit Golden Triangle",
    "Golden Triangle Winter Travel",
    "Golden Triangle Summer Travel",
    "Golden Triangle Monsoon Travel",
    "Delhi Agra Jaipur Tour",
    "Golden Triangle Festivals",
    "India Heritage Travel",
    "Golden Triangle India Guide",
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
    canonical: "/blog/best-time-to-visit-golden-triangle-india",
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
    url: "https://indiaheritagetravel.com/blog/best-time-to-visit-golden-triangle-india",
    siteName: "India Heritage Travel",
    title:
      "Best Time to Visit the Golden Triangle India: Weather, Seasons & Travel Tips",
    description:
      "Plan your Golden Triangle journey with detailed weather insights, seasonal recommendations, festivals, crowd levels, and travel advice for Delhi, Agra, and Jaipur.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782104429/nils-huenerfuerst-T8X8vgj0Ink-unsplash_ayktot.jpg",
        width: 1200,
        height: 630,
        alt: "Best Time to Visit the Golden Triangle India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Time to Visit the Golden Triangle India",
    description:
      "Explore weather patterns, seasons, festivals, and expert travel tips to choose the perfect time for your Golden Triangle tour.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782104429/nils-huenerfuerst-T8X8vgj0Ink-unsplash_ayktot.jpg",
    ],
  },
};