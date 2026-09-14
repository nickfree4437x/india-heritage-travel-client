import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/mandu-luxury-heritage-stays-romantic-guide";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const BLOG_TITLE =
  "Mandu Luxury Heritage Stays: Romantic Luxury Among Medieval Ruins";
const BLOG_DESCRIPTION =
  "Discover Mandu luxury heritage stays amid India's most romantic medieval ruins. A complete guide to Jahaz Mahal, Roopmati's Pavilion and private heritage tours.";
const HERO_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1789368460/aakansha-agrawal-fipoV_f13Zw-unsplash_ghphxi.jpg";
const HERO_IMAGE_ALT =
  "Couple watching sunset from Rani Roopmati Pavilion during a Mandu luxury heritage stay";

// ============================================
// MANDU LUXURY HERITAGE STAYS - SEO METADATA
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
    "Mandu Luxury Heritage Stays",
    "Mandu luxury heritage stays romantic guide",
    "Mandu heritage hotels",
    "Mandu luxury hotels",
    "Mandu travel guide",
    "Mandu Madhya Pradesh",
    "Mandu heritage travel",
    "Mandu romantic getaway",
    "Mandu luxury vacation",
    "Mandu honeymoon",
    "Mandu medieval ruins",
    "Jahaz Mahal",
    "Hindola Mahal",
    "Hoshang Shah's Tomb",
    "Jami Masjid Mandu",
    "Rani Roopmati's Pavilion",
    "Baz Bahadur's Palace",
    "Ashrafi Mahal",
    "Rewa Kund",
    "Nilkanth Palace Mandu",
    "Lohani Caves",
    "Champa Baoli",
    "Taveli Mahal",
    "Mandu itinerary",
    "things to do in Mandu",
    "best time to visit Mandu",
    "how to reach Mandu",
    "Mandu from Indore",
    "Mandu luxury heritage tour",
    "Madhya Pradesh luxury travel",
    "Madhya Pradesh heritage tour",
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
        alt: HERO_IMAGE_ALT,
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