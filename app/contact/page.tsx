import type { Metadata } from "next";

import ContactHero from "./components/ContactHero";
import ContactInfoSection from "./components/ContactInfoSection";
import ContactSection from "./components/ContactForm";
import Footer from "@/src/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Contact India Heritage Travel | Plan Your India Journey | WhatsApp +91 7062101914",
  description:
    "Get in touch with our travel experts to plan your customized India tour, festival experience, or cultural journey.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoSection/>
      <ContactSection />
      <Footer/>
    </>
  );
}