"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Architecture and Cultural Significance
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784609443/srinivas-jd-wa1aoHfJwj8-unsplash_rz40ap.jpg"
              alt="South India architecture and culture - Dravidian temples with gopurams and stone carvings"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            South Indian temple architecture clicks once you understand the vimana - the tiered tower above 
            the sanctum - and later the gopuram, the monumental gateway that came to dominate temple entrances 
            across Tamil Nadu. The Pallavas pioneered rock-cut and monolithic forms at Mahabalipuram, while 
            the Cholas refined the structural stone vimana on a scale unmatched in India, with the Thanjavur 
            tower rising to 66 metres.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-3">
            The Chalukyas at Pattadakal took a more hybrid approach, blending northern and southern forms 
            in one complex - an intentional architectural experiment. Then the Vijayanagara builders at 
            Hampi layered their own taste, producing tall gopurams and chariot-shaped shrines that stand 
            out in the ruined city today.
          </p>
        </div>
      </div>
    </section>
  );
}