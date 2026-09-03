import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${SITE_URL}/blog/ranakpur-travel-guide-sacred-heritage-aravalli-mountains`;
const HERO_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1788413511/alexander-schimmeck-VSsoSC6a1Gw-unsplash_l6mzem.jpg";
const BLOG_TITLE =
  "Ranakpur Travel Guide: Sacred Heritage in the Aravalli Mountains (2026)";
const BLOG_DESCRIPTION =
  "The complete Ranakpur Travel Guide: explore the 15th-century Chaumukha Jain Temple, Aravalli wildlife, luxury stays, and expert itineraries with India Heritage Travel.";
const BLOG_ALT =
  "Ranakpur Travel Guide — carved white marble pillars of the Chaumukha Jain Temple glowing at sunrise in the Aravalli Mountains, Rajasthan.";

// ============================================
// RANAKPUR TRAVEL GUIDE - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "India Heritage Travel",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  keywords: [
    "Ranakpur Travel Guide",
    "Ranakpur Travel Guide 2026",
    "Ranakpur Jain Temple",
    "Chaumukha Jain Temple",
    "Ranakpur Rajasthan",
    "Ranakpur Travel",
    "Ranakpur Tourism",
    "Ranakpur From Udaipur",
    "Ranakpur From Jodhpur",
    "Kumbhalgarh and Ranakpur",
    "Ranakpur Aravalli Mountains",
    "Ranakpur Wildlife",
    "Ranakpur Wildlife Sanctuary",
    "Ranakpur Heritage Hotels",
    "Ranakpur Luxury Travel",
    "Ranakpur Itinerary",
    "Ranakpur Temple Timings",
    "Ranakpur Temple Entry Fee",
    "Ranakpur Sightseeing",
    "Places to Visit in Ranakpur",
    "Things to Do in Ranakpur",
    "Best Time to Visit Ranakpur",
    "How to Reach Ranakpur",
    "Rajasthan Heritage Tours",
    "Rajasthan Luxury Travel",
    "India Heritage Travel",
  ],
  authors: [
    {
      name: "India Heritage Travel",
      url: SITE_URL,
    },
  ],
  creator: "India Heritage Travel",
  publisher: "India Heritage Travel",
  category: "Travel",
  alternates: {
    canonical: BLOG_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: BLOG_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

export default metadata;