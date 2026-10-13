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
    "New Delhi Travel Guide: Best Places to Visit & Travel Tips | India Heritage Travel",
  description:
    "Plan your New Delhi trip with this travel guide to iconic attractions, Old Delhi, local food, cultural experiences, practical travel tips, and advice for first-time visitors.",
  keywords: [
    "New Delhi Travel Guide",
    "Delhi Travel Guide",
    "Best Places to Visit in Delhi",
    "Delhi Travel Tips",
    "Things to Do in Delhi",
    "Delhi Tourist Attractions",
    "Old Delhi Travel Guide",
    "New Delhi Sightseeing",
    "Delhi Itinerary",
    "Delhi Food Guide",
    "Delhi Cultural Experiences",
    "Delhi Local Markets",
    "First-Time Visitor Guide to Delhi",
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
      "New Delhi Travel Guide: Best Places to Visit & Travel Tips",
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
      "New Delhi Travel Guide: Best Places to Visit & Travel Tips",
    description:
      "Discover the best of New Delhi with travel tips, must-visit attractions, local experiences, and practical advice for first-time visitors.",
    images: [
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779828252/blog-12_dxeh3u.jpg",
    ],
  },
};