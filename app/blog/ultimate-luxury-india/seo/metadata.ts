import type { Metadata } from "next";

// ============================================
// LUXURY INDIA ITINERARY - SEO METADATA
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
    "Luxury India Tour Itinerary: 10-Day Premium Travel Guide",
  description:
    "Explore a luxury India tour itinerary featuring royal palaces, heritage hotels, cultural landmarks, and premium experiences. Discover destination ideas for planning a memorable 10-day journey across India.",
  keywords: [
    "Luxury India Tour Itinerary",
    "Luxury India Tour",
    "10 Day Luxury India Tour",
    "Luxury India Travel",
    "Luxury Holidays in India",
    "Luxury India Travel Itinerary",
    "Golden Triangle Luxury Tour",
    "Luxury Rajasthan Tour",
    "Heritage Hotels in India",
    "Royal Palace Stays in India",
    "Private Luxury Tours India",
    "Luxury Cultural Tours India",
    "Premium India Tour Packages",
    "Luxury Travel Guide India",
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
    canonical: "/blog/ultimate-luxury-india",
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
    url: "https://indiaheritagetravel.com/blog/ultimate-luxury-india",
    siteName: "India Heritage Travel",
    title:
      "Luxury India Tour Itinerary: 10-Day Premium Travel Guide",
    description:
      "Explore a luxury India itinerary with royal palaces, heritage hotels, cultural landmarks, and premium travel experiences across India.",
    images: [
      {
        url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779819835/blog-10_ex9fic.webp",
        width: 1200,
        height: 630,
        alt: "Luxury India Tour Itinerary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Luxury India Tour Itinerary: 10-Day Premium Travel Guide",
    description:
      "Discover royal palaces, heritage hotels, luxury stays, and unforgettable journeys across India.",
    images: [
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779819835/blog-10_ex9fic.webp",
    ],
  },
};