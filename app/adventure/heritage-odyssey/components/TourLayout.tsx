"use client";

import TourLeft from "./TourLeft";
import BookingCard from "./BookingCard";
import HighlightsInclusions from "./HighlightSection";
import Itinerary from "./ItinerarySection";
import ExcludedServices from "@/app/destinations/majestic-golden-triangle-tour/components/ExcludedServices";
import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";

export default function TourLayout() {
  return (

    /* 🔥 FULL WIDTH BG */
    <section className="w-full bg-[#f8f6f2]">

      {/* 🔥 CONTAINER */}
      <div
        className="
          max-w-[1400px]
          mx-auto
          px-3 sm:px-4 md:px-6 lg:px-8
        "
      >

        {/* 🔥 MAIN GRID */}
        <div
          className="
            grid grid-cols-1
            lg:grid-cols-[3fr_1fr]
            gap-6 sm:gap-8 md:gap-8
          "
        >

          {/* 🔥 LEFT SIDE */}
          <div
            className="
              space-y-4 sm:space-y-6 md:space-y-8
              px-0 sm:px-2
              lg:pr-8
            "
          >

            <TourLeft />

            <HighlightsInclusions />

            <Itinerary />

            <ExcludedServices />
            <DetailedItineraryIntro/>

          </div>

          {/* 🔥 RIGHT SIDE */}
          <div
            className="
              flex justify-center lg:justify-end
              mb-8 lg:mb-0
            "
          >

            {/* 🔥 SIDEBAR WIDTH CONTROL */}
            <div
              className="
                w-full
                max-w-[280px]
                sm:max-w-[300px]
                md:max-w-[320px]
                lg:max-w-[340px]
                xl:max-w-[350px]
              "
            >

              {/* 🔥 STICKY ONLY DESKTOP */}
              <div className="lg:sticky lg:top-24">

                <BookingCard />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}