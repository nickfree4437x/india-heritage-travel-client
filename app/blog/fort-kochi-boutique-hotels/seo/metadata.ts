import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/fort-kochi-boutique-hotels";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1789727256/pexels-santram-gayakvad-1342424125-31288326_jfm83t.jpg";
const BLOG_TITLE =
  "Fort Kochi Boutique Hotels: Colonial History & Boutique Luxury";
const BLOG_DESCRIPTION =
  "Discover Fort Kochi's colonial history, heritage architecture, boutique hotels, cultural experiences, coastal cuisine and luxury travel tips with our complete Fort Kochi travel guide.";
const FEATURED_IMAGE_ALT =
  "Chinese fishing nets silhouetted at sunset in Fort Kochi";

// ============================================
// FORT KOCHI BOUTIQUE HOTELS - SEO METADATA
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
    "Fort Kochi Boutique Hotels",
    "Fort Kochi travel guide",
    "Fort Kochi heritage hotels",
    "Fort Kochi luxury hotels",
    "Fort Kochi boutique hotels",
    "Fort Kochi colonial history",
    "Fort Kochi colonial architecture",
    "Fort Kochi Kerala",
    "Fort Kochi heritage travel",
    "Fort Kochi luxury travel",
    "Chinese Fishing Nets Fort Kochi",
    "St Francis Church Fort Kochi",
    "Santa Cruz Basilica Fort Kochi",
    "Mattancherry Palace",
    "Dutch Palace Kochi",
    "Paradesi Synagogue",
    "Jew Town Kochi",
    "Dutch Cemetery Fort Kochi",
    "Kochi Muziris Biennale",
    "Fort Kochi heritage walk",
    "Fort Kochi itinerary",
    "Fort Kochi food",
    "Kerala coastal cuisine",
    "Fort Kochi solo travel",
    "Fort Kochi women travel",
    "Fort Kochi family travel",
    "Fort Kochi luxury travel guide",
    "Fort Kochi boutique heritage hotel",
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