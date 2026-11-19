import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/women-only-heritage-tours-india`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1784898459/pexels-jaiveer-2452265_rwouvl.jpg";

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
      name: "Women-Only Heritage Tours in India",
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
    "Women-Only Heritage Tours in India (2026) | What to Expect, Wear & Prepare",
  description:
    "Plan the perfect women-only heritage tour in India with expert travel advice on safety, clothing, packing, cultural etiquette, itineraries, and luxury heritage experiences.",
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
  name: "Women-Only Heritage Tours in India",
  description:
    "A complete guide to women-only heritage tours in India covering safety, clothing, cultural etiquette, itineraries, luxury experiences, and practical travel planning.",
  url: BLOG_URL,
};
