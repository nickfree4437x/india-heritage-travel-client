"use client";

import TourLayout from "./tour/TourLayout";

import Cochin from "./destinations/Cochin";
import Alleppey from "./destinations/Alleppey";
import Thekkady from "./destinations/Thekkady";
import Munnar from "./destinations/Munnar";
import Mumbai from "./destinations/Mumbai";
import HighlightsInclusions from "./HighlightsInclusions";
import DetailedItinerary from "./DetailedItinerary";
import ExcludedServices from "../../majestic-golden-triangle-tour/components/ExcludedServices";

export default function DestinationSection() {
  return (
    <TourLayout>

      <Cochin />
      <Alleppey />
      <Thekkady />
      <Munnar />
      <Mumbai />
      <HighlightsInclusions />
      <DetailedItinerary />
      <ExcludedServices/>

    </TourLayout>
  );
}