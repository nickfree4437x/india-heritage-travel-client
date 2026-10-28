"use client";
import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            How maritime trade connected ancient India
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The naval history of India has been formed over a number of centuries and not in an unbroken 
            golden period. The Harappans engaged in trade with their neighbouring areas around third and 
            second millennia BCE. In the early historic era, the harbors located in the western and 
            southern coastline gained significance as trading centers in the Indian Ocean.
          </p>

          <div className="mb-1">
            <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
              The monsoon as a natural timetable
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Monsoon winds were seasonal and helped make sailing easier. Monsoons taught sailors when to 
            start their journey depending on the wind patterns. River voyages and voyages along the 
            coastline helped link ports to smaller markets. Vessels did not travel directly from India 
            to one destination but could go through various hands until reaching their destination. The 
            ocean was just one of the many channels for commerce.
          </p>

          <div className="mb-1">
            <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
              What travelled across the sea?
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Malabar pepper was in particular demand in Western markets. Some other goods were cotton textiles, beads, precious stones, ivory, and aromatic products, whereas the incoming goods may have included wine jars, glassware, metals, pottery, and coinage. This varied depending on the port and time.
            This is not solely a story of the Roman consumer but of the Indian trader and sailor as well. In recent times, there has been an increasing tendency to highlight the agency and networks created by Indians in the Arabian Sea and Bay of Bengal, rather than limiting the trade narrative to the Roman purchaser.
          </p>

        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1793181966/dorsa-masghati-5fPA8j4pcTY-unsplash_tk9tyl.jpg"
              alt="Maritime trade in ancient India - global sea connections"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}