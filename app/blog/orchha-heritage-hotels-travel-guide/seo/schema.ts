import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/orchha-heritage-hotels-travel-guide";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const BLOG_TITLE = "Orchha Heritage Hotels: A Forgotten Kingdom Travel Guide";
const BLOG_DESCRIPTION =
  "Discover Orchha Heritage Hotels and the untouched Bundela capital on the Betwa River - palaces, temples, luxury stays, and a complete travel guide.";
const HERO_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1789311345/pexels-thebioscopeguy-20000870_srtgjy.jpg";
const HERO_IMAGE_ALT =
  "Domes of Jahangir Mahal palace silhouetted against a golden sunset over the Betwa River in Orchha, Madhya Pradesh";

// ============================================
// ARTICLE SCHEMA
// ============================================
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  image: [HERO_IMAGE],
  url: BLOG_URL,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": BLOG_URL,
  },
  author: BLOG_AUTHORS.isha,
  publisher: {
  "@id": "https://indiaheritagetravel.com/#organization",
},
  articleSection: "Central India Travel",
  about: {
    "@type": "Place",
    name: "Orchha",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orchha",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
  },
  isPartOf: {
    "@type": "WebSite",
    name: "India Heritage Travel",
    url: SITE_URL,
  },
  mainEntity: {
    "@type": "TouristDestination",
    name: "Orchha",
    description:
      "A historic Bundela capital in Madhya Pradesh known for its palaces, temples, cenotaphs and heritage architecture along the Betwa River.",
    image: HERO_IMAGE,
  },
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
  description: BLOG_DESCRIPTION,
  image: {
    "@type": "ImageObject",
    url: HERO_IMAGE,
    width: 1200,
    height: 630,
    caption: HERO_IMAGE_ALT,
  },
  isPartOf: {
    "@type": "WebSite",
    name: "India Heritage Travel",
    url: SITE_URL,
  },
  about: {
    "@type": "Place",
    name: "Orchha",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orchha",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Orchha Heritage Hotels",
        item: BLOG_URL,
      },
    ],
  },
};