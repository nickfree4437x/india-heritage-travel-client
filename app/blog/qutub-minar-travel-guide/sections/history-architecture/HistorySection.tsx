"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History & Origins - Seven Centuries Written in Stone
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[650px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784174700/KITLV_377921_-_Clifton_and_Co._-_The_Qutab_Minar_in_Mehrauli_in_Delhi_-_Around_1890_ylylos.jpg"
              alt="Historical illustration of Qutb-ud-din Aibak founding the Delhi Sultanate and beginning construction of Qutub Minar in 1192"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            So um, The Qutub Minar was put up after the Second Battle of Tarain, 1192 CE , when Muhammad 
            of Ghor ended up beating Prithviraj Chauhan III . This was a sort of opening, allowing Islamic 
            rule to spread across northern India. Later on, his commander , Qutb-ud-din Aibak , became the 
            first Sultan of Delhi in 1206 , and in fact he also started what people call the Delhi Sultanate. 
            Right before Aibak died in 1210, he began building the Quwwat-ul-Islam Mosque along with the Qutub 
            Minar. This was done near the old Rajput fortress, Qila Rai Pithora . The minaret then worked as 
            both a spot for the call to prayer , and a strong sign of the new Sultanate’s, authority.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-3">
            The The name “Qutub Minar” is sometimes translated as “Tower of Qutb-ud-din” honouring 
            that sultan who began it. But “Qutb” also has a more deeper Islamic weight to it, because 
            the qutb (or qutub) is understood as the spiritual axis of the world in Sufi cosmology. 
            It s basically the pole, or the hinge, around which everything revolves , sort of like a 
            pivot. So the name ends up holding two resonances at once, like a double echo ; it’s the 
            tower of the sultan, and at the same time the axis of the sacred order he was announcing.
          </p>
        </div>
      </div>
    </section>
  );
}