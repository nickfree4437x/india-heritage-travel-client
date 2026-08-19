"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The History of Pushkar: A City Born of a Lotus
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Every Pushkar travel guide worth reading kind of has to start with the mythology, because in 
            Pushkar, myth and geography get mixed up like they’re basically the same thing. Like, according 
            to the Padma Purana, Lord Brahma - the creator god of the Hindu trinity - released a lotus flower 
            from his hand while looking for a place to do a grand yagna, a sacred fire ritual. Where the 
            petals touched the ground, three lakes appeared: Pushkar, Madhya Pushkar, and Jyeshtha Pushkar. 
            Brahma picked the largest one for his ritual, and Pushkar - literally “born from a lotus flower” 
            - took its name from that whole moment, or rather the consequence of it.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            But then, the ritual needed a consort and Brahma’s wife Savitri was running late, kinda late. 
            So he decided to keep the auspicious hour still intact , and he married a local woman named 
            Gayatri instead. When Savitri finally arrived and saw another goddess sitting right next to 
            him , she cursed Brahma, saying he would not be worshipped anywhere in the world , except in 
            Pushkar. So yeah, that’s why temples dedicated to Brahma are nearly nonexistent elsewhere , 
            and why the Jagatpita Brahma Mandir here is treated as one of the most important temples in 
            the country even if you compare it pretty widely.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787112451/prashant-bamnawat-_mCrYUvcIuI-unsplash_docdwp.jpg"
              alt="Pushkar history - city born of a lotus and Brahma legend"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>

        <p className="text-gray-700 mt-1 md:mt-2 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          The temple's core is believed to date back roughly 2,000 years, though the present structure was 
          largely rebuilt in the 14th century after cycles of destruction and restoration. Pushkar's temples, 
          ghats, and havelis reflect this layered past - ancient foundations, medieval Rajput patronage, and 
          unbroken pilgrimage that has continued for centuries.
        </p>
      </div>
    </section>
  );
}