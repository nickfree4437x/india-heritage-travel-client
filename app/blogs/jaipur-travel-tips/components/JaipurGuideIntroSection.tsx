"use client";

import Image from "next/image";

export default function JaipurGuideIntroSection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-8 sm:py-12 lg:py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* INTRO */}
        <div>

          {/* CONTENT */}
          <div className="space-y-8 max-w-5xl">

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Welcome to Jaipur, the Pink City of India, where every
              corner is full with royal charm, vibrant culture and
              timeless beauty.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Get ready to live a beautiful memory filled with historic
              palaces, bustling bazaars, and yummy Rajasthani food.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Let’s dive into a First-Timer’s Guide to Jaipur |
              Ultimate 3-Day tailored itinerary for first-time travelers
              who want to soak up the best of Jaipur.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              No trip to India is complete without visiting Jaipur. But
              do you know why it is called Pink city?
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              The ‘Old City’ of Jaipur is painted with terracotta
              ‘pink’ walls, giving its name as Pink City.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Visiting Jaipur was always been one of my bucket list. So
              here are my First-Timer’s Guide to Jaipur which were one
              of the most interesting and memorable days of our trip to
              India.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-12">

            <div className="relative w-full h-[350px] sm:h-[500px] lg:h-[650px] rounded-[26px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

              <Image
                src="/blogs/blog-11/hawa-mahal.jpg"
                alt="Hawa Mahal Jaipur"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

        {/* HOW MANY DAYS */}
        <div className="mt-28">

          <h2 className="text-[38px] sm:text-[52px] leading-tight font-semibold text-[#111]">
            How many days you need to explore Jaipur?
          </h2>

          <div className="mt-12 space-y-8">

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              If you want to explore Jaipur comfortably then I’d
              recommend 3 full days in the city with a guide in order to
              know about the history & significance of all the sights.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              In these three days your schedule will be relatively
              packed. Since you’d be out all day sightseeing &
              exploring wit not too much rest in between.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              If you want to take things slow with ample rest &
              sightseeing then four days will be an ample amount of
              time to explore Jaipur.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Also if you’re keen to go to Agra for a day trip from
              Jaipur then four days would be perfect for you.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              If you’re short of time but really want to visit the city
              then you can explore it in two days, but it’ll be super
              packed & you might miss some of the sights.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Our three day trip in Jaipur was comfortable. We’ve been
              provided a wonderful local guide by India Heritage Travel
              who took us around in his car and made everything so easy
              without feeling rushed at all.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Our local guide knew everything, every in & out of Jaipur,
              places to visit in Jaipur, where to shop in Jaipur,
              tickets, entrances, etc.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              So I’d recommend having a local guide, especially if it’s
              your first time in India.
            </p>

            <p className="text-[20px] sm:text-[22px] leading-[2] text-[#111] font-medium">
              Let’s dive into First-Timer’s Guide to Jaipur.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}