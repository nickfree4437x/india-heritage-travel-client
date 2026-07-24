"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Etiquette for Women Travelers in India
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784869420/pexels-swastikarora-15634342_upxtuv.jpg"
              alt="Cultural etiquette for women travelers in India - respectful travel tips for female tourists"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            Beyond clothing, a few etiquette habits go quite a ways, honestly. When you arrive, greet with 
            a small nod, and if someone offers a greeting, you can use “Namaste” , palms together, rather 
            than just assuming a handshake-especially around older men in traditional settings. Public displays 
            of affection aren’t really common and they might pull extra eyes, particularly at religious sites. 
            Also, ask permission before you photograph people, and this matters a lot for women in rural areas , 
            or if you are at religious ceremonies. 
          </p>
        </div>
      </div>
    </section>
  );
}