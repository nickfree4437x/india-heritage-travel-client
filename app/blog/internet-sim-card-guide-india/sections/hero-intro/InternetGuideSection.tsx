"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Internet & SIM Card Guide for Tourists in India
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Few things derail the excitement of arriving in India quite like standing in an airport arrivals 
            hall, jet-lagged and unable to book a cab, check into a hotel, or let loved ones know you've landed. 
            This complete internet and SIM card guide for tourists solves that problem before it starts. India 
            is one of the most connected countries in the world, with some of the most affordable mobile data 
            anywhere - yet getting online as a foreign visitor still involves a few things worth knowing in 
            advance: mandatory identity verification, a choice between three major carriers, and a fast-growing 
            eSIM landscape that doesn't always work exactly as advertised.
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
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785558489/pexels-pixabay-147413_jyfrkj.jpg"
              alt="Complete guide to internet and SIM cards in India 2026 - Airtel Jio Vi and travel eSIM for tourists"
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