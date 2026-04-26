import ContactHero from "@/src/components/sections/contact/ContactHero";
import ContactInfoSection from "@/src/components/sections/contact/ContactInfoSection";
import ContactSection from "@/src/components/sections/contact/ContactPage";
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