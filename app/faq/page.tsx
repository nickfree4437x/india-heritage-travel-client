
import Footer from "@/src/components/sections/footer/Footer";
import FAQHero from "@/src/home/faq/FAQHero";
import FaqSection from "@/src/components/sections/festivals/common/FAQSection";

export default function FAQPage() {
  return (
    <div className="bg-[#f8f6f2]">
      <FAQHero />
      <div className="mt-10">
        <FaqSection/>
      </div>
      <Footer/>
    </div>
  );
}