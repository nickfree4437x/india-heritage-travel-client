"use client";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Why Bishnupur Belongs on Your Bengal Itinerary
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            While Rajasthan boasts sandstone architecture and Tamil Nadu granite, Bengal, a region 
            blessed with plenty of rivers and alluvium, had none of these, and thus its architects 
            chose the material of clay. This resulted in one of the most unique architectural styles of 
            India, and no other place preserves it as well as Bishnupur does. The terracotta temples of 
            Bishnupur stand proudly in the plains of Bankura district, and their brick-red, curved roof 
            buildings are completely decorated with panels of images made of fired clay depicting deities, 
            battles, dancing figures, and scenes from the life of a village.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This is certainly not a destination with palaces and luxurious resorts; this is a place for 
            those interested in admiring details of an architectural elephant, little Krishna among 
            cowherds, and weavers in lanes filled with tiled houses. This trip is one of the most 
            fascinating trips you can undertake from Kolkata, and one of the least known by foreign 
            tourists.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792827506/Rasmancha__eastern_view__Arnab_Dutta_2011_zznflf.jpg"
              alt="Bishnupur terracotta temple - Bengal itinerary heritage"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          This guide will give you information about the history of the royal family that created Bishnupur, places worth visiting in this small town, surviving crafts and musical traditions, and ways to make your travel comfortable.
        </p>
      </div>
    </section>
  );
}