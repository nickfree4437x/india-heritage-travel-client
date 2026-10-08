// app/blogs/indian-traveller-guide/components/TravelBasicsSection.tsx

"use client";

import Image from "next/image";

export default function TravelBasicsSection() {
  return (
    <section className="w-full bg-white py-2">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Intro Text */}
        <div className="max-w-6xl">
          <p className="
            text-gray-700 mb-4 leading-relaxed
            text-[13px] sm:text-[14px] md:text-[14.5px]
            font-[300] text-justify
          ">
            Your first arrival in India can feel overwhelming at first.
            The sounds, colours, crowds, and pace of everyday life are
            very different from what many first-time visitors are used to.
          </p>

          <p className="
            text-gray-700 mb-4 leading-relaxed
            text-[13px] sm:text-[14px] md:text-[14.5px]
            font-[300] text-justify
          ">
            Once you settle in, the experience becomes much easier to
            navigate. This first-time India travel guide covers the
            practical information that matters most, from visas and
            weather to transport, money, food, safety, and local customs.
          </p>
        </div>

        {/* Visa Section */}
        <div className="mt-6 sm:mt-8">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-2
          ">
            India Visa Requirements for First-Time Travelers
          </h2>

          <div className="max-w-5xl">
            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              Get your e-Tourist Visa in place before you fly.
              Ensure to apply at least four days in advance
              before you are going to take the flight, but
              you're probably better off with three weeks.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
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
          </div>

          {/* Image */}
          <div className="
            relative
            mt-4 sm:mt-6
            w-full
            h-[280px] sm:h-[420px] lg:h-[560px]
            rounded-sm
            overflow-hidden
          ">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779639402/visa_f67fov.png"
              alt="Indian visa and passport documents for first-time travelers to India"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Weather Section */}
        <div className="max-w-6xl mt-6 sm:mt-8">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-2
          ">
            Understanding the Weather
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            The majority of people come October through March.
            The weather is fine, there are plenty of festivals
            and you can walk around without turning into
            sweat-stained mush by midday.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            April to June is very hot throughout most of the
            country. Rajasthan is 45 degrees Celsius,
            except in the mountains.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            The hill towns of Shimla, Manali and others are
            cooler than the rest of India, which is scorching
            under the heat.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            The monsoon season, which runs from July to
            September. Expect heavy rain, frequent closures
            and flooding in some places. But the bright side
            is that everything turns green and the tourist
            hordes disappear. Prices dip as well.
          </p>
        </div>

        {/* Best Time Section */}
        <div className="max-w-5xl mt-6 sm:mt-8">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-2
          ">
            Best Time to Visit India for First-Time Travelers
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            If it's culture and festivals you're after,
            October to March is your time.
            The same months are also good for beaches.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            The best time to visit Goa and Kerala is from
            November till February. Those who love wildlife
            should consider March and April.
            During these dry months, water sources drop,
            so sightings are better. For honeymoons,
            November through February is perfect.
            Its palace hotels in Rajasthan and backwaters
            in Kerala are dreamy at this time.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Solo women travellers should be mindful around
            festival days like Holi. Streets can get too rowdy,
            so go with people you trust.
          </p>
        </div>
      </div>
    </section>
  );
}