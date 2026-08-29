import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${SITE_URL}/blog/bundi-travel-guide-blue-city-rajasthan`;
const OG_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1788000847/sanya-kakkar-fji2eOJ2ugk-unsplash_tvzs9n.jpg";

// ============================================
// BUNDI TRAVEL GUIDE - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Bundi Travel Guide: The Forgotten Blue Kingdom of Rajasthan | India Heritage Travel",
  description:
    "Our Bundi travel guide reveals Rajasthan's forgotten blue city, Taragarh Fort, Chitrashala paintings, stepwells, food, itineraries and luxury travel tips.",
  keywords: [
    "Bundi Travel Guide",
    "Bundi Travel Guide 2026",
    "Blue City Bundi",
    "Bundi Rajasthan",
    "Bundi Tourism",
    "Taragarh Fort Bundi",
    "Bundi Palace",
    "Chitrashala Bundi",
    "Bundi Miniature Paintings",
    "Raniji Ki Baori",
    "Bundi Stepwells",
    "Bundi Fort",
    "Bundi Old City",
    "Things to Do in Bundi",
    "Places to Visit in Bundi",
    "Bundi Itinerary",
    "Bundi Travel Tips",
    "Bundi Food",
    "Bundi Heritage Hotels",
    "Bundi Hidden Gems",
    "Bundi Experiences",
    "Keshav Rai Temple",
    "Sukh Mahal Bundi",
    "Nawal Sagar Lake",
    "Dabhai Kund",
    "Rajasthan Heritage Travel",
    "Offbeat Rajasthan",
    "Luxury Rajasthan Travel",
    "India Heritage Travel",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "Bundi Travel Guide: The Forgotten Blue Kingdom of Rajasthan",
    description:
      "Explore Bundi's blue old city, Taragarh Fort, Bundi Palace, Chitrashala paintings, historic stepwells, hidden gems and authentic heritage experiences.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Panoramic view of Bundi's blue old city and Taragarh Fort in Rajasthan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bundi Travel Guide: The Forgotten Blue Kingdom of Rajasthan",
    description:
      "Discover Bundi's blue old city, Taragarh Fort, palace, stepwells, miniature paintings, hidden gems and heritage experiences.",
    images: [OG_IMAGE],
  },
};