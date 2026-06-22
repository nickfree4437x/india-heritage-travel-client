"use client";

import { ReactNode } from "react";
import BookingCard from "../booking-card/BookingCard";

type TourLayoutProps = {
  children: ReactNode;
};

export default function TourLayout({ children }: TourLayoutProps) {
  return (
    <section className="w-full bg-white">
      <div className="
        max-w-[1400px]
        mx-auto
        px-4 sm:px-6 md:px-8 lg:px-8
        py-0 sm:py-2 md:py-2 lg:py-2
      ">
        {/* Grid Layout - Left Content + Right Sidebar */}
        <div className="
          grid grid-cols-1
          lg:grid-cols-[2.4fr_1fr]
          gap-8 lg:gap-2
        ">
          {/* Left Side - Main Content */}
          <div className="
            w-full
            space-y-14 sm:space-y-16 md:space-y-20
            lg:pr-6
          ">
            {children}
          </div>

          {/* Right Side - Booking Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="
              w-full
              max-w-[280px] sm:max-w-[300px]
              md:max-w-[320px]
              lg:max-w-[340px] xl:max-w-[350px]
            ">
              {/* Sticky only on desktop */}
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