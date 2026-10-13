import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/orchha-heritage-hotels-travel-guide";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const BLOG_TITLE =
  "Orchha Heritage Hotels: A Forgotten Kingdom Travel Guide";
const BLOG_DESCRIPTION =
  "Discover Orchha Heritage Hotels and the untouched Bundela capital on the Betwa River - palaces, temples, luxury stays, and a complete travel guide.";
const HERO_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1789311345/pexels-thebioscopeguy-20000870_srtgjy.jpg";
const HERO_IMAGE_ALT =
  "Domes of Jahangir Mahal palace silhouetted against a golden sunset over the Betwa River in Orchha, Madhya Pradesh";

// ============================================
// ORCHHA HERITAGE HOTELS - SEO METADATA
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
    "Orchha Heritage Hotels",
    "Orchha heritage hotels",
    "Orchha hotels",
    "Orchha travel guide",
    "Orchha heritage travel",
    "Orchha Madhya Pradesh",
    "Orchha Fort",
    "Jahangir Mahal",
    "Raja Mahal Orchha",
    "Rai Praveen Mahal",
    "Chaturbhuj Temple",
    "Ram Raja Temple",
    "Orchha cenotaphs",
    "Orchha Chhatris",
    "Betwa River Orchha",
    "Orchha heritage hotels and resorts",
    "MPT Sheesh Mahal",
    "MPT Betwa Retreat",
    "Orchha luxury hotels",
    "things to do in Orchha",
    "best time to visit Orchha",
    "how to reach Orchha",
    "Orchha itinerary",
    "Orchha travel tips",
    "Madhya Pradesh heritage tour",
    "Madhya Pradesh luxury travel",
    "Khajuraho Orchha tour",
    "Gwalior Orchha tour",
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