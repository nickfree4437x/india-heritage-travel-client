import type { Metadata } from "next";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

// Common Components
import Footer from "@/src/sections/footer/Footer";
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import TopHeritageHotels from "./sections/hotels/TopHotelsSection";
import ChoosingHotelSection from "./sections/heritage-guide/ChoosingHotelSection";
import BestTimeSection from "./sections/travel-guide/BestTimeSection";
import BeforeBookingSection from "./sections/travel-guide/BeforeBookingSection";
import WhyChooseIHTSection from "./sections/travel-guide/WhyChooseIHTSection";
import FAQSchema from "./sections/faq-conclusion/FAQSchema";
import FAQSection from "./sections/faq-conclusion/FAQSection";
import MoreBlogSection from "../golden-triangle-tour-vs-rajasthan-tour/sections/more-blog/MoreBlog";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "Top Heritage Hotels of Rajasthan: Where Rich History Meets Luxury",

  description:
    "Discover the best heritage hotels in Rajasthan, from Rambagh Palace and Taj Lake Palace to Umaid Bhawan Palace and Samode Palace. Find the perfect royal stay for your Rajasthan journey.",

  image:
    "https://res.cloudinary.com/dja5yspwr/image/upload/v1782554877/Rambagh_Palace_Jaipur_ny9xx7.jpg",

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
      "https://indiaheritagetravel.com/blog/top-heritage-hotels-of-rajasthan",
  },
};

// ======================================================
// SEO METADATA
// ======================================================

export const metadata: Metadata = {
  title:
    "Top Heritage Hotels of Rajasthan: Where Rich History Meets Luxury",

  description:
    "Explore Rajasthan's finest heritage hotels, including Rambagh Palace, Taj Lake Palace, Umaid Bhawan Palace, RAAS Jodhpur, Samode Palace, and more. Discover where history meets luxury.",

  alternates: {
    canonical:
      "/blog/top-heritage-hotels-of-rajasthan",
  },

  openGraph: {
    title:
      "Top Heritage Hotels of Rajasthan: Where Rich History Meets Luxury",

    description:
      "Discover Rajasthan's most remarkable heritage hotels, from royal palaces in Jaipur and Udaipur to luxury fort hotels in Jaisalmer and Jodhpur.",

    url:
      "https://indiaheritagetravel.com/blog/top-heritage-hotels-of-rajasthan",

    siteName: "India Heritage Travel",

    images: [
      {
        url:
          "https://res.cloudinary.com/dja5yspwr/image/upload/v1782554877/Rambagh_Palace_Jaipur_ny9xx7.jpg",

        width: 1200,

        height: 630,

        alt:
          "Top Heritage Hotels of Rajasthan",
      },
    ],

    locale: "en_US",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Top Heritage Hotels of Rajasthan: Where Rich History Meets Luxury",

    description:
      "Planning a Rajasthan trip? Explore the finest palace hotels, heritage stays, and luxury royal residences across Jaipur, Jodhpur, Udaipur, Jaisalmer, and beyond.",

    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782554877/Rambagh_Palace_Jaipur_ny9xx7.jpg",
    ],
  },
};

// ======================================================
// PAGE COMPONENT
// ======================================================

export default function TopHeritageHotelsPage() {
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
            name: "Top Heritage Hotels of Rajasthan",
            url:
              "https://indiaheritagetravel.com/blog/top-heritage-hotels-of-rajasthan",
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
      {/* <FAQSchema /> */}

      {/* ======================================================
          BLOG SECTIONS
      ====================================================== */}
      <HeroSection/>
      <IntroSection/>
      <TopHeritageHotels/>
      <ChoosingHotelSection/>
      <BestTimeSection/>
      <BeforeBookingSection/>

      {/* <WhyChooseIHTSection /> */}
      <WhyChooseIHTSection/>

      {/* <FAQSection /> */}
      <FAQSection/>

      {/* <MoreBlogSection /> */}
      <MoreBlogSection/>

      <Footer />

    </main>
  );
}