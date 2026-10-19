"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Why Ranthambore Belongs on Your Itinerary
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Ranthambore National Park has few rivals among Indian landscapes in combining two different 
            narratives in one place. There is the story of an eleventh-century fort built on top of a 
            ridge of dry deciduous forest, and the story of the artificial lakes at the bottom that used 
            to be visited by Jaipur maharajas and attract tigers nowadays. Ranthambore luxury heritage 
            and wildlife tourism is all about being able to connect these two histories.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            For most tourists this destination is one of the high points of their tour of Rajasthan, for 
            a good reason too There is no park where one could see a royal tiger walking right past the 
            gate of the park with its unique architecture or resting nearby a hunting lodge. However, 
            visiting the park is not so easy because it requires a lot of preparations beforehand and 
            constant waiting since there is no guarantee of having sightings at any moment in time as 
            the areas to be visited are choosen randomly and the best safari is defined as the one when 
            everything has been observed. 
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792404214/hrishikesh-gangoli-oYG5g-_zx80-unsplash_lallfd.jpg"
              alt="Why Ranthambore belongs on your Rajasthan itinerary - tigers and heritage fort"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          The guide includes the history of the ruins, the process of safaris organized in the park, 
          types of acommodation that will satisfy all visitors.
        </p>
      </div>
    </section>
  );
}