"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            India Currency Guide 2026: Cash, Cards, ATMs & UPI for Tourists
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The first time travellers open their wallet in India, they realise their usual playbook doesn't 
            apply. A five-star hotel will swipe your card without a second thought, but the chai vendor, 
            tuk-tuk driver, and silk merchant in the old bazaar will want cash or UPI. This India Currency 
            Guide 2026 sorts that mismatch - getting clear on how cash, cards, ATMs, and UPI work in real 
            life separates an easy trip from a stressful one.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This guide walks through every route to getting connected in India - from airport SIM kiosks to 
            Pocket Wi-Fi devices and travel eSIMs - so you can choose the right setup for your trip length, 
            budget, and day-by-day plans. That way, India Heritage Travel's guests can spend their first 
            hour in the country experiencing it, not troubleshooting it.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785760749/pexels-ravi-roshan-2875998-14907454_bptybl.jpg"
              alt="India currency guide - cash cards UPI for tourists 2026"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
      </div>
    </section>
  );
}