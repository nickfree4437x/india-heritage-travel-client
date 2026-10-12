"use client";

import Link from "next/link";

export default function HeritageHotelsConclusionSection() {
  return (
    <section className="w-full bg-white pb-10 md:pb-12">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* WHY CHOOSE */}
        <div>

          {/* HEADING */}
          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2
            "
          >
            Why Choose a Heritage Hotel in India?
          </h2>

          {/* CONTENT */}
          <div className="max-w-6xl space-y-4">

            <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Staying in a heritage hotel is not just a luxurious
              experience – it’s a journey through time.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              These hotels offer a glimpse into India’s regal past
              while providing world-class hospitality.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Whether you’re on a Rajasthan Trip, Yoga Tour in India,
              or simply exploring the country’s rich history, a stay
              at these hotels will add an unforgettable charm to your
              trip.
            </p>

          </div>

        </div>

        {/* BOOK YOUR STAY */}
        <div className="mt-4 sm:mt-6">

          {/* HEADING */}
          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2
            "
          >
            Plan Your India Heritage Hotel Stay
          </h2>

          {/* CONTENT */}
          <div className="max-w-6xl space-y-4">

            <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              If you’re looking for an unforgettable journey through
              India’s heritage, book your stay with India Heritage
              Travel, one of the top India Tour Operators.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Whether you want a royal retreat, an Ayurveda Tour in
              India, or a fully Customized India Travel Package, we
              have the perfect experience waiting for you!
            </p>

          </div>

        </div>

        <div className="mt-4 md:mt-6 bg-[#faf8f5] rounded-md p-6 sm:p-8">

          <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
            Discover the Best Heritage Hotels in India
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[13px] text-gray-700 leading-relaxed font-light text-justify mb-4">
            India's heritage hotels are more than places to stay - they're living monuments to royal
            history, architectural grandeur, and timeless hospitality. From palace fortresses and 
            lakeside retreats to colonial-era mansions, India Heritage Travel curates exclusive stays
             at the country's most iconic heritage properties, ensuring an unforgettable experience.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-[#AF956C]
              px-6
              py-2 md:py-2.5
              text-[12px]
              sm:text-[13px]
              font-light
              text-white
              transition-colors
              duration-300
              hover:bg-[#9d8157]
            "
          >
            Plan Your Heritage Stay
          </Link>

        </div>

      </div>
    </section>
  );
}