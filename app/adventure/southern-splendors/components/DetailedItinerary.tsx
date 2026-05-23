"use client";

import Image from "next/image";

export default function Itinerary() {
  return (
    <section className="py-6">

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

          {/* ================= Day 1-3: Mumbai ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
             Day 1-3: Mumbai
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              {/* IMAGE */}
              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779537248/i1_ooyqi1.png"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Dive in Mumbai’s busy life. Visit Gateway of India, which is the most famous tourist attraction. Next you can head to Taj Mahal Palace Hotel followed by Victoria Terminus station. It is a world heritage site & historic railway station. It has great artwork of Victorian-Gothic style of architecture. You can also visit Mani Bhawan, Haji Ali & Jain temple. You can alsi visit Dharavi, an area where famous movie shoot happens including Oscar-winning “Slumdog Millionaire”.
                </p>
              </div>

            </div>

            <div className="pt-2">
              <p className="font-semibold text-[14px]">Next stop: Cochin</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 2 hour flight from Mumbai.</p>
            </div>

          </div>

          {/* ================= Day 3-5: Cochin ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 3-5: Cochin
            </h3>
            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
             When you arrive at Cochin Airport, our team will ensure your warm welcome with a sign board, ensuring your smooth journey. For those who are arriving early, they have 2 options to explore coachin. Head to local sightseeing tour of Kochi.
            </p>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779537285/i2_j0u0eo.png"
                    alt="Agra"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-3 text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  You can begin by Sain Francis Church, an amazing monuments of Kochi. Then you can visit Old Paradise Synagogue which is the oldest active synagogue in the Commonwealth of Nations.
                </p>
                <p>
                 Then you can visit Mattancherry Palace, which is a Portuguese palace popularly known as Dutch palace. Overnight stay will be at hotel in Kochi.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold text-[14px]">Next stop: Alleppey</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 1-hour and 20-minute drive, covering 55 kilometres.</p>
            </div>

          </div>

          {/* ================= Day 5-6: Alleppey ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 5-6: Alleppey
            </h3>
            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
             Reach Alleppey by noon & check-in a well-booked beautiful houseboat. 
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779537318/i3_yr3krk.webp"
                    alt="Jaipur"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Enjoy boat cruise through mesmerising Vembanad Lake enjoying experience of backwater cruising.
                </p>
                <p className="mt-2">
                 As you travel narrow strips of land you can witness amazing life of livelihoods of fishing communities, women immersed in their daily lives & children swimming. You’ll witness amazing spots along the way, feel free to explore them.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold text-[14px]">Next stop: Thekkady</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A scenic 3-hour and 30-minute drive, of 140 kilometres, to Thekkady</p>
            </div>

          </div>

          {/* ================= Day 6-8: Thekkady================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 6-8: Thekkady
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Early morning you can go on a guided jungle hike & bamboo rafting at Periyar National Park. This will take around 6 hours & visiting there means exploring nature around & enjoying peaceful nature. There are many chances you get to witness the elephant herd in the jungle while hiking. After that you can enjoy Bamboo rafting on the Periyar Lake, where also you’ll have the chance to see wildlife and explore one of India’s exceptional animal sanctuaries. You can also see fragrant spice market which has cinnamon, pepper & cardamom. Venture into the fragrant spice plantations, where cardamom, cinnamon, pepper, and coffee thrive. At evening you can see kathakali Dance which is very famous for of Indian classical dance.
              </p>
            </div>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779537355/i4_pgdqtt.webp"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 You can also see fragrant spice market which has cinnamon, pepper & cardamom.
                </p>
                <p className="mt-2">
                 Venture into the fragrant spice plantations, where cardamom, cinnamon, pepper, and coffee thrive. At evening you can see kathakali Dance which is very famous for of Indian classical dance
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Munnar</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 3-hour drive, covering 90 kilometres to Munnar.</p>
            </div>

          </div>

          {/* ================= Day 8-10: Munnar ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 8-10: Munnar
            </h3>
            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
                Entering Munnar on the way you can witness world’s largest tea-growing region. After reaching you can go to see Kalaripayattu show which is an ancient martial art that originated in Kerala.
              </p>
              <p>
                Next day morning you can go to guided trek tour which will be 3-hour trekking tour covering 9km of walking which include grassland, tea plantations & rocks. 
              </p>
            </div>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779537476/i5_perjuy.webp"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Next you can visit Munnar Tea Museum which preserve the aspects of the origin of tea plantation.
                </p>
                <p className="mt-2">
                 Next you can also visit Pothamedu Viewpoint,a amazing spot which offers panoramic view of valley. You can also visit Muthirapuzha River & Idukki Dam, the view from there is impressive which offers hill slopes view.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Mumbai</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 2-hour flight to Mumbai.</p>
            </div>

          </div>

          {/* ================= Day 8-10: Ooty ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 8-10: Ooty
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779537520/i6_hgcft1.webp"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  A picturesque hill station located in NIlgiri hills of Tamil Nadu Explore the Nilgiri’s tribal heritage. Visit museusm which shows Nilgiri & Tamil Nadu tribal culture.
                </p>
                <p className="mt-2">
                 Experience rich lush gardens & natural flora. Later visit Toda Mund (village) & a fossilized tree trunk which is believed to be 20 million years old.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Mysore</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A mere 3h drive ( 125km)</p>
            </div>
            </div>

          </div>

          {/* ================= Day 12-14 Mysore ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
             Day 12-14 Mysore
            </h3>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779537561/i7_cscwav.webp"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 The historical city of Mysore, located in Chamundi hills of Karnataka is rich in heritage. Visit the most famous iconic landmark like Mysore Palace.
                </p>
                <p className="mt-2">
                 Explore the beautiful Chamundi Hills, Brindavan gardens & shri Chamundiswari temple. Go for shopping of sandalwood handicrafts, spices & incense sticks.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Hassan</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 2 hours and 30 minutes (125 km) drive.</p>
            </div>

          </div>
  
          {/* ================= Day 14-15: Hassan ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
             Day 14-15: Hassan
            </h3>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779537597/i8_u7yq7q.webp"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 The ancient city of Hassan known for its rich heritage is located in Karnataka. It is famous for its centuries old monuments from Hoysala period(11th-13th century).
                </p>
                <p className="mt-2">
                 Visit the beautiful Gorur Dam on the river Hemavathi. You can also visit Nageshwara Temple & Channakeshava temple followed by Shetihalli church in the Hemavati river.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Hampi</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A mere 6 hours (330 km) drive from Hassan..</p>
            </div>

          </div>

          {/* ================= Day 15-18: Hampi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 15-18: Hampi
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
            </div>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779537633/i9_wvcnna.webp"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Explore the world of Hampi which have intricate cravings on every walls. You can explore famous sites such as Zenana Enclosure.
                </p>
                <p>
                  Explore Hampi’s lush palm groves, banana plantation & paddy fields.
                  Alsp pay avisit to renowned Hindu temples which include Vittala, Virupashka, and Achyutaraya.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Mumbai</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A convenient 2 hours (Flight) from Hampi.</p>
            </div>
          </div>   

          {/* ================= Day 18: Mumbai ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 18: Mumbai
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
            </div>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779537668/i10_xsbphm.webp"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Next you can head to Taj Mahal Palace Hotel followed by Victoria Terminus station. It is a world heritage site & historic railway station. It has great artwork of Victorian-Gothic style of architecture. You can also visit Mani Bhawan, Haji Ali & Jain temple. You can alsi visit Dharavi, an area where famous movie shoot happens including Oscar-winning “Slumdog Millionaire”.
                </p>
              </div>
            </div>
          </div>       

          {/* ================= Day 19: Farewell and Departure ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 19: Farewell and Departure
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779526015/farewal_quhndt.jpg"
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