"use client";
import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            A region shaped by many histories
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The Northeast is not a unified historical region. The eight contemporary states comprising 
            the region of Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim and 
            Tripura have histories which consist of river-based civilizations, hills tribes, clan/village 
            societies, Buddhism and Hindu influences, trading links and interactions in the Eastern Himalayas 
            and Southeast Asia.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Travelers must remember that a palace, a fort gateway and a village council house cannot be 
            considered the same “heritage destination”. These sites belong to very different worlds. An 
            ideal travel experience is one where the local community can provide insights into the significance 
            of the place not only its history.
          </p>

        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1795175184/Rang_Ghar__Sivsagar__Assam_20170512152448_sbxjxt.jpg"
              alt="Northeast India – a region shaped by many histories and diverse cultural influences"
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