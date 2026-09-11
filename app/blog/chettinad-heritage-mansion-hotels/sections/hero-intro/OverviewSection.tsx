"use client";

import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Chettinad Heritage Mansion Hotels: An Overview
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Chettinad is not a town but rather a network of 75 villages in Sivaganga and Pudukkottai 
            districts of Tamil Nadu, with Karaikudi being the market town. Instead of being drawn to 
            Chettinad by some monument, it is a whole constructed world that makes people visit it. 
            From well-planned grid streets to numerous mansions, which are now abandoned and whose 
            occupants left for Chennai, Singapore, Myanmar, and other places. Some houses are restored 
            and transformed into heritage mansion hotels in such villages as Kanadukathan, Kothamangalam, 
            and Pallathur, thus offering tourists the opportunity to see the interior of these magnificent 
            houses, which used to be closed from prying eyes for a hundred years.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This is what distinguishes Chettinad from other heritage sites in India. There is no entry 
            ticket to some palace or fortress. It is a gradual experience of walking down a quiet street, 
            drinking filter coffee under a pillar veranda and chatting with a caretaker whose family was 
            tending this mansion for three generations.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789119273/rhoda-alex-w5S8FYH-ugg-unsplash_u92d39.jpg"
              alt="Chettinad heritage mansion hotels - luxury stays in Tamil Nadu mansions"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}