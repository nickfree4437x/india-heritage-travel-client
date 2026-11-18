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
import FAQSchema from "../best-destinations-for-women-travellers-india/sections/faq-section/FaqSchema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import CultureSection from "./sections/hero-intro/CultureEtiquette";
import WhyEtiquetteSection from "./sections/hero-intro/WhyEtiquetteSection";
import DressCodeSection from "./sections/greetings-sections/DressCodeSection";
import TempleEtiquetteSection from "./sections/greetings-sections/TempleEtiquetteSection";
import GreetingsSection from "./sections/greetings-sections/GreetingsSection";
import TravelTipsSection from "./sections/greetings-sections/TravelTipsSection";
import PracticalGuideSection from "../female-travel-safety-guide-india/sections/practical-guide/PracticalGuideSection";
import ItinerarySection from "./sections/greetings-sections/ItinerarySection";
import WhyChooseSection from "../is-india-safe-for-female-travellers/sections/practical-guide/WhyChooseSection";
import FAQSection from "../best-destinations-for-women-travellers-india/sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "../is-india-safe-for-female-travellers/sections/practical-guide/MoreBlogsSection";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function CulturalEtiquetteWomenTravellersPage() {
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
      name: "Cultural Etiquette for Women Travellers in India",
      url: "https://indiaheritagetravel.com/blog/cultural-etiquette-for-women-travellers-india",
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
        <CultureSection />
        <WhyEtiquetteSection />
        <DressCodeSection />
        <TempleEtiquetteSection />
        <GreetingsSection />
        <div className="-mt-5">
          <TravelTipsSection />
        </div>
        <PracticalGuideSection />
        <ItinerarySection />
        <WhyChooseSection />
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}