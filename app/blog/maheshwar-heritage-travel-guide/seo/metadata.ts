import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/maheshwar-heritage-travel-guide";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1789547607/pexels-arvind-aditya-253087253-13214083_mecr3u.jpg";
const BLOG_TITLE =
  "Maheshwar Heritage Travel Guide: Royal Palaces, Narmada Ghats & Timeless Culture";
const BLOG_DESCRIPTION =
  "Plan the perfect Maheshwar heritage travel experience: explore Ahilya Fort, the sacred Narmada ghats, Holkar history and Maheshwari weaves with our complete luxury travel guide.";
const FEATURED_IMAGE_ALT =
  "Ahilya Fort and Narmada ghats at sunset in Maheshwar, Madhya Pradesh";

// ============================================
// MAHESHWAR HERITAGE TRAVEL GUIDE - SEO METADATA
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
    "Maheshwar Heritage Travel Guide",
    "Maheshwar heritage travel",
    "Maheshwar Madhya Pradesh",
    "Maheshwar travel guide",
    "Ahilya Fort",
    "Ahilya Fort heritage hotel",
    "Maheshwar ghats",
    "Narmada ghats Maheshwar",
    "Narmada boat ride Maheshwar",
    "Maheshwari saree",
    "Rehwa Society",
    "Maheshwar handloom",
    "Ahilyabai Holkar",
    "Holkar history",
    "Maheshwar temples",
    "Kashi Vishwanath Temple Maheshwar",
    "Rajarajeshwara Temple",
    "Baneshwar Temple",
    "Maheshwar itinerary",
    "Maheshwar luxury travel",
    "Maheshwar heritage hotel",
    "Mandu from Maheshwar",
    "Omkareshwar from Maheshwar",
    "Indore to Maheshwar",
    "Maheshwar solo female travel",
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
    canonical: BLOG_PATH,
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
    images: [FEATURED_IMAGE],
  },
};