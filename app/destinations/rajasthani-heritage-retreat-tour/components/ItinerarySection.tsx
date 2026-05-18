"use client";

import Image from "next/image";

export default function ItinerarySection() {
  return (
    <section className="space-y-8">

      <h2 className="text-[16px] sm:text-[20px] md:text-[24px]
            font-semibold
            text-center
            -mb-4
            text-[#2c2c2c]
            tracking-wide">
        Detailed Itinerary
      </h2>

      {/* DAY 1-3 DELHI */}
      <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

        <h3 className="text-lg font-semibold text-red-500">
          Day 1-3: Delhi
        </h3>

        <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
        <p className="mt-2">
         When you reach at the Delhi Airport, we’ll welcome you with a sign board and take you to your well-prepared hotel for a comfortable stay.
         <br></br>
         If you prefer to wake up early, you can explore more into Delhi’s rich history, politics, and spirituality.
        </p>

        <p className="mt-2">
          Explore everything from iconic landmarks such as India Gate, the President’s House, and Parliament House to the city’s major role in the Freedom Struggle
        </p>
        <p className="mt-2">
          Dive yourself in history at Gandhi Smriti and the unique Qutub Minar. Experience the charm of Old Delhi through a rickshaw ride, uncovering treasures such as Jama Masjid, Red Fort, and Raj Ghat. Don’t forget to explore Gurudwara Bangla Sahib and the serene Nizamuddin Sufi Saint Mosque.
        </p>
        <p className="mt-2">
          Enrich your senses at Akshardham Temple, Humayun’s Tomb and Lotus Temple, and, and don’t miss the lively Chandni Chowk market for the perfect shopping.
        </p>
        </div>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <div className="relative h-[220px] md:h-[240px] w-[92%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
            <Image
              src="/destination/heritage-tour/itinerary/delhi.jpg"
              alt="Delhi"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="text-gray-700 text-[12px] font-[300] md:text-[13px] leading-relaxed text-justify">

          <p>
            We’ll manage your journey based on your schedule and preferences,
            inviting you to discover Delhi’s perfect mixture of history and
            modern vibrancy.
          </p>

          <p className="mt-2">
            Some places will be explored as per your convenience and based on
            your personal preferences and schedule.
          </p>

        </div>

      </div>
        <div className="pt-2">
          <p className="font-semibold text-[14px]">Next stop: Mandawa</p>
          <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A mere 5.5-hour drive (260 km) from Delhi.</p>
        </div>

      </div>

      {/* DAY 3-5 MANDAWA */}
      <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

        <h3 className="text-lg font-semibold text-red-500">
          Day 3-5: Mandawa
        </h3>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

          {/* IMAGE */}
          <div className="w-full flex justify-center">
            <div className="relative h-[220px] md:h-[240px] w-[92%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
              <Image
                src="/destination/heritage-tour/itinerary/mandawa.jpg"
                alt="Mandawa"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="text-gray-700 text-[12px] font-[300] md:text-[13px] leading-relaxed text-justify">

            <p>
              An authentic Rajasthan town that immerses you in its traditional &
              rural life. It’s an open-art gallery where each step uncovers unique
              architecture and vibrant mural paintings which are architecturally &
              artistically beautiful.
            </p>

            <p className="mt-2 md:mt-5">
              Don’t miss the Heritage Walk, where you’ll see the Silk Route-era
              mansions known as Havelis.
            </p>

          </div>

        </div>
        <div className="pt-2">
          <p className="font-semibold text-[14px]">Next stop: Bikaner</p>
          <p className="text-[12px] font-[300] sm:text-[13px] text-gray-700">Just 3.5 hours’ drive (200 km) from Mandawa.</p>
        </div>

      </div>

      {/* DAY 5-6 BIKANER */}

      <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">
        <h3 className="text-lg font-semibold text-red-500">
          Day 5-6: Bikaner
        </h3>

      <div className="space-y-3 text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
        <p>
          Bikaner, also known as Camel Country, was once an important stop on ancient caravan routes, and its Old Town is still surrounded by massive walls. Bikaner’s Fort is unique in Rajasthan & experienced the influence of Rajput, Mughal, and British eras.
        </p>
        <p>
          Visit Junagarh Fort that holds the distinction of having never been captured. Visit the famous Rampuria Haveli built of red sandstone. After it visit National Research Center on Camel which is 8km from the city & is only one of its kind in Asia.
        </p>
      </div>

      <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <div className="relative h-[220px] md:h-[240px] w-[92%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
            <Image
              src="/destination/heritage-tour/itinerary/bikaner.jpg"
              alt="Bikaner"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="space-y-3 text-gray-700 font-[300] text-[12px] md:text-[13px] leading-relaxed text-justify">

          <p>
            The Karni Mata Mandir is the main attraction and is also popularly known
            as the Rat Temple. This temple is among the most visited tourist
            attractions in Bikaner.
          </p>

          <p className="mt-2 md:mt-5">
            The temple is dedicated to Karni Mata, who is believed to be an
            incarnation of Goddess Durga, the protective Mother Goddess in Hindu
            religion. Don’t miss roaming around through the old heritage buildings
            in Kote Gate Market.
          </p>

        </div>

      </div>
        <div>
          <p className="font-semibold text-[14px]">Next stop: Jaisalmer</p>
          <p className="text-[12px] font-[300] sm:text-[13px] text-gray-700">It’s a 5-hour drive (covering 220 km) from Bikaner to the golden city of Jaisalmer.</p>
        </div>
      </div>

        {/* DAY 6-8 JAISALMER */}
        <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

        <h3 className="text-lg font-semibold text-red-500">
            Day 6-8: Jaisalmer
        </h3>

        <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
            Jaisalmer, Known as Golden city or Rajasthan due to its golden sand dunes & forts which are made of golden honey sandstone. Jaisalmer Fort is a must-see tourist destination which offers glimpse into vibrant local life within its ancient walls.
        </p>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <div className="relative h-[220px] md:h-[240px] w-[92%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
            <Image
              src="/destination/heritage-tour/itinerary/jaisalmer-itinerary.jpg"
              alt="Jaisalmer"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="space-y-3 text-gray-700 font-[300] text-[12px] md:text-[13px] leading-relaxed text-justify">

          <p>
            Visit the Gadisar Lake, and explore the Patwo ki Haveli & Bara Bagh
            Cenotaphs. As the sun sets, explore the Thar Desert for a magical camel
            ride in the sand dunes.
          </p>

          <p className="mt-2 md:mt-5">
            Experience the starry night sky while enjoying a bonfire in the desert,
            traditional Marwari music, and folk dance performances at an outdoor
            camp. It’s a night you won’t forget.
          </p>

        </div>

      </div>
        <div>
          <p className="font-semibold text-[14px]">Next stop: Jodhpur</p>
          <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Embark on a 4.5-hour journey (covering 285 km) from Jaisalmer to the captivating city of Jodhpur.</p>
        </div>
        </div>

        {/* DAY 8-9 JODHPUR */}
        <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

        <h3 className="text-lg font-semibold text-red-500">
            Day 8-9: Jodhpur
        </h3>

        <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
            Known as The Blue City & The Sun City of Rajasthan, Jodhpur is famous of its magnificent Mehrangarh Fort, vivid blue houses & delicious sweets. Settled gracefully atop a hill, Jodhpur’s Fort is a massive and magnificent sight.
        </p>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

          {/* IMAGE */}
          <div className="w-full flex justify-center">
            <div className="relative h-[220px] md:h-[240px] w-[92%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
              <Image
                src="/destination/heritage-tour/itinerary/jodhpur.jpg"
                alt="Jodhpur"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-3 text-gray-700 font-[300] text-[12px] md:text-[13px] leading-relaxed text-justify">

            <p>
              Begin your day with a guided walk tour through the heritage blue streets
              of the city. Wander near the Clock Tower, where you can explore old
              buildings and enjoy the aromatic spices in the local market.
            </p>

            <p className="mt-2 md:mt-5">
              Depending on your schedule and interests, explore the Umaid Bhawan
              Palace, Jaswant Thada, or Mandore Garden, which are also beautiful
              sights to experience.
            </p>

          </div>

        </div>
        <div>
          <p className="font-semibold text-[14px]">Next stop: Udaipur</p>
          <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Set off on a 5-hour journey (covering 250 km) from Jodhpur to the enchanting city of Udaipur.</p>
        </div>
        </div>
        
        {/* DAY 9-11 UDAIPUR */}
        <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

        <h3 className="text-lg font-semibold text-red-500">
            Day 9-11: Udaipur
        </h3>

        <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
            Udaipur is one of the India’s most romantic destination & popularly known as “City of lakes” & “Venice of East”.
        </p>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

            {/* IMAGE */}
            <div className="w-full flex justify-center">
              <div className="relative h-[220px] md:h-[240px] w-[92%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="/destination/heritage-tour/itinerary/udaipur-1.jpg"
                  alt="Udaipur"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="space-y-3 text-gray-700 font-[300] text-[12px] md:text-[13px] leading-relaxed text-justify">

              <p>
                One of the must-visit experiences in Udaipur is the scenic boat ride on
                the famous Lake Pichola, offering beautiful views of the city and Jag
                Mandir, also known as the “Lake Garden Palace,” gracefully settled on
                the island.
              </p>

              <p className="mt-2 md:mt-5">
                Discover the majestic City Palace, serene Saheliyon Ki Bari,
                Shilpgram, and the beautiful Jagdish Temple.
              </p>

            </div>

          </div>
         <div>
          <p className="font-semibold text-[14px]">Next stop: Pushkar</p>
          <p className="text-[12px] font-[300] sm:text-[13px] text-gray-700">Start a 5-hour journey (covering 280 km) from Udaipur to the spiritual haven of Pushkar.</p>
        </div>
       </div>

       {/* DAY 11-12 PUSHKAR */}
        <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

        <h3 className="text-lg font-semibold text-red-500">
            Day 11-12: Pushkar
        </h3>

        <p className="text-gray-700 font-[300] text-[14.5px] leading-relaxed text-justify">
            A beautiful town in India, is the most popular tourist destination worldwide. This place is also considered among the most sacred pilgrim sites.
        </p>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

          {/* IMAGE */}
          <div className="w-full flex justify-center">
            <div className="relative h-[220px] md:h-[240px] w-[92%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
              <Image
                src="/destination/heritage-tour/itinerary/pushkar-1.jpg"
                alt="Pushkar"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-3 font-[300] text-gray-700 text-[12px] md:text-[13px] leading-relaxed text-justify">

            <p>
              The most famous tourist attraction here is the Brahma Temple, which
              attracts thousands of devotees and tourists from around the world.
            </p>

            <p className="mt-2 md:mt-5">
              Explore the serene Pushkar Lake, which consists of 52 ghats, and the
              water around each ghat is believed to possess special medicinal powers.
              You can also trek to the top of a hill to reach the Saraswati Temple and
              enjoy the beautiful view of Pushkar Lake.
            </p>

          </div>

        </div>
          <div>
            <p className="font-semibold text-[14px]">Next stop: Jaipur</p>
            <p className="text-[12px] font-[300] sm:text-[13px] text-gray-700">Set out on a 3-hour journey (covering 150 km) from Pushkar to the vibrant city of Jaipur.</p>
          </div>
          </div>

          {/* DAY 12-14 JAIPUR */}
        <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">
        <h3 className="text-lg font-semibold text-red-500">
            Day 12-14: Jaipur
        </h3>

        <p className="text-gray-700 font-[300] text-[14.5px] leading-relaxed text-justify">
            Jaipur, also known as the Pink city, is a major sightseeing destination in Rajasthan. Hawa mahal & Jal mahal are most famous iconic places to visit. 
        </p>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

          {/* IMAGE */}
          <div className="w-full flex justify-center">
            <div className="relative h-[220px] md:h-[240px] w-[92%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
              <Image
                src="/destination/heritage-tour/itinerary/jaipur-1.jpg"
                alt="Jaipur"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-3 font-[300] text-gray-700 text-[12px] md:text-[13px] leading-relaxed text-justify">

            <p>
              You can explore the 7th-century Jantar Mantar, an astronomical
              observatory. Discover the majestic Amber Fort and enrich your eyes with
              its beauty.
            </p>

            <p className="mt-2 md:mt-5">
              You can also visit the exquisite Birla Temple. Take a walk through the
              vibrant markets of Johri/Bapu Bazar and Choti Chopper for the best
              shopping experiences in India.
            </p>

          </div>

        </div>
        <div>
          <p className="font-semibold text-[14px]">Next stop: Agra</p>
          <p className="text-[12px] font-[300] sm:text-[13px] text-gray-700">Set on a 4.5-hour journey (covering 240 km) from Jaipur to the historic city of Agra.</p>
        </div>
        </div>

       {/* DAY 14-15 AGRA */}
        <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">
        <h3 className="text-lg font-semibold text-red-500">
            Day 14-15: Agra
        </h3>

        <p className="text-gray-700 font-[300] text-[14.5px] leading-relaxed text-justify">
            Agra the beautiful city on the banks of Yamuna & is a city to the most romantic story ever existed. You can take in the stunning sunset view of the Taj Mahal from the banks of the Yamuna River.
        </p>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <div className="relative h-[220px] md:h-[240px] w-[92%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
            <Image
              src="/destination/heritage-tour/itinerary/agra-1.jpg"
              alt="Agra"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="space-y-3 font-[300] text-gray-700 text-[12px] md:text-[13px] leading-relaxed text-justify">

          <p>
            If time allows, you can also explore the magnificent Red Fort on the
            same day. Apart from this, consider an early morning visit the next day
            to witness the beautiful sunrise at the Taj Mahal, which leaves a
            lasting impression forever.
          </p>

          <p className="mt-2 md:mt-5">
            Please note that many attractions, including the Taj Mahal,
            are closed on Fridays.
          </p>

        </div>

      </div>
        <div>
          <p className="font-semibold text-[14px]">Next stop: Delhi</p>
          <p className="text-[12px] font-[300] sm:text-[13px] text-gray-700">Set on a 4-hour journey (covering 230 km) from Agra to the vibrant city of Delhi.</p>
        </div>
        </div>

        {/* DAY 15 DELHI */}
        <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">
        <h3 className="text-lg font-semibold text-red-500">
            Day 15: Delhi
        </h3>

        <p className="text-gray-700 font-[300] text-[14.5px] leading-relaxed text-justify">
            Reaching delhi you’ve two options, you can either relax ay your hotel for preparation of the departure of the next day. 
        </p>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

          {/* IMAGE */}
          <div className="w-full flex justify-center">
            <div className="relative h-[220px] md:h-[240px] w-[92%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
              <Image
                src="/destination/heritage-tour/itinerary/delhi-2.jpg"
                alt="Delhi"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-3 font-[300] text-gray-700 text-[12px] md:text-[13px] leading-relaxed text-justify">

            <p>
              Alternatively, if you’re feeling energetic and wish to explore more,
              Delhi also offers a variety of markets to visit: Chandni Chowk Market,
              the bustling Textile Market (Wholesale Market), the Book Market, and
              the vibrant Spice Market.
            </p>

            <p className="mt-2 md:mt-5">
              If your interests lean towards art and architecture, you can also visit
              Fateh Puri Mosque, Sis Ganj Gurudwara, Jain Temple, Shiva Temple, and
              Gurudwara Bangla Sahib. The choice is yours, based on your pace and
              preferences.
            </p>

          </div>

        </div>
        </div>

        {/* DAY 16 FAREWELL */}
        <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">
        <h3 className="text-lg font-semibold text-red-500">
            Day 16: Farewell & Departure
        </h3>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

          {/* IMAGE */}
          <div className="w-full flex justify-center">
            <div className="relative h-[220px] md:h-[240px] w-[92%] md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
              <Image
                src="/destination/golden-triangle/itinerary/farewal.jpg"
                alt="Farewell"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-3 font-[300] text-gray-700 text-[12px] md:text-[13px] leading-relaxed text-justify">

            <p>
              After discovering, exploring, and taking back beautiful memories from
              India, you’re all set for your journey back home. Your dedicated driver
              will ensure you reach the airport promptly according to your flight
              schedule.
            </p>

            <p className="mt-2 md:mt-5">
              Safe travels!
            </p>

          </div>

        </div>
        </div>
    </section>
  );
}