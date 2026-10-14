import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/dholpur-royal-heritage";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1791962978/images_p6ctdj.jpg";
const BLOG_TITLE =
  "Dholpur Royal Heritage: Palaces, Red Sandstone and the Chambal River";
const BLOG_DESCRIPTION =
  "Explore Dholpur's royal heritage, Raj Niwas Palace, Babur's Lotus Garden, Machkund Temple, Shergarh Fort and Chambal River safaris in this complete travel guide.";
const FEATURED_IMAGE_ALT =
  "Red sandstone Raj Niwas Palace of Dholpur, Rajasthan, glowing at golden hour near the Chambal River";

// ============================================
// DHOLPUR ROYAL HERITAGE - SEO METADATA
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
    "Dholpur Royal Heritage",
    "Dholpur travel guide",
    "Dholpur Rajasthan",
    "Dholpur heritage tourism",
    "Dholpur royal palace",
    "Raj Niwas Palace Dholpur",
    "Dholpur Palace hotel",
    "Babur's Lotus Garden",
    "Badshahi Bagh Dholpur",
    "Machkund Temple Dholpur",
    "Shergarh Fort Dholpur",
    "Talab-e-Shahi Dholpur",
    "Nihal Tower Dholpur",
    "Chambal River safari",
    "National Chambal Sanctuary",
    "Gharial safari Dholpur",
    "Ganges river dolphins Chambal",
    "Dholpur birdwatching",
    "Dholpur red sandstone",
    "Dholpur history",
    "Dholpur architecture",
    "Things to do in Dholpur",
    "Best time to visit Dholpur",
    "Agra to Dholpur",
    "Dholpur itinerary",
    "Dholpur heritage hotel",
    "Dholpur wildlife tourism",
    "Dholpur solo female travel",
    "Rajasthan heritage tour",
    "India Heritage Travel",
  ],
  authors: [{ name: "India Heritage Travel" }],
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
        url: FEATURED_IMAGE,
        width: 1200,
        height: 630,
        alt: FEATURED_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    images: [
      {
        url: FEATURED_IMAGE,
        alt: FEATURED_IMAGE_ALT,
      },
    ],
  },
};