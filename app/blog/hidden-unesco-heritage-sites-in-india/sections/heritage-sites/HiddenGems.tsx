"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Hidden Gems Within the Hidden Sites
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784724268/Champaner__Lila_Gumbaj_Ki_Masjid__9840188055_fqtgcj.jpg"
              alt="Hidden gems within UNESCO sites - offbeat monuments and lesser-known structures"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Even in these somewhat offbeat places, a couple of bits almost always slip by, kind of unnoticed. 
            In Champaner, the Helical Stepwell, and the Saher ki Masjid they get a smaller stream of people 
            than the Jama Masjid, even though the craftsmanship feels pretty comparable.  At Rani ki Vav, 
            the lowest gallery-partly underwater for most of the year-shows sculptural nuance that many day 
            trippers miss, mostly because they just glance at the upper terrace. And at Halebidu, the smaller 
            Kedareshwara Temple is only a short walk from the main Hoysaleswara complex, yet it’s often completely 
            empty while its larger neighbor gets at least some modest footfall.
          </p>
        </div>
      </div>
    </section>
  );
}