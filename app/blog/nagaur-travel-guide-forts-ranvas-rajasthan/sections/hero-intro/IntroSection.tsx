"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Nagaur: Forgotten Forts, Royal Stories & Ranvas
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Most first-time visitors to Rajasthan never quite hear the name Nagaur. It just sits quietly 
            on that old trade road between Jodhpur and Bikaner , sort of there in the background, 
            overshadowed by its more photogenic neighbors and honestly, that is exactly the charm. 
            This Nagaur travel guide is here because Nagaur isnt some small side note to Rajasthan 
            royal story, no it is one of its oldest chapters , and it holds a fort that is older than 
            Mehrangarh too, plus a palace-turned hotel that feels unusual in a very good way, and even 
            a rural cattle fair that still moves along exactly as it was about a century ago.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            For travelers who already wandered through Jaipur’s pink sandstone and Udaipur’s lake palaces, 
            Nagaur gives something rarer, a kind of size without fireworks, and history without too many crowds. 
            In this guide you’ll get the full picture, from the fort’s layered Nagavanshi Rajput Mughal past , 
            to the practical stuff like how to reach Nagaur, where to stay, what to eat, and how to weave it 
            into a larger Rajasthan route so it doesn’t feel random, but rather, quietly necessary.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[650px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787369937/mash-codee--LUZgQSj-Hs-unsplash_e8rpqk.jpg"
              alt="Nagaur forgotten forts - royal stories and Ranvas Palace heritage"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>
      </div>
    </section>
  );
}