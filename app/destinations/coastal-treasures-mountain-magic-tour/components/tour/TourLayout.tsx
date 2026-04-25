"use client";

import BookingCard from "./BookingCard";

export default function TourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-[1400px] mx-auto px-3 md:px-4 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10">

        {/* 🔥 LEFT SIDE */}
        <div className="space-y-16 pr-8">
          {children}
        </div>

        {/* 🔥 RIGHT SIDE */}
        <div className="hidden lg:flex justify-end">
          <div className="w-full max-w-[340px]">
            <BookingCard />
          </div>
        </div>

      </div>

    </section>
  );
}