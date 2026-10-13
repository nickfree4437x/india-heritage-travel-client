"use client";

export default function NearbyAttractions() {
  return (
    <section className="w-full bg-white py-1 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Hidden Gems Most Visitors Miss
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Lakshmi Narayan Temple: a hybrid fort/temple complex near the main complex, decorated with ceiling paintings depicting scenes from Krishna Leela and the 1857 revolt, shown in one of the galleries - not very crowded and easily your private spot.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Phool Bagh: a pleasure garden in imperial style, equipped with an air-conditioning system – a tower and tunnel bringing fresh underground water through it and providing relief from hot Orchha summers.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Orchha Wildlife Sanctuary: located across a narrow one car at a time bridge over the Betwa River and providing great chances to bird watch, as well as being close to temples but without visitors.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Cenotaphs at dawn: be at Kanchan Ghat when the first rays of the sun appear, prior to arrival of tourist buses full of people coming from Khajuraho and Jhansi, and really discover Orchha.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Walk in the narrow streets of the old town, where you will find stepped houses, temples and local life right next to some of the world’s greatest monuments.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}