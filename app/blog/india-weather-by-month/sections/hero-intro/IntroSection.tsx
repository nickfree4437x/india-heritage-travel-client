"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            India Weather by Month: A Complete Season-by-Season Travel Guide
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Getting to know India weather by month is the one single most useful bit of research you can do 
            before booking a trip, because no other big travel destination puts so many different climates 
            into one country. On the same January day, Rajasthan may wake up to a crisp 8°C desert chill 
            while Kerala is sitting in humid 30°C, and Ladakh is, essentially tucked under snow at minus 
            temperatures. If you treat India like it’s just one climate then you can end up in Delhi during 
            peak summer heatwave or in Mumbai when the monsoon decides to fully open its curtain, all without 
            really meaning to.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This guide breaks India weather down month by month and region by region, so you can line up 
            your travel dates with the exact vibe you’re chasing—like dry desert evenings in Jodhpur, 
            monsoon-dark backwaters in Kerala, or wildflower season creeping through the Himalayan foothills.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786252115/pexels-dibakar-roy-2432543-18158842_slql4e.jpg"
              alt="India Weather by Month: A Complete Season-by-Season Travel Guide"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Understanding India's Climate: Why One Country Has So Many Weathers
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            India’s climate kinda gets pulled by three main forces, latitude, the Himalayan wall sitting up 
            north, and these monsoon winds that switch direction twice in a year. The Himalayas act like a 
            barricade so cold Central Asian air can’t just sweep down south easily, so most of the country 
            stays warmer than you’d expect from its latitude alone. At the same time, the southwest monsoon 
            plus the northeast monsoon, bring almost all of India’s yearly rainfall in heavy bursts, more like 
            sudden downpours rather than a smooth, even spread across the months. So you end up with tropical 
            coastlines, then an arid desert around the west, subtropical plains further north, and even alpine 
            conditions up in the Himalayan region, sometimes all within only a few hours of each other by 
            flight.
          </p>
        </div>
      </div>
    </section>
  );
}