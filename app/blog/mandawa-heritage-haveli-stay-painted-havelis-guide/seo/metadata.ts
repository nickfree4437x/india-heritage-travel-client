import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/mandawa-heritage-haveli-stay-painted-havelis-guide";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const HERO_IMAGE = `${SITE_URL}/https://res.cloudinary.com/dja5yspwr/image/upload/v1788954498/vikram-chouhan-udaipur-web-designer-N-3yaHfspfo-unsplash_kq76qe.jpg`;
const BLOG_TITLE =
  "Mandawa Heritage Haveli Stay: A Luxury Guide to Rajasthan's Painted Havelis";
const BLOG_DESCRIPTION =
  "Discover the perfect Mandawa Heritage Haveli Stay - frescoed forts, hidden havelis, and luxury Shekhawati experiences curated by India Heritage Travel. Plan your private tour today.";
const BLOG_ALT =
  "Mandawa Heritage Haveli Stay – restored painted haveli facade with fresco art in Shekhawati, Rajasthan";

// ============================================
// MANDAWA HERITAGE HAVELI STAY - SEO METADATA
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
    "Mandawa Heritage Haveli Stay",
    "Mandawa Heritage Haveli",
    "Mandawa Rajasthan",
    "Mandawa Travel Guide",
    "Mandawa Havelis",
    "Mandawa Painted Havelis",
    "Shekhawati Havelis",
    "Shekhawati Rajasthan",
    "Mandawa Fort",
    "Castle Mandawa",
    "Goenka Double Haveli",
    "Murmuria Haveli",
    "Gulab Rai Ladia Haveli",
    "Bansidhar Newatia Haveli",
    "Mandawa Frescoes",
    "Mandawa Luxury Stay",
    "Mandawa Heritage Hotel",
    "Mandawa Itinerary",
    "Mandawa From Jaipur",
    "Mandawa From Delhi",
    "Shekhawati Heritage Tour",
    "Nawalgarh",
    "Fatehpur Shekhawati",
    "Dundlod",
    "Ramgarh Shekhawati",
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