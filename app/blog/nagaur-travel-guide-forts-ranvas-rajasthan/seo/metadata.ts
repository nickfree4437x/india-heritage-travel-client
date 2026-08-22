import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/nagaur-travel-guide-forts-ranvas-rajasthan`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1787369828/pexels-mukund-patel-1264723-2409361_as2tei.jpg";

// ============================================
// NAGAUR TRAVEL GUIDE - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title:
    "Nagaur Travel Guide: Forgotten Forts, Royal Stories & the Ranvas Palace",
  description:
    "The complete Nagaur travel guide: explore Ahhichatragarh Fort, the royal Ranvas palace, the Cattle Fair and offbeat Rajasthan heritage most travelers miss.",
  keywords: [
    "Nagaur Travel Guide",
    "Nagaur Rajasthan",
    "Nagaur Tourism",
    "Nagaur Fort",
    "Ahhichatragarh Fort",
    "Ahhichatragarh Fort Nagaur",
    "Nagaur Fort Rajasthan",
    "Ranvas Nagaur",
    "Ranvas Palace",
    "Ranvas Heritage Hotel",
    "Nagaur Cattle Fair",
    "Nagaur Cattle Fair Rajasthan",
    "Nagaur Ramdeoji Fair",
    "Nagaur History",
    "Nagaur Architecture",
    "Nagaur Heritage",
    "Nagaur Rajput History",
    "Nagaur Mughal History",
    "Nagaur Sufi Heritage",
    "Hazrat Hamiduddin Nagauri Dargah",
    "Nagaur Havelis",
    "Nagaur Stepwells",
    "Nagaur Artisan Lanes",
    "Nagaur Desert Safari",
    "Nagaur Camel Safari",
    "Nagaur Experiences",
    "Nagaur Food",
    "Nagaur Itinerary",
    "Nagaur Travel Tips",
    "Places to Visit in Nagaur",
    "Things to Do in Nagaur",
    "Nagaur to Jodhpur",
    "Nagaur to Bikaner",
    "Khimsar Fort",
    "Kuchaman Fort",
    "Rajasthan Heritage Tour",
    "Offbeat Rajasthan",
    "Luxury Rajasthan Travel",
    "India Heritage Travel",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "Nagaur Travel Guide: Forgotten Forts, Royal Stories & the Ranvas Palace",
    description:
      "Discover Nagaur's Ahhichatragarh Fort, Ranvas Palace, Sufi heritage, Cattle Fair, hidden gems, desert experiences and practical travel tips.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Ahhichatragarh Fort ramparts at golden hour in Nagaur Rajasthan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Nagaur Travel Guide: Forgotten Forts, Royal Stories & Ranvas Palace",
    description:
      "Explore Nagaur's forgotten forts, royal stories, Ranvas Palace, Cattle Fair and offbeat Rajasthan heritage.",
    images: [IMAGE_URL],
  },
};