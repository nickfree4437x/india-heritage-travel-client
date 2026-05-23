"use client";

import Image from "next/image";

export default function Itinerary() {
  return (
    <section>

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

        <div className="space-y-10">

          {/* ================= Day 1-3: Cochin ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 1-3: Cochin
            </h3>

            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
             When you arrive at Cochin Airport, our team will ensure your warm welcome with a sign board, ensuring your smooth journey.
            </p>

            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              For those who are arriving early, they have 2 options to explore coachin. Head to local sightseeing tour of Kochi. 
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              {/* IMAGE */}
              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779536653/i1_slqnjw.png"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 You can begin by Sain Francis Church, an amazing monuments of Kochi. Then you can visit Old Paradise Synagogue which is the oldest active synagogue in the Commonwealth of Nations.
                </p>
                <p className="mt-2">
                 Then you can visit Mattancherry Palace, which is a Portuguese palace popularly known as Dutch palace. Overnight stay will be at hotel in Kochi.
                </p>
              </div>

            </div>

            <div className="pt-2">
              <p className="font-semibold text-[14px]">Next stop: Alleppey</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 1-hour and 20-minute drive, covering 55 kilometres.</p>
            </div>

          </div>

          {/* ================= Day 3-4: Alleppey ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 3-4: Alleppey
            </h3>
            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
             Reach Alleppey by noon & check-in a well-booked beautiful houseboat. Enjoy boat cruise through mesmerising Vembanad Lake enjoying experience of backwater cruising.
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779536689/i2_phxoqj.png"
                    alt="Agra"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-3 text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  As you travel narrow strips of land you can witness amazing life of livelihoods of fishing communities, women immersed in their daily lives & children swimming.
                </p>
                <p>
                 You’ll witness amazing spots along the way, feel free to explore them.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold text-[14px]">Next stop: Thekkady</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A scenic 3-hour and 30-minute drive, of 140 kilometres, to Thekkady</p>
            </div>

          </div>

          {/* ================= Day 4-6: Thekkady ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 4-6: Thekkady
            </h3>
            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
             Early morning you can go on a guided jungle hike & bamboo rafting at Periyar National Park. This will take around 6 hours & visiting there means exploring nature around & enjoying peaceful nature. There are many chances you get to witness the elephant herd in the jungle while hiking.
            </p>

            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              After that you can enjoy Bamboo rafting on the Periyar Lake, where also you’ll have the chance to see wildlife and explore one of India’s exceptional animal sanctuaries.
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779536725/i3_czgnbm.png"
                    alt="Jaipur"
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
                 Venture into the fragrant spice plantations, where cardamom, cinnamon, pepper, and coffee thrive.
                </p>
                <p className="mt-2">
                  At evening you can see kathakali Dance which is very famous for of Indian classical dance.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold text-[14px]">Next stop: Munnar</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 3-hour drive, covering 90 kilometres to Munnar.</p>
            </div>

          </div>

          {/* ================= Day 6-8: Munnar================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 6-8: Munnar
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
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779536766/i4_kiqcdz.png"
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
              <p className="font-semibold text-[14px]">Next stop: Madurai</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 2-hour flight to Mumbai.</p>
            </div>

          </div>

          {/* ================= Day 8-10: Madurai ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 8-10: Madurai
            </h3>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center"> 
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779536802/i5_srmuj7.png"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Visit the most famous template dedicated to Goddess of Wealth, The Meenakshi Amman Temple.
                </p>
                <p className="mt-2">
                 It is oldest & one of the most famous temples in India, also it has a great historical & mythological significance. You can visit Madurai Flower market which is one of the biggest in Tamil Nadu. Next you can visit Gandhi Museum which was built in 1959.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Thanjavur</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 3-hour drive of 190 kilometres to Thanjavur.</p>
            </div>

          </div>

          {/* ================= Day 10-11: Thanjavur ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 10-11: Thanjavur
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p className="mt-2">
               On the way you can visit Airavatesvara Temple built in 12th century. It is a lord Shiva Temple which is also recognized as UNESCO world Heritage site & also known as ”Great Living Chola Temples”. 
              </p>
            </div>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779536839/i6_nxz1ap.png"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Next visit Thanjavur Royal palace & Museum which have amazing art & royal collection. You can visit Thanjavur Brass-work shops, which have tradiotnal handicraft of Tamil Nadu.
                </p>
                <p className="mt-2">
                 Visit Brihadeeshwara Temple also a UNESCO world heritage site which is perfect model of great heights achieved in architecture by the Chola rulers.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Pondicherry</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 4-hour and 20-minute drive of 170 kilometres.</p>
            </div>

          </div>

          {/* ================= Day 11-13: Pondicherry ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
             Day 11-13: Pondicherry
            </h3>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779536879/i7_ocu1y5.png"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Pondicherry is the Union Territory of India. Visit French Quarter which are colonial buildings.  Visit The Basilica of the Sacred Heart of Jesus, which is oriental specimen of Gothic architrecture.
                </p>
                <p className="mt-2">
                 Later explore Arulmigu Manakula Vinayagar Temple, dedicated to Lord Ganesha. In the evening you can hangout at Pondicherry beaches which have unique charm.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Mahabalipuram</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 2-hour drive, covering 100 kilometers.</p>
            </div>

          </div>
  
          {/* ================= Day 13-15: Mahabalipuram ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 13-15: Mahabalipuram
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p className="mt-2">
               A beautiful city with vast casuarinas trees, silvery sandy beach, classical handmade crafts & mesmerising ancient architecture. 
              </p>
            </div>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779536918/i8_v4vver.png"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Visit the most famous monument, Shore Temple which is made of granite in 8th century CE.
                </p>
                <p className="mt-2">
                 Later you can visit Pancha Ratha which is a set of 5 different monuments each is named after Pandavas of epic ”Mahabharat” & their family. Then you can visit Cave Temple which is located on the hillock of the town.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Mumbai</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 2-hour flight to Mumbai.</p>
            </div>

          </div>

          {/* ================= Day 15-16: Mumbai ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 15-16: Mumbai
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p className="mt-2">
               Dive in Mumbai’s busy life. Visit Gateway of India, which is the most famous tourist attraction.
              </p>
            </div>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779536956/i9_papjom.png"
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

          {/* ================= Day 12 ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 12: Farewell and Departure
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div>
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