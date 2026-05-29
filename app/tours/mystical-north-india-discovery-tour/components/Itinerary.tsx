"use client";

import Image from "next/image";

export default function Itinerary() {
  return (
    <section className="py-4">

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
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 1–3: Delhi
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p className="mt-2">
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
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530292/i1_tolxzi.png"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              {/* TEXT */}
              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                Enrich your senses at Akshardham Temple, Humayun’s Tomb and Lotus Temple, and, and don’t miss the lively Chandni Chowk market for the perfect shopping.
                </p>
                <p className="mt-2">
                  We’ll manage your journey based on your schedule and preferences, inviting you to discover Delhi’s perfect mixture of history and modern vibrancy. Some places will be explored as per your convenience and based on your personal preferences and schedule.
                </p>
              </div>

            </div>

            <div className="pt-2">
              <p className="font-semibol0 text-[14px]">Next stop: Mandawa</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A mere 5.5-hour drive (260 km) from Delhi.</p>
            </div>

          </div>

          {/* ================= Day 3-4 Agra ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 3-4: Mandawa
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779610788/Screenshot-2025-06-26-151340_kcrnq0.png"
                  alt="Mandawa"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              <div className="space-y-3 text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  An authentic Rajasthan town that immerses you in its traditional & rural life. It’s an open-art gallery where each step uncovers unique architecture and vibrant mural paintings.
                </p>
                <p>
                  Don’t miss the Heritage Walk, where you’ll see the Silk Route-era mansions known as Havelis.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold text-[14px]">Next stop: Jaipur</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Just 3 hours’ drive (175 km) from Mandawa</p>
            </div>

          </div>

          {/* ================= Day 4-6 Jaipur ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 4–6: Jaipur
            </h3>
            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
             Jaipur, also known as the Pink city, is a major sightseeing destination in Rajasthan. Hawa mahal & Jal mahal are most famous iconic places to visit. 
            </p>

            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              Hawa mahal & Jal mahal are most famous iconic places to visit.
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530452/i3_kjoqzx.png"
                  alt="Jaipur"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 You can explore the 7th-century Jantar Mantar which is an astronomical observatory. Discover the majestic Amber fort & enrich your eyes with its beauty.
                </p>
                <p className="mt-2">
                 You can also visit the exquisite Birla Temple. Take a walk through the vibrant markets of Johri/Bapu Bazar and Choti Chopper, for the best shopping when you’re in India.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold text-[14px]">Next stop: Agra</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Embark on a 4.5-hour journey (covering 240 km) from Jaipur to the historic city of Agra.</p>
            </div>

          </div>

          {/* ================= Day 6 Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 6-7: Agra
            </h3>

            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              Agra the beautiful city on the banks of Yamuna & is a city to the most romantic story ever existed. You can take in the stunning sunset view of the Taj Mahal from the banks of the Yamuna River.
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530492/i4_qtbyda.png"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 If time allows, you can also explore the magnificent Red Fort on the same day. Apart from this, consider an early morning visit the next day to witness the beautiful sunrise at the Taj Mahal which will catch your eyes forever & leaves a lasting impression.
                </p>
                <p className="mt-2">
                 Please note that many attractions, including the Taj Mahal, are closed on Fridays.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Orchha</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Your journey continues with a 5-hour drive, covering 255 kilometers.</p>
            </div>

          </div>

          {/* ================= Day 7-8 Orchha ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 7-8: Orchha
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
                Orchha, a small town known for its historical & architectural significance. Explore the blend of Mughal & Rajput architectural style in Jahangir Mahal , beautiful murals showcasing religious themes & scenes from daily life in cours in the Raja mahal.
              </p>
              <p className="mt-2">
               The most famous temple, Raja Ram Temple is unique temple dedicated to Lord Rama. 
              </p>
            </div>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530534/i5_uamdah.png"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Don’t forget to have Betwa river rafting which rafting starts from the beautiful Kanchan Ghat and ends at Shiva Ghat.
                </p>
                <p className="mt-2">
                 You can get to see the line of Chhatris while rafting which would give you a thrilling experience of rafting while seeing such historical grandeur. Orchha is treasure for all the architecture & history lover.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Khajuraho</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Your journey continues with a 4.5-hour drive, covering 200 kilometers, to the mesmerizing destination of Khajuraho.</p>
            </div>

          </div>

          {/* ================= Day 8-9 Khajuraho ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 8-9: Khajuraho
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p className="mt-2">
               Khajuraho, the place known for it rich historical charm & divine artistry. It is known for the most ancient temples which contain group of Hindu, Jain & Buddhist temples. 
              </p>
            </div>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530567/i6_qck9sy.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 The temples are famous for its famous Nagara-style architecture & erotic sculptures. The most popular khajuraho things to do in evening are the Light & Sound show held by western group of temples.
                </p>
                <p className="mt-2">
                 The show brings life into the tale of how these temples came into existence & various historical & religious facts of ancient times.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Varanasi</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Your journey continues with a quick 1-hour flight, transporting you to the mystical city of Varanasi.</p>
            </div>

          </div>

          {/* ================= Day 9-11 Varanasi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 9-11: Varanasi
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p className="mt-2">
               Varanasi, the land is ultimate spot of pilgrimage. It is also known as the oldest living cities in the world. Also Varansi cannot be missed without a visit to Ganga Ghats.
              </p>
            </div>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530600/i7_jeifrx.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Start your day early with a boat ride along the Ganges Ghats, where you’ll see the morning rituals of bathing and prayer. In the evening, another boat ride will let you to experience the Ghats and the beautiful world famous Ganga Aarti and rituals.
                </p>
                <p className="mt-2">
                 Varanasi throughout the ages, held historial significance. Also it has been centre of learning, spirituality, experiencing inner divine, culture, pilgrimage.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Delhi</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Your journey continues with a quick 1.6-hour flight to Delhi, where you can explore the vibrant capital city before concluding your unforgettable adventure.</p>
            </div>

          </div>

           {/* ================= Day 11 Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 11: Delhi
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p className="mt-2">
               Reaching delhi you’ve two options, you can either relax ay your hotel for preparation of the departure of the next day. 
              </p>
            </div>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530636/i8_ww7jgk.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Alternatively, if you’re feeling energetic and wish to explore more, Delhi also offers a variety of markets to visit: Chandni Chowk Market, the bustling Textile Market (Wholesale Market), the Book Market, and the attracting Spice Market. If your interests also lean towards art and architecture, you can consider visiting the Fateh Puri Mosque, Sis Ganj Gurudwara, Jain Temple, and the Shiva Temple, Gurudwara Bangla Sigh Saheb. The choice is yours, made as your pace and preferences.
                </p>
              </div>
            </div>
          </div>

          {/* ================= Day 12 ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 12: Farewell and Departure
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div  className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530663/i9_qsogqs.jpg"
                  alt="Departure"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                After discovering & exploring & taking back the beautiful memories from India, you’re all set ready for your journey back to your home. Your dedicated driver will ensure you reach the airport promptly on time, in accordance with your flight schedule.
                Safe travels!
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}