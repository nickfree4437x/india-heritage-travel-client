"use client";

import Image from "next/image";

export default function DetailedItinerary() {
  return (
    <section>

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
              When you arrive at Cochin Airport, our team will ensure your warm welcome with a sign board, ensuring your smooth journey.
            </p>

            {/* IMAGE + TEXT */}
            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

              <div className="relative w-[350px] h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/destination/coastal-tour/itinerary/i1.jpg"
                  alt="Cochin"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  For those who are arriving early, they have 2 options to explore coachin. Head to local sightseeing tour of Kochi. You can begin by Sain Francis Church, an amazing monuments of Kochi. Then you can visit Old Paradise Synagogue which is the oldest active synagogue in the Commonwealth of Nations. Then you can visit Mattancherry Palace, which is a Portuguese palace popularly known as Dutch palace.
                  <br></br>
                  Overnight stay will be at hotel in Kochi.
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

            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

              <div className="relative w-[350px] h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/destination/coastal-tour/itinerary/i2.jpg"
                  alt="Alleppey"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Reach Alleppey by noon & check-in a well-booked beautiful houseboat. Enjoy boat cruise through mesmerising Vembanad Lake enjoying experience of backwater cruising.
                </p>
                <p>
                  As you travel narrow strips of land you can witness amazing life of livelihoods of fishing communities, women immersed in their daily lives & children swimming.
                  You’ll witness amazing spots along the way, feel free to explore them.
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
               Early morning you can go on a guided jungle hike & bamboo rafting at Periyar National Park. This will take around 6 hours & visiting there means exploring nature around & enjoying peaceful nature. There are many chances you get to witness the elephant herd in the jungle while hiking. After that you can enjoy Bamboo rafting on the Periyar Lake, where also you’ll have the chance to see wildlife and explore one of India’s exceptional animal sanctuaries.
            </p>

            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

              <div className="relative w-[350px] h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/destination/coastal-tour/itinerary/i3.jpg"
                  alt="Thekkady"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  You can also see fragrant spice market which has cinnamon, pepper & cardamom.
                </p>
                <p>
                  Venture into the fragrant spice plantations, where cardamom, cinnamon, pepper, and coffee thrive.
                </p>
                <p>At evening you can see kathakali Dance which is very famous for of Indian classical dance.</p>
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
               Entering Munnar on the way you can witness world’s largest tea-growing region. After reaching you can go to see Kalaripayattu show which is an ancient martial art that originated in Kerala.
               <br></br>
               Next day morning you can go to guided trek tour which will be 3-hour trekking tour covering 9km of walking which include grassland, tea plantations & rocks. 
            </p>

            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

              <div className="relative w-[350px] h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/destination/coastal-tour/itinerary/i4.jpg"
                  alt="Munnar"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3 text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                   Next you can visit Munnar Tea Museum which preserve the aspects of the origin of tea plantation.
                </p>
                <p>
                  Next you can also visit Pothamedu Viewpoint,a amazing spot which offers panoramic view of valley. You can also visit Muthirapuzha River & Idukki Dam, the view from there is impressive which offers hill slopes view.
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

            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

              <div className="relative w-[350px] h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/destination/coastal-tour/itinerary/i5.jpg"
                  alt="Mumbai"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Dive in Mumbai’s busy life. Visit Gateway of India, which is the most famous tourist attraction. Next you can head to Taj Mahal Palace Hotel followed by Victoria Terminus station. It is a world heritage site & historic railway station. It has great artwork of Victorian-Gothic style of architecture. You can also visit Mani Bhawan, Haji Ali & Jain temple. You can alsi visit Dharavi, an area where famous movie shoot happens including Oscar-winning “Slumdog Millionaire”.
                </p>
              </div>

            </div>

          </div>

          {/* ================= Day 10 ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] font-semibold text-red-500">
              Day 10: Farewell And Departure
            </h3>

            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/destination/golden-triangle/itinerary/farewal.jpg"
                  alt="Departure"
                  fill
                  className="object-cover"
                />
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