"use client";

import Image from "next/image";

export default function WildlifeSection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Kumbhalgarh Wildlife Sanctuary: Forests, Forts & the Aravalli Wild
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Indian wolves have made it their home. Only spot in the entire state of Rajasthan where they 
            stick around year after year. They set the whole thing up in 1971 and in practice it supports 
            quite the mix of animals. Leopards for starters. Sloth bears striped hyenas golden jackals and 
            jungle cats. You will see sambhar nilgai chausingha the four horned antelope and chinkara too. 
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Counts show more than 200 different bird kinds. Grey junglefowl and painted francolin tend to 
            catch a watchers eye. So basically the fort and this rich wildlife setting are one and the 
            same. Kind of blows my mind every time I consider it. From what Ive seen visitors focus on the 
            walls and the old stories instead. They overlook the living sanctuary wrapped around them.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788326809/Wilderness_and_existance_1_yrkxws.jpg"
              alt="Kumbhalgarh Wildlife Sanctuary: Forests, Forts & the Aravalli Wild"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          As the dry deciduous forest of the sanctuary including dhok, salar, and khair trees among the 
          scrub land of the Aravalli hills becomes lively between October and June, the jeep safari is 
          usually done early morning and in the evenings when the maximum activity of the wild takes place. 
          Considering that the area is hilly as compared to flat national park, the jeep ride is not like a 
          normal safari but a trek into the forest that can be arranged through India Heritage Travel.
        </p>
      </div>
    </section>
  );
}