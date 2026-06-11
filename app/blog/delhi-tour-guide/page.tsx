import type { Metadata } from "next";

import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import HeroSection from "./sections/hero/HeroSection";
import DelhiGuideSection from "./sections/guide/DelhiGuideSection";
import DelhiExtraGuideSection from "./sections/extra-guide/DelhiExtraGuideSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "New Delhi Travel Guide | Essential Tips for First-Time Visitors",

  description:
    "Navigate New Delhi with practical travel tips, cultural insights, iconic attractions, local experiences, food recommendations, and essential advice for first-time travelers.",

  image:
    "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779828252/blog-12_dxeh3u.jpg",

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
      "https://indiaheritagetravel.com/blog/delhi-tour-guide",
  },
};

export const metadata: Metadata = {
  title:
    "New Delhi Travel Guide | Essential Tips for First-Time Visitors",

  description:
    "Navigate New Delhi with practical travel tips, cultural insights, iconic attractions, local experiences, food recommendations, and essential advice for first-time travelers.",

  alternates: {
    canonical: "/blog/delhi-tour-guide",
  },
};

export default function DelhiTourGuidePage() {
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
            name: "New Delhi Travel Guide | Essential Tips for First-Time Visitors",
            url: "https://indiaheritagetravel.com/blog/delhi-tour-guide",
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

      <DelhiGuideSection />

      <DelhiExtraGuideSection />

      <Moreblogs />

      <Footer />

    </main>
  );
}