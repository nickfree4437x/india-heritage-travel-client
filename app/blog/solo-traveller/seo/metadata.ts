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
    "Solo Female Travel in India: Safety, Wellness & Travel Tips",
  description:
    "Explore solo female travel in India with practical safety tips, wellness retreats, cultural experiences, hidden destinations, and useful advice for planning your journey.",
  keywords: [
    "Solo Female Travel India",
    "Solo Women Travel India",
    "Solo Travel India",
    "Women Traveling Alone in India",
    "Safe Travel for Women in India",
    "India Solo Travel Guide",
    "Solo Female Travel Safety India",
    "Wellness Travel India",
    "Cultural Travel India",
    "Offbeat India Destinations",
    "India Travel Planning",
    "India Travel Tips for Women",
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
    url: "https://indiaheritagetravel.com/blog/solo-traveller",
    siteName: "India Heritage Travel",
    title:
      "Solo Female Travel in India: Safety, Wellness & Travel Tips",
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
      "Solo Female Travel in India: Safety, Wellness & Travel Tips",
    description:
      "Explore inspiring solo travel experiences, wellness journeys, cultural adventures, and hidden destinations across India.",
    images: [
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1579641987/blog-4_rarjqw.jpg",
    ],
  },
};