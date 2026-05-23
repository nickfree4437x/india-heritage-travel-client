"use client";

import Image from "next/image";

export default function Itinerary() {
  return (
    <section className="py-2">

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

          {/* ================= Day 1: Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px]  font-semibold text-red-500">
              Day 1: Delhi
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Whenever you reach at the Delhi Airport, we’ll welcome you with a sign board and take you to your well-prepared hotel for a comfortable stay.
              </p>
              <p className="mt-4">
                If you prefer to wake up early, you can explore more into Delhi’s rich history, politics, and spirituality. Explore everything from iconic landmarks such as India Gate, the President’s House, and Parliament House to the city’s major role in the Freedom Struggle.
              </p>
              <p className="mt-4">
                You can also dive yourself in history at Gandhi Smriti and the unique Qutub Minar. Experience the charm of Old Delhi through a rickshaw ride, uncovering treasures such as Jama Masjid, Red Fort, and Raj Ghat. Don’t forget to explore Gurudwara Bangla Sahib and the serene Nizamuddin Sufi Saint Mosque. Enrich your senses at Akshardham Temple, Humayun’s Tomb and Lotus Temple, and, and don’t miss the lively Chandni Chowk market for the perfect shopping.
              </p>
            </div>

            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

              {/* IMAGE */}
              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779543248/i1_fqiq7w.jpg"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  We’ll manage your journey based on your schedule and preferences, inviting you to discover Delhi’s perfect mixture of history and modern vibrancy.
                </p>
                <p className="mt-6">
                  Some places will be explored as per your convenience and based on your personal preferences and schedule.
                </p>
              </div>

            </div>

            <div className="pt-2">
              <p className="font-semibold text-[14px]">Next stop: Chandigarh</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 4-hour drive (243 km) from Delhi.</p>
            </div>

          </div>

          {/* ================= Day 2: Chandigarh ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px]  font-semibold text-red-500">
              Day 2: Chandigarh
            </h3>
            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p className="mt-4">
                Often called as Gateway to the Himalayas, Chandigarh is an amazing place to take a break while venturing inti Himalayas.
              </p>
            </div>

            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779543291/i2_njqysa.jpg"
                    alt="Agra"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-3 text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p> 
                 Visit famous Rock Garden which is a beautiful & huge sculpture garden which was founded by Nek chand. It was built of home waste & industrial waste & thrown-away items.
                </p>
                <p>
                  Later at evening you can visit beautiful Sukhna lake which lies on the foothills of Shivalik range. There you can enjoy beauty of nature & cool breeze.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Manali</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 6-8-hour drive (268 km) from Chandigarh..</p>
            </div>
          </div>

          {/* ================= Day 3-4: Manali ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px]  font-semibold text-red-500">
              Day 3-4: Manali
            </h3>
            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Located between the snow-capped mountains of Pir Pranjal & Dhauladhar ranges, Manali is most popular hill station in India. It has lush green forests, jaw-dropping views, rivers, constant fragrance of pines & freshness- Manali is blessed with amazing scenic beauty.
              </p>
              <p className="mt-4">
                You’ll be driving on the road running besides the beautiful Beas River. Visit Hadimba Temple which was built in 1553 with four-tiered pagoda roof & is famous for amazingly carved doorway & the jungle park.
              </p>
            </div>

            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779543748/i3_orbla1.jpg"
                    alt="Jaipur"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p> 
                 Visit Old manali after that, it is as if you’ve stepped into another world, it looks like a retro world.
                </p>
                <p className="mt-4">
                 Later visit Mall Road which is the heart of the town. It has amazing hotels; restaurants & commercial center also have numerous shops & emporiums. You can have amazing shopping experience there.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold text-[14px]">Next stop: Jispa</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 3 hr-hour drive (92.4 km) from Manali.</p>
            </div>

          </div>

          {/* ================= Day 5: Jispa ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px]  font-semibold text-red-500">
              Day 5: Jispa
            </h3>
            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Visit Jispa via Atal Tunnel which is 9.02 km & the longest tunnel above 10,000ft in the world. On the way visit Solang valley which is famous for adventure activities & a popular ski resort.
              </p>
            </div>

            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779543814/i4_orlllr.jpg"
                    alt="Delhi"
                    fill
                  className="object-cover"
                />
              </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                   There will a change of landscapes after you cross Atul tunnel & enter Chandra River Valley. The greenery disappears & mountains become arid & brown.
                </p>
                <p className="mt-4">
                 The highway crosses many small streams of ice-cold water from snow-capped mountains. In Jispa you’ll feel relaxed in the camps gazing at the billions of stars.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Leh</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 8 hr-hour drive (334.4 km) from Jispa.</p>
            </div>

          </div>

          {/* ================= Day 6-8 Leh ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px]  font-semibold text-red-500">
             Day 6-8 Leh
            </h3>
            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Entering Leh you’ll feel Tibetan-style palace &fort which is dotted with stupas & crumbling mudbrick houses. Head out for local sightseeing to Leh palace whose rooftop provide amazing views of mountain of Stok Kangri & Ladakh mountain range.
              </p>
              <p className="mt-4">
               Late visit Shey Palace & Monastery built by king of Ladakh. Later you can visit Thiksey Monastery which is one of the finest Ladakhi architecture. This is located in the top of hill in solitude which is 20 km away from Ladakh.
              </p>
              <p className="mt-4">
               Next day you can visit the Hall of Fame which is a museum constructed by Indian Army in memory of brave Indian soldiers who laid down their lives defending India in Indo-Pak wars.
              </p>
            </div>
            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779543852/i5_ifxm0l.jpg"
                    alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Later visit Gurudwara Pathar Sahib which is a beautiful sikh temple.Then visit Magnetic Hill, which is a “Cyclops hill” or gravity near leh which creates an amazing optic illusion.
                </p>
                <p className="mt-4">
                 Later visit Sangam which is a confluence of Zanskar & Indus river. More places to visit are Alchi Monastery & shanti stupa.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Nubra Valley</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 4.6 hr-hour drive (160.1 km) from Leh.</p>
            </div>

          </div>

          {/* ================= Day 9-10: Nubra Valley ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px]  font-semibold text-red-500">
              Day 9-10: Nubra Valley
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p className="mt-4">
               Drive to Nubra valley via Khardung-La-Pass which is one of the world’s highest motorable roads. The valley offers serence peace & interaction with tribal community of Ladakh. The sasser pass & famous Kharakoram oass of the silk route which connect to Nubra with Xinjiang(China).
              </p>
            </div>
            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779543900/i6_h68yfe.jpg"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Diskit monastery which is the largest & oldest monastery in Nubra valley. It has 11 ft high Maitreya Buddha statue. Next visit Hunder dunes which is silver dunes located at 4,000 meters.
                </p>
                <p className="mt-4">
                 Then visit Panamic hot springs which contain high amount of sulphur & believed to possess many medicinal properties.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Pangong Lake</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 7 hr-hour drive (274 km).</p>
            </div>
          </div>

          {/* ================= Day 11: Pangong Lake ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px]  font-semibold text-red-500">
              Day 11: Pangong Lake
            </h3>
            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779543942/i7_rzwtl3.jpg"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 The cottages & hotels of Pangong lake offers unparalleled views of the surrounding mountain ranges & amazing view of Pangong lake.
                </p>
                <p className="mt-4">
                  The water is salty, crystal clear & possess lovely shade of blue which looks best when sun is shining. In the evening you can enjoy the shores of the lake & Yak safari.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Leh</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 5 hr-hour drive (224 km).</p>
            </div>
          </div>

           {/* ================= Day 12-13 Leh  ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px]  font-semibold text-red-500">
              Day 12-13 Leh
            </h3>
            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-[90%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779543985/i8_tq1kcw.jpg"
                    alt="leh"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 On the way visit Hemis Monastery which is the largest monastic institution in Ladakh.
                </p>
                <p className="mt-4">
                  It is the wealthiest Buddhist monastery in India & famous for rich collection of ancient remnants like the statue of Buddha made of copper & stupas made of gold & silver. The monastery also contains Thangkas, murals & various attractions.
                </p>
              </div>
            </div>
          </div>

          {/* ================= Day 14: Departure ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px]  font-semibold text-red-500">
              Day 14: Departure
            </h3>

            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

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