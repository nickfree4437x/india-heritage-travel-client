import FaqSection from "@/src/components/sections/festivals/common/FAQSection";
import Footer from "@/src/components/sections/footer/Footer";
import BookingSection from "@/src/home/rent-car/booking/BookingSection";
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
      <FaqSection/>
      <Footer/>
    </>
  );
}