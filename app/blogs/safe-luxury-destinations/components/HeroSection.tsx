// app/blogs/safe-luxury-destinations/components/HeroSection.tsx

"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/blogs/blog-2/blog-2.jpg"
        alt="Safe Luxury Destinations"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">

          <div className="max-w-4xl">

            {/* CATEGORY */}
            <p className="uppercase tracking-[4px] text-white/80 text-sm mb-5">
              Wellness & Solo Travel
            </p>

            {/* TITLE */}
            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl leading-tight font-serif">
              Safe & Luxury Destinations
              <br />
              For Solo Women Travellers
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 text-white/90 text-base sm:text-lg leading-8 max-w-2xl">
              Discover elegant escapes, peaceful retreats,
              safe cultural experiences, and luxury destinations
              designed for women seeking meaningful solo journeys
              across India.
            </p>

            {/* META */}
            <div className="mt-8 flex items-center gap-4 text-white/70 text-sm tracking-wide">

              <span>23 Dec</span>

              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />

              <span>India Heritage Travel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}