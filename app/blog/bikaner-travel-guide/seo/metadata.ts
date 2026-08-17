import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/bikaner-travel-guide`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1786948187/salil-cZVUoTtGAlU-unsplash_zafycv.jpg";

// ============================================
// BIKANER TRAVEL GUIDE - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title:
    "Bikaner Travel Guide 2026 | Forts, Palaces & Luxury Desert Tours",
  description:
    "Complete Bikaner Travel Guide covering Junagarh Fort, Lalgarh Palace, Karni Mata Temple, Rampuria Havelis, Gajner Palace, desert experiences, food, itineraries, practical travel tips and luxury tours.",
  keywords: [
    "Bikaner Travel Guide",
    "Bikaner Travel Guide 2026",
    "Bikaner Tourism",
    "Bikaner Rajasthan",
    "Things to Do in Bikaner",
    "Places to Visit in Bikaner",
    "Bikaner Fort",
    "Junagarh Fort",
    "Junagarh Fort Bikaner",
    "Lalgarh Palace",
    "Lalgarh Palace Bikaner",
    "Rampuria Havelis",
    "Bikaner Havelis",
    "Karni Mata Temple",
    "Karni Mata Temple Deshnok",
    "Rat Temple Bikaner",
    "Gajner Palace",
    "Gajner Lake",
    "Bhandasar Jain Temple",
    "National Research Centre on Camel",
    "Devi Kund Sagar",
    "Prachina Museum",
    "Bikaner Desert",
    "Bikaner Camel Festival",
    "Bikaner Camel Safari",
    "Bikaneri Bhujia",
    "Bikaner Food",
    "Bikaner Shopping",
    "Bikaner Heritage Hotels",
    "Bikaner Luxury Tours",
    "Bikaner Luxury Travel",
    "Bikaner Itinerary",
    "Bikaner Travel Tips",
    "Bikaner Best Time to Visit",
    "Bikaner Forts and Palaces",
    "Kolayat",
    "Katariasar",
    "Rajasthan Travel Guide",
    "Rajasthan Heritage Tour",
    "India Heritage Travel",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "Bikaner Travel Guide | Forts, Palaces & Luxury Desert Tours",
    description:
      "Discover Bikaner's magnificent forts, royal palaces, historic havelis, Karni Mata Temple, desert experiences, local food and luxury heritage stays.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Junagarh Fort red sandstone ramparts at golden hour in Bikaner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bikaner Travel Guide 2026 | Forts, Palaces & Luxury Desert Tours",
    description:
      "Explore Junagarh Fort, Lalgarh Palace, Karni Mata Temple, Gajner Palace, Bikaner's havelis, food, desert experiences and practical travel tips.",
    images: [IMAGE_URL],
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
};