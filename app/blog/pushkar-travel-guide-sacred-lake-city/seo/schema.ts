import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/pushkar-travel-guide-sacred-lake-city`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1787110091/austin-curtis-cN1mrrdZ0V4-unsplash_v3emoq.jpg";
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
      name: "Pushkar Travel Guide: The Sacred Lake City",
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
    "Pushkar Travel Guide: The Sacred Lake City (2026 Guide)",
  description:
    "Pushkar travel guide to Rajasthan's sacred lake city covering Pushkar Lake, 52 sacred ghats, Brahma Temple, Pushkar Camel Fair, temples, bazaars, desert experiences, luxury stays, practical travel tips and a 2-day itinerary.",
  image: [IMAGE_URL],
  author: BLOG_AUTHORS.isha,
  publisher: {
    "@type": "Organization",
    name: "India Heritage Travel",
    url: BASE_URL,
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
  name: "Pushkar Travel Guide: The Sacred Lake City",
  description:
    "A complete Pushkar travel guide covering the sacred Pushkar Lake, 52 ghats, Brahma Temple, Savitri Mata Temple, Pushkar Camel Fair, spiritual experiences, hidden gems, local food, nearby Ajmer attractions, luxury travel and practical travel advice.",
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
    name: "Pushkar",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pushkar",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    containedInPlace: {
      "@type": "State",
      name: "Rajasthan",
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