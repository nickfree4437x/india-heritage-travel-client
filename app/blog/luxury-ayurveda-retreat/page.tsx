import type { Metadata } from "next";

import { metadata as pageMetadata } from "./seo/metadata";

import {
  articleSchema,
  webPageSchema,
} from "./seo/schema";

import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

import HeroSection from "./sections/hero/HeroSection";
import AyurvedaRetreatSection from "./sections/ayurveda-retreat/AyurvedaRetreatSection";
import MoreWellnessRetreatsSection from "./sections/wellness-retreat/MoreWellnessRetreatsSection";
import LuxuryRetreatFinalSection from "./sections/luxury-retreat/LuxuryRetreatFinalSection";
import Moreblogs from "./sections/more-blogs/Moreblogs";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata =
  pageMetadata;

export default function BlogDetailsPage() {
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
            name: "Luxury Ayurveda Retreats in India",
            url: "https://indiaheritagetravel.com/blog/luxury-ayurveda-retreat",
          },
        ]}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema
          ),
        }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema
          ),
        }}
      />
      
      {/* Page Sections */}
      <HeroSection />
      <AyurvedaRetreatSection />
      <MoreWellnessRetreatsSection />
      <LuxuryRetreatFinalSection />
      <Moreblogs />
      <Footer />

    </main>
  );
}