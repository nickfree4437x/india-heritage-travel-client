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
                  src="/destination/golden-triangle/itinerary/delhi.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                Enrich your senses at Akshardham Temple, Humayun’s Tomb and Lotus Temple, and, and don’t miss the lively Chandni Chowk market for the perfect shopping.
                </p>
                <p className="mt-6">
                  We’ll manage your journey based on your schedule and preferences, inviting you to discover Delhi’s perfect mixture of history and modern vibrancy. Some places will be explored as per your convenience and based on your personal preferences and schedule.
                </p>
              </div>

            </div>

            <div className="pt-2">
              <p className="font-semibold">Next stop: Agra</p>
              <p className="text-sm text-gray-500">A mere 5.5-hour drive (260 km) from Delhi.</p>
            </div>

          </div>

          {/* ================= Day 3-4 Agra ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 3–4: Agra
            </h3>

            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/destination/golden-triangle/itinerary/agra.jpg"
                  alt="Agra"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                  Take in the stunning sunset view of the Taj Mahal from the banks of the Yamuna River. If time allows, you can explore the majestic Red Fort on the same day. Alternatively, consider an early morning visit the next day to witness the beautiful sunrise at the Taj Mahal.
                </p>
                <p>
                  Please note that many attractions, including the Taj Mahal, are closed on Fridays.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold">Next stop: Jaipur</p>
              <p className="text-sm text-gray-500">Just 3 hours’ drive (175 km) from Mandawa</p>
            </div>

          </div>

          {/* ================= Day 4-6 Jaipur ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 4–6: Jaipur
            </h3>

            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/destination/golden-triangle/itinerary/jaipur.jpg"
                  alt="Jaipur"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
                Jaipur, also known as the Pink city, is a major sightseeing destination in Rajasthan. Hawa mahal & Jal mahal are most famous iconic places to visit. You can explore the 7th-century Jantar Mantar which is an astronomical observatory. Discover the majestic Amber fort & enrich your eyes with its beauty. You can also visit the exquisite Birla Temple. Take a walk through the vibrant markets of Johri/Bapu Bazar and Choti Chopper, for the best shopping when you’re in India.
              </p>

            </div>

            <div>
              <p className="font-semibold">Next stop: Delhi</p>
              <p className="text-sm text-gray-500">A 5-hour journey (covering 307 km) from Jaipur to Agra.</p>
            </div>

          </div>

          {/* ================= Day 6 Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 6: Delhi
            </h3>

            <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
               Reaching delhi you’ve two options, you can either relax ay your hotel for preparation of the departure of the next day. 
              </p>

            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/destination/golden-triangle/itinerary/delhi2.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
                 Alternatively, if you’re feeling energetic and wish to explore more, Delhi also offers a variety of markets to visit: Chandni Chowk Market, the bustling Textile Market (Wholesale Market), the Book Market, and the attracting Spice Market. If your interests also lean towards art and architecture, you can consider visiting the Fateh Puri Mosque, Sis Ganj Gurudwara, Jain Temple, and the Shiva Temple, Gurudwara Bangla Sigh Saheb. The choice is yours, made as your pace and preferences.
              </p>

            </div>

          </div>

          {/* ================= Day 7 ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 7: Farewell And Departure
            </h3>

            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/destination/golden-triangle/itinerary/tour-farewal.jpg"
                  alt="Departure"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
                After discovering & exploring & taking back the beautiful memories from India’s Golden Triangle tour, you’re all set ready for your journey back to your home. Your dedicated driver will ensure you reach the airport promptly on time, in accordance with your flight schedule. Safe travels!
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