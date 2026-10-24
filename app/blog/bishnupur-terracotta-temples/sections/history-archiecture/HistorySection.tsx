"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 md:py-2.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           A Short History: The Malla Kings and Their Temple Town
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            According to local tradition, the Mallas trace their ancestry back to Adi Malla in the 7th 
            century. There is, however, little evidence to support this claim until much later on. The 
            Mallas were chieftains in the Rarh area before the invasion of Bengal by the Mughals in 1574 
            and they submitted to Mughal rule which they thrived under.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Their capital, Bishnupur, flourished and became a cultural center through an increased devotion 
            to the cult of Krishna. This occurred when the Malla king converted to Vaishnavism which was the 
            religion of the Chaitanya Movement which swept through Bengal in the 16th and 17th centuries. 
            During the rule of the Malla kings in these centuries, Bishnupur came to be populated by temples 
            devoted to the god Krishna. The most impressive temples belong to the period of mid-17th century 
            when the dynasty was at its peak.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            In the 18th century, the city faced the invasion by the Marathas who plundered the place. 
            The famous cannon called the Dalmadal Cannon which dates back to 1742 has entered folklore. 
            According to local lore, Madan Mohan the god fired the cannon to drive the invaders away.
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792827845/Rasmancha__eastern_veranda__Arnab_Dutta_2011_ldc3h2.jpg"
              alt="Bishnupur history - Malla kings and their terracotta temple town in Bengal"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>
      </div>
    </section>
  );
}