"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Ahhichatragarh Fort: Architecture of the Hooded Cobra
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Ahhichatragarh Fort is huge by almost any measure, like a fortified township that kind of stands 
            on its own, surrounded by thick sandstone and rubble-masonry walls, the whole thing broken up 
            with bastions. Inside, the architecture seems to tell two things at once. First there is that 
            practical military logic of walls gates and garrison quarters. Then theres this more ornamental 
            refinement, a Rajput-Mughal palace complex, built more for pleasure than for fighting.
          </p>
        </div>

        {/* Image */}
        <div className="mb-1 md:mb-2">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787370458/pexels-abeysaksham-31773413_dglyv4.jpg"
              alt="Ahhichatragarh Fort Nagaur - hooded cobra architecture and massive ramparts"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>

        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-[#2c2c2c] tracking-wide">
            The Bakhat Singh Mahal and Water Gardens  
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            At the heart o f the fort, you’ll find the palace group commissioned by Maharaja Bakhat Singh, 
            not really one single building but more like a cluster of pavilions courtyards and halls, all 
            set around reflecting pools and those geometric water channels made to keep the interiors 
            cooler in Rajasthan’s relentless summers. The frescoes here also look unusually well preserved, 
            and their style is pretty distinct too. Rajput figurative painting mixes with Mughal decorative 
            motifs, so it becomes this clear visual record of cultural exchange that shaped Marwar’s royal 
            courts.  
          </p>
        </div>
      </div>
    </section>
  );
}