"use client";

import Image from "next/image";

const cities = [
  {
    title: "Delhi - A blend of History & royalty",
    desc: "Discover Delhi, which is the mixture of history and modernity with vibrant culture...",
    img: "/adventure/wildlife/delhi.jpg",
  },
  {
    title: "Mandawa – A Town Of Timeless Heritage And Beauty",
    desc: "Mandawa is a town where walls speak tales of artistry...",
    img: "/adventure/wildlife/mandawa.jpg",
  },
  {
    title: "Pushkar – Where Desert Charm Meets Holy Peace",
    desc: "The city of Pushkar is home to the only temple dedicated to Lord Brahma...",
    img: "/adventure/wildlife/pushkar.jpg",
  },
  {
    title: "Bundi – Rajasthan’s Hidden Gem",
    desc: "This enchanting town of narrow lanes of blue houses and step wells...",
    img: "/adventure/wildlife/bundi.jpg",
  },
  {
    title: "Ranthambore – Where Wildlife Roams Free",
    desc: "This wildlife heaven lies in the heart of Rajasthan, famous for tiger safaris...",
    img: "/adventure/wildlife/ranthambore.jpg",
  },
  {
    title: "Jaipur – The Pink City & Heart Of Rajasthan",
    desc: "Jaipur is known as the heart of Rajasthan & a UNESCO heritage city...",
    img: "/adventure/wildlife/jaipur.jpg",
  },
  {
    title: "Agra – Where History Rules Supreme",
    desc: "Agra is worldwide famous for the majestic Taj Mahal...",
    img: "/adventure/wildlife/agra.jpg",
  },
];

export default function CitiesSection() {
  return (
    <section className="space-y-16">
      {cities.map((city, index) => (
        <div key={index}>
          
          {/* Title */}
          <h2 className="text-3xl font-semibold mb-4">
            {city.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {city.desc}
          </p>

          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={city.img}
              alt={city.title}
              width={1000}
              height={500}
              className="w-full h-[400px] object-cover"
            />
          </div>

        </div>
      ))}
    </section>
  );
}