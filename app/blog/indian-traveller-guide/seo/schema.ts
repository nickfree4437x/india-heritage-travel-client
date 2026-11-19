import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/indian-traveller-guide`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1782540276/pexels-soubhagya23-17685500_tihzeu.jpg";

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
      name: "First-Time Travel Guide to India: Essential Tips & Travel Advice",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": BLOG_URL,
  },
  headline:
    "First-Time Travel Guide to India: Essential Tips & Travel Advice",
  alternativeHeadline:
    "Essential India Travel Tips for First-Time Visitors",
  description:
    "Plan your first trip to India with practical travel tips, cultural insights, safety advice, money tips, and essential information for first-time visitors.",
  image: {
    "@type": "ImageObject",
    url: IMAGE_URL,
    width: 1200,
    height: 630,
  },
  author: BLOG_AUTHORS.isha,
  publisher: {
  "@id": "https://indiaheritagetravel.com/#organization",
},
  inLanguage: "en",
  articleSection: "Travel Guide",
  keywords: [
    "First-Time Travel Guide to India",
    "India Travel Guide",
    "India Travel Tips",
    "Traveling to India for the First Time",
    "India Travel Advice",
    "India Travel Essentials",
    "India Safety Tips",
    "India Culture Guide",
  ],
  isAccessibleForFree: true,
};

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: BLOG_URL,
  name:
    "First-Time Travel Guide to India: Essential Tips & Travel Advice",
  description:
    "Explore practical travel tips, cultural insights, safety advice, destination recommendations, and essential guidance for first-time visitors to India.",
  isPartOf: {
    "@type": "WebSite",
    url: BASE_URL,
    name: "India Heritage Travel",
  },
  inLanguage: "en",
};