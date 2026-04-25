"use client";

import Image from "next/image";

const cities = [
  {
    id: "delhi",
    title: "Delhi – A Blend Of History & Royalty",
    desc: "Discover Delhi, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.",
    img: "/adventure/heritage/delhi.jpg",
  },
  {
    id: "mandawa",
    title: "Mandawa – A Town Of Timeless Heritage And Beauty",
    desc: "Mandawa is a town where walls speak tales of artistry. This Rajasthani gem have its streets decorated with beautiful frescoes and havelis, each a live canvas of history and beauty. This is a living gallery of Rajasthan’s architectural magnificence and the stories echoes on its walls.",
    img: "/adventure/heritage/mandawa.jpg",
  },
  {
    id: "jaipur",
    title: "Jaipur – The Pink City Of Magnificent Grandeur",
    desc: "One of the most visited & loved city of Rajasthan is Jaipur. It is considered as a UNESCO World Heritage city & the heart of Rajasthan. The beautiful Pink city famous for its Grand forts & palaces, touristic spot & the best shopping site for traditional & rajasthani aesthetics",
    img: "/adventure/heritage/jaipur.jpg",
  },
  {
    id: "agra",
    title: "Agra – Where History Rules Supreme",
    desc: "A world where the echoes of the Mughal empire still linger, and uncover a marvel born from a timeless love tale: The Taj Mahal. Explore beautiful tombs, stately forts, and vibrant marketplaces that eagerly await your presence.",
    img: "/adventure/heritage/agra.jpg",
  },
];

export default function CitiesSection() {
  return (
    <div className="space-y-20">

      {cities.map((city) => (
        <div key={city.id} id={city.id} className="w-full">

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#2c2c2c] leading-snug">
            {city.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-700 mb-8 leading-relaxed text-[15px] text-justify max-w-3xl">
            {city.desc}
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md group">
            <Image
              src={city.img}
              alt={city.title}
              fill
              className="object-cover transition-transform duration-700"
            />
          </div>

        </div>
      ))}

    </div>
  );
}