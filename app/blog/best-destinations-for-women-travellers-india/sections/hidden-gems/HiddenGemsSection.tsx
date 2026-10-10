"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Hidden Gems: Pondicherry, Nainital and the Northeast
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785138074/pexels-ravikant-34792711_buvykc.jpg"
              alt="Hidden gems Pondicherry Nainital Northeast - offbeat destinations for women travellers"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Past the usual circuits, a few more muted places seem to fit travellers who want a little something 
            else. Pondicherry’s French Quarter feels slow and pleasant, a walkable blend of colonial architecture 
            and café culture, it’s almost like you wander into a softer rhythm. Then there’s Nainital, where the 
            lakeside stillness works nicely for a couple of laid-back days away from the crowds. If you can spare 
            more time, Assam’s Majuli stands out even further, it’s home to the centuries old Vaishnavite Sattra 
            tradition, where monastic art music and manuscript preservation keep moving quietly, in a way that 
            feels genuinely singular. 
          </p>
        </div>
        
      </div>
    </section>
  );
}