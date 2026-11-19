import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";

const BLOG_URL = `${BASE_URL}/blog/bikaner-travel-guide`;

const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1786948187/salil-cZVUoTtGAlU-unsplash_zafycv.jpg";

// ============================================
// BREADCRUMB SCHEMA
// ============================================
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${BASE_URL}/blog`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bikaner Travel Guide",
      item: BLOG_URL,
    },
  ],
};

// ============================================
// ARTICLE SCHEMA
// ============================================
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",

  headline:
    "Bikaner Travel Guide 2026 | Forts, Palaces & Luxury Desert Tours",

  description:
    "Complete Bikaner Travel Guide covering Junagarh Fort, Lalgarh Palace, Karni Mata Temple, Rampuria Havelis, Gajner Palace, desert experiences, food, itineraries, practical travel tips and luxury tours.",

  image: [IMAGE_URL],

  // ==========================================
  // AUTHOR
  // ==========================================
  author: BLOG_AUTHORS.isha,


  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": BLOG_URL,
  },

  url: BLOG_URL,

  inLanguage: "en",

  isPartOf: {
    "@type": "Blog",
    name: "India Heritage Travel Blog",
    url: `${BASE_URL}/blog`,
  },
};

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",

  name: "Bikaner Travel Guide",

  description:
    "A complete Bikaner travel guide covering Junagarh Fort, Lalgarh Palace, Rampuria Havelis, Karni Mata Temple, Gajner Palace and Lake, desert experiences, local food, shopping, nearby attractions, itineraries and practical travel advice.",

  url: BLOG_URL,

  image: IMAGE_URL,

  inLanguage: "en",

  isPartOf: {
    "@type": "WebSite",
    name: "India Heritage Travel",
    url: BASE_URL,
  },

  about: {
    "@type": "Place",
    name: "Bikaner",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Bikaner",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
};
