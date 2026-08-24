import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${SITE_URL}/blog/devgarh-travel-guide-palace-living-rural-rajasthan`;
const OG_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1787540855/794597_fd4032cb16f84cbab9b5f5000e911a33_mv2_im009v.avif";

// ============================================
// DEVGARH TRAVEL GUIDE - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Devgarh Travel Guide: Palace Living in Rural Rajasthan | India Heritage Travel",
  description:
    "Our Devgarh travel guide covers Deogarh Mahal's history, village safaris, Aravalli hideaways, Mewari culture, luxury palace stays and a practical itinerary for a rural Rajasthan escape.",
  keywords: [
    "Devgarh Travel Guide",
    "Devgarh Rajasthan",
    "Deogarh Rajasthan",
    "Deogarh Mahal",
    "Devgarh Mahal",
    "Devgarh Palace",
    "Devgarh Palace Hotel",
    "Devgarh rural Rajasthan",
    "Devgarh village safari",
    "Devgarh jeep safari",
    "Devgarh horse safari",
    "Devgarh Aravalli hills",
    "Devgarh heritage hotel",
    "Devgarh luxury travel",
    "Devgarh itinerary",
    "Devgarh tourism",
    "Things to Do in Devgarh",
    "Places to Visit in Devgarh",
    "Devgarh travel tips",
    "Deogarh Mahal Rajasthan",
    "Rural Rajasthan Travel",
    "Rajasthan Village Safari",
    "Rajasthan Heritage Travel",
    "Mewar Rajasthan",
    "Mewar Heritage",
    "Kumbhalgarh Fort",
    "Ranakpur Jain Temples",
    "Rajsamand Lake",
    "Aravalli Hills Rajasthan",
    "Luxury Rajasthan Travel",
    "Offbeat Rajasthan",
    "India Heritage Travel",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "Devgarh Travel Guide: Palace Living in Rural Rajasthan | India Heritage Travel",
    description:
      "Explore Deogarh Mahal, rural Rajasthan, Aravalli safaris, village life, Mewari cuisine and luxury palace stays with this complete Devgarh travel guide.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Deogarh Mahal palace on a hilltop above the Aravalli hills in rural Rajasthan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Devgarh Travel Guide: Palace Living in Rural Rajasthan | India Heritage Travel",
    description:
      "Discover Deogarh Mahal, village safaris, Aravalli experiences, Mewari food and luxury rural Rajasthan travel.",
    images: [OG_IMAGE],
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