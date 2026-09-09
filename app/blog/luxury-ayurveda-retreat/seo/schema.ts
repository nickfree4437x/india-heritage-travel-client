import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================================
// SCHEMA.ORG - JSON-LD STRUCTURED DATA
// ============================================================

// ----- ARTICLE SCHEMA -----
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",

  headline:
    "Luxury Ayurveda Retreats in India | Wellness, Healing & Relaxation Guide",

  description:
    "Explore India's finest luxury Ayurveda retreats offering holistic healing, wellness therapies, yoga experiences, relaxation programs, personalized treatments, and rejuvenating wellness escapes.",

  image:
    "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779801053/blog-8_rtahzc.jpg",

  author: BLOG_AUTHORS.isha,

  publisher: {
    "@type": "Organization",
    name: "India Heritage Travel",
    logo: {
      "@type": "ImageObject",
      url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779742948/logo2_yhlwmt.png",
    },
  },

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://indiaheritagetravel.com/blog/luxury-ayurveda-retreat",
  },
};

// ----- WEB PAGE SCHEMA -----
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",

  name: "Luxury Ayurveda Retreats in India",
  description:
    "Discover luxury Ayurveda retreats in India offering wellness therapies, yoga programs, holistic healing, rejuvenation experiences, and peaceful escapes.",

  url: "https://indiaheritagetravel.com/blog/luxury-ayurveda-retreat",
};

// ----- ORGANIZATION SCHEMA -----
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "India Heritage Travel",
  url: "https://indiaheritagetravel.com",
  logo: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779742948/logo2_yhlwmt.png",
};