import { BLOG_AUTHORS } from "@/src/common/seo/authors";


// ============================================
// CONSTANTS
// ============================================

const BASE_URL = "https://indiaheritagetravel.com";

const BLOG_URL =
  `${BASE_URL}/blog/how-to-plan-a-trip-to-india`;

const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1786161165/pexels-a-g-47132025-37168988_ju9gfy.jpg";

const LOGO_URL =
  "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779742948/logo2_yhlwmt.png";

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
      name: "How to Plan a Trip to India",
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
    "How to Plan a Trip to India (2026) | Complete Guide for First-Time & Luxury Travelers",

  description:
    "Learn how to plan a trip to India in 2026 with expert advice on the best time to visit, visas, destinations, budgets, transport, hotels, packing, safety, itineraries and luxury travel.",

  image: IMAGE_URL,

  author: BLOG_AUTHORS.isha,

  publisher: {
    "@type": "Organization",
    name: "India Heritage Travel",

    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
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

  name: "How to Plan a Trip to India",

  description:
    "A complete India trip planning guide covering the best time to visit, visa requirements, destinations, transportation, accommodation, packing, cultural etiquette, budgets, itineraries, travel apps and luxury travel.",

  url: BLOG_URL,
};
