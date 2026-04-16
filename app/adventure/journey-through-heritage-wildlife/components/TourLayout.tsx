"use client";

import RightBookingCard from "./RightBookingCard";

export default function TourLayout({ children }: any) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10">
      
      {/* LEFT SIDE (CONTENT) */}
      <div className="lg:col-span-2 space-y-16">
        {children}
      </div>

      {/* RIGHT SIDE (STICKY CARD) */}
      <div className="hidden lg:block">
        <div className="sticky top-24">
          <RightBookingCard />
        </div>
      </div>
    </div>
  );
}