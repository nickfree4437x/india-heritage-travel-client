import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/travel-insurance-for-india`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1785471996/dino-reichmuth-A5rCN8626Ck-unsplash_fp1z81.jpg";
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
      name: "Travel Insurance for India",
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
    "Travel Insurance for India (2026) | Complete Guide for International Travellers",
  description:
    "Complete 2026 travel insurance guide for India covering medical insurance, emergency evacuation, trip cancellation, costs, coverage, exclusions, claims and insurance tips for international travellers.",
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
  name: "Travel Insurance for India",
  description:
    "A complete travel insurance guide for international travellers visiting India, covering medical coverage, emergency evacuation, trip cancellation, insurance costs, exclusions, claims and practical safety advice.",
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