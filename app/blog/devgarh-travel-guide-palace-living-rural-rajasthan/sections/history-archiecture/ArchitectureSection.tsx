"use client";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Architecture of Deogarh Mahal
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Deogarh Mahal kind of rises on a ridge over the town, those grey battlements and domes, even 
            the gun enclosures, you can spot them way before you actually reach the base of the hill. When 
            you get nearer the whole feel changes a bit, like the architecture softens, jharokha balconies 
            project out from the stone facade, and the courtyards are deep enough that light and air can 
            circulate through the building the way it was meant to be used, a century earlier when air-conditioning 
            was not even a thing. And the gateways, well, they’re sized for elephants and processions, not for cars.  
          </p>
        </div>

        {/* Image */}
        <div className="mb-2">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787541949/deogarh_mahal_exterior_9_ojwtbz.avif"
              alt="Deogarh Mahal architecture - Rajput sandstone palace with jharokhas and domes"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via deogarhmahal.com
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          The main highlight is the Sheesh Mahal - a chamber with hundreds of small mirrors and coloured 
          glass, still remarkably intact. Rooms are named and decorated to reflect family history, with a 
          genealogical chart tracing the lineage back over a thousand years. Restoration kept modern 
          additions like plumbing and the pool secondary, so the original stone and lime plasterwork 
          remains the main focus.  
        </p>
      </div>
    </section>
  );
}