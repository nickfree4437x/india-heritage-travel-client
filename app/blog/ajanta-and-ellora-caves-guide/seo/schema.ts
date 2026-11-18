// ============================================================
// SCHEMA.ORG - JSON-LD STRUCTURED DATA
// ============================================================

import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ----- ARTICLE SCHEMA -----
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",

  headline:
    "Ajanta & Ellora Caves Guide 2026 | History, Architecture, Tickets & Travel Tips",

  description:
    "Complete Ajanta and Ellora Caves travel guide covering history, architecture, UNESCO significance, Kailasa Temple, tickets, timings, photography tips, nearby attractions, and practical travel advice.",

  image:
    "https://res.cloudinary.com/dja5yspwr/image/upload/v1783592350/pexels-roman-saienko-1867764487-36098238_kouz4s.jpg",

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
    "@id":
      "https://indiaheritagetravel.com/blog/ajanta-ellora-caves-guide",
  },
};

// ----- WEB PAGE SCHEMA -----
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",

  name: "Ajanta & Ellora Caves Guide",

  description:
    "A complete guide to Ajanta and Ellora Caves covering history, architecture, UNESCO significance, Kailasa Temple, travel planning, and visitor information.",

  url: "https://indiaheritagetravel.com/blog/ajanta-ellora-caves-guide",
};