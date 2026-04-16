"use client";

import Image from "next/image";

export default function Itinerary() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      {/* 🔹 Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Detailed Itinerary
      </h2>

      <div className="space-y-10">

        {/* ================= Day 1-3 Delhi ================= */}
        <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <h3 className="text-xl font-bold text-red-600">
            Day 1–3: Delhi
          </h3>

          <p className="text-gray-700">
            When you reach at the Delhi Airport, we’ll welcome you and take you to your hotel.
          </p>

          <p className="text-gray-700">
            Explore India Gate, President’s House, Parliament House and dive into Delhi’s history.
          </p>

          <p className="text-gray-700">
            Visit <span className="font-semibold">Qutub Minar</span>, Jama Masjid, Red Fort,
            Raj Ghat and experience Old Delhi with a rickshaw ride.
          </p>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative h-[220px] rounded-lg overflow-hidden shadow">
              <Image
                src="/destination/golden-triangle/itinerary/delhi.jpg"
                alt="Delhi"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700">
              Visit Akshardham Temple, Lotus Temple and explore Chandni Chowk.
              Enjoy Delhi’s mix of modern and traditional culture.
            </p>
          </div>

          <p className="font-semibold">Next stop: Agra</p>
          <p className="text-sm text-gray-600">
            5.5-hour drive (260 km)
          </p>
        </div>

        {/* ================= Day 3-4 Agra ================= */}
        <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <h3 className="text-xl font-bold text-red-600">
            Day 3–4: Agra
          </h3>

          <div className="grid md:grid-cols-2 gap-6 items-center">

            <div className="relative h-[220px] rounded-lg overflow-hidden shadow">
              <Image
                src="/destination/golden-triangle/itinerary/agra.jpg"
                alt="Agra"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-3 text-gray-700">
              <p>
                Enjoy sunset views of the Taj Mahal from Yamuna river.
              </p>
              <p>
                Visit Red Fort and experience sunrise at Taj Mahal next day.
              </p>
              <p>
                Note: Taj Mahal is closed on Fridays.
              </p>
            </div>

          </div>

          <p className="font-semibold">Next stop: Jaipur</p>
          <p className="text-sm text-gray-600">
            3-hour drive (175 km)
          </p>
        </div>

        {/* ================= Day 4-6 Jaipur ================= */}
        <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <h3 className="text-xl font-bold text-red-600">
            Day 4–6: Jaipur
          </h3>

          <div className="grid md:grid-cols-2 gap-6 items-center">

            <div className="relative h-[220px] rounded-lg overflow-hidden shadow">
              <Image
                src="/destination/golden-triangle/itinerary/jaipur.jpg"
                alt="Jaipur"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700">
              Explore Hawa Mahal, Jal Mahal, Amber Fort, Jantar Mantar and Birla Temple.
              Enjoy shopping in Johri Bazaar & Bapu Bazaar.
            </p>

          </div>

          <p className="font-semibold">Next stop: Delhi</p>
          <p className="text-sm text-gray-600">
            5-hour journey (307 km)
          </p>
        </div>

        {/* ================= Day 6 Delhi ================= */}
        <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <h3 className="text-xl font-bold text-red-600">
            Day 6: Delhi
          </h3>

          <div className="grid md:grid-cols-2 gap-6 items-center">

            <div className="relative h-[220px] rounded-lg overflow-hidden shadow">
              <Image
                src="/destination/golden-triangle/itinerary/delhi-2.jpg"
                alt="Delhi"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700">
              Relax at hotel or explore Chandni Chowk, Spice Market, Book Market,
              temples and cultural places based on your interest.
            </p>

          </div>
        </div>

        {/* ================= Day 7 ================= */}
        <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <h3 className="text-xl font-bold text-red-600">
            Day 7: Farewell And Departure
          </h3>

          <div className="grid md:grid-cols-2 gap-6 items-center">

            <div className="relative h-[220px] rounded-lg overflow-hidden shadow">
              <Image
                src="/destination/golden-triangle/itinerary/farewell.jpg"
                alt="Departure"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700">
              After completing your journey, our driver will drop you at the airport.
              Take back beautiful memories of the Golden Triangle tour.
            </p>

          </div>
        </div>

      </div>

      {/* 🔹 CTA */}
      <div className="mt-12 text-center">
        <button className="bg-[#8b6b3e] text-white px-8 py-3 rounded-full hover:bg-[#6f532f] transition">
          Book This Tour Or Modify This Itinerary
        </button>
      </div>

    </section>
  );
}