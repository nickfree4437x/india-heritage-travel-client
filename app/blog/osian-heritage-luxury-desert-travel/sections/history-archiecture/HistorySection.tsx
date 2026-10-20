"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 md:py-2.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           A Short History: From Ukesha to the Oswals
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The first known name of Osian, Ukesha or Upkeshapur, suggests that the town was an important 
            place for both religion and business at that time, under the rule of the Gurjara-Pratihara 
            Dynasty, which ruled large parts of northern and western India from the 8th to the 10th 
            century AD. The town is believed to have been founded by a prince from the Pratihara family 
            named Utpaladeva.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The most famous building in Osian, the Mahavira Jain Temple, was built in 783 according to a 
            legend about its origin and is traditionally dated to the reign of the Pratihara king Vatsaraja, 
            making it the oldest Jain temple in western India. There is also a mention of the town in the 
            inscription of 953 located in the temple and saying that Osian was full of temples belonging to 
            various communities, which is indeed true.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Osian is also the home of the Oswal caste, one of the most influential Indian merchant families. 
            In their own language, "Oswal" means "people of Osian". Jain mythology states that the monk 
            Ratnaprabhasuri preached among the townspeople and gave the name of the goddess Sachiya to the 
            goddess who protected Osian. The Oswals all over the world come to
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792493488/pexels-axp-photography-500641970-19160086_fdvebu.jpg"
              alt="Osian history - from Ukesha to the Oswal merchant community in Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
      </div>
    </section>
  );
}