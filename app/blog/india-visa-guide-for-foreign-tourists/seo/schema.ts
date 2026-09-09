import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/india-visa-guide-for-foreign-tourists`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1786508346/global-residence-index-LPdaW746WAw-unsplash_ou5fdg.jpg";
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
      name: "India Visa Guide for Foreign Tourists",
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
    "India Visa Guide for Foreign Tourists (2026) | e-Visa, Fees & How to Apply",
  description:
    "Complete India Visa Guide for foreign tourists covering e-Visa eligibility, visa types, fees, passport requirements, application process, processing time, entry points, visa extensions and practical travel tips for 2026.",
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
  isPartOf: {
    "@type": "Blog",
    "@id": `${BASE_URL}/blog`,
    name: "India Heritage Travel Blog",
    url: `${BASE_URL}/blog`,
  },
  inLanguage: "en-US",
};

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "India Visa Guide for Foreign Tourists",
  description:
    "A complete India visa guide for foreign tourists covering e-Visa eligibility, visa types, passport and document requirements, application process, fees, processing times, validity, entry points, visa extensions and practical travel advice.",
  url: BLOG_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "India Heritage Travel",
    url: BASE_URL,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    "@id": `${BLOG_URL}#breadcrumb`,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: IMAGE_URL,
  },
  inLanguage: "en-US",
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