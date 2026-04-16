"use client";

import Image from "next/image";
import BookingCard from "./BookingCard";

export default function DestinationSection() {

  const destinations = [
    {
      id: "delhi",
      title: "Delhi - A Blend Of History & Royalty",
      desc: "Discover Delhi, a mixture of history and modernity.",
      img: "/destination/north-tour/delhi.jpg",
    },
    {
      id: "mandawa",
      title: "Mandawa – A Town Of Timeless Heritage And Beauty",
      desc: "Mandawa is famous for frescoes and heritage havelis.",
      img: "/destination/north-tour/mandawa.jpg",
    },
    {
      id: "jaipur",
      title: "Jaipur – The Pink City & Heart Of Rajasthan",
      desc: "Jaipur is known for forts, palaces and markets.",
      img: "/destination/north-tour/jaipur.jpg",
    },
    {
      id: "agra",
      title: "Agra – Where History Rules Supreme",
      desc: "Explore Taj Mahal and Mughal architecture.",
      img: "/destination/north-tour/agra.jpg",
    },
    {
      id: "orchha",
      title: "Orchha – Echoes Of History In Its Architecture",
      desc: "Orchha is known for temples and architecture.",
      img: "/destination/north-tour/orchha.jpg",
    },
    {
      id: "khajuraho",
      title: "Khajuraho – Wonders Sculpted In Stone",
      desc: "Famous for ancient temples and sculptures.",
      img: "/destination/north-tour/khajuraho.jpg",
    },
    {
      id: "varanasi",
      title: "Varanasi – The Spiritual Heart Of India",
      desc: "Experience Ganga ghats and spiritual rituals.",
      img: "/destination/north-tour/varanasi.jpg",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-12">

      {/* LEFT SIDE */}
      <div className="lg:pr-6 space-y-16">

        {/* DESTINATIONS */}
        {destinations.map((item) => (
          <div key={item.id} id={item.id}>
            <h2 className="text-3xl font-bold mb-4">{item.title}</h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {item.desc}
            </p>

            <Image
              src={item.img}
              alt={item.title}
              width={900}
              height={500}
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>
        ))}

        {/* HIGHLIGHTS + INCLUSIONS */}
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">Highlights</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Explore Delhi, Agra & Jaipur</li>
              <li>✔ Spiritual Varanasi experience</li>
              <li>✔ Cultural heritage journey</li>
              <li>✔ Seamless travel experience</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">Inclusions</h3>
            <ul className="space-y-2 text-gray-700">
              <li>🏨 Hotels</li>
              <li>🚗 Driver</li>
              <li>🍽 Breakfast</li>
              <li>✈ Transfers</li>
            </ul>
          </div>

        </div>

        {/* ITINERARY */}
        <div id="itinerary">
          <h2 className="text-3xl font-bold text-center mb-10">
            Detailed Itinerary
          </h2>

          <div className="space-y-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-red-500 font-bold mb-2">
                Day 1-3: Delhi
              </h3>
              <p>Arrival and sightseeing in Delhi.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-red-500 font-bold mb-2">
                Day 3-4: Mandawa
              </h3>
              <p>Explore heritage havelis.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-red-500 font-bold mb-2">
                Day 9-11: Varanasi
              </h3>
              <p>Ganga Aarti and spiritual experience.</p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-10 border-t">
          <button className="bg-[#9b7a50] text-white px-8 py-3 rounded-lg hover:bg-[#7d6242] transition">
            Book This Tour Or Modify This Itinerary
          </button>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="lg:pl-6">
        <BookingCard />
      </div>

    </section>
  );
}