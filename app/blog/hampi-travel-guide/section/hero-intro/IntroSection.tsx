"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-2
        ">
          Why Hampi? An Introduction to India's Greatest Ruined Empire
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            There are ruined cities, and then there is Hampi - sprawled across 41.5 square kilometres
            of Karnataka's boulder-strewn Deccan plateau, fed by the sacred Tungabhadra. Over 1,600
            monuments survive: temples, royal courts, bazaars, elephant stables, pleasure pools, and
            fortifications that once encircled a city as grand as any in the medieval world.
          </p>
        </div>

        {/* Image */}
        <div className="mt-6 mb-4 md:mb-6">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783502925/parul-gupta-UuyMc40kpv8-unsplash_bmnbdc.jpg"
              alt="Hampi UNESCO ruins - 14th-century Vijayanagara capital with stone chariot and boulder landscape"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>

        <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          This was Vijayanagara, the City of Victory - capital of South India's last great Hindu empire
          and, by 1500 CE, the world's second-largest city after Beijing, with a population of 500,000 
          to 1 million. Portuguese and Persian travellers wrote of broad streets, temples adorned with 
          gold, and markets trading silk, cotton, and spices across Asia. It rivalled Rome at its peak
           - for size and confidence. Then 1565 came. The Battle of Talikota ended with the city sacked,
          pillaged, and burned. What remains is one of the most astonishing and emotional heritage landscapes
         on earth - and one of India's most underrated destinations for international visitors.
        </p>
      </div>
    </section>
  );
}