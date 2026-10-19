import type { Metadata } from "next";

// ============================================
// LUXURY GOLDEN TRIANGLE TOUR - SEO METADATA
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
    "Luxury Golden Triangle Tour: Delhi, Agra & Jaipur | India Heritage Travel",
  description:
    "Plan a luxury Golden Triangle Tour of Delhi, Agra, and Jaipur with heritage hotels, private transport, guided sightseeing, and a personalized itinerary.",
  keywords: [
    "Luxury Golden Triangle Tour",
    "Luxury Golden Triangle Tour India",
    "Luxury Delhi Agra Jaipur Tour",
    "Private Golden Triangle Tour",
    "Golden Triangle Luxury Travel",
    "Luxury Golden Triangle Itinerary",
    "Luxury India Tour Packages",
    "Luxury Hotels in Delhi Agra Jaipur",
    "Luxury Heritage Hotels India",
    "Private Guided Tour India",
    "Luxury Jaipur Tour",
    "Luxury Agra Tour",
    "Luxury Delhi Tour",
    "Golden Triangle Tour Packages",
    "India Heritage Travel",
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
    canonical: "/blog/luxury-golden-triangle-tour",
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
    url: "https://indiaheritagetravel.com/blog/luxury-golden-triangle-tour",
    siteName: "India Heritage Travel",
    title:
      "Luxury Golden Triangle Tour: Delhi, Agra & Jaipur",
    description:
      "Explore Delhi, Agra, and Jaipur with a luxury Golden Triangle itinerary featuring heritage stays, private transport, and guided sightseeing.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782279641/pexels-axp-photography-500641970-19195961_aqlgse.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Golden Triangle Tour India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Luxury Golden Triangle Tour India",
    description:
      "Discover Delhi, Agra, and Jaipur with a personalized luxury tour featuring heritage hotels, private transport, and guided sightseeing.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782279641/pexels-axp-photography-500641970-19195961_aqlgse.jpg",
    ],
  },
};