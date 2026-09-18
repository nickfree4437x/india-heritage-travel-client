"use client";

import Image from "next/image";

export default function FoodSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Food: A Colonial & Coastal Culinary Trail
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
             This is evident from the cuisine in Fort Kochi which features Portuguese, Dutch, Jewish and Syrian Christian cuisines along with traditional Keralan sea-coast dishes such as meen pollichathu (fish wrapped in banana leaf and grilled), Kerala style prawn curry, appam with stew and Jewish-Kochi dishes like pastel served at the old bakers in Jew Town. 
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           There has been an explosion of cafés and restaurants around the heritage hotels where many bungalows have been converted into stylish restaurants that serve a range of contemporary Keralan menus as well as foreign wines.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789730861/ila-kochi-restaurant-ernakulam-restaurants-mcg57w6bbx_dfvwp2.webp"
              alt="Food: A Colonial & Coastal Culinary Trail"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via content.jdmagicbox.com
          </p>
        </div>
      </div>
    </section>
  );
}