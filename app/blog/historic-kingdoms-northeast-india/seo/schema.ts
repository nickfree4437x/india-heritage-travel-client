
import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ----- ARTICLE SCHEMA -----
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",

  headline:
    "Historic Kingdoms of Northeast India: Ancient Capitals & Heritage | India Heritage Travel",

  description:
    "Explore the historic kingdoms of Northeast India, from Assam's Ahom dynasty and Tripura's Manikya rulers to Manipur, Meghalaya and Sikkim's living cultural heritage.",

  image:
    "https://res.cloudinary.com/dja5yspwr/image/upload/v1795174079/images_rr6eyy.jpg",

  author: BLOG_AUTHORS.isha,

  publisher: {
    "@id": "https://www.indiaheritagetravel.com/#organization",
  },

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.indiaheritagetravel.com/blog/historic-kingdoms-northeast-india",
  },
};

// ----- WEB PAGE SCHEMA -----
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",

  name: "Historic Kingdoms of Northeast India",

  description:
    "Explore the ancient kingdoms of Northeast India, including Assam's Ahom dynasty, Tripura's Manikya rulers, Manipur's Meitei kingdom, and the cultural heritage of Meghalaya and Sikkim.",

  url: "https://www.indiaheritagetravel.com/blog/historic-kingdoms-northeast-india",
};
