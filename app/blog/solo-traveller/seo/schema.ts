import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/solo-traveler`;
const IMAGE_URL =
  "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1579641987/blog-4_rarjqw.jpg";

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
      name: "Solo Female Travel in India: Safety, Wellness & Travel Tips",
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
    "Solo Female Travel in India: Safety, Wellness & Travel Tips",
  alternativeHeadline:
    "A Practical Guide to Solo Female Travel in India",
  description:
    "Explore solo female travel in India with practical safety tips, wellness retreats, cultural experiences, hidden destinations, and useful advice for planning your journey.",
  image: {
    "@type": "ImageObject",
    url: IMAGE_URL,
    width: 1200,
    height: 630,
  },
  author: BLOG_AUTHORS.isha,
  publisher: {
  "@id": "https://indiaheritagetravel.com/#organization",
},
  inLanguage: "en",
  articleSection: "Solo Travel",
  keywords: [
    "Solo Female Travel India",
    "Solo Women Travel India",
    "Solo Travel India",
    "Women Traveling Alone in India",
    "Safe Travel for Women in India",
    "India Solo Travel Guide",
    "Solo Female Travel Safety India",
    "Wellness Travel India",
    "Cultural Travel India",
    "Offbeat India Destinations",
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
    "Solo Female Travel in India: Safety, Wellness & Travel Tips",
  description:
    "Discover safe and meaningful solo travel experiences across India through wellness retreats, cultural journeys, hidden destinations, and inspiring adventures.",
  isPartOf: {
    "@type": "WebSite",
    url: BASE_URL,
    name: "India Heritage Travel",
  },
  inLanguage: "en",
};