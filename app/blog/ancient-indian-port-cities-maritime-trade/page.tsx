import type { Metadata } from "next";
import Script from "next/script";

// ============================================
// SEO COMPONENTS
// ============================================
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "./sections/faq-section/FaqSchema";

// ============================================
// SEO METADATA
// ============================================
import { metadata } from "./seo/metadata";

// ============================================
// SEO SCHEMAS
// ============================================
import {
  articleSchema,
  webPageSchema,
  organizationSchema,
} from "./seo/schema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import MaritimeTradeSection from "./sections/hero-intro/IntroSection";
import HistoricPortsSection from "./sections/hero-intro/OverviewSection";
import ArchitectureCultureSection from "./sections/history-archiecture/ArchitectureSection";
import Hiddengems from "./sections/history-archiecture/HiddenGemsSection";
import ExperiencesSection from "./sections/major-attractions/ExperiencesSection";
import ItinerarySection from "./sections/pratical-guide/ItinerarySection";
import PracticalGuideSection from "./sections/pratical-guide/PracticalGuideSection";
import WhyChooseSection from "./sections/pratical-guide/WhyTravelSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "./sections/faq-section/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// SEO METADATA
// ============================================
export { metadata };

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://www.indiaheritagetravel.com";
const BLOG_PATH = "/blog/ancient-indian-port-cities-maritime-trade";

const breadcrumbItems = [
  {
    name: "Home",
    url: SITE_URL,
  },
  {
    name: "Blog",
    url: `${SITE_URL}/blog`,
  },
  {
    name: "Ancient Indian Port Cities and Maritime Trade",
    url: `${SITE_URL}${BLOG_PATH}`,
  },
];

// ============================================
// PAGE COMPONENT
// ============================================
export default function AncientIndianPortCitiesPage() {
  return (
    <>
      {/* SEO Schemas */}
      <BreadcrumbSchema items={breadcrumbItems} />

      <Script
        id="ancient-ports-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <Script
        id="ancient-ports-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      <Script
        id="ancient-ports-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <FAQSchema />

      {/* Hero */}
      <HeroSection />

      {/* Main Blog Content */}
      <main>
        <MaritimeTradeSection />
        <HistoricPortsSection />
        <ArchitectureCultureSection />
        <Hiddengems />
        <ExperiencesSection />
        <ItinerarySection />
        <PracticalGuideSection />
        <WhyChooseSection />
        <FAQSection />
      </main>

      {/* More Blogs */}
      <MoreBlogs />

      {/* Footer */}
      <Footer />
    </>
  );
}