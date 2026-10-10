"use client";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            What a Night at the Fort Actually Feels Like
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The check-in is leisurely, with the porter guiding you up the ramps and through arches, until you give up looking for the signs halfway up the second or fourth floor. The rooms will either have a high ceiling, or a window seat that seems to jut out of the walls or even a sit-out that looks out onto the plains below. 
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-1">
            In the late afternoons, the rocks turn amber, tea is served on the terrace, and you can hear music starting. Dinner will be the last meal, and soon after, the fort falls silent. Lanterns will be lit on the stairs, the mountainside of the Aravalis will melt into darkness, and the night will belong to the stars.
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791616117/Jatayu_Mahal_-_Fort_View_Neemrana_Fort-Palace_Alwar_Rajasthan_zucmlw.avif"
              alt="Neemrana Fort Palace significance - adaptive reuse and cultural exchange"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via neemranahotels.com
          </p>
        </div>
      </div>
    </section>
  );
}