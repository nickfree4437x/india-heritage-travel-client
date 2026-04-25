"use client";

import BookingCard from "./BookingCard";
import TourContent from "./TourContent";

export default function TourLayout() {
  return (
    <div className="bg-[#f4f0ea] w-full">

      <section
        className="max-w-[1400px] mx-auto px-6 py-4
        grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-8"
      >

        {/* LEFT SIDE */}
        <TourContent />

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