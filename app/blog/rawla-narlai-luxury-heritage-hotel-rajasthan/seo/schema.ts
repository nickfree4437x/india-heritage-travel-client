import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/rawla-narlai-luxury-heritage-hotel-rajasthan`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1782297620/23.06.2026_11.28.01_REC_xq38bb.jpg";
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
      name: "Rawla Narlai: Luxury Heritage Hotel in Rajasthan",
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
    "Rawla Narlai: Luxury Heritage Hotel in Rajasthan | India Heritage Travel",
  description:
    "Explore Rawla Narlai in Rajasthan, with heritage suites, stepwell dining, cultural experiences, and nearby Aravalli landscapes. Plan your heritage stay.",
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
  name: "Rawla Narlai: Luxury Heritage Hotel in Rajasthan",
  description:
    "Discover Rawla Narlai in Rajasthan, including its heritage accommodation, dining experiences, cultural attractions, and Aravalli surroundings.",
  url: BLOG_URL,
};