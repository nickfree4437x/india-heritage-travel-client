"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Intro */}
        <div className="max-w-6xl mb-2 md:mb-4">
          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Beneath the sands of Jodhpur and beyond the lakes of Udaipur lies a
            destination that feels less like a hotel and more like a journey
            into Rajasthan's royal past. Rawla Narlai is not simply another
            heritage property; it is a beautifully preserved reminder of how
            Rajput nobility once lived, entertained, and escaped into the
            tranquility of the Aravalli Hills.
          </p>
        </div>

        {/* Signature Experience Card */}
        <div className="bg-white border border-gray-200 rounded-md p-6 mb-4 md:mb-8">
          <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#2c2c2c] mb-2">
            What Makes Rawla Narlai a Unique Heritage Stay?
          </h3>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify">
            It could be the iconic Stepwell Dinner, an experience bathed in the warm
            glow of countless oil lamps beneath a starlit canopy. Perhaps it is the silence of the Jawai
            wilderness at dawn, broken only by the distant movement of a
            leopard across ancient granite formations. Or perhaps it is simply
            the rare combination of history, landscape, and hospitality that
            transforms a stay at Rawla Narlai into one of Rajasthan's most
            memorable luxury experiences.
          </p>
        </div>

        {/* Image 1 */}
        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
          <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782298485/2_Rawla_Narlai_mlevyy.jpg"
            alt="Luxury Heritage Room at Rawla Narlai Rajasthan"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-1 md:mt-2 text-[11px] md:text-[12px] text-gray-600 font-light">
          Image via Rawla Narlai
        </p>

        {/* History Section */}
        <div className="mt-2 md:mt-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            History and Heritage of Rawla Narlai, Rajasthan
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The story of Rawla Narlai begins in the 17th century when the
            Jodhpur Royal Family established this magnificent property as a
            hunting lodge in the foothills of the Aravalli Range. For
            generations, Rajput rulers used it as a private retreat away from
            the political responsibilities of Marwar, surrounded by rugged
            landscapes and timeless village life.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Over time, the property became an important part of the region's
            aristocratic heritage, serving as a place of leisure, celebration,
            and royal hospitality. Its architecture reflects the elegance and
            practicality of Rajput design, with spacious courtyards, carved
            sandstone details, and beautifully proportioned interiors.
          </p>

          {/* Image 2 */}
          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782298090/23.06.2026_11.28.01_REC_ytowx8.jpg"
              alt="Luxury Heritage Room at Rawla Narlai Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] md:text-[12px] text-gray-600 font-light">
            Image via Rawla Narlai
          </p>
        </div>
      </div>
    </section>
  );
}