"use client";

import Image from "next/image";

const experiences = [
  {
    title: "Taj Mahal at Sunrise",
    description:
      "Watching the Taj Mahal emerge from the morning mist is widely regarded as India's most iconic travel experience. On a private Golden Triangle tour, you can enter the monument before the larger crowds arrive, giving you uninterrupted views and the perfect opportunity for photography in the soft morning light.",
  },
  {
    title: "Touring Old Delhi by Rickshaw",
    description:
      "Ride through the narrow lanes of Chandni Chowk, explore the famous spice markets of Khari Baoli, visit Jama Masjid, and experience the energy, aromas, and centuries-old traditions that make Old Delhi one of the world's most fascinating historic districts.",
  },
  {
    title: "Amber Fort by Elephant or Jeep",
    description:
      "Perched high above Jaipur, Amber Fort offers one of Rajasthan's most memorable arrivals. Whether you choose a traditional jeep ride or another approved mode of transport, you'll discover magnificent courtyards, royal apartments, and the famous Sheesh Mahal (Hall of Mirrors).",
  },
  {
    title: "Fatehpur Sikri",
    description:
      "Located about 40 kilometres from Agra, Fatehpur Sikri was Emperor Akbar's magnificent Mughal capital before it was mysteriously abandoned after just fourteen years. Today, its remarkably preserved red sandstone architecture offers a fascinating glimpse into imperial India.",
  },
  {
    title: "Jaipur's Colourful Bazaars",
    description:
      "Shopping in Jaipur is an experience in itself. Wander through Johari Bazaar for gemstones and jewellery, Bapu Bazaar for colourful textiles, handcrafted souvenirs, blue pottery, and traditional Rajasthani handicrafts while enjoying the lively atmosphere of the Pink City.",
  },
];

export default function ExperiencesCompared() {
  return (
    <section className="w-full bg-white py-2 sm:py-2">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}

        <div className="mb-4">
          <h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-semibold text-[#2c2c2c] mb-2">
            What Each Tour Actually Feels Like
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
            Destinations may look similar on a map, but the experiences they
            offer are completely different. The Golden Triangle is centred
            around India's most iconic monuments and cultural landmarks,
            whereas Rajasthan adds desert adventures, palace stays, wildlife,
            and slower, immersive experiences that reveal a different side of
            the country.
          </p>

        </div>

        {/* Image */}

        <div className="mb-10">

          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782381451/pexels-vaguspuer-2159347817-37837651_tg0mfr.jpg"
              alt="Camel safari at sunset over the Sam Sand Dunes"
              fill
              className="object-cover"
            />

          </div>

          <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
            via pexels
          </p>

        </div>

        {/* Experiences */}

        <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-3">
          Signature Golden Triangle Experiences
        </h3>

        <div className="space-y-4">

          {experiences.map((item, index) => (

            <div
              key={item.title}
              className={`${
                index !== experiences.length - 1
                  ? "border-b border-[#ece7de] pb-8"
                  : ""
              }`}
            >

              <h4 className="text-[15px] text-gray-700 mb-1">
                {item.title}
              </h4>

              <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}