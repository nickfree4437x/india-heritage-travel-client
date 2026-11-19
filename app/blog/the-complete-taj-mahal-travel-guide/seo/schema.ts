import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/the-complete-taj-mahal-travel-guide`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1783055150/pexels-ayush-dwivedi-1217090-27374536_wfmxjg.jpg";

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
      name: "Taj Mahal Travel Guide",
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
   "Taj Mahal Travel Guide: Tickets, Timings & Travel Tips",
  description:
   "Plan your Taj Mahal visit with information about its history, architecture, entry tickets, visiting hours, nearby attractions, and Agra itinerary tips.",
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
  name: "Taj Mahal Travel Guide",
  description:
   "Discover the Taj Mahal's history, architecture, ticket information, visiting hours, nearby attractions, and practical tips for planning your Agra trip.",
  url: BLOG_URL,
};
