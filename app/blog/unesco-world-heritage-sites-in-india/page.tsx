import type { Metadata } from "next";

// SEO
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

// Common
import Footer from "@/src/sections/footer/Footer";
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSetion";
import TopHeritageHotelsPage from "./sections/heritage-site/TopHeritageSection";
import BestTimeSection from "./sections/heritage-site/BestTimeSection";
import AdviceTipsSection from "./sections/heritage-site/TravelTipsSection";
import FAQSchema from "./sections/faq-conclusion/FAQSchema";
import FAQSection from "./sections/faq-conclusion/FaqSection";
import MoreFoodSection from "../golden-triangle-tour-india-guide/sections/more-blogs/MoreBlogs";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "UNESCO World Heritage Sites in India: An Ultimate Travel Guide",

  description:
    "Discover India's most famous UNESCO World Heritage Sites including the Taj Mahal, Hampi, Ajanta Caves, Ellora Caves, Jaipur, Red Fort, Qutub Minar, and more.",

  image:
    "https://res.cloudinary.com/dja5yspwr/image/upload/v1782714314/pexels-roman-saienko-1867764487-38198571_poijud.jpg",

  author: {
    "@type": "Organization",

    name: "India Heritage Travel",
  },

  publisher: {
    "@type": "Organization",

    name: "India Heritage Travel",

    logo: {
      "@type": "ImageObject",

      url:
        "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779742948/logo2_yhlwmt.png",
    },
  },

  mainEntityOfPage: {
    "@type": "WebPage",

    "@id":
      "https://indiaheritagetravel.com/blog/unesco-world-heritage-sites-in-india",
  },
};

// ======================================================
// SEO METADATA
// ======================================================

export const metadata: Metadata = {
  title:
    "UNESCO World Heritage Sites in India: Ultimate Travel Guide",

  description:
    "Explore India's UNESCO World Heritage Sites including the Taj Mahal, Qutub Minar, Red Fort, Hampi, Ajanta Caves, Ellora Caves, Jaipur, Konark Sun Temple, and more.",

  keywords: [
    "UNESCO World Heritage Sites India",
    "India UNESCO Sites",
    "Taj Mahal UNESCO",
    "Hampi UNESCO Site",
    "Ajanta Caves",
    "Ellora Caves",
    "Red Fort Delhi",
    "Qutub Minar",
    "Jaipur UNESCO City",
    "India Heritage Travel",
  ],

  alternates: {
    canonical:
      "/blog/unesco-world-heritage-sites-in-india",
  },

  openGraph: {
    title:
      "UNESCO World Heritage Sites in India: Ultimate Travel Guide",

    description:
      "Discover India's most iconic UNESCO World Heritage Sites, from the Taj Mahal and Red Fort to Hampi, Ajanta, Ellora, and Jaipur.",

    url:
      "https://indiaheritagetravel.com/blog/unesco-world-heritage-sites-in-india",

    siteName: "India Heritage Travel",

    images: [
      {
        url:
          "https://res.cloudinary.com/dja5yspwr/image/upload/v1782714314/pexels-roman-saienko-1867764487-38198571_poijud.jpg",

        width: 1200,

        height: 630,

        alt:
          "UNESCO World Heritage Sites in India",
      },
    ],

    locale: "en_US",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "UNESCO World Heritage Sites in India: Ultimate Travel Guide",

    description:
      "A complete guide to India's UNESCO World Heritage Sites including the Taj Mahal, Hampi, Jaipur, Ajanta, Ellora, and more.",

    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782714314/pexels-roman-saienko-1867764487-38198571_poijud.jpg",
    ],
  },
};

// ======================================================
// PAGE
// ======================================================

export default function UNESCOWorldHeritageSitesPage() {
  return (
    <main className="w-full bg-white">

      {/* Breadcrumb Schema */}

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://indiaheritagetravel.com",
          },
          {
            name: "Blog",
            url: "https://indiaheritagetravel.com/blog",
          },
          {
            name: "UNESCO World Heritage Sites in India",
            url:
              "https://indiaheritagetravel.com/blog/unesco-world-heritage-sites-in-india",
          },
        ]}
      />

      {/* Article Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* FAQ Schema */}
      <FAQSchema/>

      {/* ======================================================
          BLOG SECTIONS
      ====================================================== */}

      {/* <HeroSection /> */}
      <HeroSection/>

      {/* <IntroSection /> */}
      <IntroSection/>

      {/* <TopUNESCOSitesSection /> */}
      <TopHeritageHotelsPage/>

      {/* <BestTimeSection /> */}
      <BestTimeSection/>

      {/* <TravelTipsSection /> */}
      <AdviceTipsSection/>

      {/* <FAQSection /> */}
      <FAQSection/>

      {/* <MoreBlogSection /> */}
      <MoreFoodSection/>

      <Footer />

    </main>
  );
}