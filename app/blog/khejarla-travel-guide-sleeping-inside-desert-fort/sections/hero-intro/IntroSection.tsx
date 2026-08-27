"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Khejarla Travel Guide: Sleeping Inside a Desert Fort in Rajasthan
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Most journeys into Khejarla begin with a photograph - a red sandstone fort rising out of flat, 
            golden scrubland, looking more like a mirage than a hotel. This Khejarla travel guide exists 
            because so few people outside Rajasthan have heard of the place, even though it delivers one 
            of the most genuine heritage experiences in the state. About eighty kilometres east of Jodhpur, 
            past mustard fields and Bishnoi hamlets, Khejarla Fort has stood since 1611 - and for the last 
            few decades it has quietly done something very few Rajasthan forts allow: it lets you sleep 
            inside it. Not beside it, not in a modern annexe built in its shadow, but inside the original 
            stone rooms, under the same carved ceilings a Rajput nobleman once slept beneath. 
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This guide covers everything you need - history, architecture, wildlife-rich countryside, 
            food, budgets, and a suggested itinerary - to plan a visit, whether you have half a day to 
            spare on the way to Jodhpur or two unhurried nights.
          </p>
        </div>

        {/* Image */}
        <div className="mb-1 md:mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787836522/14_yjpin0.jpg"
              alt="Khejarla Travel Guide: Sleeping Inside a Desert Fort in Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via jodhpurfortkhejarla
          </p>
        </div>
      </div>
    </section>
  );
}