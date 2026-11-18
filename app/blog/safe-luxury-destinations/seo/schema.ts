import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/safe-luxury-destinations`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1782539739/blog-2_ma62qv_msocje.jpg";
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
      name: "Safe Luxury Destinations in India for Solo Female Travellers",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": BLOG_URL,
  },
  headline:
    "Safe Luxury Destinations in India for Solo Female Travellers",
  alternativeHeadline:
   "Luxury Travel in India for Solo Female Travellers",
  description:
   "Explore luxury destinations in India for solo female travellers, with heritage stays, cultural experiences, scenic landscapes, and practical travel considerations.",
  image: {
    "@type": "ImageObject",
    url: IMAGE_URL,
    width: 1200,
    height: 630,
  },
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
  inLanguage: "en",
  articleSection: "Luxury Travel",
  keywords: [
    "Safe Luxury Destinations in India",
    "Luxury Destinations in India",
    "Solo Female Travel India",
    "Safe Places in India for Solo Female Travellers",
    "Luxury Travel India",
    "Luxury Heritage Hotels India",
    "Best Destinations for Solo Female Travellers in India",
  ],
  isAccessibleForFree: true,
};


// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: BLOG_URL,
  name:
    "Safe Luxury Destinations in India for Solo Female Travellers",
  description:
    "Explore luxury destinations in India for solo female travellers, featuring heritage stays, cultural experiences, scenic landscapes, and premium hospitality.",
  isPartOf: {
    "@type": "WebSite",
    url: BASE_URL,
    name: "India Heritage Travel",
  },
  inLanguage: "en",
};