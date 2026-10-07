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
    "India Food Guide: What to Eat, What to Avoid & Travel Tips",
  description:
    "Explore India's diverse cuisine with regional specialties, popular dishes, street food tips, dining etiquette, and practical advice on what to eat and avoid while traveling in India.",
  keywords: [
    "India Food Guide",
    "Indian Food",
    "Indian Cuisine",
    "What to Eat in India",
    "Indian Street Food",
    "Best Food in India",
    "Regional Food in India",
    "Traditional Indian Food",
    "Indian Food Travel Tips",
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
      "India Food Guide: What to Eat, What to Avoid & Travel Tips",
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