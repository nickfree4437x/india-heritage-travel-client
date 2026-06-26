"use client";

import Link from "next/link";

export default function WhyChooseIHTSection() {
  return (
    <section className="w-full bg-[#faf8f5] py-4 sm:py-6">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#AF956C] mb-3">
          Travel With Experts
        </span>

        <h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-semibold text-[#2c2c2c] leading-tight mb-6">
          Discover Rajasthan with India Heritage Travel
        </h2>

        <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-8 text-gray-700 font-light text-justify mb-6">
          The real difference between simply visiting Rajasthan's forts and
          truly experiencing them lies in understanding the stories they
          preserve. Anyone can stand inside
          <strong> Chittorgarh Fort</strong>, but discovering why it endured
          three historic sieges completely changes the way you see its massive
          walls. Walking along the mighty fortifications of
          <strong> Kumbhalgarh Fort</strong> becomes even more remarkable once
          you understand why one of the world's longest defensive walls was
          built across the Aravalli Hills. History transforms beautiful
          monuments into unforgettable experiences.
        </p>

        <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-8 text-gray-700 font-light text-justify mb-8">
          At India Heritage Travel, every Rajasthan itinerary is designed
          around this philosophy. We believe journeys should move at your pace,
          not according to a fixed group schedule. Our carefully selected local
          guides share the history, legends, architecture, and royal stories
          behind every destination, while private chauffeur-driven travel gives
          you the freedom to explore Rajasthan comfortably and without rushing
          from one monument to the next.
        </p>

        {/* Internal Links */}

        <div className="border-t border-[#e7dfd4] pt-6">

          <h3 className="text-[15px] font-semibold text-[#2c2c2c] mb-4">
            Continue Planning Your Rajasthan Journey
          </h3>

          <div className="flex flex-wrap gap-3">

            <Link
              href="/blog/golden-triangle-tour-vs-rajasthan-tour"
              className="text-[13px] text-[#AF956C] hover:underline"
            >
              → Golden Triangle Tour vs Rajasthan Tour
            </Link>

            <Link
              href="/blog/rawla-narlai-luxury-heritage-hotel-rajasthan"
              className="text-[13px] text-[#AF956C] hover:underline"
            >
              → Rawla Narlai Luxury Heritage Hotel Guide
            </Link>

            <Link
              href="/blog/luxury-golden-triangle-tour-india"
              className="text-[13px] text-[#AF956C] hover:underline"
            >
              → Luxury Golden Triangle Tour Guide
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}