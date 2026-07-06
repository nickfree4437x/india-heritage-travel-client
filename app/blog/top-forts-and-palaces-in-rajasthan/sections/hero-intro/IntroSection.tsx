"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="max-w-6xl">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-2">
            Rajasthan's Royal Legacy Lives Through Its Forts & Palaces
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-6">
            I'll never forget standing at the foot of <strong>Mehrangarh Fort</strong> for the very first
            time. It wasn't because I had a plan or a checklist in mind. It was simply the overwhelming
            scale of a fortress built more than five centuries ago that made me stop in my tracks.
            Rajasthan has a way of doing that. You may have seen the photographs, watched documentaries,
            or read countless travel guides - but nothing truly prepares you for experiencing these
            magnificent monuments in person.
          </p>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify">
            Rajasthan is rightly known as India's royal state. This isn't merely a phrase used in travel
            brochures - it's history carved into stone. Across centuries, Rajput rulers built mighty hill
            forts, magnificent palaces, and royal residences that today form one of the richest collections
            of heritage architecture anywhere in India. Six of these remarkable forts are recognised as
            UNESCO World Heritage Sites, making Rajasthan one of the world's greatest destinations for
            history, architecture, and cultural travel. Choosing which forts and palaces deserve a place
            on your itinerary is often the most difficult part of planning a Rajasthan journey.
          </p>
        </div>

        {/* Image */}
        <div className="mt-4 md:mt-6">
          <div className="relative h-[280px] sm:h-[420px] md:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782464553/Mehrangarh_h5ujx3.jpg"
              alt="Mehrangarh Fort in Jodhpur, Rajasthan"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
            via pexels
          </p>
        </div>
      </div>
    </section>
  );
}