import type { Metadata } from "next";

// ============================================
// SEO METADATA
// ============================================
import { metadata as pageMetadata } from "./seo/metadata";
import {
  articleSchema,
  webPageSchema,
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
import InternetGuideSection from "./sections/hero-intro/InternetGuideSection";
import ConnectivityOptionsSection from "./sections/hero-intro/ConnectivityOptionsSection";
import BestSimCardsSection from "./sections/sim-cards/BestSimCardsSection";
import PhysicalSimSection from "./sections/sim-cards/PhysicalSimSection";
import RoamingComparisonSection from "./sections/sim-cards/RoamingComparisonSection";
import DocumentsSection from "./sections/sim-cards/DocumentsSection";
import PricingSection from "./sections/pricing-others/PricingSection";
import CoverageSection from "./sections/pricing-others/CoverageSection";
import CyberSecuritySection from "./sections/pricing-others/CyberSecuritySection";
import CommonProblemsSection from "./sections/pricing-others/CommonProblemsSection";
import WhyChooseSection from "./sections/pricing-others/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "../jaipur-travel-tips/sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function InternetSimGuideIndiaPage() {
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
      name: "Internet & SIM Card Guide for Tourists in India",
      url: "https://indiaheritagetravel.com/blog/internet-sim-card-guide-india",
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

      {/* FAQ Schema - JSON-LD */}
      <FAQSchema />

      {/* Hero */}
      <HeroSection />

      <main>
        <InternetGuideSection />
        <ConnectivityOptionsSection />
        <BestSimCardsSection />
        <PhysicalSimSection />
        <RoamingComparisonSection />
        <DocumentsSection />
        <PricingSection />
        <CoverageSection />
        <CyberSecuritySection />
        <CommonProblemsSection />
        <WhyChooseSection />
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}