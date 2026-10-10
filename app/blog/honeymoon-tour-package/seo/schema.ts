import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/honeymoon-tour-package`;
const IMAGE_URL =
  "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779635049/hero-3_wj3zaa.jpg";
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
      name: "Best Honeymoon Destinations in India: Romantic Getaways for Couples",
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
    "Best Honeymoon Destinations in India: Romantic Getaways for Couples | Romantic & Luxury Getaways",
  description:
    "Discover the Best Honeymoon Destinations in India: Romantic Getaways for Couples featuring luxury resorts, heritage hotels, romantic escapes, cultural experiences, scenic destinations, and personalized itineraries for unforgettable memories.",
  image: IMAGE_URL,
  author: BLOG_AUTHORS.isha,
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
  name: "Best Honeymoon Destinations in India: Romantic Getaways for Couples",
  description:
    "Explore romantic honeymoon destinations across India with luxury stays, cultural experiences, personalized itineraries, scenic landscapes, and unforgettable travel moments.",
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

// ============================================
// FAQ SCHEMA
// ============================================
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the best honeymoon destinations in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popular honeymoon destinations in India include Udaipur, Jaipur, Kerala, Goa, Kashmir, Andaman Islands, and Shimla, offering a mix of luxury, romance, culture, and natural beauty.",
      },
    },
    {
      "@type": "Question",
      name: "Which is the best time for a honeymoon in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best time depends on the destination. Generally, October to March offers pleasant weather across most honeymoon destinations in India.",
      },
    },
    {
      "@type": "Question",
      name: "Are luxury honeymoon packages available in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. India offers luxury honeymoon packages featuring heritage palaces, premium resorts, private experiences, spa retreats, and customized romantic itineraries.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a honeymoon trip in India be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most honeymoon trips range between 5 and 12 days depending on the destinations, travel style, and experiences included in the itinerary.",
      },
    },
  ],
};