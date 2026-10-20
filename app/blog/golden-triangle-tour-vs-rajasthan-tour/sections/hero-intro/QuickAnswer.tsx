"use client";

import Link from "next/link";

export default function QuickAnswer() {
  return (
    <section className="w-full bg-white py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-2">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight">
            The Quick Answer: Which Tour Should You Choose?
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
            Every week, this is one of the most common questions we receive at
            <strong>
              {" "}
              <Link href="https://www.indiaheritagetravel.com" className="hover:underline font-[500] text-[#8b6a3d]">
                India Heritage Travel
              </Link>
            </strong>. 
            And it is a genuinely important one because the{" "}
            <strong>
              <Link href="https://www.indiaheritagetravel.com/tours/majestic-golden-triangle-tour" className="hover:underline font-[500] text-[#8b6a3d]">
                Golden Triangle Tour
              </Link>
            </strong>{" "}
            and a{" "}
            <strong>
              <Link href="https://www.indiaheritagetravel.com/tours/rajasthani-heritage-retreat-tour" className="hover:underline font-[500] text-[#8b6a3d]">
                Rajasthan Tour
              </Link>
            </strong>{" "}
            are not simply different versions of the same itinerary. They are completely different journeys,
            designed for different kinds of travellers, offering different
            landscapes, different experiences, and a very different pace of
            travel.
          </p>
        </div>

        {/* Decision Box */}
        <div className="my-2 md:my-4 rounded-sm">
          <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
            Here's the fastest answer:
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-[14px] text-gray-700 mb-2">
                Choose the Golden Triangle Tour
              </h4>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                If you have <strong>5–7 days</strong>, it is your first visit
                to India, and you want to experience the Taj Mahal together
                with Delhi, Agra, and Jaipur in a compact and well-connected
                itinerary.
              </p>
            </div>

            <div className="border-t border-[#e7dfd4] pt-5">
              <h4 className="text-[14px] font-medium text-gray-700 mb-2">
                Choose a Rajasthan Tour
              </h4>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                If you have <strong>8 days or more</strong>, want to stay in
                heritage palaces, explore desert landscapes, enjoy leopard
                safaris, discover lake cities, and experience the royal side of
                India at a slower pace.
              </p>
            </div>

            <div className="border-t border-[#e7dfd4] pt-5">
              <h4 className="text-[14px] font-medium text-gray-700 mb-2">
                Combine Both Tours
              </h4>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                If you have <strong>10–14 days</strong>, combining both routes
                gives you the ultimate North India journey. Since Jaipur marks
                the end of the Golden Triangle and the beginning of Rajasthan,
                the transition between the two is completely seamless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}