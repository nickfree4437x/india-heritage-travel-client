import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/is-india-safe-for-female-travellers`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1785038986/pexels-ajaybhargavguduru-939722_doeur2.jpg";

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
      name: "Is India Safe for Female Travellers?",
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
    "Is India Safe for Female Travellers? (2026) | Safety Guide & Travel Tips",
  description:
    "Learn whether India is safe for female travellers in 2026 with expert advice on destinations, transport, accommodation, cultural etiquette, scams, safety tips, and women-only tours.",
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
  name: "Is India Safe for Female Travellers?",
  description:
    "A complete safety guide for female travellers visiting India, covering destinations, transport, accommodation, cultural etiquette, scams, emergency planning, and practical travel advice.",
  url: BLOG_URL,
};
