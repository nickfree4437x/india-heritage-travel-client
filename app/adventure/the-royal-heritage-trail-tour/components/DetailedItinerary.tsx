"use client";

import Image from "next/image";

export default function ItinerarySection() {
  return (
    <section className="space-y-10">

      <h2 className="text-3xl md:text-4xl text-center font-semibold mb-6">
        Detailed Itinerary
      </h2>

      {/* DAY 1-3 DELHI */}
      <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

        <h3 className="text-lg font-semibold text-red-500">
          Day 1-3: Delhi
        </h3>

        <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
          Whenever you reach at the Delhi Airport, we’ll welcome you with a sign board and take you to your well-prepared hotel for a comfortable stay.
        </p>

        <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
          If you prefer to wake up early, you can explore more into Delhi’s rich history, politics, and spirituality. Explore everything from iconic landmarks such as India Gate, the President’s House, and Parliament House to the city’s major role in the Freedom Struggle
        </p>
        <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
          Dive yourself in history at Gandhi Smriti and the unique Qutub Minar. Experience the charm of Old Delhi through a rickshaw ride, uncovering treasures such as Jama Masjid, Red Fort, and Raj Ghat. Don’t forget to explore Gurudwara Bangla Sahib and the serene Nizamuddin Sufi Saint Mosque. Enrich your senses at Akshardham Temple, Humayun’s Tomb and Lotus Temple, and, and don’t miss the lively Chandni Chowk market for the perfect shopping.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
            <Image
              src="/adventure/heritage/itinerary/i1.jpg"
              alt="Delhi"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
            <p>  
              We’ll manage your journey based on your schedule and preferences, inviting you to discover Delhi’s perfect mixture of history and modern vibrancy.
            </p>
            <p className="mt-4">
              Some places will be explored as per your convenience and based on your personal preferences and schedule.
            </p>
          </div>
        </div>
        <div className="pt-2">
          <p className="font-semibold">Next stop: Mandawa</p>
          <p className="text-sm text-gray-500">A mere 5.5-hour drive (260 km) from Delhi.</p>
        </div>

      </div>

      {/* Day 3-4: Mandawa */}
      <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

        <h3 className="text-lg font-semibold text-red-500">
          Day 3-4: Mandawa
        </h3>

        <div className="grid md:grid-cols-2 gap-6 items-start">

          <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
            <Image
              src="/adventure/heritage/itinerary/i2.jpg"
              alt="Mandawa"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
            <p>
            An authentic Rajasthan town that immerses you in its traditional & rural life. It’s an open-art gallery where each step uncovers unique architecture and vibrant mural paintings which are architecturally & artistically beautiful.
            </p>

            <p className="mt-4">
              Don’t miss the Heritage Walk, where you’ll see the Silk Route-era mansions known as Havelis.
            </p>
          </div>
        </div>
        <div className="pt-2">
          <p className="font-semibold">Next stop: Jaipur</p>
          <p className="text-sm text-gray-500">Just 3 hours’ drive (175 km) from Mandawa</p>
        </div>

      </div>

      {/* Day 4-6: Jaipur */}

      <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">
        <h3 className="text-lg font-semibold text-red-500">
          Day 4-6: Jaipur
        </h3>

      <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed text-justify">
        <p>
          Jaipur, also known as the Pink city, is a major sightseeing destination in Rajasthan. Hawa mahal & Jal mahal are most famous iconic places to visit. 
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
            <Image
              src="/adventure/heritage/itinerary/i3.jpg"
              alt="Bikaner"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed text-justify">
            <p>
              You can explore the 7th-century Jantar Mantar which is an astronomical observatory. Discover the majestic Amber fort & enrich your eyes with its beauty.
            </p>

            <p className="mt-4">
              You can also visit the exquisite Birla Temple. Take a walk through the vibrant markets of Johri/Bapu Bazar and Choti Chopper, for the best shopping when you’re in India.
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Next stop: Agra</p>
          <p className="text-sm text-gray-500">A 4.5-hour journey (covering 240 km) from Jaipur to Agra.</p>
        </div>
      </div>

        {/* Day 6-7: Agra */}
        <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

        <h3 className="text-lg font-semibold text-red-500">
            Day 6-7: Agra
        </h3>

        <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
            Agra the beautiful city on the banks of Yamuna & is a city to the most romantic story ever existed. You can take in the stunning sunset view of the Taj Mahal from the banks of the Yamuna River. If time allows, you can also explore the magnificent Red Fort on the same day.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-start">

            <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
            <Image
                src="/adventure/heritage/itinerary/i4.jpg"
                alt="Jaisalmer"
                fill
                className="object-cover"
            />
            </div>

            <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed text-justify">
            <p>       
             Apart from this, consider an early morning visit the next day to witness the beautiful sunrise at the Taj Mahal which will catch your eyes forever & leaves a lasting impression.
            </p>
            <p className="mt-4">
              Please note that many attractions, including the Taj Mahal, are closed on Fridays.
            </p>
            </div>
        </div>
        <div>
          <p className="font-semibold">Next stop: Delhi</p>
          <p className="text-sm text-gray-500">Embark on a 4-hour journey (covering 230 km) from Agra to the vibrant city of Delhi.</p>
        </div>
       </div>

        {/* Day 7: Delhi */}
        <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">
        <h3 className="text-lg font-semibold text-red-500">
            Day 7: Delhi
        </h3>

        <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
            Reaching delhi you’ve two options, you can either relax ay your hotel for preparation of the departure of the next day. 
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
            <Image
                src="/adventure/heritage/itinerary/i5.jpg"
                alt="Delhi"
                fill
                className="object-cover"
            />
            </div>

            <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed text-justify">
            <p>
               Alternatively, if you’re feeling energetic and wish to explore more, Delhi also offers a variety of markets to visit: Chandni Chowk Market, the bustling Textile Market (Wholesale Market), the Book Market, and the attracting Spice Market. If your interests also lean towards art and architecture, you can consider visiting the Fateh Puri Mosque, Sis Ganj Gurudwara, Jain Temple, and the Shiva Temple, Gurudwara Bangla Sigh Saheb. The choice is yours, made as your pace and preferences.
            </p>
            </div>
        </div>
        </div>

        {/* DAY 8 FAREWELL */}
        <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-">
        <h3 className="text-lg font-semibold text-red-500">
            Day 8: Farewell & Departure
        </h3>

        <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
            <Image
                src="/adventure/heritage/itinerary/i6.jpg"
                alt="Farewell"
                fill
                className="object-cover"
            />
            </div>

            <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed text-justify">
            <p>
                After discovering & exploring & taking back the beautiful memories from India, you’re all set ready for your journey back to your home. Your dedicated driver will ensure you reach the airport promptly on time, in accordance with your flight schedule.
                Safe travels!
            </p>
            </div>
        </div>
        </div>
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