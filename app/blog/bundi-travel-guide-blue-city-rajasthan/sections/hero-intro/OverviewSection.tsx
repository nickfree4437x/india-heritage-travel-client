"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: Discovering Bundi
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Bundi lies in the Hadoti region of southeastern Rajasthan, cradled by the Aravalli hills with 
            Taragarh Fort standing watch. Unlike Jaipur, Udaipur, or Jodhpur, Bundi has largely escaped 
            mass tourism development - and that's precisely its appeal.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The old city unfolds as a labyrinth of tight streets lined with blue-washed havelis and ancient 
            stepwells. Bundi remains an authentic heritage community - still inhabited, still intact, with 
            properties still owned by the families who have lived there for generations.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788002166/pexels-forst-horst-20198137-31794997_kzovrm.jpg"
              alt="Discovering Bundi - blue city with Taragarh Fort and stepwells"
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