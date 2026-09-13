"use client";

import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            A Hidden Kingdom on the Betwa River
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Orchha lies in the Niwari district of Madhya Pradesh, at a distance of 16 km from Jhansi. The 
            two states of Uttar Pradesh and Madhya Pradesh contain Jhansi and Orchha respectively. Orchha 
            occupies an island which Betwa and Jamni rivers create through their river junction and the 
            term Orchha represents something which remains hidden. The thick forest vegetation creates a 
            natural barrier which blocks all views of this area.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Orchha is not a very big city and can be completely covered in a single day through walking. 
            There are around twelve thousand people residing in the city surrounded by the magnificent 
            structure of the Chaturbhuj Temple. There are cows seen walking in front of 500 years old 
            cenotaphs, cycle rickshaws can be seen more than cars and the loud noise heard every morning 
            would be the temple bells ringing.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789311989/pexels-thebioscopeguy-20000876_zzxvnj.jpg"
              alt="Sandstone palaces of Orchha, a hidden kingdom on the Betwa River"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>
      </div>
    </section>
  );
}