import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/top-heritage-sites-in-north-india`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1784526694/pexels-absoluteabhi-37967925_ousrlv.jpg";

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
      name: "Top Heritage Sites in North India",
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
    "Top Heritage Sites in North India (2026) | Complete Travel Guide",
  description:
    "Discover the best heritage sites across North India including Delhi, Agra, Rajasthan, Amritsar, and Varanasi with travel tips, itineraries, ticket prices, and expert planning advice.",
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
  name: "Top Heritage Sites in North India",
  description:
    "A complete guide to North India's most iconic heritage destinations including Delhi, Agra, Rajasthan, Amritsar, and Varanasi with travel planning and visitor information.",
  url: BLOG_URL,
};
