// app/blogs/indian-traveler-guide/page.tsx
import type { Metadata } from "next";


import HeroSection from "./sections/hero/HeroSection";
import TravelBasicsSection from "./sections/travel-basics/TravelBasicsSection";
import SafetyAndMoneySection from "./sections/safety-and-money/SafetyAndMoneySection";
import FinalTravelTipsSection from "./sections/travel-tips/FinalTravelTipsSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "First-Time Travel Guide to India | Essential Tips, Culture & Travel Advice",

  description:
    "Plan your India journey with practical travel tips, cultural insights, destination recommendations, safety advice, and essential information for first-time visitors.",

  image:
    "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779637895/blog-3_dksm9v.jpg",

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
      "https://indiaheritagetravel.com/blog/indian-traveller-guide",
  },
};

export const metadata: Metadata = {
  title: "First-Time Travel Guide to India | Essential Tips, Culture & Travel Advice",
  description:
    "Plan your India journey with practical travel tips, cultural insights, destination recommendations, safety advice, and essential information for first-time visitors.",
  alternates: {
    canonical: "/blog/indian-traveller-guide",
  },
};

export default function IndianTravelerGuidePage() {
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
            name: "First-Time Travel Guide to India",
            url: "https://indiaheritagetravel.com/blog/indian-traveller-guide",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema
          ),
        }}
      />

      <HeroSection />

      <TravelBasicsSection />

      <SafetyAndMoneySection />

      <FinalTravelTipsSection />
      <Moreblogs/>
      <Footer/>

    </main>
  );
}