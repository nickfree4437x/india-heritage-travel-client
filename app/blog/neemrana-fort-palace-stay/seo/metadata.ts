import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/neemrana-fort-palace-stay";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1791613344/pexels-pramodtiwari-33797765_qphwvf.jpg";
const BLOG_TITLE =
  "Neemrana Fort Palace Stay: The Art of Staying in a Historic Fort";
const BLOG_DESCRIPTION =
  "Plan your Neemrana Fort Palace stay with our complete guide to its Rajput history, eleven terraced levels, heritage experiences, stepwell, luxury accommodation, itineraries and travel tips.";
const FEATURED_IMAGE_ALT =
  "Neemrana Fort Palace rising in tiers on the Aravalli ridge at sunrise";

// ============================================
// NEEMRANA FORT PALACE STAY - SEO METADATA
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
    "Neemrana Fort Palace Stay",
    "Neemrana Fort Palace",
    "Neemrana Fort Hotel",
    "Neemrana heritage hotel",
    "Heritage hotels in Rajasthan",
    "Historic fort hotels in India",
    "Fort hotels near Delhi",
    "Heritage stays near Delhi NCR",
    "Neemrana Fort Palace history",
    "Neemrana Fort architecture",
    "Neemrana Fort Palace rooms",
    "Neemrana Baori stepwell",
    "Neemrana stepwell",
    "Ziplining at Neemrana Fort",
    "Neemrana Flying Fox",
    "Things to do in Neemrana",
    "Best time to visit Neemrana",
    "How to reach Neemrana",
    "Delhi to Neemrana",
    "Jaipur to Neemrana",
    "Neemrana weekend trip",
    "Romantic fort stays",
    "Neemrana luxury stay",
    "Neemrana Fort Palace itinerary",
    "Rajasthan heritage tour",
    "Neemrana family travel",
    "Neemrana solo women travel",
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