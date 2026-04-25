"use client";

import TourLeft from "./TourLeft";
import BookingCard from "./BookingCard";
import HighlightsInclusions from "./HighlightSection";
import Itinerary from "./ItinerarySection";
import ExcludedServices from "@/app/destinations/majestic-golden-triangle-tour/components/ExcludedServices";

export default function TourLayout() {
  return (
    <div className="bg-[#f4f0ea] w-full">

      <section
        className="max-w-[1400px] mx-auto px-6 py-6
        grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-8"
      >

        {/* LEFT SIDE */}
        <div>
          <TourLeft />
          <HighlightsInclusions/>
          <Itinerary/>
          <ExcludedServices/>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:pl-4">
          <div className="sticky top-24">
            <BookingCard />
          </div>
        </div>

      </section>

    </div>
  );
}