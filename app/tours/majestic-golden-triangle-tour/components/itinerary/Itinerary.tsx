"use client";

import Image from "next/image";

export default function Itinerary() {
  return (
    <section className="py-0 md:py-2">

      {/* 🔥 SAME WIDTH AS CITY SECTION */}
      <div className="max-w-5xl mx-auto">

        {/* 🔹 Heading */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[24px]
            font-semibold
            text-center
            mb-2 sm:mb-2
            text-[#2c2c2c]
            tracking-wide">
          Detailed Itinerary
        </h2>

        <div className="space-y-12">

          {/* ================= Day 1-3 Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-4 sm:p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
             Day 1–3: Delhi
            </h3>
            <div  className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
            <p>
             When you reach at the Delhi Airport, we’ll welcome you with a sign board and take you to your well-prepared hotel for a comfortable stay.
            </p>
            <p className="mt-2">
             If you prefer to wake up early, you can explore more into Delhi’s rich history, politics, and spirituality. Explore everything from iconic landmarks such as India Gate, the President’s House, and Parliament House to the city’s major role in the Freedom Struggle
            </p>
            <p className="mt-2">
             Dive yourself in history at Gandhi Smriti and the unique Qutub Minar. Experience the charm of Old Delhi through a rickshaw ride, uncovering treasures such as Jama Masjid, Red Fort, and Raj Ghat. Don’t forget to explore Gurudwara Bangla Sahib and the serene Nizamuddin Sufi Saint Mosque.
            </p>
          </div>

           <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

           {/* IMAGE */}
           <div className="w-full flex justify-center">
            <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1782223873/delhi_edqeg6.jpg"
                alt="Delhi sightseeing tour featuring India Gate Red Fort Qutub Minar and historic landmarks"
                fill
                className="object-cover object-center"
              />
            </div>
           </div>

           {/* TEXT */}
           <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
            <p>
              Enrich your senses at Akshardham Temple, Humayun’s Tomb and Lotus Temple,
              and don’t miss the lively Chandni Chowk market for the perfect shopping.
            </p>
            <p className="mt-2 md:mt-2">
              We’ll manage your journey based on your schedule and preferences,
              inviting you to discover Delhi’s perfect mixture of history and modern
              vibrancy. Some places will be explored as per your convenience and based
              on your personal preferences and schedule.
            </p>

           </div>
          </div>  

           <div className="pt-2">
            <p className="font-medium text-[14px]">
              Next stop: Agra
            </p>
            <p className="text-[12px] sm:text-[12px] font-[300] text-gray-700">
              A mere 5.5-hour drive (260 km) from Delhi.
            </p>
           </div>

           </div>  

          {/* ================= Day 3-4 Agra ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-4 sm:p-6 space-y-5">

          <h3 className="text-[17px] md:text-lg font-medium text-red-500">
            Day 3–4: Agra
          </h3>

          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

            {/* IMAGE */}
            <div className="w-full flex justify-center">
              <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779525897/agra_n4lvva.webp"
                  alt="Agra Taj Mahal tour showcasing Mughal architecture and historic landmarks in India"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="space-y-3 text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">

              <p>
                Take in the stunning sunset view of the Taj Mahal from the banks of
                the Yamuna River. If time allows, you can explore the majestic Red
                Fort on the same day. Alternatively, consider an early morning visit
                the next day to witness the beautiful sunrise at the Taj Mahal.
              </p>
              <p>
                Please note that many attractions, including the Taj Mahal,
                are closed on Fridays.
              </p>
            </div>
          </div>

          <div>
            <p className="font-medium text-[14px]">
              Next stop: Jaipur
            </p>
            <p className="text-[12px] sm:text-[12px] font-[300] text-gray-700">
              Just 3 hours’ drive (175 km) from Mandawa
            </p>
          </div>

          </div>

          {/* ================= Day 4-6 Jaipur ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-4 sm:p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 4–6: Jaipur
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              {/* IMAGE */}
              <div className="w-full flex justify-center">
                <div className="relative h-[220px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779525948/jaipur_ls5iys.png"
                    alt="Jaipur Pink City tour featuring Amber Fort Hawa Mahal and Rajasthan heritage attractions"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* TEXT */}
              <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                Jaipur, also known as the Pink city, is a major sightseeing destination
                in Rajasthan. Hawa Mahal & Jal Mahal are most famous iconic places to
                visit. You can explore the 7th-century Jantar Mantar which is an
                astronomical observatory. Discover the majestic Amber Fort & enrich your
                eyes with its beauty. You can also visit the exquisite Birla Temple.
                Take a walk through the vibrant markets of Johri/Bapu Bazar and Choti
                Chopper, for the best shopping when you’re in India.
              </p>

            </div>

            <div>
              <p className="font-medium text-[14px]">
                Next stop: Delhi
              </p>

              <p className="text-[12px] sm:text-[12px] font-[300] text-gray-700">
                A 5-hour journey (covering 307 km) from Jaipur to Agra.
              </p>
            </div>

          </div>

          {/* ================= Day 6 Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-4 sm:p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 6: Delhi
            </h3>

            <p className="text-gray-700 text-[12px] font-[300] md:text-[13px] leading-relaxed text-justify">
              Reaching Delhi you’ve two options, you can either relax at your hotel for
              preparation of the departure of the next day.
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              {/* IMAGE */}
              <div className="w-full flex justify-center">
                <div className="relative h-[220px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779525977/delhi2_a4reej.jpg"
                    alt="Jaipur Pink City tour featuring Amber Fort Hawa Mahal and Rajasthan heritage attractions"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* TEXT */}
              <p className="text-gray-700 text-[12px] font-[300] md:text-[13px] leading-relaxed text-justify">
                Alternatively, if you’re feeling energetic and wish to explore more,
                Delhi also offers a variety of markets to visit: Chandni Chowk Market,
                the bustling Textile Market (Wholesale Market), the Book Market, and the
                attracting Spice Market. If your interests also lean towards art and
                architecture, you can consider visiting the Fateh Puri Mosque, Sis Ganj
                Gurudwara, Jain Temple, and the Shiva Temple, Gurudwara Bangla Singh
                Sahib. The choice is yours, made at your pace and preferences.
              </p>

            </div>

          </div>

          {/* ================= Day 7 ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-4 sm:p-6 space-y-5">

          <h3 className="text-[17px] md:text-lg font-medium text-red-500">
            Day 7: Farewell And Departure
          </h3>

          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

            {/* IMAGE */}
            <div className="w-full flex justify-center">
              <div className="relative h-[220px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779526015/farewal_quhndt.jpg"
                  alt="Departure from India after Golden Triangle Tour covering Delhi Agra and Jaipur"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* TEXT */}
            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              After discovering, exploring, and taking back beautiful memories from
              India’s Golden Triangle Tour, you’re all set for your journey back home.
              Your dedicated driver will ensure you reach the airport promptly,
              according to your flight schedule. Safe travels!
            </p>

          </div>

        </div>

        </div>
      </div>

    </section>
  );
}