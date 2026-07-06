import type { Metadata } from "next";

// ============================================
// GOLDEN TRIANGLE VS RAJASTHAN - SEO METADATA
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
    "Golden Triangle Tour vs Rajasthan Tour: Which India Itinerary Should You Choose? | India Heritage Travel",
  description:
    "Compare the Golden Triangle Tour and Rajasthan Tour to find the perfect India itinerary. Explore destinations, experiences, trip duration, costs, luxury options, and expert travel recommendations.",
  keywords: [
    "Golden Triangle Tour vs Rajasthan Tour",
    "Golden Triangle vs Rajasthan",
    "Golden Triangle Tour India",
    "Rajasthan Tour Package",
    "Rajasthan Travel Guide",
    "India Tour Comparison",
    "Delhi Agra Jaipur Tour",
    "Rajasthan Luxury Tour",
    "Best India Itinerary",
    "India Travel Planning",
    "Luxury India Tours",
    "Golden Triangle Travel Guide",
    "Jaipur Agra Delhi Tour",
    "India Heritage Travel",
    "Rajasthan Holiday Packages",
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
    canonical: "/blog/golden-triangle-tour-vs-rajasthan-tour",
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
    url: "https://indiaheritagetravel.com/blog/golden-triangle-tour-vs-rajasthan-tour",
    siteName: "India Heritage Travel",
    title:
      "Golden Triangle Tour vs Rajasthan Tour: Which India Itinerary Should You Choose?",
    description:
      "Compare the Golden Triangle Tour and Rajasthan Tour to find the perfect India itinerary. Explore destinations, experiences, trip duration, costs, luxury options, and expert travel recommendations.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782365101/sylwia-bartyzel-eU4pipU_8HA-unsplash_mvujnj.jpg",
        width: 1200,
        height: 630,
        alt: "Golden Triangle Tour vs Rajasthan Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Golden Triangle Tour vs Rajasthan Tour",
    description:
      "Compare destinations, travel styles, costs, luxury experiences, and trip durations to choose the ideal India itinerary.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782365101/sylwia-bartyzel-eU4pipU_8HA-unsplash_mvujnj.jpg",
    ],
  },
};