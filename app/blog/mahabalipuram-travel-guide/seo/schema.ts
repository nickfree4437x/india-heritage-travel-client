import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/mahabalipuram-travel-guide`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1783855518/brijender-dua-OFSaSqZTC4g-unsplash_yvgbwj.jpg";

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
      name: "Mahabalipuram Travel Guide",
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
    "Mahabalipuram Travel Guide 2026 | Shore Temple, Five Rathas & UNESCO Heritage",
  description:
    "Complete Mahabalipuram Travel Guide covering Shore Temple, Five Rathas, Arjuna's Penance, UNESCO heritage, history, food, nearby attractions, tickets, itineraries, and expert travel tips.",
  image: IMAGE_URL,
  author: BLOG_AUTHORS.isha,
  publisher: {
  "@id": "https://indiaheritagetravel.com/#organization",
},
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": BLOG_URL,
  },
};

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Mahabalipuram Travel Guide",
  description:
    "A complete guide to Mahabalipuram covering Shore Temple, Five Rathas, Arjuna's Penance, UNESCO monuments, local experiences, travel planning, and visitor information.",
  url: BLOG_URL,
};
