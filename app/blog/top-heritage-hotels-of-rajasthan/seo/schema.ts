// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/top-heritage-hotels-of-rajasthan`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1782554877/Rambagh_Palace_Jaipur_ny9xx7.jpg";
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
      name: "Top Heritage Hotels of Rajasthan",
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
    "Top Heritage Hotels of Rajasthan: Best Palace & Luxury Stays Guide",
  description:
    "Discover the best heritage hotels in Rajasthan, including Rambagh Palace, Taj Lake Palace, Umaid Bhawan Palace, Samode Palace, and luxury royal stays across Jaipur, Udaipur, Jodhpur, and Jaisalmer.",
  image: IMAGE_URL,
  author: {
    "@type": "Organization",
    name: "India Heritage Travel",
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
};

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Top Heritage Hotels of Rajasthan",
  description:
    "A complete guide to Rajasthan's finest heritage hotels, palace stays, luxury accommodations, booking tips, and travel recommendations.",
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