const SITE_URL = "https://indiaheritagetravel.com";

const BLOG_PATH = "/blog/mandu-luxury-heritage-stays-romantic-guide";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const BLOG_TITLE =
  "Mandu Luxury Heritage Stays: Romantic Luxury Among Medieval Ruins";

const BLOG_DESCRIPTION =
  "Discover Mandu luxury heritage stays amid India's most romantic medieval ruins. A complete guide to Jahaz Mahal, Roopmati's Pavilion and private heritage tours.";

const HERO_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1789368460/aakansha-agrawal-fipoV_f13Zw-unsplash_ghphxi.jpg";

const HERO_IMAGE_ALT =
  "Couple watching sunset from Rani Roopmati Pavilion during a Mandu luxury heritage stay";

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

  author: {
    "@type": "Organization",
    name: "India Heritage Travel",
    url: SITE_URL,
  },

  publisher: {
    "@type": "Organization",
    name: "India Heritage Travel",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.png`,
    },
  },

  articleSection: "Central India Travel",

  about: {
    "@type": "Place",
    name: "Mandu",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mandu",
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
    name: "Mandu",
    description:
      "A historic medieval city in Madhya Pradesh known for its romantic ruins, palaces, pavilions, monuments and heritage architecture.",
    image: HERO_IMAGE,
  },
};

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
    name: "Mandu",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mandu",
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
        name: "Mandu Luxury Heritage Stays",
        item: BLOG_URL,
      },
    ],
  },
};
