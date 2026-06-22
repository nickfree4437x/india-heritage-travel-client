"use client";

// Layout
import TourLayout from "../../layout/TourLayout";

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
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[24px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-4
        ">
          Why Choose This South India Tour Package
        </h2>

        <div className="
          text-gray-700
          text-[12px] sm:text-[13px] md:text-[14px]
          font-[300]
          leading-relaxed
          text-justify
          space-y-4
        ">
          <p>
            Experience the diverse beauty of South India through a carefully curated journey that 
            combines scenic coastlines, misty hill stations, cultural heritage, wildlife experiences, 
            and local traditions. This South India Tour Package takes you through some of the region's 
            most iconic destinations, offering a perfect balance of relaxation, exploration, and 
            authentic cultural encounters.
          </p>

          <p>
            Designed for travelers seeking nature, heritage, and meaningful travel experiences, this 
            South India tour provides an immersive introduction to the region's diverse landscapes, 
            traditions, and hospitality. Whether you are looking for scenic beauty, cultural exploration,
            or a memorable holiday across South India, this journey delivers an enriching travel 
            experience.
          </p>
        </div>
      </div>

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