"use client";

import Image from "next/image";

export default function JaipurDayTwoExtraSection() {
  return (
    <section className="w-full bg-white">

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* PATRIKA GATE */}
        <div>

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            VISIT PATRIKA GATE
          </h2>

          {/* CONTENT */}
          <div className="mt-6 space-y-2 max-w-5xl">

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              This is one is one of my favourite places in Jaipur.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              This grand Patrika gate stands at the entrance of
              Jawahar Circle which is a garden in Jaipur city.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Each and every pillar of Patrika Gate is painted with
              important facts about different areas of Rajasthan and
              its intricate details and pastel colors makes it a
              beautiful sight to see.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-6">

            <div className="relative w-full h-[280px] sm:h-[40px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">

              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779825828/yash-parashar-_NsZ2xM6tOI-unsplash_ghxr5x.jpg"
                alt="Patrika Gate Jaipur"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

        {/* SAMODE PALACE */}
        <div className="mt-6 md:mt-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            ENJOY LUNCH AT SAMODE PALACE
          </h2>

          {/* CONTENT */}
          <div className="mt-6 space-y-2 max-w-6xl">

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Next we went to a luxurious 300 year old mansion turned
              hotel set on top of the hills which is an hour drive
              from Jaipur.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              It is the town of Samode where you can find Samode
              Palace. It’s upto you to spend a night at Samode Palace
              and if not you can still visit the palace as a
              day-guest.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              The entrance fee is 1000INR per person and it can also
              be used as credit towards lunch at their restaurant.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Samode Palace is beautifully decorated with
              mirror-tiled halls, marble swimming pools and velvet
              sofas, and I’ll recommend it for a great relaxing
              stopover.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-6">

            <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">

              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779825985/27.05.2026_01.35.50_REC_euopzd.png"
                alt="Samode Palace Jaipur"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

        {/* NAHARGARH FORT */}
        <div className="mt-6 md:md-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            ENJOY SUNSET AT NAHARGARH FORT
          </h2>

          {/* CONTENT */}
          <div className="mt-6 space-y-2 max-w-2xl">

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              One of the most popular spots in Jaipur is Nahargarh
              Fort. Hundreds of people come here at night to witness
              the beautiful sunset and there are a number of food
              stalls and bars where you can sit and enjoy the view.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Even you can visit at the time of early sunrise, it’ll
              be an amazing view to experience.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              I didn’t know Jaipur was so big until I saw it from
              above. It really does go on and on.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-6">

            <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">

              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779826258/surbhi-b-_dyJ15xPwII-unsplash_foqdpd.jpg"
                alt="Nahargarh Fort Jaipur"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}