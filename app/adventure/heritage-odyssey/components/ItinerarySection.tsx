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

          {/* ================= Day 1-3: Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
             Day 1-3: Delhi
            </h3>
            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
             <p>
              When you reach at the Delhi Airport, we’ll welcome you with a sign board and take you to your well-prepared hotel for a comfortable stay.
            </p>
            <p className="mt-4">
              If you prefer to wake up early, you can explore more into Delhi’s rich history, politics, and spirituality. Explore everything from iconic landmarks such as India Gate, the President’s House, and Parliament House to the city’s major role in the Freedom Struggle bta
              Dive yourself in history at Gandhi Smriti and the unique Qutub Minar. Experience the charm of Old Delhi through a rickshaw ride, uncovering treasures such as Jama Masjid, Red Fort, and Raj Ghat. Don’t forget to explore Gurudwara Bangla Sahib and the serene Nizamuddin Sufi Saint Mosque. 
            </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-start">

              {/* IMAGE */}
              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/heritage-odyssey/itinerary/i1.jpg"
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
                <p>
                 We’ll manage your journey based on your schedule and preferences, inviting you to discover Delhi’s perfect mixture of history and modern vibrancy. Some places will be explored as per your convenience and based on your personal preferences and schedule.
                </p>
              </div>

            </div>

            <div className="pt-2">
              <p className="font-semibold">Next stop: Jaipur</p>
              <p className="text-sm text-gray-500">A mere 5.5-hour drive (260 km) from Delhi.</p>
            </div>

          </div>

          {/* ================= Day 3-5: Jaipur ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 3-5: Jaipur
            </h3>
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/heritage-odyssey/itinerary/i2.jpg"
                  alt="Agra"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                 Jaipur, also known as the Pink city, is a major sightseeing destination in Rajasthan. Hawa mahal & Jal mahal are most famous iconic places to visit. You can explore the 7th-century Jantar Mantar which is an astronomical observatory. Discover the majestic Amber fort & enrich your eyes with its beauty. You can also visit the exquisite Birla Temple. Take a walk through the vibrant markets of Johri/Bapu Bazar and Choti Chopper, for the best shopping when you’re in India.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold">Next stop: Agra</p>
              <p className="text-sm text-gray-500">A 4.5-hour journey (covering 240 km) from Jaipur to Agra.</p>
            </div>

          </div>

          {/* ================= Day 5-6: Agra ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 5-6: Agra
            </h3>
            <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
             Agra is the most romantic city ever existed on the banks of Yamuna river. You can take the stunning sunset view of the Taj Mahal from the banks of the Yamuna River & If time allows, you can also explore the great Red Fort on the same day. 
            </p>

            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/heritage-odyssey/itinerary/i3.jpg"
                  alt="Jaipur"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                 Also, a must early morning visit the next day to witness the beautiful sunrise at the Taj Mahal which will catch your eyes forever & leaves a lasting impression.
                </p>
                <p className="mt-4"> 
                 Also, a must early morning visit the next day to witness the beautiful sunrise at the Taj Mahal which will catch your eyes forever & leaves a lasting impression.
                 Please note that many attractions, including the Taj Mahal, are closed on Fridays.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold">Next stop: Ajanta & Ellora</p>
              <p className="text-sm text-gray-500">Ajanta & Ellora</p>
            </div>

          </div>

          {/* ================= Day 6-7: Ajanta & Ellora ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 6-7: Ajanta & Ellora
            </h3>

            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/heritage-odyssey/itinerary/i4.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                 The Ajanta & Ellora Caves are UNESCO World Heritage Site world famous for ancient rock-cut temples & amazing cave paintings, which shows exceptional artistic & architectural achievements & breath-taking frescoes which date back to 2nd century BC.
                </p>
                <p className="mt-4">
                 Visit Bibi-Ka- Maqbara, the “Taj of the Deccan”, and have Mughal-inspired cuisine like Pulao and Biryani.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Mumbai</p>
              <p className="text-sm text-gray-500">Just a 1-hour flight from Aurangabad.</p>
            </div>

          </div>

          {/* ================= Day 7-9: Mumbai ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 7-9: Mumbai
            </h3>
            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
              <p>
                Dive in Mumbai’s busy life. Visit Gateway of India, which is the most famous tourist attraction. Next you can head to Taj Mahal Palace Hotel followed by Victoria Terminus station. 
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/heritage-odyssey/itinerary/i5.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                  It is a world heritage site & historic railway station. It has great artwork of Victorian-Gothic style of architecture.
                </p>
                <p className="mt-4">
                 You can also visit Mani Bhawan, Haji Ali & Jain temple. You can alsi visit Dharavi, an area where famous movie shoot happens including Oscar-winning “Slumdog Millionaire”.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Coachin</p>
              <p className="text-sm text-gray-500">A 2-hour flight.</p>
            </div>
          </div>

          {/* ================= Day 9-10: Cochin ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 9-10: Cochin
            </h3>
            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
             <p>
              When you arrive at Cochin Airport, our team will ensure your warm welcome with a sign board, ensuring your smooth journey.
              For those who are arriving early, they have 2 options to explore coachin.
             </p>
            </div>

            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/heritage-odyssey/itinerary/i6.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                  Head to local sightseeing tour of Kochi. You can begin by Sain Francis Church, an amazing monuments of Kochi. Then you can visit Old Paradise Synagogue which is the oldest active synagogue in the Commonwealth of Nations. Then you can visit Mattancherry Palace, which is a Portuguese palace popularly known as Dutch palace. Overnight stay will be at hotel in Kochi.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Alleppey</p>
              <p className="text-sm text-gray-500">A 1-hour and 20-minute drive, covering 55 kilometres.)</p>
            </div>
          </div>

          {/* ================= Day 10-11: Alleppey ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
             Day 10-11: Alleppey
            </h3>
            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
             <p>
              Reach Alleppey by noon & check-in a well-booked beautiful houseboat. Enjoy boat cruise through mesmerising Vembanad Lake enjoying experience of backwater cruising.
             </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/heritage-odyssey/itinerary/i7.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                 As you travel narrow strips of land you can witness amazing life of livelihoods of fishing communities, women immersed in their daily lives & children swimming.
                </p>
                <p className="mt-4">
                 You’ll witness amazing spots along the way, feel free to explore them.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Thekkady</p>
              <p className="text-sm text-gray-500">A scenic 3-hour and 30-minute drive, of 140 kilometres, to Thekkady</p>
            </div>

          </div>
  
          {/* ================= Day 11-12: Thekkady ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
             Day 11-12: Thekkady
            </h3>
            </div>
            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
             <p>
              Early morning you can go on a guided jungle hike & bamboo rafting at Periyar National Park. This will take around 6 hours & visiting there means exploring nature around & enjoying peaceful nature. There are many chances you get to witness the elephant herd in the jungle while hiking. After that you can enjoy Bamboo rafting on the Periyar Lake, where also you’ll have the chance to see wildlife and explore one of India’s exceptional animal sanctuaries.
             </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/heritage-odyssey/itinerary/i8.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                  You can also see fragrant spice market which has cinnamon, pepper & cardamom.
                </p>
                <p className="mt-4">
                  Venture into the fragrant spice plantations, where cardamom, cinnamon, pepper, and coffee thrive.
                  At evening you can see kathakali Dance which is very famous for of Indian classical dance.  
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Munnar</p>
              <p className="text-sm text-gray-500">A 3-hour drive, covering 90 kilometres to Munnar.</p>
            </div>

          </div>

          {/* ================= Day 12-14: Munnar ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 12-14: Munnar
            </h3>
            </div>
            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
             <p>
              Entering Munnar on the way you can witness world’s largest tea-growing region. After reaching you can go to see Kalaripayattu show which is an ancient martial art that originated in Kerala.
              Next day morning you can go to guided trek tour which will be 3-hour trekking tour covering 9km of walking which include grassland, tea plantations & rocks. 
             </p>
            </div>

            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/heritage-odyssey/itinerary/i9.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p> 
                 Next you can visit Munnar Tea Museum which preserve the aspects of the origin of tea plantation. Next you can also visit Pothamedu Viewpoint,a amazing spot which offers panoramic view of valley.
                </p>
                <p>
                  You can also visit Muthirapuzha River & Idukki Dam, the view from there is impressive which offers hill slopes view.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Mumbai</p>
              <p className="text-sm text-gray-500">A 2-hour flight to Mumbai.</p>
            </div>
          </div>   

          {/* ================= Day 15: Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 18: Mumbai
            </h3>
            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
             <p>
              Reaching delhi you’ve two options, you can either relax ay your hotel for preparation of the departure of the next day. 
             </p>
            </div>

            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/heritage-odyssey/itinerary/i10.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                  Alternatively, if you’re feeling energetic and wish to explore more, Delhi also offers a 
                  variety of markets to visit: Chandni Chowk Market, the bustling Textile Market 
                  (Wholesale Market), the Book Market, and the attracting Spice Market. If your interests 
                  also lean towards art and architecture, you can consider visiting the Fateh Puri Mosque, 
                  Sis Ganj Gurudwara, Jain Temple, and the Shiva Temple, Gurudwara Bangla Sigh Saheb. The 
                  choice is yours, made as your pace and preferences.  
                </p>
              </div>
            </div>
          </div>       

          {/* ================= Day 16: Farewell and Departure ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 16: Farewell and Departure
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
        </section>
  );
}