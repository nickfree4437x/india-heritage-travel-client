"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Where the Wild Things Are: Leopards, Wildlife & Safaris
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           Jawai is often spoken about as having one of the highest numbers of free ranging leopards 
           anywhere in India, mostly because of the dense granite caves, lots of prey around, and, most 
           important really, low human wildllife conflict. You tend to get the best sightings in the 
           cooler months. That’s when leopards are out more, and the timing lines up with safari friendly 
           early morning, plus the late afternoon. Local naturalists sort of follow individual leopards 
           like birders do with rare birds, name, territory, and usual routines. 
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787457149/rakesh-arora-_43KQ1Iua6o-unsplash_cwqxrn.jpg"
              alt="Jawai leopard safari - wildlife safaris and leopard sightings in Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
           The dams wetlands kind of support marsh crocodiles that bask out in the open on the banks, and 
           also striped hyena, jungle cat, chinkara (Indian gazelle) plus a consistent, slow turn over of 
           birdlife. In winter the migratory species come in towards the water’s edge, like demoiselle 
           cranes and a mix of waterfowl, so Jawai is quietly an excellent spot for watching birds, plus 
           wildlife photography right alongside its leopard safaris.
        </p>
      </div>
    </section>
  );
}