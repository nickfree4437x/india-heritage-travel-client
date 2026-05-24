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

        <div className="space-y-12">

          {/* ================= Day 1-3: Srinagar ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px]  font-semibold text-red-500">
              Day 1-3: Srinagar
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

            <div className="grid md:grid-cols-[350px_1fr] gap-4 items-start">

              {/* IMAGE */}
              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541514/i1_fz7e9f.jpg"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  It has no permanent settlements because it is inaccessible during winter due to very heavy snowfall & avalanches. The best time to visit Sonamarg is during summer (June to October).
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

            <h3 className="text-[17px]  font-semibold text-red-500">
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
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541558/i2_n53uum.jpg"
                    alt="Gulmarg"
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

            <h3 className="text-[17px]  font-semibold text-red-500">
              Day 4-5: Pahalgam
            </h3>
            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Pahalgam, also known as ‘The Valley of Shephards’ is a popular hill station. This town is situated on the banks of Lidder River at an altitude of 7,200 ft. Phalgam is a beautiful valley which is located at the streams flowing from Sheshnag Lake & the Lidder River. The area of Pahalgam is surrounded by thick wooded pine forests, snow-clad-Himalayan Mountains & amazing vistas of meadows.
              </p>
              <p className="mt-2">
                Pahalgam is the starting point of amaranth Yatra which is a Hindu pilgrimage that takes place every year in month of July-August. In this Yatra, devotees try their best way to reach the Mountain cave of Lord Shiva.
              </p>
            </div>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541596/i3_huxrhq.jpg"
                    alt="Jaipur"
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

          {/* ================= Day 6: Srinagar ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px]  font-semibold text-red-500">
              Day 6: Srinagar
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">
              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image  
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541635/i4_aye22o.jpg"
                    alt="Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                 <p>
                  After breakfast check out from hotel & head back to Srinagar.
                </p>
                <p className="mt-2">
                  Reach there by late afternoon & check in your houseboat & relax. At evening enjoy the views & peace.
                </p>
              </div>
            </div>
          </div>

          {/* ================= Day 15 ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px]  font-semibold text-red-500">
              Day 15: Departure
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541676/i5_s6sjmp.jpg"
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