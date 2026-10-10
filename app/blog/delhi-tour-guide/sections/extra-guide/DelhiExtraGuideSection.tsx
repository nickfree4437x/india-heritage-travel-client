"use client";

import Image from "next/image";
import Link from "next/link";

export default function DelhiExtraGuideSection() {
  return (
    <section className="w-full bg-white py-4 md:py-6 pb-10 md:pb-12">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* DAY TRIPS */}
        <div>

          {/* CONTENT */}
          <div className="max-w-6xl">

            <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
              Plan for Day Trips
              around Delhi
            </h2>

            <div className="space-y-2">

              <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                You should spare a day or two extra while
                planning a trip to Delhi so that you can
                explore nearby attractions, which serve as
                perfect gateways for day trips. You can sit
                in Agra, which is home to one of the seven
                wonders of the world, Taj Mahal. It is just
                a few hours away and a must-visit attraction
                for anyone thinking of how to plan a trip to
                India. You can explore Jaipur, with its grand
                palaces and forts, which is yet another top
                tourist destination in India. You can choose
                Rajasthan tour packages or customized India
                travel packages to effortlessly include these
                spots in your itinerary.
              </p>

            </div>

          </div>

          {/* IMAGE */}
          <div className="mt-6">

            <div className="relative h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm shadow-md overflow-hidden">

              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779821261/jovyn-chamb-iWMfiInivp4-unsplash_atjf9m.jpg"
                alt="Taj Mahal in Agra a must visit day trip from Delhi"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-[12px] md:text-[13px] text-gray-700 font-light">
              Image via unsplash
            </p>
          </div>

        </div>

        {/* CULTURE SECTION */}
        <div className="mb-6 md:mt-8">

          {/* CONTENT */}
          <div className="max-w-6xl">

            <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
              Explore Delhi’s
              Culture and Festivals
            </h2>

            <div className="space-y-2">

              <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                You must definitely plan your trip to India
                around festivals like Diwali, Holi, or
                Dussehra to witness the city in its most
                vibrant form. If you’re interested in holistic
                experiences, many India tour packages include
                yoga tours in India and Ayurveda tours in India,
                giving you a chance to rejuvenate and relax
                amidst the city’s hustle and bustle. From
                colorful markets to traditional dance
                performances, Delhi’s cultural offerings will
                leave you in awe.
              </p>

            </div>

          </div>

          {/* IMAGE */}
          <div className="mt-6">

            <div className="relative h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm shadow-md overflow-hidden">

              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779828822/dewang-gupta-d7dXX2WTEG0-unsplash_tlamgl.jpg"
                alt="Colorful festival celebrations showcasing Delhi culture and traditions"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-[12px] md:text-[13px] text-gray-700 font-light">
              Image via unsplash
            </p>
          </div>

        </div>

        {/* SAFETY SECTION */}
        <div className="mb-6 md:mt-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            Safety Tips:
            First-timer’s guide
            to New Delhi
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify max-w-[95%]">
            You must ensure safety first when exploring any
            new city. You must stick to well-lit and crowded
            areas, especially at night. Always negotiate fares
            with autorickshaw drivers beforehand or use apps
            for taxis to avoid overpaying. If you’re booking
            through the best travel agency in India, they’ll
            ensure you have reliable guides and transportation.
            Keep your belongings secure and avoid carrying
            large sums of cash.
          </p>

        </div>

        {/* SHOPPING */}
        <div className="mb-6">

          {/* CONTENT */}
          <div className="max-w-6xl">

            <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
              Shop Smart
              and Souvenir
              Savvy
            </h2>

            <div className="space-y-2">

              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                It’s easy to lose oneself in shopping in Delhi,
                which is known to be a shopper’s getaway.
                So you must stick to fixed-price stores or
                bargain confidently in local markets, as it’ll
                let you refrain from getting scammed.
                Popular items include handicrafts, jewelry,
                and spices, which make great souvenirs.
                Shopping at Dilli Haat or through curated
                India holiday packages ensures you get
                authentic, high-quality products.
              </p>

            </div>

          </div>

          {/* IMAGE */}
          <div className="mt-6">

            <div className="relative h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm shadow-md overflow-hidden">

              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779829059/zoshua-colah-YAGz_eGSkJA-unsplash_wzk8ym.jpg"
                alt="Bustling Delhi market known for shopping handicrafts and souvenirs"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-[12px] md:text-[13px] text-gray-700 font-light">
              Image via unsplash
            </p>
          </div>

        </div>

        {/* FINAL */}
        <div className="max-w-6xl">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            Why Delhi should be
            on Your Bucket List
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Delhi’s charm lies in its contrasts.
            It’s a city where ancient history meets modern
            sophistication, where bustling markets coexist
            with serene parks. Whether you’re exploring the
            best places to visit in India or soaking up the
            cultural vibes, Delhi promises an unforgettable
            journey. Partnering with India tour operators or
            booking through India travel agency websites can
            help you make the most of your time in this
            incredible city.
          </p>
        </div>

        <div className="mt-4 md:mt-6 bg-[#faf8f5] rounded-md p-6 sm:p-8">

          <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
            Planning a Trip to Delhi?
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[13px] text-gray-700 text-justify leading-relaxed font-light mb-4">
            India Heritage Travel designs personalised Delhi journeys that seamlessly blend luxury, safety, 
            and comfort with authentic cultural experiences. From exploring iconic landmarks like the Red 
            Fort and Qutub Minar to savouring the city's diverse culinary scene and bustling markets, we 
            curate every detail of your trip.
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
            Plan Your Delhi Journey
          </Link>

        </div>

      </div>
    </section>
  );
}