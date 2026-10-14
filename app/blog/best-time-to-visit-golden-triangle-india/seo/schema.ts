import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";

const BLOG_URL = `${BASE_URL}/blog/best-time-to-visit-golden-triangle-india`;

const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1782104429/nils-huenerfuerst-T8X8vgj0Ink-unsplash_ayktot.jpg";

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
      name: "Best Time to Visit the Golden Triangle: Weather & Seasons",
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
    "Best Time to Visit the Golden Triangle: Weather & Seasons: Weather, Seasons & Travel Tips",

  description:
    "Discover the Best Time to Visit the Golden Triangle: Weather & Seasons with detailed weather insights, seasonal travel advice, festivals, crowd levels, and expert tips for Delhi, Agra, and Jaipur.",

  image: IMAGE_URL,

  // Real person author
  author: BLOG_AUTHORS.isha,

  // Publisher remains the organization
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

  name: "Best Time to Visit the Golden Triangle: Weather & Seasons",

  description:
    "Explore seasonal weather patterns, festivals, travel conditions, crowd levels, and expert recommendations for visiting Delhi, Agra, and Jaipur.",

  url: BLOG_URL,
};

// ============================================
// ORGANIZATION SCHEMA
// ============================================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "India Heritage Travel",
  url: BASE_URL,
  logo: LOGO_URL,
};