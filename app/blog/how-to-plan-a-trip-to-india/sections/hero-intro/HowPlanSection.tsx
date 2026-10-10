"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            How to Plan a Trip to India: The Complete Guide for First-Time and Luxury Travelers
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Not many countries reward prep the way India does. Learn how to plan a trip to India right , by 
            matching the right season, region and pace to how you actually like to wander - and you suddenly 
            get access to a place with real, deep layers: marble memorials that glow at sunrise , spice‑scented 
            lanes inside fortress towns, royal palaces now turned into boutique stays, and scenery that shifts 
            from Himalayan high peaks to tropical backwater calmness within one itinerary. If you do the planning 
            wrong though, India can feel like too much fast : scorching heat, long drives between highlights, and 
            this almost bewildering abundance of destinations you can pick from .
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            In this guide you’ll see all the choices that count - visas, budgets, seasons, health, cultural 
            norms, plus sample day by day routes - all mapped out with the same structure our specialists 
            use when they build private trips for travelers coming from the United States, the United Kingdom 
            , Europe and Australia. When you’re finished, you’ll end up with a clear and practical plan, not 
            just a browser full of open tabs .
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786161817/pexels-dibakar-roy-2432543-35199147_xaepq2.jpg"
              alt="How to Plan a Trip to India: The Complete Guide for First-Time and Luxury Travelers"
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