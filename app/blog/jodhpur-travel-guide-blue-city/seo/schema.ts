import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/jodhpur-travel-guide-blue-city`;
const IMAGE_URL =
  "https://indiaheritagetravel.comhttps://res.cloudinary.com/dja5yspwr/image/upload/v1786763699/makm-photography-u0irC_UnbOk-unsplash_m0rqt5.jpg";

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
      name: "Jodhpur Travel Guide: The Blue City",
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
    "Jodhpur Travel Guide 2026 | Blue City, Mehrangarh Fort & Travel Tips",
  description:
    "Explore Jodhpur, the Blue City of Rajasthan, with this complete travel guide covering Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, old-city markets, food, luxury stays, desert experiences, itineraries and practical travel tips.",
  image: [IMAGE_URL],
  author: BLOG_AUTHORS.isha,
  publisher: {
  "@id": "https://indiaheritagetravel.com/#organization",
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
  name: "Jodhpur Travel Guide: The Blue City",
  description:
    "A complete Jodhpur travel guide covering the Blue City, Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, Marwar history, architecture, attractions, cultural experiences, food, shopping, desert experiences, itineraries and practical travel advice.",
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
    name: "Jodhpur",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jodhpur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
};
