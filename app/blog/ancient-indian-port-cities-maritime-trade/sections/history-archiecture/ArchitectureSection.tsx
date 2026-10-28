"use client";
import Image from "next/image";

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-1 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Architecture and the cultural significance of port cities
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Ports were more than just docks; they required facilities like warehouses, workshop complexes, 
            water supply, market places, transportation systems, and meeting places for merchants from other 
            countries. In Lothal, the planning of the settlement and the basin is of utmost importance in 
            understanding the facilities of the ports. In Pattanam, the wharf-like structures, pottery, bead 
            findings and the evidence of settlements allow scholars to understand the lifestyle. In most cases, 
            the stories are written on paper and in artifacts and geography.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The maritime trade carried with it cultures, languages, arts, technology, and culinary traditions. 
            Buddhist and Hindu religious connections existed along with the commercial ones, but cultural 
            interactions did not take place only one way. The architecture of the coastal towns might show 
            multiple phases of patronages, therefore do not assume that all forts and temples around the sea 
            coasts were there solely for trading.
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1793183019/pexels-branphonegraphy-39142688_muatki.jpg"
              alt="Ancient port city architecture - dockyards warehouses and urban planning in India"
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