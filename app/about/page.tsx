import type { Metadata } from "next";
import AboutHero from "./AboutHero";
import AboutLayout from "./AboutLayout";
import Footer from "@/src/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: "About India Heritage Travel | Trusted India Tour Experts | Expert India Tour Operator",
  description:
    "Meet Piyush & Isha - India Heritage Travel passionate team. Jaipur-based experts specializing in solo women travel, heritage tours & cultural India experiences. 200+ happy travelers. Know our story.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutLayout/>
      <Footer/>
    </>
  );
}