import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/golden-triangle-tour-vs-rajasthan-tour`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1782365101/sylwia-bartyzel-eU4pipU_8HA-unsplash_mvujnj.jpg";

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
      name: "Golden Triangle vs Rajasthan Tour: Which Should You Choose? | India Heritage Travel",
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
    "Golden Triangle vs Rajasthan Tour: Which Should You Choose? | India Heritage Travel: Which India Itinerary Should You Choose?",
  description:
    "Compare the Golden Triangle Tour and Rajasthan Tour to find the perfect India itinerary. Explore destinations, experiences, trip duration, costs, luxury options, and expert travel recommendations.",
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
  name: "Golden Triangle vs Rajasthan Tour: Which Should You Choose? | India Heritage Travel",
  description:
    "A detailed comparison of the Golden Triangle Tour and Rajasthan Tour covering destinations, travel experiences, trip duration, budgets, luxury options, and recommended itineraries.",
  url: BLOG_URL,
};
