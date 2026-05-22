"use client";

import Image from "next/image";

export default function DelhiExtraGuideSection() {
  return (
    <section className="w-full bg-[#f4f0ea] py-8 md:py-14">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* DAY TRIPS */}
        <div className="mb-28">

          {/* CONTENT */}
          <div className="max-w-5xl">

            <h2 className="text-4xl md:text-5xl font-serif text-[#111111] leading-tight mb-10">
              Plan for Day Trips
              <br />
              around Delhi
            </h2>

            <div className="space-y-8">

              <p className="text-[18px] md:text-[19px] leading-[42px] text-[#3a3a3a]">
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
          <div className="mt-12">

            <div className="relative h-[350px] sm:h-[500px] lg:h-[650px] rounded-[26px] overflow-hidden">

              <Image
                src="/blogs/blog-12/blog-12-6.jpg"
                alt="Taj Mahal"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

        {/* CULTURE SECTION */}
        <div className="mb-28">

          {/* CONTENT */}
          <div className="max-w-5xl">

            <h2 className="text-4xl md:text-5xl font-serif text-[#111111] leading-tight mb-10">
              Explore Delhi’s
              <br />
              Culture and Festivals
            </h2>

            <div className="space-y-8">

              <p className="text-[18px] md:text-[19px] leading-[42px] text-[#3a3a3a]">
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
          <div className="mt-12">

            <div className="relative h-[350px] sm:h-[500px] lg:h-[650px] rounded-[26px] overflow-hidden">

              <Image
                src="/blogs/blog-12/blog-12-7.jpg"
                alt="Delhi Festival"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

        {/* SAFETY SECTION */}
        <div className="mb-24">

          <h2 className="text-4xl md:text-6xl font-serif text-[#111111] leading-tight mb-12">
            Safety Tips:
            <br />
            First-timer’s guide
            <br />
            to New Delhi
          </h2>

          <p className="text-[18px] md:text-[19px] leading-[42px] text-[#3a3a3a] max-w-[95%]">
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
        <div className="mb-24">

          {/* CONTENT */}
          <div className="max-w-5xl">

            <h2 className="text-5xl md:text-7xl font-serif text-[#111111] leading-[1.05] mb-12">
              Shop Smart
              <br />
              and Souvenir
              <br />
              Savvy
            </h2>

            <div className="space-y-8">

              <p className="text-[18px] md:text-[19px] leading-[42px] text-[#3a3a3a]">
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
          <div className="mt-12">

            <div className="relative h-[350px] sm:h-[500px] lg:h-[650px] rounded-[26px] overflow-hidden">

              <Image
                src="/blogs/blog-12/blog-12-8.jpg"
                alt="Delhi Shopping Market"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

        {/* FINAL */}
        <div className="max-w-[96%]">

          <h2 className="text-4xl md:text-6xl font-serif text-[#111111] leading-tight mb-12">
            Why Delhi should be
            <br />
            on Your Bucket List
          </h2>

          <p className="text-[18px] md:text-[19px] leading-[42px] text-[#3a3a3a]">
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

      </div>
    </section>
  );
}