"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhyChooseIHTSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-semibold text-[#2c2c2c] leading-tight mb-6">
          Why Book Your Rajasthan Heritage Tour with India Heritage Travel
        </h2>

        <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-6">
          Choosing the right heritage hotel is only one part of planning a
          successful Rajasthan journey. The real challenge lies in combining
          several destinations and hotels into an itinerary that flows
          naturally - balancing sightseeing, travel times, hotel experiences,
          and opportunities to slow down and enjoy the journey. A well-designed
          itinerary ensures that your time is spent exploring Rajasthan rather
          than sitting in a vehicle for unnecessary hours each day.
        </p>

        <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify">
          Comfortable chauffeur-driven travel, knowledgeable local guides, and
          carefully planned routing allow you to focus on the experience itself.
          Instead of simply seeing Rajasthan's palaces and forts, you gain a
          deeper understanding of the history, architecture, and stories that
          make these places so memorable.
        </p>

        {/* Highlight Box */}

        <div className="mt-4 md:mt-6 border border-gray-200 bg-white rounded-md p-6 sm:p-8">

          <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-3">
            Plan a Rajasthan Journey Designed Around You
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light mb-3">
            From iconic palace hotels in Jaipur and Udaipur to hidden heritage
            stays in Rajasthan's countryside, our specialists create private
            itineraries that combine exceptional accommodation with meaningful
            cultural experiences.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[#AF956C] text-[12px] md:text-[13px] hover:underline"
          >
            Speak with a Rajasthan Travel Expert

            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>

      </div>

    </section>
  );
}