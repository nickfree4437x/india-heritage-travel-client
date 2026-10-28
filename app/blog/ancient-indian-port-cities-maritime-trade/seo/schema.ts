const SITE_URL = "https://www.indiaheritagetravel.com";
const BLOG_PATH = "/blog/ancient-indian-port-cities-maritime-trade";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const BLOG_TITLE =
  "Ancient Indian Port Cities and Maritime Trade | India Heritage Travel";

const BLOG_DESCRIPTION =
  "Explore ancient Indian port cities and maritime trade, from Lothal and Muziris to Arikamedu, Puhar, Tamralipta, Bharuch and Sopara.";

const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1793181024/pexels-ibrahim-poonawala-53441506-11195186_x9zcfm.jpg";

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${BLOG_URL}#article`,
  headline: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  image: [FEATURED_IMAGE],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": BLOG_URL,
  },
  url: BLOG_URL,
  inLanguage: "en-IN",
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
  articleSection: "Indian Heritage and History",
  keywords: [
    "ancient Indian port cities",
    "maritime trade in ancient India",
    "Indian Ocean trade routes",
    "Lothal",
    "Muziris",
    "Arikamedu",
    "Puhar",
    "Tamralipta",
    "Bharuch",
    "Sopara",
  ],
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BLOG_URL}#webpage`,
  url: BLOG_URL,
  name: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  inLanguage: "en-IN",
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
        name: "Ancient Indian Port Cities and Maritime Trade",
        item: BLOG_URL,
      },
    ],
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "India Heritage Travel",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/logo.png`,
  },
  sameAs: [
    "https://www.facebook.com/indiaheritagetravel",
    "https://www.instagram.com/indiaheritagetravel/",
  ],
};