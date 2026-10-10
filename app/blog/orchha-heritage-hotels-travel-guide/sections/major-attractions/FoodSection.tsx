"use client";

import Image from "next/image";

export default function FoodSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Food and Local Cuisine in Orchha
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Orchha is located in the middle of Bundelkhand, an area renowned for its simple and healthy 
            food cooked at home using ingredients such as wheat and dal, as opposed to gourmet restaurant 
            food. The food here includes thalis comprising of dal, seasonal vegetables, and rotis or bafla 
            breads, which are usually dipped in ghee and lentils.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           Some riverside hotels and boutique hotels have started preparing these homestyle foods in a 
           refined manner, which can be enjoyed in their terrace restaurants offering views of either the 
           fort or the Betwa River. If you want to eat something other than Indian cuisine, then you can 
           enjoy some rooftop cafeterias that offer continental and Israeli inspired food menus.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789318446/Cuisines_ydkio0.jpg"
              alt="Traditional Bundelkhandi thali with dal, seasonal vegetables and bafla breads in Orchha"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via mptourandtravels
          </p>
        </div>
      </div>
    </section>
  );
}