"use client";

import Image from "next/image";

export default function Itinerary() {
  return (
    <section className="py-6">

      {/* 🔥 SAME WIDTH AS CITY SECTION */}
      <div className="max-w-5xl mx-auto">

        {/* 🔹 Heading */}
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-6">
          Detailed Itinerary
        </h2>

        <div className="space-y-12">

          {/* ================= Day 1-3 Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 1–3: Delhi
            </h3>

            <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
              When you reach at the Delhi Airport, we’ll welcome you with a sign board and take you to your well-prepared hotel for a comfortable stay.
            </p>

            <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
              If you prefer to wake up early, you can explore more into Delhi’s rich history, politics, and spirituality. Explore everything from iconic landmarks such as India Gate, the President’s House, and Parliament House to the city’s major role in the Freedom Struggle
            </p>

            <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
              Dive yourself in history at Gandhi Smriti and the unique Qutub Minar. Experience the charm of Old Delhi through a rickshaw ride, uncovering treasures such as Jama Masjid, Red Fort, and Raj Ghat. Don’t forget to explore Gurudwara Bangla Sahib and the serene Nizamuddin Sufi Saint Mosque. 
            </p>

            <div className="grid md:grid-cols-2 gap-6 items-start">

              {/* IMAGE */}
              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/wildlife/itinerary/i1.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                 We’ll manage your journey based on your schedule and preferences, inviting you to discover Delhi’s perfect mixture of history and modern vibrancy.
                </p>
                <p className="mt-6">
                  Some places will be explored as per your convenience and based on your personal preferences and schedule.
                </p>
              </div>

            </div>

            <div className="pt-2">
              <p className="font-semibold">Next stop: Mandawa</p>
              <p className="text-sm text-gray-500">A mere 5.5-hour drive (260 km) from Delhi.</p>
            </div>

          </div>

          {/* ================= Day 3-4 Mandawa ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 3-4: Mandawa
            </h3>

            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/wildlife/itinerary/i2.jpg"
                  alt="Agra"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                  An authentic Rajasthan town that immerses you in its traditional & rural life. It’s an open-art gallery where each step uncovers unique architecture and vibrant mural paintings.
                </p>
                <p>
                  Don’t miss the Heritage Walk, where you’ll see the Silk Route-era mansions known as Havelis.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold">Next stop: Jaipur</p>
              <p className="text-sm text-gray-500">Just 3.5 hours’ drive (200 km) from Mandawa</p>
            </div>

          </div>

          {/* ================= Day 4-5: Pushkar ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 4-5: Pushkar
            </h3>
            <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
             A beautiful town in India, is the most popular tourist destination worldwide. This place is also considered among the most sacred pilgrim sites. The most famous tourist attraction here is the Brahma temple, which attracts thousands of devotees and tourists worldwide.
            </p>

            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/wildlife/itinerary/i3.jpg"
                  alt="Jaipur"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                 Explore the serene Pushkar Lake which consist of 52 ghats & the water around each ghat is believed to possess special medicinal powers.
                </p>
                <p className="mt-4">
                 You can also trek to the top of a hill to reach the Saraswati temple and enjoy the beautiful view of the Pushkar Lake.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold">Next stop: Bundi</p>
              <p className="text-sm text-gray-500">set out on a 3-hour journey (covering 170 km) from Pushkar.</p>
            </div>

          </div>

          {/* ================= Day 5-6: Bundi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 6-7: Agra
            </h3>

            <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
             Arrive in Bundi, explore the stunning Bundi Palace, and have local Rajasthani cuisin
            </p>

            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/wildlife/itinerary/i4.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                 Wander through the old town’s blue-painted houses and visit Rani Ji ki Baori. Discover Taragarh Fort and take a boat ride on Nawal Sagar Lake.
                </p>
                <p className="mt-4">
                 Enjoy your final meal by the lake and, if time allows, explore Sukh Mahal. Depart from Bundi, enriched by its heritage and natural charm.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Ranthambore</p>
              <p className="text-sm text-gray-500">A 3-hour journey (covering 179 km) from Pushkar.</p>
            </div>

          </div>

          {/* ================= Day 6-8: Ranthambore ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
             Day 6-8: Ranthambore
            </h3>

            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
              <p>
                Explore the another side of India with abundance of Fauna & wildlife adventure with a thrilling jungle safari in Ranthambore National Park. Fortunate enough to see the majestic tigers and diverse wildlife in their natural habitat.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/wildlife/itinerary/i5.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                 Begin your day with another thrilling safari, exploring different zones of the park.
                </p>
                <p className="mt-4">
                 After the safari, you can visit the historic Ranthambore Fort settled  atop a hill, offering beautiful panoramic views of the park. Here you’ll capture unforgettable memories of wildlife encounters and natural beauty.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Jaipur</p>
              <p className="text-sm text-gray-500">A 2-hour journey (covering 149 km) from Pushkar.</p>
            </div>

          </div>

          {/* ================= Day 8-10: Jaipur ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 8-10: Jaipur
            </h3>
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/wildlife/itinerary/i6.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                  Jaipur, also known as the Pink city, is a major sightseeing destination in Rajasthan. 
                  Hawa mahal & Jal mahal are most famous iconic places to visit. 
                  You can explore the 7th-century Jantar Mantar which is an astronomical observatory. 
                  Discover the majestic Amber fort & enrich your eyes with its beauty. 
                  You can also visit the exquisite Birla Temple. 
                  Take a walk through the vibrant markets of Johri/Bapu Bazar and Choti Chopper, 
                  for the best shopping when you’re in India.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Agra</p>
              <p className="text-sm text-gray-500">Embark on a 4.5-hour journey (covering 240 km) from Jaipur to the historic city of Agra.</p>
            </div>

          </div>

          {/* ================= Day 10-11: Agra ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 10-11: Agra
            </h3>

            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
              <p className="mt-4">
                Agra the beautiful city on the banks of Yamuna & is a city to the most romantic story ever existed. You can take in the stunning sunset view of the Taj Mahal from the banks of the Yamuna River.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/wildlife/itinerary/i7.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                 If time allows, you can also explore the magnificent Red Fort on the same day. Apart from this, consider an early morning visit the next day to witness the beautiful sunrise at the Taj Mahal which will catch your eyes forever & leaves a lasting impression.
                </p>
                <p className="mt-4">
                 Please note that many attractions, including the Taj Mahal, are closed on Fridays.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Delhi</p>
              <p className="text-sm text-gray-500">Embark on a 4-hour journey (covering 230 km) from Agra to the vibrant city of Delhi..</p>
            </div>

          </div>

           {/* ================= Day 12: Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 12: Delhi
            </h3>

            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
              <p className="mt-4">
               Reaching delhi you’ve two options, you can either relax ay your hotel for preparation of the departure of the next day. 
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/wildlife/itinerary/i8.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                 Alternatively, if you’re feeling energetic and wish to explore more, Delhi also offers a variety of markets to visit: Chandni Chowk Market, the bustling Textile Market (Wholesale Market), the Book Market, and the attracting Spice Market. If your interests also lean towards art and architecture, you can consider visiting the Fateh Puri Mosque, Sis Ganj Gurudwara, Jain Temple, and the Shiva Temple, Gurudwara Bangla Sigh Saheb. The choice is yours, made as your pace and preferences.
                </p>
              </div>
            </div>
          </div>

          {/* ================= Day 13: Farewell and Departure================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 13: Farewell and Departure
            </h3>

            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/destination/north-tour/itinerary/i9.jpg"
                  alt="Departure"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
                After discovering & exploring & taking back the beautiful memories from India, you’re all set ready for your journey back to your home. Your dedicated driver will ensure you reach the airport promptly on time, in accordance with your flight schedule.
                Safe travels!
              </p>

            </div>

          </div>

        </div>

        {/* 🔹 CTA */}
        <div className="mt-14 flex justify-center">

          <button className="bg-[#AF956C] text-white 
                            px-10 py-5 rounded-lg
                            text-sm tracking-wide
                            transition-all duration-300
                            shadow-sm
                            hover:shadow-md">
            
            Book This Tour Or Modify This Itinerary
            
          </button>

        </div>

      </div>

    </section>
  );
}