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
    "Luxury India Tour Itinerary | Ultimate 10-Day Premium Travel Experience | India Heritage Travel",
  description:
    "Discover the ultimate luxury India itinerary featuring royal palaces, heritage hotels, cultural landmarks, premium experiences, private journeys, and unforgettable travel across India's most iconic destinations.",
  keywords: [
    "Luxury India Tour",
    "Luxury India Itinerary",
    "10 Day India Tour",
    "Luxury India Travel",
    "India Luxury Holidays",
    "Luxury Rajasthan Tour",
    "Golden Triangle Luxury Tour",
    "Heritage Hotels India",
    "Royal Palace Stays India",
    "Luxury Travel India",
    "Premium India Tour Packages",
    "India Heritage Travel",
    "Private India Tours",
    "Luxury Cultural Tours India",
    "India Luxury Experiences",
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
      "Luxury India Tour Itinerary | Ultimate 10-Day Premium Travel Experience",
    description:
      "Explore India's finest luxury travel experiences featuring royal palaces, heritage hotels, cultural landmarks, and premium curated journeys.",
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
      "Luxury India Tour Itinerary | Premium Travel Experience",
    description:
      "Discover royal palaces, heritage hotels, luxury stays, and unforgettable journeys across India.",
    images: [
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779819835/blog-10_ex9fic.webp",
    ],
  },
};