
"use client";

import Image from "next/image";

const experiences = [
  {
    title: "Luxury Accommodation",
    description:
      "Stay at some of Delhi's finest luxury hotels including The Oberoi New Delhi, The Imperial, and Taj Palace, where world-class hospitality, wellness facilities, and elegant interiors create an exceptional experience.",
  },
  {
    title: "Luxury Dining",
    description:
      "From award-winning Indian restaurants to rooftop dining overlooking Lutyens' Delhi, the city offers culinary experiences that rival the world's best dining destinations.",
  },
  {
    title: "Private Heritage Walks",
    description:
      "Explore Old Delhi's spice markets, Jama Masjid, Chandni Chowk, and hidden historic lanes with expert local guides who bring centuries of history to life.",
  },
  {
    title: "Private City Tours",
    description:
      "Explore famous sites like Humayun’s Tomb, Qutub Minar, and India Gate at your own pace, accompanied by a personal guide and a private driver for a fully customizable day out.",
  },
];

export default function DelhiLuxuryExperiences() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="mb-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-4">
            Luxurious Experiences in Delhi
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Delhi offers far more than its famous monuments. A luxury itinerary
            combines heritage, fine dining, private access, and personalized
            experiences that reveal the city's fascinating layers of history and culture.
          </p>

        </div>

        {/* Feature Image */}

        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[550px] overflow-hidden rounded-sm shadow-md mb-10">

          <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782283248/pexels-bhavitya-3126593_cljhha.jpg"
            alt="Private heritage walk through Old Delhi spice market during a luxury Golden Triangle tour"
            fill
            className="object-cover"
          />

        </div>

        {/* Experience Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

          {experiences.map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 bg-white p-5 rounded-md"
            >
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-700 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        {/* Highlight Box */}

        <div className=" bg-[#faf7f3] p-5">

          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 font-light leading-relaxed">
            From private heritage walks through Old Delhi to luxury stays and
            exclusive monument experiences, Delhi offers an extraordinary
            introduction to India's history, culture, and contemporary luxury.
          </p>

        </div>

      </div>

    </section>
  );
}