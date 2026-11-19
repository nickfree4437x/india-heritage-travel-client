
import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/red-fort-travel-guide`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1784270425/pexels-varan-6776755_i3hlhj.jpg";

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
      name: "Red Fort Travel Guide",
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
    "Red Fort Travel Guide 2026 | History, Architecture & Old Delhi Heritage",
  description:
    "Complete Red Fort Travel Guide covering Mughal history, architecture, museums, Chandni Chowk, tickets, timings, itineraries, nearby attractions, and travel tips.",
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
  name: "Red Fort Travel Guide",
  description:
    "A complete guide to Red Fort covering Mughal history, architecture, museums, Chandni Chowk experiences, travel planning, and visitor information.",
  url: BLOG_URL,
};
