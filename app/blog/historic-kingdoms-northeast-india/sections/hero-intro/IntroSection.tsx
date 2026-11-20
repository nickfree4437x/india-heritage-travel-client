"use client";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Historic Kingdoms of Northeast India: Ancient Capitals & Living Heritage
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            There are places where history is frozen in the glass while there are others where it is a 
            part of the living landscape. The historic towns of Northeast India stand in harmony with 
            living cities, palace ruins sit amid the lush green pastures, monasteries conduct themselves 
            in their traditional ways, and tales that have been repeated by generations and generations 
            in their language, food, weave and festivals. Travelling across the Historic Kingdoms of 
            Northeast India means embarking upon a trip into a country with a rich historical past as 
            varied as its hills, valleys, and people.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The rich history can be traced from the monuments of Ahoms in Assam to heritage of Manipur 
            and Tripura, Khasi and Jaintia Hills and the Buddhist Kingdom of Sikkim; each with its own 
            time line and history.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1795174701/5188520462_be6a95b6b6_b_20180310124824_fqzeqy.jpg"
              alt="Historic kingdoms of Northeast India – ancient capitals and living cultural heritage sites"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via holidify
          </p>
        </div>
      </div>
    </section>
  );
}