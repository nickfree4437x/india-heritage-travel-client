"use client";

import Image from "next/image";

export default function Itinerary() {
  return (
    <section className="md:py-10 py-0">

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

          {/* ================= Day 1-3: Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">
            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 1-3: Delhi
            </h3>
            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Arriving at Delhi Airport, we’ll welcome you and escort you to your comfy hotel. If you’re an early riser, explore Delhi’s rich history and culture with iconic sights like India Gate, Qutub Minar, and a rickshaw ride through Old Delhi. 
              </p>
            </div>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              {/* IMAGE */}
              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779544915/i1_pgldvx.jpg"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Visit important landmarks like Red Fort and Humayun’s Tomb. Immerse in spirituality at Lotus Temple and Akshardham Temple. Enjoy the vibrant Chandni Chowk market. 
                </p>
                <p className="mt-2">
                  Let us customize your journey to experience Delhi’s perfect blend of history and modern vibrancy. Certain places will be explored at your convenience and based on your personal preferences and schedule.
                </p>
              </div>

            </div>

            <div className="pt-2">
              <p className="font-semibold text-[14px]">Next stop: Agra</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Just a 4-hour drive (230 km) from Delhi, a world of wonder awaits you in the City of Love.</p>
            </div>

          </div>

          {/* ================= Day 3-4: Agra ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 3-4: Agra
            </h3>
            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Explore Agra’s romantic and historic world with a sunset view of the Taj Mahal from the serene Yamuna Riverbanks.
              </p>
            </div>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779544956/i2_dnkqy6.jpg"
                    alt="Agra"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-3 text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p> 
                 Visit the Red Fort if time permits. Witness the Taj Mahal’s magic at sunrise and sunset, but remember it’s closed on Fridays.
                </p>
                <p>
                  Discover more treasures like Fatehpur Sikri, Akbar’s Tomb, Jama Masjid, and Itimad-ud-Daula’s Tomb. Agra is a city intertwined with the Mughal legacy, from the grand Agra Fort to the enchanting Fatehpur Sikri, showcasing India’s imperial history.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Jaipur</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A seamless transition in 4.5-Hour Journey (250 km).</p>
            </div>
          </div>

          {/* ================= Day 4-6: Jaipur ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 4-6: Jaipur
            </h3>
            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Experience Jaipur, Rajasthan’s enchanting capital founded in 1727 by Maharaja Sawai Jai Singh II. Marvel at the architectural splendor of Hawa Mahal, City Palace, and the planned layout based on Vastu Shastra. This Pink City seamlessly melds its royal past with modern vibrancy. 
              </p>
            </div>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779545006/i3_mnjilg.webp"
                    alt="Jaipur"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Explore historic treasures like City Palace, Jal Mahal, Hawa Mahal, and the 17th-century Jantar Mantar Observatory. Wander through the captivating Old Walled City, Amber Fort, and Birla Temple.
                </p>
                <p className="mt-2">
                  Indulge in the local markets of Johri Bazar and Choti Chopper, renowned for unique jewelry. Jaipur – where history, culture, and markets intertwine for an unforgettable journey.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold text-[14px]">Next stop: Delhi</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Come back to Delhi to go to Rishikesh for beginning yoga journey</p>
            </div>

          </div>

          {/* ================= Day 6: Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 6: Delhi
            </h3>
              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 In the morning we’ll be back to Delhi & have rest for some hours then travel to Rishikesh for experiencing Yoga World.
                </p>
            </div>
          </div>

          {/* ================= Day 7: Rishikesh ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 7: Rishikesh
            </h3>
              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 In the morning, next day we’ll go to Rishikesh- The Land o fYoga. Upon arrival, we’ll take you to your hotel. In the afternoon, you’ll enjoy a city tour, including a visit to some well-known ashrams that are famous for philosophy, yoga, and meditation. Rishikesh hosts an international yoga week every year from February 2nd to 7th, 
                 organized by Uttaranchal Tourism. You’ll check in at one of these ashrams.
                </p>
            </div>
          </div>

          {/* ================= Day 8-12: Beginning of Yoga Journey- Rishikesh ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 8-12: Beginning of Yoga Journey- Rishikesh
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p className="mt-2">
               During your stay, you’ll have the opportunity to engage in a variety of activities. Your day will begin with meditation classes followed by invigorating yoga sessions to promote physical and mental well-being. 
              </p>
              <p className="mt-2">
                Afterward, you’ll enjoy a wholesome breakfast and later savor a delicious lunch. In the afternoon, there will be enlightening lectures to enhance your knowledge.
              </p>
            </div>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779545094/i6_nfuxkx.jpg"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  You’ll have a tea break before engaging in more yoga and meditation classes, lasting into the early evening.
                </p>
                <p className="mt-2">
                 Your day will conclude with a hearty dinner, allowing you to fully immerse yourself in this holistic and rejuvenating experience.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Delhi</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 3.5-hour drive covering 255 km.</p>
            </div>

          </div>

          {/* ================= Day 13: Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 13: Delhi
            </h3>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779545158/i7_kiucjj.webp"
                    alt="Delhi"
                    fill
                    className="object-cover"
                />
              </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 You’ll begin your day with an advanced yoga session, which includes a question-and-answer session to gauge the positive transformation during the course
                </p>
                <p className="mt-2">
                  Following breakfast, we’ll provide a comfortable car transfer to Delhi. Upon reaching Delhi, you’ll check in at the hotel for an overnight stay.
                </p>
              </div>
            </div>
          </div>

           {/* ================= Day 14: Departure  ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 14: Departure
            </h3>
            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p className="mt-2">
               You have the choice to unwind at your hotel, preparing for your departure the next day. Alternatively, if you’re feeling energetic and wish to explore, Delhi offers a variety of markets to visit: 
              </p>
            </div>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">
              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779545200/i8_q5i2zr.jpg"
                    alt="Delhi"
                    fill
                  className="object-cover"
                />
              </div>
            </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Chandni Chowk Market, the vibrant Kinari Bazaar (Wedding Market), the bustling Textile Market (Wholesale Market), the Book Market, and the fascinating Spice Market, known for both ground and whole spices.
                </p>
                <p>
                  If your interests lean towards art and architecture, you might consider visiting the Fateh Puri Mosque, Sis Ganj Gurudwara, Jain Temple, and the Shiva Temple. The choice is yours, tailored to your pace and preferences.
                </p>
              </div>
            </div>
          </div>

          {/* ================= Day 15  ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 15
            </h3>
              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 With a sense of relaxation and readiness to journey back home, your dedicated driver will ensure you reach the airport promptly, in accordance with your flight schedule. Safe travel!
                </p>
              </div>
          </div>
        </div>
      </div>

    </section>
  );
}