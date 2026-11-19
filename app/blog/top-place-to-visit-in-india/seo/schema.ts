import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/top-place-to-visit-in-india`;
const IMAGE_URL =
  "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779652419/blog-7_kt857x.jpg";
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
      name: "Top 10 Places to Visit in India During Summer: Best Summer Destinations",
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
    "Top 10 Places to Visit in India During Summer: Best Summer Destinations",
  description:
    "Discover the Top 10 Places to Visit in India During Summer: Best Summer Destinations, including hill stations, mountain escapes, beaches, adventure destinations, and cultural experiences perfect for a memorable vacation.",
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
  name: "Top 10 Places to Visit in India During Summer: Best Summer Destinations",
  description:
    "Explore India's best summer destinations, from scenic hill stations and Himalayan adventures to beaches, cultural landmarks, and unforgettable travel experiences.",
  url: BLOG_URL,
};


// ============================================
// ITEM LIST SCHEMA
// ============================================
export const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Top 10 Places to Visit in India During Summer: Best Summer Destinations",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Rishikesh",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Spiti Valley",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Andaman Islands",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Leh Ladakh",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Coorg",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Ooty",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Darjeeling",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "Auli",
    },
    {
      "@type": "ListItem",
      position: 9,
      name: "Shillong",
    },
  ],
};