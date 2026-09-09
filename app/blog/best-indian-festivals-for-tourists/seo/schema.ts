import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";

const BLOG_URL = `${BASE_URL}/blog/best-indian-festivals-for-tourists`;

const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1785903404/pexels-yankrukov-8819845_azck8i.jpg";

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
      name: "Best Indian Festivals for Tourists",
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
    "Best Indian Festivals for Tourists (2026) | Holi, Diwali, Pushkar & More",

  description:
    "Discover the best Indian festivals for tourists including Holi, Diwali, Durga Puja, Pushkar Camel Fair, Navratri, Onam, Pongal, Hornbill Festival and expert travel tips for planning your cultural journey.",

  image: IMAGE_URL,

  // Real person author
  author: BLOG_AUTHORS.isha,

  // Publisher remains the organization
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

  name: "Best Indian Festivals for Tourists",

  description:
    "A complete travel guide to India's most spectacular festivals including Holi, Diwali, Durga Puja, Pushkar Camel Fair, Navratri, Onam, Pongal, Hornbill Festival, travel tips, itineraries and luxury cultural experiences.",

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