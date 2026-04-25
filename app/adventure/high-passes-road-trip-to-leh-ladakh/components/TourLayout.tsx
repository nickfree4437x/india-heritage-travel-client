"use client";

import BookingCard from "./BookingCard";
import { ReactNode } from "react";

type TourLayoutProps = {
  children: ReactNode;
};

export default function TourLayout({ children }: TourLayoutProps) {
  return (
    <section className="bg-[#f4f0ea] py-16">
      <div className="max-w-[1400px] mx-auto px-6 
                      grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-8">

        {/* LEFT */}
        <div className="space-y-20 w-full">
          {children}
        </div>

        {/* RIGHT */}
        <div className="lg:pl-4">
          <div className="sticky top-24">
            <BookingCard />
          </div>
        </div>

      </div>
  </section>
  );
}