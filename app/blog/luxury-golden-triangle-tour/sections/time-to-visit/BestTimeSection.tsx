"use client";

import Link from "next/link";
import { ArrowRight, } from "lucide-react";

export default function BestTimeLuxuryTourSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="mb-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-4">
            Best Time for a Luxury Golden Triangle Tour
          </h2>

        </div>

        {/* Content */}

        <div className="space-y-5">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The ideal window for a luxury Golden Triangle tour is from
            <strong className="font-medium text-[#2c2c2c]">
              {" "}October through March
            </strong>,
            when daytime temperatures across Delhi, Agra, and Jaipur remain
            comfortably between approximately 15–28°C (59–82°F). This period
            provides the most enjoyable conditions for sightseeing, private
            heritage walks, outdoor dining, and palace experiences.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            It is also the season when luxury hotels and heritage palaces can
            be enjoyed exactly as they were intended. Open courtyards, rooftop
            dinners, garden breakfasts, and evening cultural performances all
            become highlights of the journey rather than activities limited by
            extreme weather.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Among these months,
            <strong className="font-medium text-[#2c2c2c]">
              {" "}November through February
            </strong>
            stands out as the sweet spot. Travelers benefit from crisp mornings,
            pleasant afternoons, clear skies, and access to India's festive
            calendar, including Diwali celebrations and other seasonal events
            hosted by many of the country's finest luxury properties.
          </p>

        </div>

        {/* Highlight Box */}

        <div className="bg-white rounded-lg mt-4">
         <Link
            href="/blog/best-time-to-visit-golden-triangle-india"
            className="
            group
            flex items-center gap-4
            bg-white
            border border-[#e7dfd4]
            rounded-lg
            px-5 py-4
            hover:shadow-sm
            transition-all duration-200
            "
        >
            <span className="
            flex-1
            text-[12px] sm:text-[13px]
            text-gray-700
            transition-colors duration-200
            ">
            Best Time to Visit the Golden Triangle
            </span>

            <ArrowRight className="
            w-4 h-4
            text-[#AF956C]
            transition-all duration-200
            group-hover:translate-x-1
            " />
         </Link>
        </div>

      </div>

    </section>
  );
}