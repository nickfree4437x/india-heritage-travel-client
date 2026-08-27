import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${SITE_URL}/blog/khejarla-travel-guide-sleeping-inside-desert-fort`;
const OG_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1787836159/17_ykuc89.jpg";

// ============================================
// KHEJARLA TRAVEL GUIDE - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Khejarla Travel Guide: Sleeping Inside a Desert Fort in Rajasthan",
  description:
    "Our Khejarla travel guide covers the 400-year-old fort's history, safaris, food and best time to visit — plus how to sleep inside a real Rajasthan desert fort.",
  keywords: [
    "Khejarla Travel Guide",
    "Khejarla Fort",
    "Khejarla Rajasthan",
    "Khejarla Heritage Hotel",
    "Palace Stay in Khejarla",
    "Sleeping in a Desert Fort",
    "Things to Do in Khejarla",
    "Khejarla Horse Safari",
    "Bishnoi Village Khejarla",
    "Best Time to Visit Khejarla",
    "How to Reach Khejarla",
    "Khejarla Itinerary",
    "Khejarla Wildlife Safari",
    "Khejarla Blackbuck Safari",
    "Khejarla Chinkara",
    "Marwari Horse Safari",
    "Khejarla Luxury Travel",
    "Khejarla Heritage Stay",
    "Offbeat Rajasthan Destinations",
    "Luxury Heritage Hotels Rajasthan",
    "Rajasthan Heritage Tour",
    "Luxury Rajasthan Travel",
    "India Heritage Travel",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "Khejarla Travel Guide: Sleeping Inside a Desert Fort in Rajasthan",
    description:
      "Explore Khejarla Fort, its 400-year Rajput history, Bishnoi villages, desert wildlife, Marwari horse safaris, local cuisine and luxury heritage stays.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Red sandstone Khejarla Fort rising from the Rajasthan desert at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Khejarla Travel Guide: Sleeping Inside a Desert Fort in Rajasthan",
    description:
      "Discover Khejarla Fort, Bishnoi villages, desert wildlife, Marwari horse safaris and an authentic heritage stay in rural Rajasthan.",
    images: [OG_IMAGE],
  },
};

export default metadata;