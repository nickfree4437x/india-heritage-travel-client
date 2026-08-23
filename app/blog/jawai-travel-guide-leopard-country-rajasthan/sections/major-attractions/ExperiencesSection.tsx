"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-1 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Best Experiences in Jawai
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              ✦ Dawn and dusk jeep safaris : these are the two windows when leopard activity seems to really peak, guided by naturalists who know each individual cat by name plus its own territory.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              ✦	Dawn and dusk jeep safaris : these are the two windows when leopard activity seems to really peak, guided by naturalists who know each individual cat by name plus its own territory.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              ✦	Village walks with the Rabari : a not-rushed , guided introduction to everyday pastoral life, craft traditions and how the community relates with local wildlife.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              ✦	Photography focused safaris : slower paced drives that lean on light, quiet patience, and positioning more than chasing a checklist of sightings.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              ✦	Birdwatching at the wetlands : especially rewarding between November and February, because migratory species are at their most numerous then.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              ✦ Stargazing from camp : very low light pollution, so the winter nights at Jawai’s tented camps look genuinely spectacular.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}