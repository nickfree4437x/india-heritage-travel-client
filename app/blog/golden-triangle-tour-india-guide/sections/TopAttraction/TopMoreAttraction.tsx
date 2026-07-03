"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Taj Mahal Section */}
        <div className="mb-4 md:mb-6">
          {/* HEADING */}
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            Amber Fort (Jaipur)
          </h2>

          {/* CONTENT */}          
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Introduction</strong> - Amber Fort, also known as Amer Fort, is located atop a hill and overlooks Maota
            Lake. The fort was initially constructed in 1592 by Raja Man Singh I and later expanded over
            generations. Its architecture is a blend of both Rajput and Mughal architecture, featuring the Sheesh
            Mahal, which is a mirror hall that allows one candlelight to be reflected into thousands of pieces of
            embedded mirrors.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Why Go?</strong> - Amber Fort can be considered the most photogenic site in the entire Golden Triangle
            apart from the Taj Mahal, and thanks to its hilltop location, it offers stunning views of the Aravalli
            hills.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Tips</strong> - It is advisable to get there early since tour buses start coming in numbers after 10:00 AM. If an
            elephant or jeep ride to the fort entrance is desired, then better arrange it through your guide as
            opposed to touts who wait at the base.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            <strong className="font-semibold">Best Time</strong> - Early morning hours between 8:00 - 10:00 AM.
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm shadow-md overflow-hidden mt-6">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1781947326/amber_fort_jaipur_pt5ppg.jpg"
              alt="Amber Fort Jaipur Rajasthan – Majestic Hilltop Fort on the Golden Triangle Tour India"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
            via unsplash.com
          </p>
        </div>

        {/* Agra Fort Section */}
        <div className="mb-4 md:mb-6">

          {/* HEADING */}
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            Hawa Mahal (Jaipur)
          </h2>

          {/* CONTENT */}          
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Overview</strong> - The "Palace of Winds" is a five-story sandstone structure built in 1799 by Maharaja
            Sawai Pratap Singh. The structure boasts 953 small windows (jharokhas), which were meant to
            allow royal women to observe life on the streets and at festivals unseen, following the traditions of
            purdah of those times.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Why Visit</strong> - This is one of the most easily recognized buildings in Jaipur, and its honeycomb-like
            façade demonstrates the way Rajput architects brilliantly used architecture to overcome social
            limitations
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Visiting Tips</strong> - The best pictures of the façade can be taken from across the street, especially from a
            rooftop café, because many tourists do not know that inside the building is quite modest compared
            to its exterior. In the morning, sunlight shines beautifully on the pink sandstone.
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm shadow-md overflow-hidden mt-6">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1781947692/hawa_mahal_jaipur_ym1tye.jpg"
              alt="Hawa Mahal Jaipur Rajasthan - Iconic Palace of Winds on the Golden Triangle Tour India"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
            via unsplash.com
          </p>
        </div>

        {/* Red Fort Delhi */}
        <div className="mb-4 md:mb-6">

          {/* HEADING */}
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            City Palace, Jaipur
          </h2>

          {/* CONTENT */}          
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Background</strong> - This huge building with features of Rajput and Mughal architecture is home to the
            royal family of Jaipur and has some portions dedicated to exhibits that showcase royal clothing,
            weapons, and artwork.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Reasons to Visit</strong> - It gives you direct access to Jaipur's royal past – not because of its ruins, but
            because it is actually a functioning palace with great museums.
            balcony.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Tips</strong> - The "Royal Grandeur" ticket will give you access to more private spaces within the palace.
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm shadow-md overflow-hidden mt-6">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1781947912/city_palace_jaipur_i13ky1.jpg"
              alt="City Palace Jaipur Rajasthan – Royal Residence and Heritage Attraction on the Golden Triangle Tour India"
              fill
              sizes="100vw"
              className="object-cover"
            />

          </div>
          <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
            via unsplash.com
          </p>
        </div>

        {/* Red Fort Delhi */}
        <div className="mb-4 md:mb-6">

          {/* HEADING */}
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            Jantar Mantar, Jaipur
          </h2>

          {/* CONTENT */}          
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Overview</strong> - This UNESCO world heritage listed observatory constructed from 1727-1734 by
            Maharaja Jai Singh II houses 19 architectural instruments which can measure time, predict eclipses
            and monitor the movements of the stars in great accuracy for that period.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Reasons to Visit</strong> - It is one of the strangest and most scientifically important places in India – it's an
            actual instrument of 18th century astronomy and not just pretty buildings.
            balcony.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Tips for Visitors</strong> - Make sure you arrange a guide to take you through these places as there is no way
            to understand the purpose of these instruments without a guide.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Best Time</strong> - Late morning when the angle of the sun makes it easier to comprehend the sundial
            instruments.
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm shadow-md overflow-hidden mt-6">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1781948564/jantar_mantar_jaipur_j28a9w.jpg"
              alt="Jantar Mantar Jaipur Rajasthan – UNESCO World Heritage Observatory on the Golden Triangle Tour India"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
            via unsplash.com
          </p>
        </div>
      </div>

    </section>
  );
}