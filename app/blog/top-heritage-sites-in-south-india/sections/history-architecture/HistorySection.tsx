"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            A Quick History: Pallavas, Cholas, Chalukyas and Vijayanagara
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784609325/naveen-raj-dhanapal-kNNCC-tF6IQ-unsplash_tnytjc.jpg"
              alt="South India history - Pallava Chola Chalukya Vijayanagara dynasties heritage"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            The story begins on the coast. Between the 6th and 9th centuries, the Pallava dynasty ruled 
            from Kanchipuram and used the port town of Mahabalipuram to project naval strength and 
            cultural influence. They left behind rock-cut cave temples and monolithic rathas that pioneered 
            early Dravidian architecture - a foundation that still feels essential.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-3">
            Then came the Cholas, from the 9th to 13th centuries, who took that architectural grammar and 
            pushed it to a grand scale. They built towering granite vimanas - most notably at the 
            Brihadeeswarar Temple in Thanjavur and the other Great Living Chola Temples. Beyond land, 
            they commanded a maritime empire that stretched to Southeast Asia, as if it were no big deal.
          </p>
        </div>
      </div>
    </section>
  );
}