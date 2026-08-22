// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/nagaur-travel-guide-forts-ranvas-rajasthan`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1787369828/pexels-mukund-patel-1264723-2409361_as2tei.jpg";
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
      name: "Nagaur Travel Guide",
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
    "Nagaur Travel Guide: Forgotten Forts, Royal Stories & the Ranvas Palace",
  description:
    "The complete Nagaur travel guide covering Ahhichatragarh Fort, Ranvas Palace, Nagaur's royal and Sufi heritage, Cattle Fair, hidden attractions, desert experiences, itineraries and practical travel tips.",
  image: [IMAGE_URL],
  author: {
    "@type": "Organization",
    name: "India Heritage Travel",
    url: BASE_URL,
  },
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
  url: BLOG_URL,
  articleSection: "Rajasthan Travel",
  keywords: [
    "Nagaur Travel Guide",
    "Nagaur Rajasthan",
    "Nagaur Fort",
    "Ahhichatragarh Fort",
    "Ranvas Palace",
    "Nagaur Cattle Fair",
    "Nagaur Heritage",
    "Offbeat Rajasthan",
    "Rajasthan Heritage Tour",
  ],
};

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name:
    "Nagaur Travel Guide: Forgotten Forts, Royal Stories & the Ranvas Palace",
  description:
    "Explore Nagaur's historic forts, royal heritage, Ranvas Palace, Sufi traditions, Cattle Fair, desert experiences, nearby attractions and practical travel advice.",
  url: BLOG_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "India Heritage Travel",
    url: BASE_URL,
  },
  about: {
    "@type": "Place",
    name: "Nagaur",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagaur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: IMAGE_URL,
  },
};

// ============================================
// ORGANIZATION SCHEMA
// ============================================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "India Heritage Travel",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
  },
};