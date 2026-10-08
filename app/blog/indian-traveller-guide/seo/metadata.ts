import type { Metadata } from "next";

// ============================================
// FIRST-TIME TRAVEL GUIDE - SEO METADATA
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
    "First-Time Travel Guide to India: Essential Tips & Travel Advice",
  description:
    "Planning your first trip to India? Discover essential travel tips, cultural insights, safety advice, money tips, and practical guidance for a smooth and memorable journey.",
  keywords: [
    "First-Time Travel Guide to India",
    "India Travel Guide",
    "India Travel Tips",
    "Traveling to India for the First Time",
    "First Time India Travel",
    "India Travel Essentials",
    "India Travel Advice",
    "India Safety Tips",
    "India Culture Guide",
    "India Travel Planning",
    "Things to Know Before Visiting India",
    "India Travel Tips for First-Time Visitors",
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
    canonical: "/blog/indian-traveller-guide",
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
    url: "https://indiaheritagetravel.com/blog/indian-traveller-guide",
    siteName: "India Heritage Travel",
    title:
      "First-Time Travel Guide to India: Essential Tips & Travel Advice",
    description:
      "Explore practical travel tips, cultural insights, safety advice, destination recommendations, and essential guidance for first-time visitors to India.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782540276/pexels-soubhagya23-17685500_tihzeu.jpg",
        width: 1200,
        height: 630,
        alt: "First-Time Travel Guide to India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "First-Time Travel Guide to India: Essential Tips & Travel Advice",
    description:
      "Discover essential travel tips, cultural insights, safety advice, and practical guidance for your first journey to India.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782540276/pexels-soubhagya23-17685500_tihzeu.jpg",
    ],
  },
};