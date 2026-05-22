"use client";

import Image from "next/image";

export default function JaipurDayTwoExtraSection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-8 sm:py-12 lg:py-14">

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* PATRIKA GATE */}
        <div>

          <h2 className="text-[28px] sm:text-[40px] font-semibold uppercase text-[#111] leading-tight">
            VISIT PATRIKA GATE
          </h2>

          {/* CONTENT */}
          <div className="mt-12 space-y-8 max-w-5xl">

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              This is one is one of my favourite places in Jaipur.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              This grand Patrika gate stands at the entrance of
              Jawahar Circle which is a garden in Jaipur city.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Each and every pillar of Patrika Gate is painted with
              important facts about different areas of Rajasthan and
              its intricate details and pastel colors makes it a
              beautiful sight to see.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-12">

            <div className="relative w-full h-[350px] sm:h-[500px] lg:h-[620px] rounded-[26px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

              <Image
                src="/blogs/blog-11/patrika-gate.jpg"
                alt="Patrika Gate Jaipur"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

        {/* SAMODE PALACE */}
        <div className="mt-28">

          <h2 className="text-[28px] sm:text-[40px] font-semibold uppercase text-[#111] leading-tight">
            ENJOY LUNCH AT SAMODE PALACE
          </h2>

          {/* CONTENT */}
          <div className="mt-12 space-y-8 max-w-5xl">

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Next we went to a luxurious 300 year old mansion turned
              hotel set on top of the hills which is an hour drive
              from Jaipur.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              It is the town of Samode where you can find Samode
              Palace. It’s upto you to spend a night at Samode Palace
              and if not you can still visit the palace as a
              day-guest.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              The entrance fee is 1000INR per person and it can also
              be used as credit towards lunch at their restaurant.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Samode Palace is beautifully decorated with
              mirror-tiled halls, marble swimming pools and velvet
              sofas, and I’ll recommend it for a great relaxing
              stopover.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-12">

            <div className="relative w-full h-[350px] sm:h-[500px] lg:h-[620px] rounded-[26px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

              <Image
                src="/blogs/blog-11/samode-palace.jpg"
                alt="Samode Palace Jaipur"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

        {/* NAHARGARH FORT */}
        <div className="mt-28">

          <h2 className="text-[28px] sm:text-[40px] font-semibold uppercase text-[#111] leading-tight">
            ENJOY SUNSET AT NAHARGARH FORT
          </h2>

          {/* CONTENT */}
          <div className="mt-12 space-y-8 max-w-5xl">

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              One of the most popular spots in Jaipur is Nahargarh
              Fort. Hundreds of people come here at night to witness
              the beautiful sunset and there are a number of food
              stalls and bars where you can sit and enjoy the view.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Even you can visit at the time of early sunrise, it’ll
              be an amazing view to experience.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              I didn’t know Jaipur was so big until I saw it from
              above. It really does go on and on.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-12">

            <div className="relative w-full h-[350px] sm:h-[500px] lg:h-[620px] rounded-[26px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

              <Image
                src="/blogs/blog-11/nahargarh-fort.jpg"
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