"use client";

import TourDetails from "./TourDetails";
import BookingCard from "./BookingCard";
import ExcludedServices from "@/app/destinations/majestic-golden-triangle-tour/components/ExcludedServices";

export default function TourLayout() {
  return (
    <section className="bg-[#f4f0ea] py-16">
      <div
        className="max-w-[1400px] mx-auto px-6 
                   grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-8"
      >

        {/* LEFT (Main Content) */}
        <div className="space-y-20 w-full">
          <TourDetails />
          <ExcludedServices/>
        </div>

        {/* RIGHT (Sticky Booking Card) */}
        <div className="lg:pl-4">
          <div className="sticky top-24">
            <BookingCard />
          </div>
        </div>

      </div>
    </section>
  );
}