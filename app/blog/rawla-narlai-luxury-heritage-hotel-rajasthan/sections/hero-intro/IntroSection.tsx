"use client";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-4 md:py-8">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* INTRO */}

        <div className="max-w-6xl mb-10">

          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Beneath the sands of Jodhpur and beyond the lakes of Udaipur lies a
            destination that feels less like a hotel and more like a journey
            into Rajasthan's royal past. Rawla Narlai is not simply another
            heritage property; it is a beautifully preserved reminder of how
            Rajput nobility once lived, entertained, and escaped into the
            tranquility of the Aravalli Hills.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Here, centuries-old sandstone architecture coexists effortlessly
            with modern luxury. Courtyards whisper stories of royal gatherings,
            hand-painted frescoes preserve artistic traditions, and every
            corridor reflects a level of craftsmanship rarely found in modern
            hospitality.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Whether you are searching for a romantic retreat, a luxury family
            holiday, an unforgettable wildlife experience near Jawai, or a
            deeper connection with Rajasthan's royal heritage, Rawla Narlai
            offers an experience that remains long after the journey ends.
          </p>

        </div>

        {/* SIGNATURE EXPERIENCE CARD */}

        <div className="bg-white border rounded-sm p-6 mb-6 md:mb-10">

          <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#AF956C] mb-2">
            Signature Experiences
          </span>

          <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#2c2c2c] mb-4">
            What Makes Rawla Narlai So Special?
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

        {/* HISTORY SECTION */}

        <div>

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-5">
            A Royal Legacy: The History of Rawla Narlai
          </h2>

          <p className="text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The story of Rawla Narlai begins in the 17th century when the
            Jodhpur Royal Family established this magnificent property as a
            hunting lodge in the foothills of the Aravalli Range. For
            generations, Rajput rulers used it as a private retreat away from
            the political responsibilities of Marwar, surrounded by rugged
            landscapes and timeless village life.
          </p>

          <p className="text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Over time, the property became an important part of the region's
            aristocratic heritage, serving as a place of leisure, celebration,
            and royal hospitality. Its architecture reflects the elegance and
            practicality of Rajput design, with spacious courtyards, carved
            sandstone details, and beautifully proportioned interiors.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Rawla Narlai was meticulously redesigned in 1996, opening its doors as a magnificent luxury heritage hotel. Rather than modernizing away its character, the
            restoration carefully preserved original frescoes, sandstone
            arches, courtyards, and architectural details. The result is a
            heritage hotel that allows guests to experience Rajasthan's royal
            legacy while enjoying the comfort and sophistication expected from
            a modern luxury retreat.
          </p>

          <div className="relative w-full mt-6 h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md mb-2">
          
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782197143/23.06.2026_11.28.01_REC_ytowx8.png"
              alt="Luxury Heritage Room at Rawla Narlai Rajasthan"
              fill
              className="object-cover"
            />
  
          </div>

        </div>

      </div>

    </section>
  );
}