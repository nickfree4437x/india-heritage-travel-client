"use client";

import Image from "next/image";

export default function DayOneJaipurSection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-8 sm:py-12 lg:py-14">

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* DAY TITLE */}
        <div>

          <h2 className="text-[44px] sm:text-[58px] font-semibold text-[#111] leading-tight">
            DAY 1
          </h2>

        </div>

        {/* AMER VIEWPOINT */}
        <div className="mt-16">

          <h3 className="text-[28px] sm:text-[40px] leading-tight font-semibold text-[#111] uppercase">
            ENJOY SUNRISE AT AMER VIEWPOINT | First-Timer’s Guide to Jaipur
          </h3>

          {/* CONTENT */}
          <div className="mt-12 space-y-8 max-w-5xl">

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Here we’re in Amer, an incredible place to start our
              Jaipur Journey.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              It is a little town which is 20 minutes away from Jaipur
              & is the perfect absolutely stunning spot to watch
              sunrise & it was very quiet when we reached.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              To go the viewpoint form where you could see whole
              Jaipur & the beautiful sunrise, you’ll need to climb
              some steep steps for 20 minutes.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              So here I’d recommend bringing some well-soled shoes
              like a pair of sneakers so that your feets don’t hurt.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-12">

            <div className="relative w-full h-[350px] sm:h-[500px] lg:h-[620px] rounded-[26px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

              <Image
                src="/blogs/blog-11/amer-viewpoint.jpg"
                alt="Amer Viewpoint Jaipur"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

        {/* CITY PALACE */}
        <div className="mt-28">

          <h3 className="text-[28px] sm:text-[40px] leading-tight font-semibold text-[#111] uppercase">
            SPEND LATER MORNING AT CITY PALACE
          </h3>

          {/* CONTENT */}
          <div className="mt-12 space-y-8 max-w-5xl">

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              After Amer our next stop for the day was the amazing
              Jaipur City Palace, which is home of the royal family.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              This palace is one of the most popular places to visit
              in Jaipur which is also a Museum.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              One tip: if you want to explore the famous blue room &
              other private areas of City Palace, you need to purchase
              the Royal Grandeur ticket, as the other tickets don’t
              include access.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              The prices for the Royal Grandeur ticket is 3500INR
              ($70AUD) and 700INR ($14AUD) for the regular ticket
              which do not include access to these places.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-12">

            <div className="relative w-full h-[350px] sm:h-[500px] lg:h-[620px] rounded-[26px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

              <Image
                src="/blogs/blog-11/city-palace-blue-room.jpg"
                alt="City Palace Jaipur"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

        {/* EXTRA CITY PALACE INFO */}
        <div className="mt-28">

          {/* CONTENT */}
          <div className="space-y-8 max-w-5xl">

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              If you’re interested in the history and learning more
              about the City Palace in general then the blue room and
              private areas are really quiet and give you a nice insight
              into the residential areas.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              But if you want to have a general look then you should buy
              regular ticket.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              It took us around 2-2.5 hours’ to fully explore the City
              palace as there was so much to see & explore.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              This First-Timer’s Guide to Jaipur will take care that you
              keep all of these things in mind while coming to Jaipur.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-12">

            <div className="relative w-full h-[350px] sm:h-[500px] lg:h-[620px] rounded-[26px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

              <Image
                src="/blogs/blog-11/city-palace-door.jpg"
                alt="City Palace Door Jaipur"
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