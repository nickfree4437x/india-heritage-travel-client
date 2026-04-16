"use client";

import Image from "next/image";

export default function ItinerarySection() {
  return (
    <section className="space-y-10">

      <h2 className="text-4xl font-semibold text-center">
        Detailed Itinerary
      </h2>

      {/* DAY 1-3 DELHI */}
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">

        <h3 className="text-red-600 font-bold text-xl">
          Day 1-3: Delhi
        </h3>

        <p className="text-gray-700">
          When you reach at the Delhi Airport, we’ll welcome you and take you
          to your hotel for a comfortable stay.
        </p>

        <p className="text-gray-700">
          Explore landmarks like India Gate, Parliament House, Qutub Minar,
          Jama Masjid, Red Fort and more.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
              src="/destination/heritage-tour/itinerary/delhi.jpg"
              alt="Delhi"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-700">
            Experience Old Delhi through rickshaw rides and explore markets
            like Chandni Chowk.
          </p>
        </div>

      </div>

      {/* DAY 3-5 MANDAWA */}
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">

        <h3 className="text-red-600 font-bold text-xl">
          Day 3-5: Mandawa
        </h3>

        <div className="grid md:grid-cols-2 gap-6 items-center">

          <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
              src="/destination/heritage-tour/itinerary/mandawa.jpg"
              alt="Mandawa"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-gray-700">
              An authentic Rajasthan town with open art galleries and beautiful
              murals.
            </p>

            <p className="text-gray-700 mt-2">
              Don’t miss the Heritage Walk with Silk Route-era havelis.
            </p>

            <p className="mt-4 font-semibold">
              Next stop: Bikaner
            </p>
          </div>

        </div>

      </div>

      {/* DAY 5-6 BIKANER */}
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">

        <h3 className="text-red-600 font-bold text-xl">
          Day 5-6: Bikaner
        </h3>

        <p className="text-gray-700">
          Known as Camel Country, Bikaner offers forts, havelis, and desert culture.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center">

          <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
              src="/destination/heritage-tour/itinerary/bikaner.jpg"
              alt="Bikaner"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-gray-700">
              Visit Junagarh Fort and Karni Mata Temple (Rat Temple).
            </p>

            <p className="mt-4 font-semibold">
              Next stop: Jaisalmer
            </p>
          </div>

        </div>

        {/* DAY 6-8 JAISALMER */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">

        <h3 className="text-red-600 font-bold text-xl">
            Day 6-8: Jaisalmer
        </h3>

        <p className="text-gray-700">
            Known as the Golden City of Rajasthan, Jaisalmer is famous for its golden sand dunes and majestic forts made of honey sandstone.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center">

            <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
                src="/destination/heritage-tour/itinerary/jaisalmer.jpg"
                alt="Jaisalmer"
                fill
                className="object-cover"
            />
            </div>

            <div className="space-y-3 text-gray-700">
            <p>Visit Gadisar Lake & Patwon Ki Haveli.</p>
            <p>Enjoy camel ride in Thar Desert at sunset.</p>
            <p>Experience bonfire, folk dance & music at desert camp.</p>

            <p className="font-semibold mt-4">
                Next stop: Jodhpur
            </p>
            </div>

        </div>

        </div>

        {/* DAY 8-9 JODHPUR */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">

        <h3 className="text-red-600 font-bold text-xl">
            Day 8-9: Jodhpur
        </h3>

        <p className="text-gray-700">
            Known as The Blue City, Jodhpur is famous for Mehrangarh Fort and its vibrant blue houses.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center">

            <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
                src="/destination/heritage-tour/itinerary/jodhpur.jpg"
                alt="Jodhpur"
                fill
                className="object-cover"
            />
            </div>

            <div className="space-y-3 text-gray-700">
            <p>Explore heritage blue streets and Clock Tower market.</p>
            <p>Visit Umaid Bhawan Palace & Jaswant Thada.</p>

            <p className="font-semibold mt-4">
                Next stop: Udaipur
            </p>
            </div>

        </div>

        </div>
        
        {/* DAY 9-11 UDAIPUR */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">

        <h3 className="text-red-600 font-bold text-xl">
            Day 9-11: Udaipur
        </h3>

        <p className="text-gray-700">
            Known as the City of Lakes, Udaipur offers romantic landscapes and royal palaces.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center">

            <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
                src="/destination/heritage-tour/itinerary/udaipur.jpg"
                alt="Udaipur"
                fill
                className="object-cover"
            />
            </div>

            <div className="space-y-3 text-gray-700">
            <p>Boat ride on Lake Pichola & visit Jag Mandir.</p>
            <p>Explore City Palace, Saheliyon ki Bari & Jagdish Temple.</p>

            <p className="font-semibold mt-4">
                Next stop: Pushkar
            </p>
            </div>

        </div>
       </div>
       {/* DAY 11-12 PUSHKAR */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">

        <h3 className="text-red-600 font-bold text-xl">
            Day 11-12: Pushkar
        </h3>

        <p className="text-gray-700">
            Pushkar is one of India’s most sacred towns, famous for its spiritual vibes and camel fair.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center">

            <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
                src="/destination/heritage-tour/itinerary/pushkar.jpg"
                alt="Pushkar"
                fill
                className="object-cover"
            />
            </div>

            <div className="space-y-3 text-gray-700">
            <p>Visit Brahma Temple & Pushkar Lake.</p>
            <p>Enjoy scenic ghats and spiritual atmosphere.</p>

            <p className="font-semibold mt-4">
                Next stop: Jaipur
            </p>
            </div>

            </div>

            </div>

          {/* DAY 12-14 JAIPUR */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <h3 className="text-red-600 font-bold text-xl">
            Day 12-14: Jaipur
        </h3>

        <p className="text-gray-700">
            Jaipur, the Pink City, is famous for Hawa Mahal, Jal Mahal, Amber Fort and vibrant markets.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
                src="/destination/heritage-tour/itinerary/jaipur.jpg"
                alt="Jaipur"
                fill
                className="object-cover"
            />
            </div>

            <div className="space-y-3 text-gray-700">
            <p>Visit Jantar Mantar & Amber Fort.</p>
            <p>Explore Birla Temple & local bazaars.</p>

            <p className="font-semibold mt-4">
                Next stop: Agra
            </p>
            </div>
        </div>
        </div>

       {/* DAY 14-15 AGRA */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <h3 className="text-red-600 font-bold text-xl">
            Day 14-15: Agra
        </h3>

        <p className="text-gray-700">
            Agra is home to the Taj Mahal — one of the most beautiful monuments in the world.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
                src="/destination/heritage-tour/itinerary/agra.jpg"
                alt="Agra"
                fill
                className="object-cover"
            />
            </div>

            <div className="space-y-3 text-gray-700">
            <p>Visit Taj Mahal at sunrise & Agra Fort.</p>
            <p>Enjoy Yamuna river views.</p>

            <p className="font-semibold mt-4">
                Next stop: Delhi
            </p>
            </div>
        </div>
        </div>

        {/* DAY 15 DELHI */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <h3 className="text-red-600 font-bold text-xl">
            Day 15: Delhi
        </h3>

        <p className="text-gray-700">
            Relax at your hotel or explore Delhi markets like Chandni Chowk and Spice Market.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
                src="/destination/heritage-tour/itinerary/delhi2.jpg"
                alt="Delhi"
                fill
                className="object-cover"
            />
            </div>

            <div className="space-y-3 text-gray-700">
            <p>Visit Jama Masjid, Gurudwara Bangla Sahib.</p>
            <p>Shopping & cultural exploration.</p>
            </div>
        </div>
        </div>

        {/* DAY 16 FAREWELL */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <h3 className="text-red-600 font-bold text-xl">
            Day 16: Farewell & Departure
        </h3>

        <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
                src="/destination/heritage-tour/itinerary/farewell.jpg"
                alt="Farewell"
                fill
                className="object-cover"
            />
            </div>

            <div className="text-gray-700">
            <p>
                Your journey ends with beautiful memories. Our driver will drop you at the airport.
            </p>
            </div>
        </div>
        </div>
        <div className="text-center py-12">
            <button className="bg-[#9b7a50] text-white px-8 py-4 rounded-lg text-lg font-medium hover:scale-105 transition">
                Book This Tour Or Modify This Itinerary
            </button>
        </div>
      </div>

    </section>
  );
}