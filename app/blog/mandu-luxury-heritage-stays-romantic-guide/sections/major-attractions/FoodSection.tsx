"use client";

import Image from "next/image";

export default function FoodSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Food: What to Eat in Mandu
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Malwa cuisine is robust and traditional, built on millets, wheat, and gram flour. Don't miss 
            Dal Bafla - steamed wheat dumplings served with spiced lentils and ghee - or Bhutte Ki Kees, 
            grated corn slow-cooked in milk with mustard seeds, a monsoon favourite when corn is sweetest.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           Malwa's cuisine is hearty and traditional - try Dal Bafla (steamed dumplings with lentils and 
           ghee) and Bhutte Ki Kees (grated corn slow-cooked in milk), a monsoon speciality.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789378195/images_2_bqgxgp.jpg"
              alt="Food in Mandu - Malwa cuisine dal bafla and local dishes"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via encrypted-tbn0.gstatic
          </p>
        </div>
      </div>
    </section>
  );
}