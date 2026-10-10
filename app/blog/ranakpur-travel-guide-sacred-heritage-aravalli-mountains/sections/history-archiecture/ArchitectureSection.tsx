"use client";
import Image from "next/image";


export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Architecture That Defies Imagination
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           As you might expect for this kind of travel guide, we’re going to focus on the architecture. 
           Ranakpur’s temples have no real equal. First, there’s the main shrine - the Chaumukha Temple 
           (or Chaturmukha Dharana Vihara) - dedicated to Adinath, the first Tirthankara of Jainism, 
           otherwise known as Lord Rishabhadeva.
          “Chaumukha” translates into “four-faced,” which makes sense given its architectural design. 
          There are four identical entrances leading into the sanctum where four monumental statues of 
          Adinath can be found – each facing one of the four cardinal directions. These are repeated at 
          every level of the structure.
          </p>
        </div>

        {/* Image */}
        <div className="mb-1">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788415180/pexels-hemant-singh-chauhan-639506990-38095229_dolhab.jpg"
              alt="Ranakpur Jain Temple architecture - 1,444 marble pillars defying imagination"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>

       <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
        In terms of sheer scale, the entire complex occupies around 48,000 sq ft and includes 29 halls, 
        80 domes, and – perhaps most impressively – 1,444 marble pillars, none of which was carved 
        identically. It’s said that artisans working on these buildings got their payment based upon 
        how much marble dust they had collected during their carvings, which probably explains why the 
        detail here reaches nearly obsessive levels.
       </p>
      </div>
    </section>
  );
}