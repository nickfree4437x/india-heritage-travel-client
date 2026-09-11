import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/chettinad-heritage-mansion-hotels";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const HERO_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1789118638/nakkeeran-raveendran-c6SNid8b-nQ-unsplash_s6near.jpg";
const BLOG_TITLE =
  "Chettinad Heritage Mansion Hotels: India's Forgotten Palaces of Luxury Travel";
const BLOG_DESCRIPTION =
  "Discover Chettinad heritage mansion hotels — the crumbling merchant palaces of Tamil Nadu reborn as India's most romantic luxury stays. Full travel guide inside.";
const BLOG_ALT =
  "Restored Chettinad heritage mansion hotel courtyard with Athangudi tile flooring and Burma teak pillars";

// ============================================
// CHETTINAD HERITAGE MANSION HOTELS - SEO METADATA
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
    "Chettinad Heritage Mansion Hotels",
    "Chettinad Mansion Hotels",
    "Luxury Mansion Stays in Chettinad",
    "Heritage Hotels in Chettinad",
    "Chettinad Architecture",
    "Athangudi Tiles",
    "Karaikudi Heritage Hotels",
    "Things to Do in Chettinad",
    "Best Time to Visit Chettinad",
    "How to Reach Chettinad",
    "Chettinad Heritage Tour",
    "South India Luxury Travel",
    "Chettinad Heritage Hotels",
    "Chettinad Mansions",
    "Nattukottai Chettiar Mansions",
    "Kanadukathan Heritage Hotels",
    "Athangudi Heritage",
    "Karaikudi Travel Guide",
    "Chettinad Cuisine",
    "Tamil Nadu Heritage Hotels",
    "Tamil Nadu Luxury Travel",
    "South India Heritage Tour",
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
        alt: BLOG_ALT,
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

export default metadata;