"use client";

import Image from "next/image";

export default function FoodSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Food and Flavors of Shekhawati
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Food from Rajasthani culture in Mandawa reflects its dry and resourceful desert origins. Dal 
            Baati Churma - baked wheat rolls with spiced lentils and a sweet crumble - is the signature 
            dish. Gatte ki Sabzi (gram flour dumplings in curd gravy) and Ker Sangri (dried desert berries 
            and beans) both originated here due to the scarcity of fresh vegetables.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            For those who prefer richer flavours, Laal Maas - a Rajput-style mutton curry - is a must-try, 
            while Rabri offers a sweet finish with thickened milk flavoured with cardamom.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788417029/fabhotels-Thali-and-More-600x400-1_ygtbbe.jpg"
              alt="Shekhawati food - Rajasthani cuisine and local flavors"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via smithakalluraya
          </p>
        </div>
      </div>
    </section>
  );
}