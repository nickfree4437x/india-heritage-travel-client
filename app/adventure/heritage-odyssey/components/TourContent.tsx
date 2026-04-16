"use client";

import Image from "next/image";
import DetailedItinerary from "./DetailedItinerary";

export default function TourContent() {
  return (
    <section className="w-full py-16 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-12">

          {/* DELHI */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Delhi - A Blend Of History & Royalty
            </h2>
            <p className="text-gray-700 mb-4">
              Discover Delhi, which is the mixture of history and modernity...
            </p>
            <Image src="/adventure/delhi.jpg" alt="Delhi" width={900} height={500} className="rounded-xl shadow-md"/>
          </div>

          {/* JAIPUR */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Jaipur – The Pink City & Heart Of Rajasthan
            </h2>
            <p className="text-gray-700 mb-4">
              One of the most visited & loved city of Rajasthan is Jaipur...
            </p>
            <Image src="/adventure/jaipur.jpg" alt="Jaipur" width={900} height={500} className="rounded-xl shadow-md"/>
          </div>

          {/* AGRA */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Agra – Where History Rules Supreme
            </h2>
            <p className="text-gray-700 mb-4">
              A world where the echoes of the Mughal empire still linger...
            </p>
            <Image src="/adventure/agra.jpg" alt="Agra" width={900} height={500} className="rounded-xl shadow-md"/>
          </div>

          {/* AJANTA */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Ajanta & Ellora - An Ancient Canvas Carved In Rock
            </h2>
            <p className="text-gray-700 mb-4">
              The Ajanta & Ellora Caves are UNESCO World Heritage Site...
            </p>
            <Image src="/adventure/ajanta.jpg" alt="Ajanta" width={900} height={500} className="rounded-xl shadow-md"/>
          </div>

          {/* COCHIN */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Cochin – Where History Meets Commerce
            </h2>
            <p className="text-gray-700 mb-4">
              Cochin, popularly known as the Queen of the Arabian Sea...
            </p>
            <Image src="/adventure/cochin.jpg" alt="Cochin" width={900} height={500} className="rounded-xl shadow-md"/>
          </div>

          {/* THEKKADY */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Thekkady – Where Nature Rules
            </h2>
            <p className="text-gray-700 mb-4">
              Located in Kerala, Thekkady is a beautiful hill station...
            </p>
            <Image src="/adventure/thekkady.jpg" alt="Thekkady" width={900} height={500} className="rounded-xl shadow-md"/>
          </div>

          {/* MUNNAR */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Munnar – South India’s Alpine Haven
            </h2>
            <p className="text-gray-700 mb-4">
              Munnar, the mesmerising hill-station in Western Ghats...
            </p>
            <Image src="/adventure/munnar.jpg" alt="Munnar" width={900} height={500} className="rounded-xl shadow-md"/>
          </div>

          {/* MUMBAI */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Mumbai – A City Of Dreams
            </h2>
            <p className="text-gray-700 mb-4">
              Mumbai is a bustling financial capital of India...
            </p>
            <Image src="/adventure/mumbai.jpg" alt="Mumbai" width={900} height={500} className="rounded-xl shadow-md"/>
          </div>

          {/* HIGHLIGHTS + INCLUSIONS */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Highlights */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✔ Royal heritage in the Pink City</li>
                <li>✔ Love story at the Taj Mahal</li>
                <li>✔ Ancient artistry in Ajanta-Ellora</li>
                <li>✔ Mumbai coastal charm</li>
                <li>✔ Elephants in Thekkady</li>
                <li>✔ Munnar tea landscapes</li>
              </ul>
            </div>

            {/* Inclusions */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Inclusions</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
                <p>🏨 Hotels</p>
                <p>🚗 Driver</p>
                <p>🍽 Breakfast</p>
                <p>💰 All costs</p>
                <p>📶 WiFi</p>
                <p>🍳 Cooking</p>
                <p>✈ Airport</p>
                <p>🛺 Rickshaw</p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE (BOOKING CARD) */}
        <div className="sticky top-24 h-fit">
          <div className="bg-white rounded-xl shadow-lg p-6 border">

            <Image
              src="/adventure/map.jpg"
              alt="Route Map"
              width={400}
              height={250}
              className="rounded-md mb-4"
            />

            <h3 className="font-semibold text-lg mb-3 text-center">
              Heritage Odyssey Tour
            </h3>

            <p className="font-semibold mb-2">
              Price Per Person:
            </p>

            <ul className="text-sm text-gray-600 mb-4 space-y-1">
              <li>• Pocket Friendly: $1810</li>
              <li>• Semi Luxury: $2320</li>
              <li>• Luxury: $3420</li>
            </ul>

            <button className="w-full bg-[#9b7a50] text-white py-3 rounded-full font-medium hover:opacity-90">
              Book This Journey
            </button>

          </div>
        </div>

        <DetailedItinerary />

      </div>
    </section>
  );
}