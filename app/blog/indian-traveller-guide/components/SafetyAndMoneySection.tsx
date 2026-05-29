// app/blogs/indian-traveler-guide/components/SafetyAndMoneySection.tsx

"use client";

import Image from "next/image";

export default function SafetyAndMoneySection() {
  return (
    <section className="w-full bg-white pb-4 sm:pb-6">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* CULTURAL SECTION */}
        <div className="max-w-5xl">

          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            Cultural Stuff Worth Knowing
          </h2>

          <div className="space-y-6">

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              • Namaste is a greeting that’s appropriate anywhere.
              Put your palms together at your chest and say it.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              • Dress modestly in temples. Keep those shoulders,
              chest and knees covered. Carry a scarf.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              • Take off your shoes before entering temples,
              homes and select shops.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              • Ask before photographing people. Some temples
              outright ban the cameras.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              • In small towns, people may strike up friendly
              conversations. Many are just enquiring, but trust
              your gut. If you sense something is off, walk away.
            </p>
          </div>
        </div>

        {/* SAFETY SECTION */}
        <div className="mt-6 sm:mt-8">

          {/* HEADING */}
          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            Staying Safe
            <br />
            (Especially for Solo Women)
          </h2>

          {/* CONTENT */}
          <div className="max-w-5xl">

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              Women can travel solo in India.
              Just stay alert and trust your judgement.
            </p>

            <div className="space-y-5">

              <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                • Book hotels with solid, recent reviews.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                • Avoid night trains and night buses when alone.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                • Stick to licensed guides from known India
                travel agencies.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                • Stay in busy areas after dark.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                • Lock your room properly.
                Avoid ground-floor rooms.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                • Keep your phone charged.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                • Use women-only train coaches when available.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                • Keep your bag in front of you in crowds.
              </p>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify mt-8">
              Common scams include taxi overcharging and fake
              guides and drivers who take you to commission-based
              shops. Booking structured India travel packages
              removes most of these problems.
            </p>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative

              mt-10
              sm:mt-12

              w-full

              h-[280px]
              sm:h-[420px]
              lg:h-[620px]

              rounded-sm

              overflow-hidden
            "
          >

            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779639407/solo-safe_xxh85k.png"
              alt="Solo Female Traveller Safety"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* MONEY SECTION */}
        <div className="max-w-5xl mt-6 sm:mt-8">

          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            Money Matters
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            India accepts digital everywhere, but you will need
            some cash for markets, villages and street food.
            ATMs are no problem to locate in larger cities.
          </p>

          <div className="space-y-5">

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              • Divide your money among pockets and bags.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              • Carry small bills for tuk-tuks and stalls.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              • Hotels and restaurants take cards.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              • Markets usually want cash.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              • Many India tour packages cover hotels,
              transport and main activities so you pay
              only for food, tips and shopping.
            </p>
          </div>
        </div>

        {/* SIM CARD SECTION */}
        <div className="max-w-5xl mt-6 sm:mt-8">

          <h2
            className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
              
            "
          >
            Getting a SIM Card
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Get a local SIM at the airport.
            Airtel and Jio counters at airports issue tourist
            plans quickly. You will need your passport,
            visa and one passport photo.
            One month of data runs about $15.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            A local SIM is useful for maps, cab bookings
            and for keeping in touch.
          </p>
        </div>
      </div>
    </section>
  );
}