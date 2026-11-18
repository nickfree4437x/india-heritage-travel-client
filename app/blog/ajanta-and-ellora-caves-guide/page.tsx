import type { Metadata } from "next";

// Metadata & Schemas
import { metadata as pageMetadata } from "./seo/metadata";

import {
  articleSchema,
  webPageSchema,
} from "./seo/schema";

// SEO
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "./sections/faq-section/FaqSchema";

// Sections
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import AjantaHistorySection from "./sections/ajanta-history-architecture/AjantaHistorySection";
import AjantaArchitectureSection from "./sections/ajanta-history-architecture/AjantaArchitectureSection";
import ElloraHistorySection from "./sections/ellora-history-architecture/ElloraHistorySection";
import ElloraArchitectureSection from "./sections/ellora-history-architecture/ElloraArchitectureSection";
import KailasaTempleSection from "./sections/ellora-history-architecture/KailasaTempleSection";
import NearbyAttractionsSection from "./sections/major-attraction/NearbyAttractionsSection";
import FoodExperiencesSection from "./sections/major-attraction/FoodExperiencesSection";
import TicketInformationSection from "./sections/pratical-guide/TicketInformationSection";
import BestTimeSection from "./sections/pratical-guide/BestTimeSection";
import WhyChooseSection from "./sections/pratical-guide/WhyChoose";
import FAQSection from "./sections/faq-section/FaqSection";
import MoreBlog from "./sections/more-blogs/MoreBlogs";

// Common
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata =
  pageMetadata;

export default function AjantaElloraGuidePage() {
  const breadcrumbItems = [
    {
      name: "Home",
      url: "https://indiaheritagetravel.com",
    },
    {
      name: "Blog",
      url: "https://indiaheritagetravel.com/blog",
    },
    {
      name: "Ajanta & Ellora Caves Guide",
      url:
        "https://indiaheritagetravel.com/blog/ajanta-ellora-caves-guide",
    },
  ];

  return (
    <>
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={breadcrumbItems}
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

      {/* FAQ Schema */}
      <FAQSchema />

      {/* Hero */}
      <HeroSection />

      <main>
        <IntroSection />
        <AjantaHistorySection />
        <AjantaArchitectureSection />
        <ElloraHistorySection />
        <ElloraArchitectureSection />
        <KailasaTempleSection />
        <NearbyAttractionsSection />
        <FoodExperiencesSection />
        <TicketInformationSection />
        <BestTimeSection />
        <WhyChooseSection />
        <FAQSection />
        <MoreBlog />
      </main>

      <Footer />
    </>
  );
}