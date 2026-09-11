import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/nawalgarh-heritage-haveli-stays-shekhawati-guide";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const HERO_IMAGE = `${SITE_URL}/https://res.cloudinary.com/dja5yspwr/image/upload/v1788954498/vikram-chouhan-udaipur-web-designer-N-3yaHfspfo-unsplash_kq76qe.jpg`;
const BLOG_TITLE =
  "Nawalgarh Heritage Haveli Stays: The Complete Guide to Shekhawati's Painted Mansions";
const BLOG_DESCRIPTION =
  "Discover Nawalgarh Heritage Haveli Stays in Shekhawati — frescoed mansions, boutique havelis, forts and insider tips. Plan your luxury heritage escape with India Heritage Travel.";
const BLOG_ALT =
  "Nawalgarh heritage haveli stays — painted mansion facade with fresco art in Shekhawati, Rajasthan";

// ============================================
// NAWALGARH HERITAGE HAVELI STAYS - SEO METADATA
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
    "Nawalgarh Heritage Haveli Stays",
    "Nawalgarh Heritage Haveli",
    "Nawalgarh Travel Guide",
    "Nawalgarh Rajasthan",
    "Nawalgarh Havelis",
    "Shekhawati Havelis",
    "Shekhawati Travel Guide",
    "Shekhawati Frescoes",
    "Nawalgarh Heritage Hotels",
    "Nawalgarh Boutique Hotels",
    "Nawalgarh Luxury Stay",
    "Podar Haveli Museum",
    "Nawalgarh Fort",
    "Bala Qila Nawalgarh",
    "Aath Haveli Nawalgarh",
    "Morarka Haveli",
    "Bansidhar Bhagat Ji Haveli",
    "Mandawa",
    "Dundlod",
    "Fatehpur Shekhawati",
    "Mahansar",
    "Rajasthan Heritage Hotels",
    "Rajasthan Luxury Travel",
    "Shekhawati Heritage Tour",
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