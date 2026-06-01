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

        <div className="space-y-12">

          {/* ================= Day 1-2: Srinagar ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 1-2: Srinagar
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Whenever you reach at the Srinagar Airport, we’ll welcome you with a sign board and take you to your well-prepared hotel for a comfortable stay.
              </p>
              <p className="mt-2">
                Famous as ‘Heaven on Earth’, Srinagar is the summer capital of Jammu & Kashmir. It is situated in banks of Jhelum river. It has amazing houseboats, colorful Shikararas on Dal Lake & exquisite Mughal gardens.
              </p>
              <p className="mt-2">
                Head for a daytrip to Sonamarg, known as “Meadow of Gold,” is an amazing hill station in Jammu & Kashmir. It is located at an altitude of 2,800 meters which gives stunning view of breathtaking alpine scenery, snow-covered mountains & lush green meadows.
              </p>
              <p className="mt-2">
                It serves as the gateway of famous trekking routes leading to Amarnath caves & Thajiwas Glacier. It is heaven for nature lovers & adventure seekers to which the Sind River flows through. In it also lies the great Himalayan Glaciers of Kashmir Valley, namely kolhoi Glacier & Machoi Glacier.
              </p>
              <p className="mt-2">
                SonaMarg was gateway of ancient silk route along with Gilgit connecting Kashmir to China & other Gulf countries. It has no permanent settlements because it is inaccessible during winter due to very heavy snowfall & avalanches.
              </p>
            </div>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              {/* IMAGE */}
              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540301/i1_fdmygi.jpg"
                    alt="Sonamarg Kashmir featuring snow-capped Himalayan mountains and scenic alpine meadows"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  The best time to visit Sonamarg is during summer (June to October).
                </p>
                <p className="mt-6">
                  Next day visit Shankaracharya temple which is a scared Hindu temple on Shankaracharya Hill on the Zabarwan Range in Srinagar which is dedicated to Lord Shiva. Then visit famous Mughal Gardens located by Dal lake-Shalimar Bagh, Nishant Bagh & Chashme Shahi.
                </p>
              </div>

            </div>

            <div className="pt-2">
              <p className="font-semibold text-[14px]">Next stop: Gulmarg</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A mere 1.24-hour drive (51 km).</p>
            </div>

          </div>

          {/* ================= Day 3: Gulmarg ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 3: Gulmarg
            </h3>
            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Located in the Jammu & Kashmir, it is a picturesque hill station famous for its stunning snow-capped mountains, landscapes & lush meadows. It offers a perfect mixture of natural beauty & adventure as it is situated at an altitude of 2,650 meters. Gulmarg is world’s highest golf course & very famous ski resort which attracts thousand of tourists throughout the year.
              </p>
              <p className="mt-2">
                Another famous spot is the Gulmarg Gondola which is the highest cable cars in the world, which provides amazing views of surrounding valleys & Peaks which makes it s best place for nature lover & adventure enthusiast.
              </p>
            </div>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540354/i2_bn8y5y.jpg"
                    alt="Gulmarg Kashmir with snow-covered mountains gondola rides and scenic valleys"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-3 text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p> 
                 Winter sports like Skiing, Tobogganing, Snowboarding, and Heli-skiing take place on the slopes of Mount Apharwat (at a height of 4,267 m (13,999 ft)) reachable by a Gondola lift.
                </p>
                <p>
                  Gulmarg is the “heartland of winter sports in India” and was rated as Asia’s seventh-best ski destination.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Pahalgam</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A mere 3.35-hour drive (142 km).</p>
            </div>
          </div>

          {/* ================= Day 4-5: Pahalgam ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 4-5: Pahalgam
            </h3>
            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Pahalgam, also known as ‘The Valley of Shephards’ is a popular hill station. This town is situated on the banks of Lidder River at an altitude of 7,200 ft. Phalgam is a beautiful valley which is located at the streams flowing from Sheshnag Lake & the Lidder River. The area of Pahalgam is surrounded by thick wooded pine forests, snow-clad-Himalayan Mountains & amazing vistas of meadows.
              </p>
              <p className="mt-2">
                Pahalgam is the starting point of amaranth Yatra which is a Hindu pilgrimage that takes place every year in month of July-August. In this Yatra, devotees try their best way to reach the Mountain cave of Lord Shiva.
              </p>
              <p className="mt-2">
                Visit Aru valley against the snow-capped Himalayas is an enthralling village in Kashmir. Aru lies beside the Aru river, a tributary of Lidder river & famous for the scenic meadows & adventurous activities like Horse riding, hiking & trekking.
              </p>
              <p className="mt-2">
                The best time to visit Pahalgam is March-November & you can experience snowfall between November-February.
              </p>
            </div>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540394/i3_htn50n.jpg"
                    alt="Pahalgam Kashmir featuring Lidder Valley pine forests and Himalayan landscapes"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Visit Aru valley against the snow-capped Himalayas is an enthralling village in Kashmir. Aru lies beside the Aru river, a tributary of Lidder river & famous for the scenic meadows & adventurous activities like Horse riding, hiking & trekking.
                </p>
                <p className="mt-2">
                 The best time to visit Pahalgam is March-November & you can experience snowfall between November-February.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold text-[14px]">Next stop: Srinagar</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A mere 2.30-hour drive (90.1 km).</p>
            </div>

          </div>

          {/* ================= Day 6 Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 6: Srinagar
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">
              <div>
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540443/i4_ipmu3o.jpg"
                    alt="Srinagar houseboat experience on Dal Lake with scenic mountain views in Kashmir"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 After breakfast check out from hotel & head back to Srinagar. Reach there by late afternoon & check in your houseboat & relax. At evening enjoy the views & peace.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Kargil</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A mere 5.42-hour drive (201.6 km).</p>
            </div>

          </div>

          {/* ================= Day 7: Kargil ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 7: Kargil
            </h3>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540484/i5_qm6iyq.webp"
                    alt="Kargil Ladakh mountain landscapes and historic Himalayan valley views"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 It is located near the Line of Control with Pakistan. It is famous for its strategic importance & site of 1999 Kargil war. It is also surrounded by picturesque mountains & valleys. It connects Leh & Srinagar & has a rich cultural heritage & history with adventure & trekking activities.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Leh</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A mere 4.36-hour drive (216.1 km).</p>
            </div>

          </div>

          {/* ================= Day 8-10: Leh ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 8-10: Leh
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p className="mt-2">
               Entering Leh you’ll feel Tibetan-style palace &fort which is dotted with stupas & crumbling mudbrick houses. Head out for local sightseeing to Leh palace whose rooftop provide amazing views of mountain of Stok Kangri & Ladakh mountain range. Late visit Shey Palace & Monastery built by king of Ladakh. Later you can visit Thiksey Monastery which is one of the finest Ladakhi architecture. This is in the top of hill in solitude which is 20 km away from Ladakh. 
              </p>
              <p className="mt-2">
                Next day you can visit the Hall of Fame which is a museum constructed by Indian Army in memory of brave Indian soldiers who laid down their lives defending India in Indo-Pak wars. 
              </p>
            </div>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540751/andre-furtado-44qiS--O0uQ-unsplash_kk6fwu.jpg"
                    alt="Leh Ladakh featuring Buddhist monasteries rugged mountains and high-altitude landscapes"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Later visit Gurudwara Pathar Sahib which is a beautiful sikh temple.Then visit Magnetic Hill, which is a “Cyclops hill” or gravity near leh which creates an amazing optic illusion.
                </p>
                <p className="mt-2">
                 Later visit Sangam which is a confluence of Zanskar & Indus River. More places to visit are Alchi Monastery & shanti stupa.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Nubra Valley</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 4.6 hr-hour drive (160.1 km) from Leh.</p>
            </div>

          </div>

          {/* ================= Day 11-12: Nubra Valley ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 11-12: Nubra Valley
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p className="mt-2">
               Drive to Nubra valley via Khardung-La-Pass which is one of the world’s highest motorable roads. The valley offers serence peace & interaction with tribal community of Ladakh. The sasser pass & famous Kharakoram oass of the silk route which connect to Nubra with Xinjiang(China).
              </p>
              <p className="mt-2">
                Visit Diskit monastery which is the largest & oldest monastery in Nubra valley. It has 11 ft high Maitreya Buddha statue. Next visit Hunder dunes which is silver dunes located at 4,000 meters. Then visit Panamic hot springs which contain high amount of sulphur & believed to possess many medicinal properties.
              </p>
            </div>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div>
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540563/i7_ggxtzc.jpg"
                    alt="Nubra Valley Ladakh with sand dunes mountain scenery and traditional Himalayan culture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Visit Diskit monastery which is the largest & oldest monastery in Nubra valley. It has 11 ft high Maitreya Buddha statue.
                </p>
                <p className="mt-2">
                  Next visit Hunder dunes which is silver dunes located at 4,000 meters. Then visit Panamic hot springs which contain high amount of sulphur & believed to possess many medicinal properties.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Pangong Lake</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 7 hr-hour drive (274 km).</p>
            </div>
          </div>

           {/* ================= Day 13: Pangong Lake  ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 13: Pangong Lake
            </h3>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540617/i8_hcxytq.jpg"
                    alt="Pangong Lake Ladakh with crystal-clear blue waters and dramatic mountain landscapes"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 The cottages & hotels of Pangong lake offers unparalleled views of the surrounding mountain ranges & amazing view of Pangong lake. The water is salty, crystal clear & possess lovely shade of blue which looks best when sun is shining. In the evening you can enjoy the shores of the lake & Yak safari.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Leh</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A 5 hr-hour drive (224 km).</p>
            </div>
          </div>

          {/* ================= Day 14: Leh  ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 14: Leh
            </h3>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540617/i8_hcxytq.jpg"
                    alt="Hemis Monastery near Leh Ladakh showcasing Buddhist heritage and mountain views"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 On the way visit Hemis Monastery which is the largest monastic institution in Ladakh. It is the wealthiest Buddhist monastery in India & famous for rich collection of ancient remnants like the statue of Buddha made of copper & stupas made of gold & silver. The monastery also contains Thangkas, murals & various attractions.
                </p>
              </div>
            </div>
          </div>

          {/* ================= Day 15 ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 15: Departure
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779526015/farewal_quhndt.jpg"
                    alt="Departure from Ladakh after Kashmir and Himalayan adventure tour in India"
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