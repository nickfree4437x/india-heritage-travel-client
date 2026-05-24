import ContactHero from "./components/ContactHero";
import ContactInfoSection from "./components/ContactInfoSection";
import ContactSection from "./components/ContactForm";
import Footer from "@/src/components/sections/footer/Footer";

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