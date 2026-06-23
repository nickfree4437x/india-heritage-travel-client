"use client";

// Layout
import TourLayout from "../../layout/TourLayout";
import WhyChooseSection from "@/src/tours/why-choose/WhyChooseSection";

// Destination components
import Cochin from "./Cochin";
import Alleppey from "./Alleppey";
import Thekkady from "./Thekkady";
import Munnar from "./Munnar";
import Mumbai from "./Mumbai";

// Other sections
import HighlightsInclusions from "../highlights/HighlightsInclusions";
import DetailedItinerary from "../itinerary/DetailedItinerary";
import ExcludedServices from "../../../majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";

export default function DestinationSection() {
  return (
    <TourLayout>
      {/* SEO Content Section */}
      <WhyChooseSection />

      {/* Destination Sections */}
      <Cochin />
      <Alleppey />
      <Thekkady />
      <Munnar />
      <Mumbai />

      {/* Highlights & Inclusions */}
      <HighlightsInclusions />

      {/* Itinerary & Services */}
      <div className="space-y-6">
        <DetailedItinerary />
        <ExcludedServices />
        <DetailedItineraryIntro />
      </div>
    </TourLayout>
  );
}