// app/blogs/indian-traveler-guide/components/TravelBasicsSection.tsx

"use client";

import Image from "next/image";

export default function TravelBasicsSection() {
  return (
    <section className="w-full bg-white">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* INTRO TEXT */}
        <div className="max-w-5xl">

          <p
            className="
              text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify
            "
          >
            The second you step outside of the airport in India,
            everything just hits you. The noise. The colours.
            The crowds.
          </p>

          <p
            className="
              text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify
            "
          >
            It’s a lot to take in at first, but when you settle in,
            the place starts making sense. This straightforward
            guide leaves no room for confusion and tells you what
            actually matters on your first trip.
          </p>
        </div>

        {/* VISA SECTION */}
        <div className="mt-6 sm:mt-8">

          {/* HEADING */}
          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            Getting Your Visa Sorted
          </h2>

          {/* CONTENT */}
          <div className="max-w-5xl">

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              Get your e-Tourist Visa in place before you fly.
              Ensure to apply at least four days in advance
              before you are going to take the flight, but
              you’re probably better off with three weeks.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              Since late 2025, an online e-Arrival Card has
              been necessary. You complete it 72 to 24 hours
              prior to arrival, and it replaces the tiny paper
              slip they used to give you on planes.
              Immigration will photograph and fingerprint you.
              Print your visa and e-Arrival confirmation before
              your trip. Also keep copies on your phone.
              Ensure that your passport has at least six months
              of remaining validity.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              There are many India travel agencies that will
              help with visa paperwork if you book India tour
              packages through them.
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
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779639402/visa_f67fov.png"
              alt="Passport and visa documents required for travel to India"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* WEATHER SECTION */}
        <div className="max-w-5xl mt-6 sm:mt-8">

          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            Understanding the Weather
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            The majority of people come October through March.
            The weather is fine, there are plenty of festivals
            and you can walk around without turning into
            sweat-stained mush by midday.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            April to June is very hot throughout most of the
            country. Rajasthan is 45 degrees Celsius,
            except in the mountains.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            The hill towns of Shimla, Manali and others are
            cooler than the rest of India, which is scorching
            under the heat.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            The monsoon season, which runs from July to
            September. Expect heavy rain, frequent closures
            and flooding in some places. But the bright side
            is that everything turns green and the tourist
            hordes disappear. Prices dip as well.
          </p>
        </div>

        {/* BEST TIME SECTION */}
        <div className="max-w-5xl mt-6 sm:mt-">

          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            When Should You Actually Go?
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            If it’s culture and festivals you’re after,
            October to March is your time.
            The same months are also good for beaches.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            The best time to visit Goa and Kerala is from
            November till February. Those who love wildlife
            should consider March and April.
            During these dry months, water sources drop,
            so sightings are better.For honeymoons,
            November through February is perfect.
            Its palace hotels in Rajasthan and backwaters
            in Kerala are dreamy at this time.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Solo women travellers should be mindful around
            festival days like Holi. Streets can get too rowdy,
            so go with people you trust.
          </p>
        </div>
      </div>
    </section>
  );
}