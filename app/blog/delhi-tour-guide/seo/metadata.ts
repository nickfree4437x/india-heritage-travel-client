import type { Metadata } from "next";

// ============================================
// NEW DELHI TRAVEL GUIDE - SEO METADATA
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
    "New Delhi Travel Guide: Essential Tips, Attractions & Local Experiences | India Heritage Travel",
  description:
    "Plan your New Delhi trip with this complete travel guide covering iconic attractions, local experiences, cultural insights, food recommendations, safety tips, and practical advice for first-time visitors.",
  keywords: [
    "New Delhi Travel Guide",
    "Delhi Travel Guide",
    "Delhi Travel Tips",
    "Delhi Tourist Attractions",
    "Things to Do in Delhi",
    "Delhi Itinerary",
    "First Time Delhi Visitor Guide",
    "Delhi Sightseeing",
    "Old Delhi Travel Guide",
    "New Delhi Tourist Places",
    "Delhi Food Guide",
    "Delhi Local Experiences",
    "India Travel Guide",
    "Delhi Vacation Guide",
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
    canonical: "/blog/delhi-tour-guide",
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
    url: "https://indiaheritagetravel.com/blog/delhi-tour-guide",
    siteName: "India Heritage Travel",
    title:
      "New Delhi Travel Guide: Essential Tips, Attractions & Local Experiences",
    description:
      "Explore New Delhi with practical travel tips, iconic attractions, local experiences, cultural insights, food recommendations, and essential advice for first-time visitors.",
    images: [
      {
        url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779828252/blog-12_dxeh3u.jpg",
        width: 1200,
        height: 630,
        alt: "New Delhi Travel Guide for First-Time Visitors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "New Delhi Travel Guide | Tips, Attractions & Local Experiences",
    description:
      "Discover the best of New Delhi with travel tips, must-visit attractions, local experiences, and practical advice for first-time visitors.",
    images: [
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779828252/blog-12_dxeh3u.jpg",
    ],
  },
};