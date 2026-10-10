"use client";

import Image from "next/image";

export default function JaipurGuideIntroSection() {
  return (
    <section className="w-full bg-white py-2">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* INTRO */}
        <div>

          {/* CONTENT */}
          <div className="space-y-2 max-w-6xl">

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Welcome to Jaipur, the Pink City of India, where every
              corner is full with royal charm, vibrant culture and
              timeless beauty.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Get ready to live a beautiful memory filled with historic
              palaces, bustling bazaars, and yummy Rajasthani food.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Let’s dive into a First-Timer’s Guide to Jaipur |
              Ultimate 3-Day tailored itinerary for first-time travelers
              who want to soak up the best of Jaipur.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              No trip to India is complete without visiting Jaipur. But
              do you know why it is called Pink city?
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              The ‘Old City’ of Jaipur is painted with terracotta
              ‘pink’ walls, giving its name as Pink City.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Visiting Jaipur was always been one of my bucket list. So
              here are my First-Timer’s Guide to Jaipur which were one
              of the most interesting and memorable days of our trip to
              India.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-6">

            <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">

              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779827246/prateek-katyal-To6i1FNfsOc-unsplash_di7qqj.jpg"
                alt="Hawa Mahal Jaipur - Jaipur Travel Tips"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-[11px] md:text-[12px] font-light text-gray-700">
              Image via unsplash
            </p>

          </div>

        </div>

        {/* HOW MANY DAYS */}
        <div className="mt-4 md:mt-6">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            How many days you need to explore Jaipur?
          </h2>

          <div className="mt-6 space-y-2">

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              If you want to explore Jaipur comfortably then I’d
              recommend 3 full days in the city with a guide in order to
              know about the history & significance of all the sights.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              In these three days your schedule will be relatively
              packed. Since you’d be out all day sightseeing &
              exploring wit not too much rest in between.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              If you want to take things slow with ample rest &
              sightseeing then four days will be an ample amount of
              time to explore Jaipur.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Also if you’re keen to go to Agra for a day trip from
              Jaipur then four days would be perfect for you.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              If you’re short of time but really want to visit the city
              then you can explore it in two days, but it’ll be super
              packed & you might miss some of the sights.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Our three day trip in Jaipur was comfortable. We’ve been
              provided a wonderful local guide by India Heritage Travel
              who took us around in his car and made everything so easy
              without feeling rushed at all.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Our local guide knew everything, every in & out of Jaipur,
              places to visit in Jaipur, where to shop in Jaipur,
              tickets, entrances, etc.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              So I’d recommend having a local guide, especially if it’s
              your first time in India.
            </p>

            <p className="text-[18px] sm:text-[20px] leading-[2] text-[#111] font-medium">
              Let’s dive into First-Timer’s Guide to Jaipur.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}