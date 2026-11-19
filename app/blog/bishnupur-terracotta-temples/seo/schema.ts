const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/bishnupur-terracotta-temples";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const BLOG_TITLE =
  "Bishnupur Terracotta Temples: Malla Heritage & Bengal's Artistry";

const BLOG_DESCRIPTION =
  "Explore Bishnupur's terracotta temples, Malla dynasty history, Baluchari silk, Bankura horses, cultural traditions, attractions and travel tips.";

const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1792825239/Jod_Bangla_Terracotta_Temple__Bishnupur__West_Bengal_i0zr5i.jpg";

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${BLOG_URL}#article`,

  headline: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  image: {
    "@type": "ImageObject",
    url: FEATURED_IMAGE,
    width: 1200,
    height: 630,
  },

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

  articleSection: "East India Travel",

  about: {
    "@type": "Place",
    name: "Bishnupur",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bishnupur",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
  },

  keywords: [
    "Bishnupur terracotta temples",
    "Malla dynasty heritage",
    "Jor Bangla Temple",
    "Rasmancha Bishnupur",
    "Baluchari silk",
    "West Bengal cultural heritage",
  ],

  inLanguage: "en-IN",
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BLOG_URL}#webpage`,

  url: BLOG_URL,
  name: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "India Heritage Travel",
    url: SITE_URL,
  },

  primaryImageOfPage: {
    "@type": "ImageObject",
    url: FEATURED_IMAGE,
  },

  mainEntity: {
    "@type": "TouristDestination",
    name: "Bishnupur",
    description:
      "A heritage destination in West Bengal known for its terracotta temples, Malla dynasty architecture and traditional crafts.",
    touristType: [
      "Heritage travelers",
      "Architecture enthusiasts",
      "Cultural travelers",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bishnupur",
      addressRegion: "West Bengal",
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
        name: "Bishnupur Terracotta Temples",
        item: BLOG_URL,
      },
    ],
  },

  inLanguage: "en-IN",
};
