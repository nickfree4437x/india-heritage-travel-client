"use client";

// Destination sections
import DelhiSection from "../destinations/DelhiSection";
import MandawaSection from "../destinations/MandawaSection";
import BikanerSection from "../destinations/BikanerSection";
import JaisalmerSection from "../destinations/JaisalmerSection";
import JodhpurSection from "../destinations/JodhpurSection";
import UdaipurSection from "../destinations/UdaipurSection";
import PushkarSection from "../destinations/PushkarSection";
import JaipurSection from "../destinations/JaipurSection";
import AgraSection from "../destinations/AgraSection";

// Common sections
import WhyChooseSection from "@/src/tours/why-choose/WhyChooseSection";
import HighlightsSection from "../hightlights/HighlightsSection";

export default function TourContent() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* Destination Sections */}
      <DelhiSection />
      <MandawaSection />
      <BikanerSection />
      <JaisalmerSection />
      <JodhpurSection />
      <UdaipurSection />
      <PushkarSection />
      <JaipurSection />
      <AgraSection />

      {/* Highlights & Inclusions */}
      <HighlightsSection />
    </div>
  );
}