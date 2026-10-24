import type { Metadata } from "next";

const SITE_URL = "https://www.indiaheritagetravel.com";
const BLOG_PATH = "/blog/bishnupur-terracotta-temples";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const BLOG_TITLE =
  "Bishnupur Terracotta Temples: Malla Heritage & Bengal's Artistry";

const BLOG_DESCRIPTION =
  "Explore Bishnupur's terracotta temples, Malla dynasty history, Baluchari silk, Bankura horses, cultural traditions, attractions and travel tips.";

const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1792825239/Jod_Bangla_Terracotta_Temple__Bishnupur__West_Bengal_i0zr5i.jpg";

const FEATURED_IMAGE_ALT =
  "Terracotta relief panels on a temple in Bishnupur, West Bengal";

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
    "Bishnupur terracotta temples",
    "Bishnupur travel guide",
    "Bishnupur temples West Bengal",
    "Malla dynasty heritage",
    "Jor Bangla Temple",
    "Rasmancha Bishnupur",
    "Baluchari silk sarees",
    "Bankura terracotta horse",
    "Bishnupur heritage tour",
    "Bishnupur from Kolkata",
    "West Bengal cultural heritage",
    "Bishnupur architecture",
    "Bishnupur heritage sites",
    "Bishnupur cultural traditions",
    "Things to do in Bishnupur",
    "Best time to visit Bishnupur",
    "Bishnupur itinerary",
    "Bishnupur temples history",
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

  openGraph: {
    type: "article",
    locale: "en_IN",
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
};