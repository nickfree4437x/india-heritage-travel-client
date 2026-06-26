// app/blog/india-food-guide/metadata.ts

import type { Metadata } from "next";

// ============================================
// INDIA FOOD GUIDE - SEO METADATA
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
    "Indian Food Guide | What to Eat, What to Avoid & Travel Tips | India Heritage Travel",
  description:
    "Discover India's diverse cuisine with authentic food recommendations, regional specialties, street food tips, dining etiquette, and practical advice on what to eat and avoid during your journey with India Heritage Travel.",
  keywords: [
    "Indian Food Guide",
    "India Food Guide",
    "What to Eat in India",
    "Indian Street Food",
    "Best Food in India",
    "Indian Cuisine",
    "Regional Food India",
    "Food Travel India",
    "Indian Travel Food Tips",
    "Safe Food in India",
    "India Travel Guide",
    "India Heritage Travel",
    "Indian Local Food",
    "Traditional Indian Food",
    "Indian Dishes",
    "Travel Tips India",
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
    canonical: "/blog/india-food-guide",
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
    url: "https://indiaheritagetravel.com/blog/india-food-guide",
    siteName: "India Heritage Travel",
    title:
      "Indian Food Guide | What to Eat, What to Avoid & Travel Tips | India Heritage Travel",
    description:
      "Explore authentic Indian cuisine, regional specialties, food safety tips, and expert travel advice to enjoy India's incredible culinary journey.",
    images: [
      {
        url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779634924/hero-1_xs9azf.jpg",
        width: 1200,
        height: 630,
        alt: "Indian Food Guide - India Heritage Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Indian Food Guide | What to Eat, What to Avoid & Travel Tips",
    description:
      "Explore India's authentic cuisine, regional dishes, food safety tips, and expert travel recommendations.",
    images: [
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779634924/hero-1_xs9azf.jpg",
    ],
  },
};