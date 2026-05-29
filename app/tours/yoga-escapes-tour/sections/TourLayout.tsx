"use client";

import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";
import BookingCard from "./BookingCard";
import TourDetails from "./TourDetails";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import HighlightsInclusions from "./HighlightsInclusions";
import Itinerary from "./Itinerary";

export default function TourLayout() {
  return (

    /* 🔥 FULL SECTION */
    <section className="w-full bg-white py-14">

      {/* 🔥 MAIN CONTAINER */}
      <div
        className="
          max-w-[1400px]
          mx-auto

          px-4 sm:px-6 md:px-8 lg:px-8
          py-4 sm:py-4 md:py-6 lg:py-6
        "
      >

        {/* 🔥 GRID LAYOUT */}
        <div
          className="
            grid grid-cols-1
            lg:grid-cols-[2.4fr_1fr]

            gap-8 lg:gap-2
          "
        >

          {/* 🔥 LEFT CONTENT */}
          <div
            className="
              w-full
              space-y-14 sm:space-y-16 md:space-y-20
              lg:pr-6
            "
          >

            <TourDetails />
            <HighlightsInclusions />

            <div className="space-y-0">
              <Itinerary />
              <div className="space-y-6">
                <ExcludedServices/>
                <DetailedItineraryIntro/>
              </div>
            </div>

          </div>

          {/* 🔥 RIGHT SIDEBAR */}
          <div
            className="
              flex justify-center
              lg:justify-end
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

              {/* 🔥 STICKY CARD */}
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