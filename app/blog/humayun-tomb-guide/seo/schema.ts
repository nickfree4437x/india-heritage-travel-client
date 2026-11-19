import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/humayuns-tomb-guide`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1784445556/pexels-miheertewari-13256094_nhkdrh.jpg";

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
      name: "Humayun's Tomb Guide",
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
    "Humayun's Tomb Guide (2026) | Delhi's First Great Mughal Garden Tomb",
  description:
    "Complete Humayun's Tomb Guide covering Mughal history, Charbagh gardens, UNESCO heritage, architecture, attractions, travel tips, tickets, timings, and nearby places in Delhi.",
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
  name: "Humayun's Tomb Guide",
  description:
    "A complete guide to Humayun's Tomb covering Mughal history, Charbagh gardens, UNESCO heritage, architecture, travel planning, and visitor information.",
  url: BLOG_URL,
};
