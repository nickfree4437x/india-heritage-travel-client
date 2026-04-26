import FAQSection from "@/src/components/sections/festivals/festivalDetails/holi/components/FAQSection";
import Footer from "@/src/components/sections/footer/Footer";
import BookingSection from "@/src/home/rent-car/BookingSection";
import RentCarHero from "@/src/home/rent-car/RentCarHero";
import VehicleSection from "@/src/home/rent-car/VehicleSection";
import WhyChooseSection from "@/src/home/rent-car/WhyChooseSection";

export default function RentCarPage() {
  return (
    <>
      <RentCarHero />
      <WhyChooseSection/>
      <VehicleSection/>
      <BookingSection/>
      <FAQSection/>
      <Footer/>
    </>
  );
}