import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/udaipur-travel-guide-city-of-lakes`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1786681413/jainam-mehta-AVFjDGbqiqE-unsplash_yyofaq.jpg";
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
      name: "Udaipur Travel Guide: The City of Lakes",
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
    "Udaipur Travel Guide 2026 | City Palace, Lakes, Attractions & Travel Tips",
  description:
    "Complete Udaipur Travel Guide covering City Palace, Lake Pichola, Jag Mandir, Mewar history, major attractions, local food, luxury experiences, nearby day trips, itineraries and practical travel tips.",
  image: [IMAGE_URL],
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
  url: BLOG_URL,
  inLanguage: "en",
  isPartOf: {
    "@type": "Blog",
    name: "India Heritage Travel Blog",
    url: `${BASE_URL}/blog`,
  },
};

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Udaipur Travel Guide: The City of Lakes",
  description:
    "A complete Udaipur travel guide covering the City Palace, Lake Pichola, Mewar history, architecture, attractions, local cuisine, luxury experiences, nearby destinations, itineraries and practical travel advice.",
  url: BLOG_URL,
  image: IMAGE_URL,
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: "India Heritage Travel",
    url: BASE_URL,
  },
  about: {
    "@type": "Place",
    name: "Udaipur",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
};

// ============================================
// ORGANIZATION SCHEMA
// ============================================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "India Heritage Travel",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
  },
};