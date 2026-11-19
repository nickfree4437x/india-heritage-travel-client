import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/khajuraho-temples-travel-guide`;
const IMAGE_URL =
  "https://indiaheritagetravel.com/images/blogs/khajuraho/hero.webp";

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
      name: "Khajuraho Temples Travel Guide",
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
    "Khajuraho Temples Travel Guide 2026: History, Architecture & UNESCO Wonders",
  description:
    "Explore Khajuraho Temples, a UNESCO World Heritage Site famous for stunning architecture, intricate sculptures, Chandela history, temple groups, cultural festivals, and unforgettable travel experiences.",
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
  name: "Khajuraho Temples Travel Guide",
  description:
    "A complete guide to Khajuraho Temples covering history, architecture, temple groups, sculptures, cultural festivals, travel tips, and nearby attractions.",
  url: BLOG_URL,
};
