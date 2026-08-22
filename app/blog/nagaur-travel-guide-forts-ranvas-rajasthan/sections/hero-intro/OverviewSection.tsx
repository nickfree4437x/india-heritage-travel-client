"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: Rajasthan's Quietest Royal Secret
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Nagaur sits in northwestern Rajasthan, halfway between Jodhpur and Bikaner, on the edge of the 
            Thar Desert. Without a hilltop to build on, its rulers relied on sheer scale - constructing 
            massive earthen and sandstone ramparts around the town. The result is Ahhichatragarh Fort, one 
            of India's largest fort complexes, yet it sees only a fraction of the visitors Jodhpur or Jaipur 
            attract.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            That relative quiet is sort of a boon for the traveler this guide has in mind. You know, 
            someone who wants the real weight of Rajasthan’s inheritance without the long lines, the 
            selfie sticks, or that “I’m in a museum” feeling. Nagaur really leans into slow movement, 
            like an afternoon drifting through frescoed courtyards in near silence, or a morning at the 
            cattle fair, where you can observe a market ritual that goes back before the fort even existed.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787370033/pexels-vidya-nath-bharti-89857-38960338_uh2dts.jpg"
              alt="Nagaur - Rajasthan's quietest royal secret with Ahhichatragarh Fort"
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