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
import IndiaRupee from "./sections/hero-intro/IndianCurrency";
import RupeeGuideSection from "./sections/hero-intro/RupeeGuideSection";
import CashVsCardsSection from "./sections/cash-vs-cards/CashVsCardsSection";
import UPISection from "./sections/cash-vs-cards/UPISection";
import ATMGuideSection from "./sections/cash-vs-cards/ATMGuideSection";
import CurrencyExchangeSection from "./sections/cash-vs-cards/CurrencyExchangeSection";
import ForexCardSection from "./sections/card-payments/ForexCardSection";
import TippingCultureSection from "./sections/card-payments/TippingCultureSection";
import BankingGSTSection from "./sections/card-payments/BankingGSTSection";
import PaymentMethodsSection from "./sections/card-payments/PaymentMethodsSection";
import MoneyChecklistSection from "./sections/pratical-guide/MoneyChecklistSection";
import WhyChooseSection from "../internet-sim-card-guide-india/sections/pricing-others/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "../ajanta-and-ellora-caves-guide/sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function IndiaCurrencyGuidePage() {
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
      name: "India Currency Guide",
      url: "https://indiaheritagetravel.com/blog/india-currency-guide",
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
        <IndiaRupee />
        <RupeeGuideSection />
        <CashVsCardsSection />
        <UPISection />
        <ATMGuideSection />
        <CurrencyExchangeSection />
        <ForexCardSection />
        <TippingCultureSection />
        <BankingGSTSection />
        <PaymentMethodsSection />
        <MoneyChecklistSection />
        <div className="-mt-1 md:-mt-3">
          <WhyChooseSection />
        </div>
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}