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
    "Best Time to Visit the Golden Triangle: Weather & Seasons | India Heritage Travel",
  description:
    "Find the best time to visit the Golden Triangle in India. Compare weather, seasons, festivals, and travel conditions in Delhi, Agra, and Jaipur.",
  keywords: [
    "Best Time to Visit the Golden Triangle",
    "Best Time to Visit Golden Triangle India",
    "Golden Triangle India Weather",
    "Best Month to Visit Golden Triangle",
    "Delhi Agra Jaipur Weather",
    "Golden Triangle Tour Seasons",
    "Golden Triangle Tour in Winter",
    "Golden Triangle Tour in Summer",
    "Golden Triangle Tour During Monsoon",
    "Golden Triangle Festivals",
    "Delhi Agra Jaipur Best Time to Visit",
    "Golden Triangle Travel Tips",
    "Golden Triangle Tour India",
    "India Travel Guide",
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
      "Best Time to Visit the Golden Triangle: Weather & Seasons",
    description:
      "Compare seasons, weather, festivals, and sightseeing conditions in Delhi, Agra, and Jaipur to plan your Golden Triangle trip.",
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
      "Best Time to Visit the Golden Triangle",
    description:
      "Explore weather patterns, seasons, festivals, and expert travel tips to choose the perfect time for your Golden Triangle tour.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782104429/nils-huenerfuerst-T8X8vgj0Ink-unsplash_ayktot.jpg",
    ],
  },
};