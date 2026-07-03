import type { Metadata } from "next";

// ============================================
// GOLDEN TRIANGLE TOUR - SEO METADATA
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
    "Golden Triangle Tour India: Ultimate 2026 Guide, Itinerary & Travel Tips | India Heritage Travel",
  description:
    "Plan your Golden Triangle Tour India with this complete 2026 guide covering Delhi, Agra, and Jaipur. Discover itineraries, travel tips, costs, attractions, and the best time to visit.",
  keywords: [
    "Golden Triangle Tour India",
    "Golden Triangle India Itinerary",
    "Golden Triangle Travel Guide",
    "Delhi Agra Jaipur Tour",
    "Golden Triangle Tour Package",
    "Golden Triangle India Cost",
    "Golden Triangle Travel Tips",
    "India Golden Triangle Tour",
    "Golden Triangle Attractions",
    "Delhi Agra Jaipur Itinerary",
    "Luxury Golden Triangle Tour",
    "Golden Triangle First Time Visitors",
    "Best Time for Golden Triangle Tour",
    "India Heritage Travel",
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
    canonical: "/blog/golden-triangle-tour-india-guide",
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
    url: "https://indiaheritagetravel.com/blog/golden-triangle-tour-india-guide",
    siteName: "India Heritage Travel",
    title:
      "Golden Triangle Tour India: Ultimate 2026 Guide, Itinerary & Travel Tips",
    description:
      "Discover everything you need to know about the Golden Triangle Tour India, including Delhi, Agra, Jaipur itineraries, travel tips, attractions, costs, and the best time to visit.",
    images: [
      {
        url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779828252/blog-golden-triangle.jpg",
        width: 1200,
        height: 630,
        alt: "Golden Triangle Tour India Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Golden Triangle Tour India: Ultimate 2026 Guide",
    description:
      "Explore Delhi, Agra, and Jaipur with this complete Golden Triangle Tour India guide featuring itineraries, travel tips, attractions, and costs.",
    images: [
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779828252/blog-golden-triangle.jpg",
    ],
  },
};