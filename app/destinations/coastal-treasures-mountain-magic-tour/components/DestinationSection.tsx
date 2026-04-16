"use client";

import Image from "next/image";

export default function DestinationSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-12">

      {/* 🔥 LEFT SIDE (ALL DESTINATIONS) */}
      <div className="lg:pr-6 space-y-16">

        {/* COCHIN */}
        <div id="cochin">
          <h2 className="text-3xl font-bold mb-4">
            Cochin – Where Commerce And History Meets
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Cochin, popularly known as the Queen of the Arabian Sea, is a busy
            commercial hub rich in spice trading.
          </p>

          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/destination/coastal-tour/boat.jpg"
              alt="Cochin"
              width={900}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* ALLEPPEY */}
        <div id="alleppey">
          <h2 className="text-3xl font-bold mb-4">
            Alleppey – World Of Coastal Delights
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Alleppey, also known as the Venice of East, is famous for its
            backwaters, houseboats and scenic beauty.
          </p>

          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/destination/coastal-tour/alleppey.jpg"
              alt="Alleppey"
              width={900}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* THEKKADY */}
        <div id="thekkady">
          <h2 className="text-3xl font-bold mb-4">
            Thekkady – Where Nature Rules
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Thekkady is known for Periyar National Park, wildlife and scenic
            lake views.
          </p>

          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/destination/coastal-tour/thekkady.jpg"
              alt="Thekkady"
              width={900}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* MUNNAR */}
        <div id="munnar">
          <h2 className="text-3xl font-bold mb-4">
            Munnar – South India’s Alpine Haven
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Munnar is famous for tea plantations, rolling hills and cool climate.
          </p>

          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/destination/coastal-tour/munnar.jpg"
              alt="Munnar"
              width={900}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* MUMBAI */}
        <div id="mumbai">
          <h2 className="text-3xl font-bold mb-4">
            Mumbai – A City Of Dreams
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Mumbai is the financial capital of India, known for Gateway of India,
            Marine Drive and vibrant lifestyle.
          </p>

          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/destination/coastal-tour/mumbai.jpg"
              alt="Mumbai"
              width={900}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* 🔥 HIGHLIGHTS + INCLUSIONS */}
        <div className="grid md:grid-cols-2 gap-8">

        {/* Highlights */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
            <h3 className="text-2xl font-semibold mb-4 text-center">
            Highlights
            </h3>

            <ul className="space-y-3 text-gray-700">
            <li>✔ Journey from peaceful backwaters to thrilling wildlife</li>
            <li>✔ Munnar’s Tea Gardens & peace</li>
            <li>✔ Mumbai's secret Charm</li>
            <li>✔ Cultural & Scenic journey</li>
            <li>✔ Kerala undiscovered</li>
            </ul>
        </div>

        {/* Inclusions */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
            <h3 className="text-2xl font-semibold mb-6 text-center">
            Inclusions
            </h3>

            <div className="grid grid-cols-2 gap-6 text-center text-sm">

            <div>
                🏨
                <p>9 nights, chosen hotels</p>
            </div>

            <div>
                🚗
                <p>Local driver, guide</p>
            </div>

            <div>
                🍽️
                <p>Daily breakfast</p>
            </div>

            <div>
                💳
                <p>All costs covered</p>
            </div>

            <div>
                📶
                <p>In Car Wi-fi</p>
            </div>

            <div>
                🍳
                <p>Cooking classes, dinner</p>
            </div>

            <div>
                ✈️
                <p>Airport transfer</p>
            </div>

            <div>
                🚕
                <p>Delhi rickshaw</p>
            </div>

            </div>
         </div>

         {/* 🔥 DETAILED ITINERARY */}
        <div className="space-y-10">

        <h2 className="text-3xl font-semibold text-center mb-6">
            Detailed Itinerary
        </h2>

        {/* DAY 1-3 */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
            <h3 className="text-red-600 font-bold mb-3 text-lg">
            Day 1-3: Cochin
            </h3>

            <div className="grid md:grid-cols-2 gap-6 items-center">
            <Image
                src="/destination/coastal-tour/i1.jpg"
                alt=""
                width={400}
                height={250}
                className="rounded-lg shadow"
            />

            <p className="text-gray-700 text-sm leading-relaxed">
                When you arrive at Cochin Airport, our team will ensure your warm welcome.
                Explore Fort Kochi, churches, synagogues & Dutch palace. Overnight stay in Kochi.
            </p>
            </div>

            <p className="mt-4 font-medium">
            Next Stop: Alleppey
            <span className="block text-sm text-gray-600">
                A 1-hour and 20-minute drive
            </span>
            </p>
        </div>

        {/* DAY 3-4 */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
            <h3 className="text-red-600 font-bold mb-3 text-lg">
            Day 3-4: Alleppey
            </h3>

            <div className="grid md:grid-cols-2 gap-6 items-center">
            <Image
                src="/destination/coastal-tour/i2.jpg"
                alt=""
                width={400}
                height={250}
                className="rounded-lg shadow"
            />

            <p className="text-gray-700 text-sm leading-relaxed">
                Reach Alleppey & check into a houseboat. Enjoy backwater cruise and scenic beauty.
            </p>
            </div>

            <p className="mt-4 font-medium">
            Next Stop: Thekkady
            <span className="block text-sm text-gray-600">
                3.5-hour scenic drive
            </span>
            </p>
        </div>

        {/* DAY 4-6 */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
            <h3 className="text-red-600 font-bold mb-3 text-lg">
            Day 4-6: Thekkady
            </h3>

            <div className="grid md:grid-cols-2 gap-6 items-center">
            <Image
                src="/destination/coastal-tour/i3.jpg"
                alt=""
                width={400}
                height={250}
                className="rounded-lg shadow"
            />

            <p className="text-gray-700 text-sm leading-relaxed">
                Visit Periyar National Park, enjoy bamboo rafting, spice plantations and cultural shows.
            </p>
            </div>

            <p className="mt-4 font-medium">
            Next Stop: Munnar
            <span className="block text-sm text-gray-600">
                3-hour drive
            </span>
            </p>
        </div>

        {/* DAY 6-8 */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
            <h3 className="text-red-600 font-bold mb-3 text-lg">
            Day 6-8: Munnar
            </h3>

            <div className="grid md:grid-cols-2 gap-6 items-center">
            <Image
                src="/destination/coastal-tour/i4.jpg"
                alt=""
                width={400}
                height={250}
                className="rounded-lg shadow"
            />

            <p className="text-gray-700 text-sm leading-relaxed">
                Explore tea plantations, viewpoints, trekking spots and tea museum.
            </p>
            </div>

            <p className="mt-4 font-medium">
            Next Stop: Mumbai
            <span className="block text-sm text-gray-600">
                Flight journey
            </span>
            </p>
        </div>

        {/* DAY 8-9 */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
            <h3 className="text-red-600 font-bold mb-3 text-lg">
            Day 8-9: Mumbai
            </h3>

            <div className="grid md:grid-cols-2 gap-6 items-center">
            <Image
                src="/destination/coastal-tour/i5.jpg"
                alt=""
                width={400}
                height={250}
                className="rounded-lg shadow"
            />

            <p className="text-gray-700 text-sm leading-relaxed">
                Visit Gateway of India, Marine Drive, Taj Hotel and local markets.
            </p>
            </div>
        </div>

        {/* DAY 10 */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
            <h3 className="text-red-600 font-bold mb-3 text-lg">
            Day 10: Farewell And Departure
            </h3>

            <div className="grid md:grid-cols-2 gap-6 items-center">
            <Image
                src="/destination/coastal-tour/i6.jpg"
                alt=""
                width={400}
                height={250}
                className="rounded-lg shadow"
            />

            <p className="text-gray-700 text-sm leading-relaxed">
                After a memorable journey, depart with beautiful memories. Safe travels!
            </p>
            </div>
          </div>
          </div>
        </div>

        {/* 🔥 CTA + EXCLUDED SERVICES */}
        <div className="space-y-10">

        {/* CTA BUTTON */}
        <div className="text-center">
            <div className="border-t border-b py-10">
            <button className="bg-[#9b7a50] text-white px-8 py-3 rounded-lg text-sm tracking-wide hover:bg-[#7d6242] transition">
                Book This Tour Or Modify This Itinerary
            </button>
            </div>
        </div>

        {/* EXCLUDED SERVICES (Accordion) */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
            <details className="group cursor-pointer">
            <summary className="flex justify-between items-center text-lg font-semibold text-[#9b7a50]">
                Excluded Services in this Journey:
                <span className="transition-transform group-open:rotate-180">
                ▼
                </span>
            </summary>

            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                <li>• Flights / Airfare</li>
                <li>• Personal expenses</li>
                <li>• Travel insurance</li>
                <li>• Entry tickets (if not mentioned)</li>
                <li>• Tips & gratuities</li>
            </ul>
            </details>
        </div>
        </div>

      </div>

      {/* 🔥 RIGHT SIDE STICKY CARD (SAME ALWAYS) */}
      <div className="lg:pl-6">
        <div className="sticky top-24 bg-white rounded-xl shadow-xl hover:shadow-2xl transition p-5 border max-w-[350px] ml-auto">

          <div className="mb-4 rounded-md overflow-hidden">
            <Image
              src="/destination/coastal-tour/map.jpg"
              alt="Map"
              width={400}
              height={250}
              className="w-full object-cover"
            />
          </div>

          <h3 className="font-semibold text-lg mb-3">
            Coastal Treasures & Mountain Magic Tour
          </h3>

          <p className="font-semibold mb-2">
            Price-Per Person Starting From:
          </p>

          <ul className="text-sm text-gray-700 mb-4 space-y-1">
            <li>• Pocket Friendly: $1200 USD</li>
            <li>• Semi Luxury: $1560 USD</li>
            <li>• Luxury: $2270 USD</li>
          </ul>

          <button className="w-full bg-[#9b7a50] text-white py-2 rounded-full hover:bg-[#7d6242] transition">
            Book This Journey
          </button>
        </div>
      </div>

    </section>
  );
}