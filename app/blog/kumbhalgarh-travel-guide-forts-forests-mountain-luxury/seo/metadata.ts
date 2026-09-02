import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${SITE_URL}/blog/kumbhalgarh-travel-guide-forts-forests-mountain-luxury`;
const HERO_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1788326971/Kumbhalgarh_055_orpqyq.jpg";

// ============================================
// KUMBHALGARH TRAVEL GUIDE - SEO METADATA
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
  title:
    "Kumbhalgarh Travel Guide: Forts, Forests & Mountain Luxury (2026)",
  description:
    "The complete Kumbhalgarh Travel Guide: history, the 36-km wall, wildlife safaris, luxury stays and a day-by-day itinerary for a private Rajasthan escape.",
  keywords: [
    "Kumbhalgarh Travel Guide",
    "Kumbhalgarh Travel Guide 2026",
    "Kumbhalgarh Fort",
    "Kumbhalgarh Fort Rajasthan",
    "Kumbhalgarh Wildlife Sanctuary",
    "Kumbhalgarh Wildlife Safari",
    "Kumbhalgarh Itinerary",
    "Things to Do in Kumbhalgarh",
    "Places to Visit in Kumbhalgarh",
    "Kumbhalgarh Luxury Travel",
    "Kumbhalgarh Luxury Hotels",
    "Kumbhalgarh Heritage Hotels",
    "Kumbhalgarh From Udaipur",
    "Kumbhalgarh Fort Wall",
    "Kumbhalgarh 36 km Wall",
    "Kumbhalgarh Safari",
    "Kumbhalgarh Heritage Tour",
    "Kumbhalgarh History",
    "Kumbhalgarh Architecture",
    "Kumbhalgarh Travel Tips",
    "Best Time to Visit Kumbhalgarh",
    "How to Reach Kumbhalgarh",
    "Kumbhalgarh Food",
    "Kumbhalgarh Nearby Attractions",
    "Rajasthan Luxury Travel",
    "Rajasthan Heritage Tours",
    "Rajasthan Travel Guide",
    "Mewar Rajasthan",
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
    title:
      "Kumbhalgarh Travel Guide: Forts, Forests & Mountain Luxury (2026)",
    description:
      "Explore Kumbhalgarh Fort, its 36-km wall, wildlife sanctuary, hidden gems, luxury stays, local food and suggested itineraries.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Kumbhalgarh Fort's 36-kilometre wall winding across the Aravalli Hills at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kumbhalgarh Travel Guide: Forts, Forests & Mountain Luxury",
    description:
      "A complete guide to Kumbhalgarh Fort, wildlife, luxury stays, experiences, food and itineraries.",
    images: [HERO_IMAGE],
  },
};

export default metadata;