"use client";

import Link from "next/link";

export default function ConclusionSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="mb-4 md:mb-6">


          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c]">
            Conclusion
          </h2>

        </div>

        {/* Content */}

        <div className="space-y-5 mb-10">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            A luxury Golden Triangle tour does not simply show you Delhi,
            Agra, and Jaipur - it allows you to experience them the way
            they were meant to be experienced: at your own pace, with
            genuine access, personalized service, and the comfort that
            transforms sightseeing into something far more meaningful.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            From watching the Taj Mahal glow at sunrise with a private guide
            to enjoying dinner inside a royal palace courtyard in Jaipur,
            every moment becomes more immersive, more personal, and more
            memorable. Luxury travel is not about excess - it is about
            removing obstacles between you and the destination so that
            history, culture, and hospitality can be experienced at their
            finest.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Whether you are planning a honeymoon, a family celebration,
            a special anniversary, or simply wish to experience India's
            most iconic journey in complete comfort, a carefully designed
            luxury Golden Triangle itinerary offers an unforgettable way
            to discover the country.
          </p>

        </div>

        {/* CTA Box */}

        <div className="bg-gradient-to-r from-[#faf7f3] to-[#f5f0e9] border border-[#e7dfd4] rounded-lg p-6 sm:p-8 text-center mb-10">

          <h3 className="text-[17px] sm:text-[20px] font-semibold text-[#2c2c2c] mb-3">
            Ready to Experience the Golden Triangle in True Luxury?
          </h3>

          <p className="text-[13px] sm:text-[13.5px] text-gray-700 leading-relaxed font-light max-w-2xl mx-auto mb-6">
            Contact India Heritage Travel today and let our specialists
            design a fully customized Delhi–Agra–Jaipur journey tailored
            around your travel dates, interests, accommodation preferences,
            and dream experiences.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              px-8
              py-3
              bg-[#AF956C]
              text-white
              text-[12px]
              sm:text-[13px]
              rounded-2xl font-light
              transition-all
              duration-300
              hover:bg-[#94774a]
            "
          >
            Start Planning Your Luxury Journey
          </Link>

        </div>

      </div>

    </section>
  );
}