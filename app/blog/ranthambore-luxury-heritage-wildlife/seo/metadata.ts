import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/ranthambore-luxury-heritage-wildlife";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1792403803/gaurav-sharma-G0hzu3bLew4-unsplash_wvsrxl.jpg";
const BLOG_TITLE =
  "Ranthambore Luxury Heritage and Wildlife: Where Royal Rajasthan Meets the Tiger Forest";
const BLOG_DESCRIPTION =
  "Explore Ranthambore's royal history, ancient fort, tiger safaris, wildlife conservation, luxury jungle camps and heritage stays with this complete travel guide.";
const FEATURED_IMAGE_ALT =
  "Tiger beside Padam Talao lake with the ancient Ranthambore Fort walls on the hill behind, Rajasthan";

// ============================================
// RANTHAMBORE LUXURY HERITAGE & WILDLIFE - SEO METADATA
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
    "Ranthambore Luxury Heritage and Wildlife",
    "Ranthambore travel guide",
    "Ranthambore National Park",
    "Ranthambore luxury safari",
    "Ranthambore heritage hotels",
    "Ranthambore luxury camps",
    "Ranthambore tiger safari",
    "Ranthambore safari booking",
    "Ranthambore safari zones",
    "Ranthambore Fort",
    "UNESCO Hill Forts of Rajasthan",
    "Trinetra Ganesh Temple",
    "Padam Talao",
    "Jogi Mahal Ranthambore",
    "Raj Bagh Ruins",
    "Ranthambore wildlife conservation",
    "Ranthambore responsible tourism",
    "Bengal tiger sightings Rajasthan",
    "Ranthambore birdwatching",
    "Kachida Valley",
    "Surwal Lake",
    "Luxury tented camps Ranthambore",
    "Best time to visit Ranthambore",
    "Jaipur to Ranthambore",
    "Delhi to Ranthambore",
    "Ranthambore itinerary",
    "Ranthambore family travel",
    "Ranthambore solo female travel",
    "Rajasthan wildlife holidays",
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