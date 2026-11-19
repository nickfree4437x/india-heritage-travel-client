import { BLOG_AUTHORS } from "@/src/common/seo/authors";

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

// ============================================
// ARTICLE SCHEMA
// ============================================
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  image: [FEATURED_IMAGE],
  url: BLOG_URL,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": BLOG_URL,
  },
  author: BLOG_AUTHORS.isha,
  publisher: {
  "@id": "https://indiaheritagetravel.com/#organization",
},
  articleSection: "South India Travel",
  about: {
    "@type": "Place",
    name: "Fort Kochi",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fort Kochi",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  },
  keywords: [
    "Fort Kochi Boutique Hotels",
    "Fort Kochi travel guide",
    "Fort Kochi heritage hotels",
    "Fort Kochi colonial history",
    "Fort Kochi colonial architecture",
    "Chinese Fishing Nets Fort Kochi",
    "St Francis Church Fort Kochi",
    "Santa Cruz Basilica Fort Kochi",
    "Mattancherry Palace",
    "Paradesi Synagogue",
    "Jew Town Kochi",
    "Kochi Muziris Biennale",
    "Fort Kochi heritage walk",
    "Fort Kochi luxury travel",
  ],
  inLanguage: "en-US",
};

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  url: BLOG_URL,
  image: FEATURED_IMAGE,
  isPartOf: {
    "@type": "WebSite",
    name: "India Heritage Travel",
    url: SITE_URL,
  },
  about: {
    "@type": "Place",
    name: "Fort Kochi",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fort Kochi",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  },
  mainEntity: {
    "@type": "TouristDestination",
    name: "Fort Kochi",
    description:
      "Fort Kochi is a historic coastal heritage destination in Kerala known for its Portuguese, Dutch and British colonial history, heritage architecture, Chinese fishing nets, churches, palaces, cultural experiences and boutique hotels.",
    touristType: [
      "Heritage travelers",
      "Luxury travelers",
      "Cultural travelers",
      "Solo travelers",
      "Family travelers",
    ],
  },
  inLanguage: "en-US",
};
