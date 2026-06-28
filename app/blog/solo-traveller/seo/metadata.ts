import type { Metadata } from "next";

// ============================================
// SOLO WOMEN TRAVEL - SEO METADATA
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
    "Solo Women Travel India | Safe, Meaningful & Empowering Travel Experiences | India Heritage Travel",
  description:
    "Explore safe and meaningful solo travel experiences across India. Discover wellness retreats, cultural journeys, hidden destinations, travel planning tips, and empowering adventures designed for solo women travelers.",
  keywords: [
    "Solo Women Travel India",
    "Solo Travel India",
    "Women Solo Travel India",
    "Safe Travel for Women in India",
    "India Solo Travel Guide",
    "Solo Female Travel India",
    "India Heritage Travel",
    "Wellness Travel India",
    "Hidden Places in India",
    "Cultural Travel India",
    "Empowering Travel Experiences",
    "India Travel Planning",
    "Meaningful Travel India",
    "Offbeat India Destinations",
    "Women Travel Experiences",
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
    canonical: "/blog/solo-traveler",
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
    url: "https://indiaheritagetravel.com/blog/solo-traveler",
    siteName: "India Heritage Travel",
    title:
      "Solo Women Travel India | Safe, Meaningful & Empowering Travel Experiences",
    description:
      "Discover cultural journeys, wellness retreats, hidden destinations, and empowering solo travel experiences across India.",
    images: [
      {
        url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1579641987/blog-4_rarjqw.jpg",
        width: 1200,
        height: 630,
        alt: "Solo Women Travel India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Solo Women Travel India | Safe, Meaningful & Empowering Travel Experiences",
    description:
      "Explore inspiring solo travel experiences, wellness journeys, cultural adventures, and hidden destinations across India.",
    images: [
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1579641987/blog-4_rarjqw.jpg",
    ],
  },
};