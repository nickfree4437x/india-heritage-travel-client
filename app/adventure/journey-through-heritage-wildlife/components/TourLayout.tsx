"use client";

import RightBookingCard from "./RightBookingCard";

export default function TourLayout({ children }: any) {
  return (
    <section className="w-full bg-[#f4f0ea] py-16">

      <div className="max-w-[1400px] mx-auto px-6 
      grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-8">

        {/* LEFT SIDE */}
        <div className="space-y-20 w-full">
          {children}
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:pl-4">
          <div className="sticky top-24">
            <RightBookingCard />
          </div>
        </div>

      </div>
    </section>
  );
}