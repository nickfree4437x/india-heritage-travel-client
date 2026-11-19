// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/chettinad-heritage-mansion-hotels";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const HERO_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1789118638/nakkeeran-raveendran-c6SNid8b-nQ-unsplash_s6near.jpg";
const BLOG_TITLE =
  "Chettinad Heritage Mansion Hotels: India's Forgotten Palaces of Luxury Travel";
const BLOG_DESCRIPTION =
  "Discover Chettinad heritage mansion hotels - the crumbling merchant palaces of Tamil Nadu reborn as India's most romantic luxury stays. Full travel guide inside.";

// ============================================
// ARTICLE SCHEMA
// ============================================
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${BLOG_URL}#article`,
  headline: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  image: [HERO_IMAGE],
  url: BLOG_URL,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": BLOG_URL,
  },
  author: {
    "@type": "Organization",
    name: "India Heritage Travel",
    url: SITE_URL,
  },
  publisher: {
  "@id": "https://indiaheritagetravel.com/#organization",
},
  isPartOf: {
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "India Heritage Travel Blog",
    url: `${SITE_URL}/blog`,
  },
  inLanguage: "en",
  articleSection: "South India Travel",
  keywords: [
    "Chettinad Heritage Mansion Hotels",
    "Chettinad Mansion Hotels",
    "Luxury Mansion Stays in Chettinad",
    "Heritage Hotels in Chettinad",
    "Chettinad Architecture",
    "Athangudi Tiles",
    "Karaikudi Heritage Hotels",
    "Things to Do in Chettinad",
    "Best Time to Visit Chettinad",
    "How to Reach Chettinad",
    "Chettinad Heritage Tour",
    "South India Luxury Travel",
    "Chettinad Heritage Hotels",
    "Chettinad Mansions",
    "Nattukottai Chettiar Mansions",
    "Kanadukathan Heritage Hotels",
    "Athangudi Heritage",
    "Karaikudi Travel Guide",
    "Chettinad Cuisine",
    "Tamil Nadu Heritage Hotels",
    "Tamil Nadu Luxury Travel",
    "South India Heritage Tour",
    "India Heritage Travel",
  ],
};

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": BLOG_URL,
  url: BLOG_URL,
  name: BLOG_TITLE,
  description:
    "A complete guide to Chettinad heritage mansion hotels, exploring historic merchant palaces, Chettinad architecture, Athangudi tiles, heritage stays, local cuisine and nearby attractions in Tamil Nadu.",
  isPartOf: {
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "India Heritage Travel Blog",
    url: `${SITE_URL}/blog`,
  },
  about: {
    "@type": "Place",
    name: "Chettinad",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  },
  inLanguage: "en",
};