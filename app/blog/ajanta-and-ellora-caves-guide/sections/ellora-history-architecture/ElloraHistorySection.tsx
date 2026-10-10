"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-6 sm:py-7">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Ellora Caves: History & Three-Religion Heritage
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783595354/Ellora_Cave_No._10_1_rttapc.jpg"
              alt="Ellora Caves - Buddhist Hindu Jain rock-cut temples with Kailasa monolith and UNESCO heritage"
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
            Located 30 km northwest of Aurangabad and 100 km south of Ajanta, Ellora's 34 caves are a 
            different proposition altogether not even the same vibe. While Ajanta was a single-religion 
            Buddhist site, Ellora is a multi-faith showcase: 12 Buddhist caves (6th-8th century), 17 
            Hindu caves (6th-9th century), and 5 Jain caves (9th-11th century) all sitting side by 
            side in an extraordinary display of religious pluralism.
          </p>
        </div>
      </div>
    </section>
  );
}