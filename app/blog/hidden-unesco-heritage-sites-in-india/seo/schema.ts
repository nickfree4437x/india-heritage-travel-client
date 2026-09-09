import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/hidden-unesco-heritage-sites-india`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1784723097/Entry_to__Auditorium_Cave__vdskzu.jpg";
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
      name: "Hidden UNESCO Heritage Sites in India",
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
    "Hidden UNESCO Heritage Sites in India (2026) | Offbeat UNESCO Travel Guide",
  description:
    "Discover India's hidden UNESCO World Heritage Sites including Champaner-Pavagadh, Rani ki Vav, Bhimbetka, the Hoysalas, and the Moidams with expert travel tips, itineraries, and planning advice.",
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
  name: "Hidden UNESCO Heritage Sites in India",
  description:
    "A complete guide to India's lesser-known UNESCO World Heritage Sites including Champaner-Pavagadh, Rani ki Vav, Bhimbetka, the Hoysalas, and the Moidams with travel planning and visitor information.",
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