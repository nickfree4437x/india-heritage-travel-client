"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhyChooseIHTSection() {
  return (
    <section className="w-full bg-white ">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-2">
          Why Plan Your Rajasthan Heritage Journey with India Heritage Travel?
        </h2>

        <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-2 md:mb-4">
          Planning a Rajasthan heritage trip involves more than choosing beautiful
          hotels. Connecting destinations, estimating travel times, and allowing
          enough time to enjoy each property can make your journey more comfortable.
          A thoughtfully planned itinerary helps you balance sightseeing, cultural
          experiences, and relaxing stays without rushing between destinations.
        </p>

        {/* Highlight Box */}

        <div className="mt-4 md:mt-6 border border-gray-200 bg-white rounded-md p-4 sm:p-6">

          <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-1">
            Plan a Rajasthan Journey Designed Around You
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light text-justify mb-3">
            From heritage hotels in Jaipur and Udaipur to historic properties across
            Rajasthan, India Heritage Travel can help you explore suitable travel
            options and plan an itinerary around your interests, preferred pace,
            and accommodation choices.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[#AF956C] text-[12px] md:text-[13px] hover:underline"
          >
            Speak with Our Rajasthan Travel Team

            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>

      </div>

    </section>
  );
}