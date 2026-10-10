"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Architecture & Cultural Significance
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Jagatpita Brahma Mandir really shows itself before you even get close to the gates , like it’s 
            impossible to miss-there’s a red shikhara , a spire that rises over the nearby rooftops and you 
            can spot it from across the lake. Then a run of marble steps climbs up to a pillared entrance 
            archway, which people say was donated by devotees over generations , and the doorway itself is 
            plated in silver , with thousands of coins pressed into the floor and walls as offerings. Once 
            you go inside, the mandapa-sort of a pillared hall-leads you toward the garbhagriha, the inner 
            sanctum , where a four-faced, four-armed idol of Brahma sits together with Gayatri , and near 
            him his hamsa (swan vehicle) is carved as his symbolic mount.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787112771/pexels-axp-photography-500641970-19160123_t727cx.jpg"
              alt="Architecture and cultural significance of Pushkar - temples ghats and heritage"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>

        <p className="text-gray-700 mt-1 md:mt-2 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          On a cultural level, this temple kind of holds Pushkar’s entire pilgrimage identity in place, 
          like really. The day to day aarti-lamplight, bell tones and chanting-happens at dawn and dusk, 
          and it draws both devotees, and those random curious travelers toward the temple steps. It’s 
          still one of those experiences that feels less scripted, more lived in, and honestly moving even 
          if you’ve seen other places before.
        </p>
      </div>
    </section>
  );
}