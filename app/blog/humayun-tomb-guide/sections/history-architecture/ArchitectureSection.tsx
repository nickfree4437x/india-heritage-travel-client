"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Mughal Architecture at Humayun's Tomb
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784446446/pexels-ajay-sharda-611269-15234947_gfruia.jpg"
              alt="Humayun's Tomb Mughal architecture - Persian charbagh with double dome and red sandstone"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            Architecturally, Architecturally, Humayun's Tomb is often seen as that formative thing in Mughal 
            funerary architecture-the place where Persian design traditions kind of meet Indian workmanship, 
            and it really happens at a massive scale. In fact UNESCO’s own wording basically frames it as 
            the earliest of those grand dynastic mausoleums that later becomes Mughal architecture , and it 
            even says the style hits its peak a few decades afterward with the Taj Mahal. 
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-3">
            Also, the tomb was one of the first in India where red sandstone gets used in such an extensive 
            way , and that is then balanced with white marble accents, especially around the double dome, 
            the lattice (jali) screens, and the decorative margins. The front view is set out with tall 
            arched niches (iwans) on each side, so from pretty much every approach you get a strong 
            geometric symmetry that just feels deliberate. Inside, the octagonal main hall holds Humayun’s 
            cenotaph right in the centre, and it is ringed by smaller chambers for other family members, 
            while the actual burial chamber sits below in a plainer space, following Islamic tradition , 
            meaning unadorned graves.
          </p>
        </div>
      </div>
    </section>
  );
}