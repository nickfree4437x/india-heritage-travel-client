// app/blogs/india-food-guide/page.tsx

import HeroSection from "./components/HeroSection";
import FoodIntroSection from "./components/FoodIntroSection";
import DishesSection from "./components/DishesSection";
import TravelTipsSection from "./components/TravelTipsSection";
import FinalThoughtsSection from "./components/FinalThoughtsSection";
import MoreFoodSection from "./components/MoreFoodSection";
import Footer from "@/src/components/sections/footer/Footer";

export default function IndiaFoodGuidePage() {
  return (
    <main className="w-full bg-white">

      <HeroSection />

      <FoodIntroSection />

      <DishesSection />

      <TravelTipsSection />

      <FinalThoughtsSection />

      <MoreFoodSection />
      <Footer/>

    </main>
  );
}