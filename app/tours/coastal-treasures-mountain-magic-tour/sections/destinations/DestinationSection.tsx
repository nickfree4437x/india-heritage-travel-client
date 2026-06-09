"use client";

import TourLayout from "../layout/TourLayout";

import Cochin from "./Cochin";
import Alleppey from "./Alleppey";
import Thekkady from "./Thekkady";
import Munnar from "./Munnar";
import Mumbai from "./Mumbai";
import HighlightsInclusions from "../highlights/HighlightsInclusions";
import DetailedItinerary from "../itinerary/DetailedItinerary";
import ExcludedServices from "../../../majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";

export default function DestinationSection() {
  return (
    <TourLayout>

      <Cochin />
      <Alleppey />
      <Thekkady />
      <Munnar />
      <Mumbai />
      <HighlightsInclusions />
      
      <div className="space-y-6">
        <DetailedItinerary />
        <ExcludedServices/>
        <DetailedItineraryIntro/>
      </div>

    </TourLayout>
  );
}