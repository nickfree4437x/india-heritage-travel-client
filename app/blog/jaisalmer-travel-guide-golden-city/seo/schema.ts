// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/jaisalmer-travel-guide-golden-city`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1786850130/hotel-lal-garh-fort-and-palace-9hz-7Qpg5wc-unsplash_z3rlbe.jpg";
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
      name: "Jaisalmer Travel Guide: The Golden City",
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
    "Jaisalmer Travel Guide 2026 | Golden City, Fort, Desert & Luxury Travel",
  description:
    "Complete Jaisalmer Travel Guide covering the Golden City, Jaisalmer Fort, historic havelis, Gadisar Lake, Sam Sand Dunes, luxury desert camps, itineraries, practical travel tips and more.",
  image: [IMAGE_URL],
  author: {
    "@type": "Organization",
    name: "India Heritage Travel",
    url: BASE_URL,
  },
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
  name: "Jaisalmer Travel Guide: The Golden City",
  description:
    "A complete Jaisalmer travel guide covering Jaisalmer Fort, golden sandstone architecture, historic havelis, Gadisar Lake, Sam Sand Dunes, Thar Desert experiences, luxury desert camps, local food, shopping, nearby attractions, itineraries and practical travel tips.",
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
    name: "Jaisalmer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaisalmer",
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