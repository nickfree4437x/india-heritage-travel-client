import type { Metadata } from "next";

import ContactHero from "./sections/hero/ContactHero";
import ContactInfoSection from "./sections/contact-info/ContactInfoSection";
import ContactSection from "./sections/contact-form/ContactForm";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Contact India Heritage Travel | Plan Your India Journey | WhatsApp +91 7062101914",
  description:
    "Get in touch with our travel experts to plan your customized India tour, festival experience, or cultural journey.",
    alternates: {
      canonical: "/contact",
    },
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