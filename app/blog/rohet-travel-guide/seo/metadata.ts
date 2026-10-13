import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${SITE_URL}/blog/rohet-travel-guide`;
const OG_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1787710578/rohet-garh-swimming-pool_qtieun.webp";

// ============================================
// ROHET TRAVEL GUIDE - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Rohet Travel Guide: Palace Life & Bishnoi Village Experiences | India Heritage Travel",
  description:
    "This Rohet travel guide covers Rohet Garh Palace, Bishnoi village safaris, wildlife, food and a suggested itinerary - plan a luxury heritage escape near Jodhpur with India Heritage Travel.",
  keywords: [
    "Rohet Travel Guide",
    "Rohet Rajasthan",
    "Rohet Garh",
    "Rohet Garh Palace",
    "Rohet Palace",
    "Rohet Heritage Hotel",
    "Rohet Bishnoi Village Safari",
    "Bishnoi Village Safari",
    "Rohet Wildlife Safari",
    "Rohet Blackbuck Safari",
    "Rohet Chinkara Safari",
    "Rohet Marwari Horse Riding",
    "Rohet Camel Safari",
    "Rohet Rajasthan Travel",
    "Rohet Luxury Travel",
    "Rohet Travel Itinerary",
    "Rohet Things to Do",
    "Rohet Attractions",
    "Rohet Food",
    "Rohet Near Jodhpur",
    "Jodhpur to Rohet",
    "Bishnoi Community Rajasthan",
    "Rural Rajasthan",
    "Marwar Rajasthan",
    "Luxury Rajasthan Travel",
    "Rajasthan Heritage Tour",
    "India Heritage Travel",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "Rohet Travel Guide: Palace Life & Bishnoi Village Experiences | India Heritage Travel",
    description:
      "Explore Rohet Garh, Bishnoi village safaris, blackbuck and chinkara wildlife, Marwari horses, rural Rajasthan experiences and luxury heritage stays near Jodhpur.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Rohet Garh heritage palace hotel exterior at golden hour in Rohet, Rajasthan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rohet Travel Guide: Palace Life & Bishnoi Village Experiences | India Heritage Travel",
    description:
      "Discover Rohet Garh, Bishnoi villages, wildlife safaris, Marwari horses, rural Rajasthan culture and luxury heritage travel near Jodhpur.",
    images: [OG_IMAGE],
  },
};