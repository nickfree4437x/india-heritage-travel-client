import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/alwar-luxury-heritage-retreats";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1791870799/images_at5yuw.jpg";
const BLOG_TITLE =
  "Alwar Luxury Heritage Retreats: Forgotten Palaces, Wild Aravallis and Royal Stays";
const BLOG_DESCRIPTION =
  "Discover Alwar's luxury heritage retreats, royal palaces, Siliserh Lake Palace, Hill Fort Kesroli, Tijara Fort-Palace and Sariska Tiger Reserve in this complete Rajasthan travel guide.";
const FEATURED_IMAGE_ALT =
  "Siliserh Lake Palace beside its lake among the Aravalli hills near Alwar, Rajasthan, at golden hour";

// ============================================
// ALWAR LUXURY HERITAGE RETREATS - SEO METADATA
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
    "Alwar Luxury Heritage Retreats",
    "Alwar luxury heritage hotels",
    "Alwar heritage stays",
    "Alwar Rajasthan travel guide",
    "Heritage hotels in Alwar",
    "Luxury stays in Rajasthan",
    "Siliserh Lake Palace",
    "Hill Fort Kesroli",
    "Tijara Fort Palace",
    "Sariska Palace",
    "Bala Quila Alwar",
    "Alwar City Palace",
    "Vinay Vilas Mahal",
    "Moosi Maharani Ki Chhatri",
    "Sariska Tiger Reserve",
    "Alwar tiger safari",
    "Things to do in Alwar",
    "Alwar weekend getaway",
    "Delhi to Alwar",
    "Jaipur to Alwar",
    "Alwar luxury travel",
    "Alwar heritage itinerary",
    "Alwar palace hotels",
    "Siliserh Lake",
    "Bhangarh Fort",
    "Abhaneri Chand Baori",
    "Neemrana Fort Palace",
    "Rajasthan heritage tour",
    "Alwar solo female travel",
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