const SITE_URL = "https://indiaheritagetravel.com";

const BLOG_PATH = "/blog/osian-heritage-luxury-desert-travel";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1792492130/pexels-ethan-sarkar-2060961318-32851834_p9tcae.jpg";

const BLOG_TITLE =
  "Osian Heritage & Luxury Desert Travel: Temples, Thar Sunsets & Stays";

const BLOG_DESCRIPTION =
  "Discover Osian near Jodhpur, from ancient Jain and Hindu temples and Pratihara architecture to luxury desert camps, camel safaris, sunset dinners and practical travel tips.";

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",

  headline: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  image: [FEATURED_IMAGE],
  url: BLOG_URL,
  inLanguage: "en",

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

  articleSection: "Rajasthan Heritage and Desert Travel",

  about: {
    "@type": "Place",
    name: "Osian, Rajasthan",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Osian",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },

  keywords: [
    "Osian Heritage and Luxury Desert Travel",
    "Osian travel guide",
    "Osian temples",
    "Mahavira Jain Temple Osian",
    "Sachiya Mata Temple",
    "Osian Pratihara architecture",
    "Osian luxury desert camps",
    "Osian camel safari",
    "Rajasthan desert travel",
    "India Heritage Travel",
  ],
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",

  "@id": `${BLOG_URL}#webpage`,
  url: BLOG_URL,
  name: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  inLanguage: "en",

  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "India Heritage Travel",
  },

  primaryImageOfPage: {
    "@type": "ImageObject",
    url: FEATURED_IMAGE,
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
        name: "Osian Heritage & Luxury Desert Travel",
        item: BLOG_URL,
      },
    ],
  },

  about: {
    "@type": "TouristDestination",
    name: "Osian",
    description:
      "A destination near Jodhpur, Rajasthan, known for its historic Jain and Hindu temples, Pratihara architecture and desert travel experiences.",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Rajasthan, India",
    },
  },
};
