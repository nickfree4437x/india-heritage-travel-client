"use client";

import Image from "next/image";

const cities = [
  {
    title: "Delhi – A Blend Of History & Royalty",
    desc: "Discover Delhi, which is the mixture of history and modernity with vibrant, contemporary, and bursting colours.",
    img: "/adventure/heritage/delhi.jpg",
  },
  {
    title: "Mandawa – A Town Of Timeless Heritage And Beauty",
    desc: "Mandawa is a town where walls speak tales of artistry and culture.",
    img: "/adventure/heritage/mandawa.jpg",
  },
  {
    title: "Jaipur – The Pink City Of Magnificent Grandeur",
    desc: "Jaipur is one of the most visited cities of Rajasthan known for forts and palaces.",
    img: "/adventure/heritage/jaipur.jpg",
  },
  {
    title: "Agra – Where History Rules Supreme",
    desc: "Explore the beauty of Taj Mahal and Mughal history.",
    img: "/adventure/heritage/agra.jpg",
  },
];

export default function CitiesSection() {
  return (
    <div className="space-y-14">

      {cities.map((city, index) => (
        <div key={index}>

          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            {city.title}
          </h2>

          <p className="text-gray-600 mb-4 max-w-2xl">
            {city.desc}
          </p>

          <Image
            src={city.img}
            alt={city.title}
            width={900}
            height={500}
            className="rounded-xl shadow-md w-full h-[400px] object-cover"
          />

        </div>
      ))}

    </div>
  );
}