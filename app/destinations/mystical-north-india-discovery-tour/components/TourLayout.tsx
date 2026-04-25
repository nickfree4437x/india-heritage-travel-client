"use client";

import { ReactNode } from "react";
import BookingCard from "./BookingCard";

interface TourLayoutProps {
  children: ReactNode;
}

export default function TourLayout({ children }: TourLayoutProps) {
  return (
    <section
      className="max-w-[1400px] mx-auto px-6 py-16 
      grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-8 bg-[#f4f0ea]"
    >

      {/* LEFT SIDE (WIDER CONTENT) */}
      <div className="space-y-20 w-full">
        {children}
      </div>

      {/* RIGHT SIDE (BOOKING CARD) */}
      <div className="lg:pl-4">
        <div className="sticky top-24">
          <BookingCard />
        </div>
      </div>

    </section>
  );
}