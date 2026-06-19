import type { Metadata } from "next";

// Common components
import Footer from "@/src/sections/footer/Footer";

// Page sections
import PrivacyHero from "./PrivacyHero";
import PrivacyContent from "./PrivacyContent";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "Privacy Policy | India Heritage Travel",
  description:
    "Read the Privacy Policy of India Heritage Travel and learn how we collect, use, and protect your information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
      <Footer />
    </>
  );
}