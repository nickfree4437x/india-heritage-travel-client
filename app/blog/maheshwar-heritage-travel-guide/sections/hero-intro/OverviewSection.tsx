"use client";

import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: Where Is Maheshwar and Why It Matters
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Maheshwar is a small temple town on the north side of the Narmada river. It is in Khargone 
            district of Madhya Pradesh and about 90 km south of Indore. Ujjain is around 145 km away. The 
            old name was Mahishmati. It comes up in the Ramayana and Mahabharata as a powerful place 
            along the river back then.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Ahilyabai from the Holkar family made it the capital of the Malwa kingdom in the 1760s. Her 
            legacy with the fort and temples is still there. The weaving of handmade sarees feels like the 
            main thing the town is about now. It seems that part gets a bit mixed up with the older stories 
            sometimes. I am not totally sure how to frame it. From a tourist’s perspective, Maheshwar has one 
            thing that is becoming rare in India, and that is a heritage site that has not grown out of 
            proportion. There are no tall buildings that have come up by the riverside, and the fort here is 
            actually used as a residence by some of the people living there.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789552178/pexels-pb1019-36505305_erasso.jpg"
              alt="Maheshwar location and significance - Ahilya Fort and Narmada riverfront in Madhya Pradesh"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>
      </div>
    </section>
  );
}