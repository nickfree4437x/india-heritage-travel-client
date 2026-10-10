"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The History of Rohet Garh
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            In that lineage, one especially remembered person was Thakur Dalpat Singh II, who took the 
            seat at Rohet in the early 1900s. He turned into a well known polo player, and he was linked 
            with one of the time’s most admired international polo squads. Later he commanded the Jodhpur 
            Lancers cavalry regiment and acted as a military advisor to the Maharaja of Jodhpur. When the 
            twentieth century started reshaping India’s aristocratic world, the family’s part moved away 
            from being strictly landowners, and more toward hospitality as a way of life.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            That change got more formal around 1990, when the family opened the gates of Rohet Garh to 
            paying guests for the first time. It was an early, and honestly unusual, trial back then for 
            what people now call heritage tourism. The place also started the “village safari” idea in 
            1989, a style that let visitors reach Bishnoi hamlets in a respectful manner, with real local 
            entry, instead of showing up like detached watchers. And even now, decades later, the same 
            idea is still the top requested experience around the region.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787744602/mihir_garh_resized_lryz9o.jpg"
              alt="Rohet Garh history - Rajput heritage palace in rural Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via houseofrohet.com
          </p>
        </div>
      </div>
    </section>
  );
}