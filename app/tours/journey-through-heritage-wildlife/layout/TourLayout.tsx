"use client";

import RightBookingCard from "../booking-card/RightBookingCard";

export default function TourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full bg-white">
      <div className="
        max-w-[1400px]
        mx-auto
        px-3 sm:px-4 md:px-6 lg:px-8
      ">
        {/* Grid Layout - Left Content + Right Sidebar */}
        <div className="
          grid grid-cols-1
          lg:grid-cols-[3fr_1fr]
          gap-6 sm:gap-8 md:gap-8
        ">
          {/* Left Side - Main Content */}
          <div className="
            space-y-6 sm:space-y-6 md:space-y-8
            px-0 sm:px-2
            lg:pr-8
          ">
            {children}
          </div>

          {/* Right Side - Booking Card */}
          <div className="
            flex justify-center lg:justify-end
            mb-8 lg:mt-0
          ">
            <div className="
              w-full
              max-w-[280px] sm:max-w-[300px]
              md:max-w-[320px]
              lg:max-w-[340px] xl:max-w-[350px]
            ">
              {/* Sticky only on desktop */}
              <div className="lg:sticky lg:top-24">
                <RightBookingCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}