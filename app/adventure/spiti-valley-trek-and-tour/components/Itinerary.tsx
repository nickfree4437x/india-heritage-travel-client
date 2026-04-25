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

          {/* ================= Day 1: Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 1: Delhi
            </h3>

            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
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

            <div className="grid md:grid-cols-2 gap-6 items-start">

              {/* IMAGE */}
              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/spiti/itinerary/i1.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                  We’ll manage your journey based on your schedule and preferences, inviting you to discover Delhi’s perfect mixture of history and modern vibrancy.
                </p>
                <p className="mt-6">
                  Some places will be explored as per your convenience and based on your personal preferences and schedule.
                </p>
              </div>

            </div>

            <div className="pt-2">
              <p className="font-semibold">Next stop: Chandigarh</p>
              <p className="text-sm text-gray-500">A 4-hour drive (243 km) from Delhi.</p>
            </div>

          </div>

          {/* ================= Day 2: Chandigarh ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 2: Chandigarh
            </h3>
            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
              <p className="mt-4">
                Often called as Gateway to the Himalayas, Chandigarh is an amazing place to take a break while venturing inti Himalayas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/spiti/itinerary/i2.jpg"
                  alt="Agra"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed text-justify">
                <p> 
                 Visit famous Rock Garden which is a beautiful & huge sculpture garden which was founded by Nek chand. It was built of home waste & industrial waste & thrown-away items.
                </p>
                <p>
                  Later at evening you can visit beautiful Sukhna lake which lies on the foothills of Shivalik range. There you can enjoy beauty of nature & cool breeze.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Manali</p>
              <p className="text-sm text-gray-500">A 6-8-hour drive (268 km) from Chandigarh..</p>
            </div>
          </div>

          {/* ================= Day 3-4: Manali ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 3-4: Manali
            </h3>
            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
              <p>
               Located between the snow-capped mountains of Pir Pranjal & Dhauladhar ranges, Manali is most popular hill station in India. It has lush green forests, jaw-dropping views, rivers, constant fragrance of pines & freshness- Manali is blessed with amazing scenic beauty.
              </p>
              <p className="mt-4">
                You’ll be driving on the road running besides the beautiful Beas River. Visit Hadimba Temple which was built in 1553 with four-tiered pagoda roof & is famous for amazingly carved doorway & the jungle park.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/spiti/itinerary/i3.jpg"
                  alt="Jaipur"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p> 
                 Visit Old manali after that, it is as if you’ve stepped into another world, it looks like a retro world.
                </p>
                <p className="mt-4">
                 Later visit Mall Road which is the heart of the town. It has amazing hotels; restaurants & commercial center also have numerous shops & emporiums. You can have amazing shopping experience there.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold">Next stop: Chandratal</p>
              <p className="text-sm text-gray-500">A 3.7-hour drive (111 km) from Manali.</p>
            </div>

          </div>

          {/* ================= Day 5: Chandratal ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 5: Chandratal
            </h3>
            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
              <p>
               Visit ChandraTal via Atal Tunnel. On the way you’ll se some amazing waterfalls, snow peaks, sheeps & horses grazing in green fields. The view changes from green mountains to Rocky Mountains covered with snow which is mesmerizing.
              </p>
              <p className="mt-4">
                You’ll have your lunch at Batal which is a cold-chill place with clear blue sky.  Reaching Chandratal by evening you’ll explore walking by heavenly lake & camps & enjoy night view with an amazing night sky.
              </p>
              <p className="mt-4">
                In the early morning you’ll experience the best sunrise of your life where silica in the dry mountain gives a silver sparkle shine.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/spiti/itinerary/i4.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                  Later you can enjoy hiking to Chandratal lake where you’ll experience changing colors of lake.
                </p>
                <p className="mt-4">
                 On the lakeside you’ll witness hundreds of kinds of wildflowers which is a place said by legends that this is a site where fairies descended from the heaven.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Kaza</p>
              <p className="text-sm text-gray-500">A 3-hour drive (97.7 km) from ChandraTal.</p>
            </div>

          </div>

          {/* ================= Day 6: Kaza ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 6: Kaza
            </h3>
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/spiti/itinerary/i5.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                 Reach Kaza by crossing Kunzumla Pass which is the region’s highest pass(14,928ft) which offers spectacular views.
                </p>
                <p className="mt-4">
                 Kaza is capital of Spiti, it is the most significant settlement you’ll witness in this planet.
                </p>
                <p className="mt-4">
                 Have your dinner & enjoy the night here.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Tabo</p>
              <p className="text-sm text-gray-500">A 1.5-hour drive (47.9 km) from Kaza..</p>
            </div>

          </div>

          {/* ================= Day 7-8: Tabo ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 7-8: Tabo
            </h3>

            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
              <p className="mt-4">
               Tabo is the land of famous Buddhist monasteries- ‘Tabo Monastery’ which is said to be over thousand years old. 
              </p>
              <p className="mt-4">
                Here the land looks barren with no vegetation. It is the largest monastic complex of Spiti which is declared as a protected monument under Archaeological Survey of India. There are many manuscripts, well-preserved statues, extensive murals, priceless collection of Thankas & frescoes. The ancient painting here tells the cycle of Buddha 7 legends from the Jataka Tales & were made in Tibetan style by artists from Kashmir. It is also known as Ajanta of Himalayas
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/spiti/itinerary/i6.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p> 
                 There is also an assembly hall in the caves & painting on the rock face.
                </p>
                <p className="mt-4">
                 Head out to Gue village tour which is a small village at altitude of almost 3000 meters. It have India’s only known mummy preserved naturally which was identified as that of monk Sangha Tenzin. It is believed to be aroud 500-600 years old.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Langza</p>
              <p className="text-sm text-gray-500">A 2 hour drive (63.8 km) from Tabo.</p>
            </div>
          </div>

          {/* ================= Day 9-10 Langza ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 9-10 Langzay
            </h3>

            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
              <p className="mt-4">
               Langza is a state surrounded by snow-clad mountains, barren landscapes & green pastures & have beautiful golden statue of Buddha & an ancient temple called ‘Lang’ & is said to be the Abode of the Deities of region.
              </p>
              <p className="mt-4">
                It is famous for its rich fossil reserve of marine plants & animals. Spiti lay submerged under Tethys sea millions years ago & the fossil of se alife can be easily found scattered close to the village.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/spiti/itinerary/i7.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                 Later visit Komik village & hikkim which lies at an altitude of 14,830 ft & is famous for highest motorable village in Asia.
                </p>
                <p className="mt-4">
                  It has the highest Buddhist Monastery in the world which is – ‘Maitreya Buddha’ or ‘The Future Buddha’.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Manali</p>
              <p className="text-sm text-gray-500">A 5.7-hour drive (195.7 km) from Langza.</p>
            </div>
          </div>

           {/* ================= Day 10-11: Manali  ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 10-11: Manali
            </h3>
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/spiti/itinerary/i8.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                 It is a popular tourist destination which serves a gateway to Lahaul & spiti district as well as Leh Ladakh. Best time to visit here is October to February where you can witness snowfall & snow-covered mountains.
                </p>
                <p className="mt-4">
                  Visit this beautiful place which has amazing views, greenery, snow-kissed peaks, lush valleys. Later visit Mall Road in the evening for shopping.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Next stop: Chandigarh</p>
              <p className="text-sm text-gray-500">A 5.7-hour drive (270.7 km) from Manali..</p>
            </div>
          </div>

          {/* ================= Day 12: Chandigarh  ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 12: Chandigarh
            </h3>
            <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
              <p className="mt-4">
               Chandigarh is located on the foothills of Shivaliks & is famous as one of the best in urban planning & modern architecture. It derives its name from the temple of “Chandi Mandir”. 
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/spiti/itinerary/i9.jpg"
                  alt="Delhi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-gray-700 text-[15px] leading-relaxed text-justify">
                <p>
                  The deity “Chandi” who was the goddess of power & a fort of ‘garh’ beyond the temple sis what gave this city the beautiful name ‘Chandigarh’
                </p>
                <p className="mt-4">
                  The city is famous for well kept gardens, magnificent government buildings & broad tree-lined boulevards. It is the gateway to the Himalayan foothills.
                </p>
              </div>
            </div>
          </div>

          {/* ================= Day 15 ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-lg font-semibold text-red-500">
              Day 15: Departure
            </h3>

            <div className="grid md:grid-cols-2 gap-6 items-start">

              <div className="relative h-[240px] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/adventure/spiti/itinerary/i10.jpg"
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

      </div>

    </section>
  );
}