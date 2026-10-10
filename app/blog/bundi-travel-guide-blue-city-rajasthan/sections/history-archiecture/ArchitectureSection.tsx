"use client";
import Image from "next/image";


export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Architecture & the Blue City Aesthetic
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The blue houses in Bundi can be found in the old town area below the palace where the walls 
            are washed with blue color ranging from indigo to cobalt colors in very narrow lanes where 
            even two people can walk barely in them. The blue color, like in Jodhpur, symbolizes the house 
            of Brahmins and is favored for its cooling properties and because it supposedly wards off 
            insects. The unique feature about Bundi is the size and location of the blue area where the blue 
            quarter is small and surrounded by hills on one side and palace and fort just above it on another, 
            making almost every roof viewable from top to photograph.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788002655/bundi-palace-bundi-rajasthan-3-attr-hero_zbz6q1.jpg"
              alt="Bundi blue city architecture - blue houses havelis and Taragarh Fort"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via jodhpurfortkhejarla
          </p>
        </div>

       <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
        The buildings in Bundi use stone as their construction material, jharokhas balconies, chhatri 
        domes and richly carved brackets which are not influenced by the Mughals at all.
       </p>
      </div>
    </section>
  );
}