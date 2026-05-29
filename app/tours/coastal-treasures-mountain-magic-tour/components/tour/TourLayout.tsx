"use client";

import BookingCard from "./BookingCard";

export default function TourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 sm:gap-8 md:gap-10">

        {/* 🔥 LEFT SIDE */}
        <div className="space-y-10 sm:space-y-12 md:space-y-12 px-0 sm:px-2 lg:pr-8">
          {children}
        </div>

        {/* 🔥 RIGHT SIDE - Ab mobile pe bhi dikhega */}
        <div className="flex justify-center lg:justify-end mb-8 lg:mt-0">
          <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px] xl:max-w-[350px]">
            <BookingCard />
          </div>
        </div>

      </div>

    </section>
  );
}