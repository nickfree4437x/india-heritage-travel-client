
"use client";

import Image from "next/image";

export default function DiningSection() {
  return (
    <section className="w-full bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADER */}

        <div className="mb-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            Meals at Rawla Narlai: When Dining Becomes an Experience
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            At Rawla Narlai, meals are never simply about food. Every dining
            experience is carefully designed to celebrate Rajasthan's culinary
            traditions, local ingredients, royal recipes, and extraordinary
            settings. From rooftop dinners beneath the stars to candlelit
            feasts beside an ancient stepwell, dining here becomes one of the
            most memorable parts of the journey.
          </p>

        </div>

        {/* FEATURE IMAGE */}

        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md mb-10">

          <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782197713/23.06.2026_12.24.30_REC_jtjjof.png"
            alt="Luxury Dining Experience at Rawla Narlai Rajasthan"
            fill
            className="object-cover"
          />

        </div>

        {/* TOP DINING OPTIONS */}

        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="border border-[#e7dfd4] bg-white rounded-sm p-6">

            <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#2c2c2c] mb-3">
              Jharokha Café
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              The heart of dining at Rawla Narlai, Jharokha Café serves a
              carefully curated selection of traditional Rajasthani dishes,
              Indian favorites, and international cuisine. Whether traveling as
              a family, couple, or solo guest, the restaurant offers something
              for every palate while preserving the charm of Rajasthan's
              heritage hospitality.
            </p>

          </div>

          <div className="border border-[#e7dfd4] bg-white rounded-sm p-6">

            <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#2c2c2c] mb-3">
              Rooftop Dining
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Dining beneath the stars with panoramic views of Narlai village
              and the surrounding Aravalli Hills creates one of the property's
              most romantic experiences. The peaceful atmosphere and stunning
              scenery transform a simple dinner into an unforgettable evening.
            </p>

          </div>

        </div>

        {/* STEPWELL SOIREE */}

        <div className="bg-gradient-to-br from-[#faf7f3] to-[#f4efe8] rounded-sm overflow-hidden mb-10">

          <div className=" p-6 sm:p-8">

            <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#AF956C] mb-2">
              Signature Experience
            </span>

            <h3 className="text-[18px] sm:text-[22px] font-semibold text-[#2c2c2c] mb-4">
              Stepwell Soirée - The Most Iconic Dining Experience at Rawla Narlai
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light text-justify mb-4">
              Among all experiences at Rawla Narlai, the legendary Stepwell
              Soirée remains the one guests remember most. Hosted beside an
              11th-century stepwell, this extraordinary dining event transforms
              a historic architectural site into one of Rajasthan's most
              magical dinner venues.
            </p>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light text-justify mb-4">
              The experience begins with a traditional bullock cart ride before
              arriving at a breathtaking scene illuminated by more than 800
              candles and lanterns. Their reflections dance across ancient
              stone walls and water below while traditional Jogi musicians fill
              the night air with soulful melodies.
            </p>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light text-justify">
              Guests are treated to an elegant multi-course Rajasthani feast
              featuring specialties such as dal baati churma, aromatic curries,
              handcrafted breads, and royal Marwari desserts. More than a meal,
              the Stepwell Soirée is a celebration of Rajasthan's history,
              culture, and hospitality. Advance reservations are highly
              recommended.
            </p>

          </div>

        </div>

        {/* MORE EXPERIENCES */}

        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="border border-[#e7dfd4] bg-white rounded-sm p-6">

            <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#2c2c2c] mb-3">
              Alfresco Lunch Experiences
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Dining extends beyond the hotel itself. Guests can arrange
              memorable alfresco lunches on local farms, scenic hilltops, or
              secluded countryside settings, surrounded by Rajasthan's natural
              beauty and rural charm.
            </p>

          </div>

          <div className="border border-[#e7dfd4] bg-white rounded-sm p-6">

            <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#2c2c2c] mb-3">
              Poolside Sundowner Dinner
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              As the sun disappears behind the Aravalli Hills and the sky turns
              shades of gold and amber, poolside dining offers a relaxed and
              elegant way to end the day with refreshing drinks, exceptional
              cuisine, and complete tranquility.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}