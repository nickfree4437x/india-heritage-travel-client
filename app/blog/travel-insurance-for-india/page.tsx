import type { Metadata } from "next";

// ============================================
// SEO METADATA
// ============================================
import { metadata as pageMetadata } from "./seo/metadata";
import {
  articleSchema,
  webPageSchema,
  organizationSchema,
} from "./seo/schema";

// ============================================
// SEO COMPONENTS
// ============================================
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "./sections/faq-section/FaqSchema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import TravelInsurance from "./sections/hero-intro/TravelInsurance";
import WhyInsuranceSection from "./sections/hero-intro/WhyInsuranceSection";
import MandatoryInsuranceSection from "./sections/travel-insurance/MandatoryInsuranceSection";
import CoverageSection from "./sections/travel-insurance/CoverageSection";
import HealthcareSection from "./sections/travel-insurance/HealthcareSection";
import InsuranceCostSection from "./sections/travel-insurance/InsuranceCostSection";
import ChoosingPlanSection from "./sections/travel-insurance/ChoosingPlanSection";
import ClaimsProcessSection from "./sections/pratical-guide/ClaimsProcessSection";
import SafetyTipsSection from "./sections/pratical-guide/SafetyTipsSection";
import WhyChooseSection from "./sections/pratical-guide/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "../top-heritage-hotel-in-india/sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function TravelInsuranceForIndiaPage() {
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
      name: "Travel Insurance for India",
      url: "https://indiaheritagetravel.com/blog/travel-insurance-for-india",
    },
  ];

  return (
    <>
      {/* Breadcrumb Schema - SEO */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Article Schema - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* WebPage Schema - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      {/* Organization Schema - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* FAQ Schema - JSON-LD */}
      <FAQSchema />

      {/* Hero */}
      <HeroSection />

      <main>
        <TravelInsurance />
        <WhyInsuranceSection />
        <MandatoryInsuranceSection />
        <CoverageSection />
        <HealthcareSection />
        <InsuranceCostSection />
        <ChoosingPlanSection />
        <ClaimsProcessSection />
        <SafetyTipsSection />
        <WhyChooseSection />
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}