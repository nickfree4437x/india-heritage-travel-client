"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Architecture & Cultural Significance
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Jaisalmer is architecturally distinct because somehow there’s this marriage of Rajput military 
            design with very delicate stone carving, not like normal fortifications you just see and leave. 
            The fort itself feels engineered for defense- a wall around 30 feet high, almost a hundred 
            bastions, plus tight internal lanes that turn and turn, kinda deliberately wound so any invading 
            force would slow down , even war elephants . But then, strangely, inside those same defensive 
            walls , and also in the merchant havelis right outside, the artisans transform sandstone into 
            lace-like screens, floral friezes, and those jharokha balconies that are so intricate they look 
            more like carved wood than hard stone.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786852642/pexels-navlakha-33681488_ak5ahs.jpg"
              alt="Jaisalmer architecture - Rajput sandstone forts and carved havelis"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>
      </div>
    </section>
  );
}