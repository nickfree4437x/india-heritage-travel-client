// ============================================
// SEO METADATA
// ============================================
export { metadata } from "./seo/metadata";

// ============================================
// SEO COMPONENTS
// ============================================
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "./sections/faq-section/FaqSchema";

// ============================================
// SEO SCHEMAS
// ============================================
import {
  articleSchema,
  webPageSchema,
} from "./seo/schema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import VisaOverviewSection from "./sections/visa-overview/VisaOverviewSection";
import WhoNeedsVisaSection from "./sections/visa-overview/WhoNeedsVisaSection";
import VisaTypesSection from "./sections/visa-overview/VisaTypesSection";
import EligibleCountriesSection from "./sections/visa-overview/CountriesSection";
import PassportRequirementsSection from "./sections/passport-requirements/RequirementsSection";
import ApplicationProcessSection from "./sections/passport-requirements/ApplicationProcessSection";
import VisaFeesSection from "./sections/passport-requirements/VisaFeesSection";
import VisaValiditySection from "./sections/passport-requirements/VisaValiditySection";
import VisaExtensionSection from "./sections/pratical-guide/VisaExtensionSection";
import PracticalGuideSection from "./sections/pratical-guide/PracticalGuideSection";
import WhyChooseSection from "../is-india-safe-for-female-travellers/sections/practical-guide/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "../india-travel-cost-guide/sections/traveler-type/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE COMPONENT
// ============================================
export default function IndiaVisaGuideForForeignTouristsPage() {
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
      name: "India Visa Guide for Foreign Tourists",
      url: "https://indiaheritagetravel.com/blog/india-visa-guide-for-foreign-tourists",
    },
  ];

  return (
    <>
      {/* SEO Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema />

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


      {/* Hero */}
      <HeroSection />

      {/* Main Blog Content */}
      <main>
        <IntroSection />
        <VisaOverviewSection />
        <WhoNeedsVisaSection />
        <VisaTypesSection />
        <EligibleCountriesSection />
        <PassportRequirementsSection />
        <ApplicationProcessSection />
        <VisaFeesSection />
        <VisaValiditySection />
        <VisaExtensionSection />
        <div className="-mt-5 md:-mt-1">
          <WhyChooseSection />
        </div>
        <PracticalGuideSection />
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}