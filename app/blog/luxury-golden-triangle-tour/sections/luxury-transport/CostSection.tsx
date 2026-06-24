"use client";

import Link from "next/link";
import { ArrowRight, } from "lucide-react";

const pricingTiers = [
  {
    tier: "Standard Tour",
    included:
      "Group transport, mid-range hotels, shared guides, fixed itinerary",
    traveler:
      "Budget-conscious first-time visitors",
  },
  {
    tier: "Premium Tour",
    included:
      "Private chauffeur, four/five-star hotels, private guide, flexible scheduling",
    traveler:
      "Travelers wanting comfort without ultra-luxury pricing",
  },
  {
    tier: "Ultra-Luxury Tour",
    included:
      "Palace hotels, dedicated historian-guides, private dining, bespoke experiences, 24/7 concierge support",
    traveler:
      "High-net-worth travelers, honeymooners, and special occasions",
  },
];

export default function LuxuryTourCostSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="mb-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-4">
            The Cost of Experiencing the Golden Triangle in Absolute Luxury
          </h2>

          <p className="text-gray-700 text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed font-light text-justify">
            Luxury travel comes in different levels, ranging from premium
            private journeys to fully customized ultra-luxury experiences.
            The table below provides a general comparison of what each tier
            typically includes.
          </p>

        </div>

        {/* Table */}

        <div className="overflow-x-auto border border-[#e8dfd2] mb-8">

          <table className="w-full min-w-[800px]">

            <thead>

              <tr className="bg-[#faf7f3]">

                <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-r border-[#e8dfd2]">
                  Tier
                </th>

                <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-r border-[#e8dfd2]">
                  What's Included
                </th>

                <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b">
                  Typical Traveler
                </th>

              </tr>

            </thead>

            <tbody>

              {pricingTiers.map((tier) => (
                <tr
                  key={tier.tier}
                  className="hover:bg-[#faf7f3]/40 transition-colors"
                >

                  <td className="px-5 py-5 text-[12px] sm:text-[13px] text-[#2c2c2c] border-b border-r border-[#e8dfd2] align-top">
                    {tier.tier}
                  </td>

                  <td className="px-5 py-5 text-[12px] sm:text-[13px] text-gray-700 border-b border-r border-[#e8dfd2] align-top leading-relaxed">
                    {tier.included}
                  </td>

                  <td className="px-5 py-5 text-[12px] sm:text-[13px] text-gray-700 border-b border-[#e8dfd2] align-top leading-relaxed">
                    {tier.traveler}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Content */}

        <div className="mb-6">

          <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Pricing varies significantly based on season, hotel selection,
            transportation preferences, and the level of customization
            required. Because India Heritage Travel designs every luxury
            itinerary individually rather than offering fixed packages,
            final pricing depends on your travel dates, preferred
            accommodations, and the exclusive experiences you wish to include.
          </p>

        </div>

        <div className="bg-white rounded-lg">
         <Link
            href="/blog/golden-triangle-tour-india-guide"
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
            Golden Triangle Tour Guide
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