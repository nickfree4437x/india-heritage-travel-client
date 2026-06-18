import type { Metadata } from "next";

// Common components
import Footer from "@/src/sections/footer/Footer";

// Page sections
import ContactHero from "./sections/hero/ContactHero";
import ContactInfoSection from "./sections/contact-info/ContactInfoSection";
import ContactSection from "./sections/contact-form/ContactForm";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "Contact India Heritage Travel | Plan Your India Journey",
  description:
    "Contact India Heritage Travel to plan customized India tours, Rajasthan journeys, Golden Triangle trips, cultural experiences, festival tours, and private travel itineraries.",
  alternates: {
    canonical: "/contact",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoSection />
      <ContactSection />
      <Footer />
    </>
  );
}