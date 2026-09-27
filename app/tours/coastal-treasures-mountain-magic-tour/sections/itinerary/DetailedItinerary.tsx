"use client";

import Image from "next/image";

export default function DetailedItinerary() {
  return (
    <section className="py-4">

      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <h2 className=" text-[16px] sm:text-[20px] md:text-[24px]
            font-semibold
            text-center
            mb-2 sm:mb-2
            text-[#2c2c2c]
            tracking-wide">
          Detailed Itinerary
        </h2>

        <div className="space-y-12">

          {/* ================= Day 1-3 Cochin ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px]  font-semibold text-red-500">
              Day 1–3: Cochin
            </h3>

            {/* TOP CONTENT */}
            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              When you arrive at Cochin Airport, our team will warmly welcome you with a signboard and assist you with a smooth start to your South India journey.
            </p>

            {/* IMAGE + TEXT */}
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529506/i1_srytmy.png"
                    alt="Fort Kochi heritage landmarks and waterfront views in Cochin Kerala"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  For those arriving early, you can explore Kochi through a local sightseeing tour. Begin with St. Francis Church, one of the historic landmarks of Fort Kochi. Then visit the Paradesi Synagogue, one of the oldest active synagogues in the Commonwealth of Nations, followed by Mattancherry Palace, a Portuguese-built palace popularly known as the Dutch Palace.
                  <br></br>
                  Overnight stay will be at a hotel in Kochi.
                </p>
              </div>

            </div>

            {/* NEXT */}
            <div className="pt-2">
              <p className="font-semibold text-[14px]">Next stop: Alleppey</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">
                A 1-hour and 20-minute drive, covering 55 kilometres.
              </p>
            </div>

          </div>

          {/* ================= Day 3-4 Alleppey ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px]  font-semibold text-red-500">
              Day 3–4: Alleppey
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529537/i2_ca59ye.jpg"
                    alt="Alleppey Kerala backwaters and traditional houseboat during a South India tour"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Reach Alleppey by noon and check in to a beautiful houseboat. Enjoy a boat cruise through mesmerising Vembanad Lake and experience the peaceful backwaters of Kerala.
                </p>
                <p>
                  As you travel along the narrow strips of land, you can witness the daily lives of local fishing communities, women engaged in their routines, and children enjoying the backwaters. You will also see beautiful villages and landscapes along the way.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold text-[14px]">Next stop: Thekkady</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">
                A scenic 3-hour and 30-minute drive, covering 140 kilometres.
              </p>
            </div>

          </div>

          {/* ================= Day 4-6 Thekkady ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px]  font-semibold text-red-500">
              Day 4–6: Thekkady
            </h3>

            {/* TOP CONTENT */}
            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
               In the early morning, you can enjoy a guided jungle hike and bamboo rafting experience in the Periyar region. The experience takes around 6 hours and offers an opportunity to explore the area's natural surroundings. Wildlife sightings may include elephants and other species found in the region.
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529565/i3_r9nukc.jpg"
                    alt="Thekkady wildlife sanctuary and spice plantations in Kerala India"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  You can also explore the fragrant spice markets, featuring spices such as cinnamon, pepper, and cardamom.
                </p>
                <p>
                  Venture into the fragrant spice plantations, where cardamom, cinnamon, pepper, and coffee thrive.
                </p>
                <p>In the evening, you can enjoy a Kathakali dance performance, a traditional classical dance form of Kerala.</p>
              </div>

            </div>

            <div>
              <p className="font-semibold text-[14px]">Next stop: Munnar</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">
                A 3-hour drive, covering 90 kilometres to Munnar.
              </p>
            </div>

          </div>

          {/* ================= Day 6-8 Munnar ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] font-semibold text-red-500">
              Day 6–8: Munnar
            </h3>

            {/* TOP CONTENT */}
            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
               As you enter Munnar, you can enjoy views of its extensive tea-growing landscapes. After reaching Munnar, you can experience a Kalaripayattu show, an ancient martial art that originated in Kerala.
               <br></br>
               The following morning, you can join a guided trekking experience covering approximately 9 km through grasslands, tea plantations, and rocky landscapes. 
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529506/i1_srytmy.png"
                    alt="Munnar tea plantations scenic valleys and mountain landscapes in Kerala"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-3 text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Next, visit the Munnar Tea Museum, which preserves the history and development of tea plantations in the region.
                </p>
                <p>
                  You can also visit Pothamedu Viewpoint, a scenic spot offering panoramic views of the surrounding valleys. Other nearby attractions include the Muthirapuzha River and Idukki Dam, with impressive views of the surrounding hills.
                </p>
              </div>

            </div>

            <div> 
              <p className="font-semibold text-[14px]">Next stop: Mumbai</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">
                A 2-hour flight to Mumbai.
              </p>
            </div>

          </div>

          {/* ================= Day 8-9 Mumbai ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] font-semibold text-red-500">
              Day 8–9: Mumbai
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529635/i5_hqpbk6.jpg"
                    alt="Mumbai city sightseeing featuring Gateway of India and historic landmarks"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Explore the vibrant city of Mumbai and visit the Gateway of India, one of its most famous landmarks. Continue to the Taj Mahal Palace Hotel and Chhatrapati Shivaji Maharaj Terminus, a UNESCO World Heritage Site known for its Victorian Gothic architecture.
                  <br/>
                  You can also visit Mani Bhavan, Haji Ali, and a Jain temple. Dharavi can also be explored as part of Mumbai's diverse urban landscape and cultural experiences.
                </p>
              </div>

            </div>

          </div>

          {/* ================= Day 10 ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] font-semibold text-red-500">
              Day 10: Farewell & Departure
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779526015/farewal_quhndt.jpg"
                    alt="Farewell departure from India after Kerala and Mumbai cultural tour"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                After discovering and exploring India and creating beautiful memories, you will be ready for your journey back home. Your dedicated driver will ensure you reach the airport on time according to your flight schedule.
                Safe travels!
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}