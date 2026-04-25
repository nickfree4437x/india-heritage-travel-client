"use client";

import Image from "next/image";

export default function OdysseyCitiesSection() {
  const cities = [
    {
      id: "delhi",
      title: "Delhi – A Blend Of History & Royalty",
      desc: "Discover Delhi, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.",
      img: "/adventure/odyssey/delhi.jpg",
    },
    {
      id: "mandawa",
      title: "Mandawa – A Town Of Timeless Heritage And Beauty",
      desc: "Mandawa is a town where walls speak tales of artistry. This Rajasthani gem have its streets decorated with beautiful frescoes and havelis, each a live canvas of history and beauty. This is a living gallery of Rajasthan’s architectural magnificence and the stories echoes on its walls.",
      img: "/adventure/odyssey/mandawa.jpg",
    },
    {
      id: "jaipur",
      title: "Jaipur – The Pink City",
      desc: "A world where the echoes of the Mughal empire still linger, and uncover a marvel born from a timeless love tale: The Taj Mahal. Explore beautiful tombs, stately forts, and vibrant marketplaces that eagerly await your presence.",
      img: "/adventure/odyssey/jaipur.jpg",
    },
    {
      id: "agra",
      title: "Agra – Where History Rules Supreme",
      desc: "One of the most visited & loved city of Rajasthan is Jaipur. It is considered as a UNESCO World Heritage city & the heart of Rajasthan. The beautiful Pink city famous for its Grand forts & palaces, touristic spot & the best shopping site for traditional & rajasthani aesthetics",
      img: "/adventure/odyssey/agra.jpg",
    },
    {
      id: "varanasi",
      title: "Varanasi – The Spiritual Heart Of India",
      desc: "Varanasi, the land is ultimate spot of pilgrimage. It is also known as the oldest living cities in the world. Also Varanasi cannot be missed without a visit to Ganga Ghats. Varanasi throughout the ages, held historical significance. Also it has been centre of learning, spirituality, experiencing inner divine, culture, pilgrimage.",
      img: "/adventure/odyssey/varanasi.jpg",
    },
  ];

  return (
    <div className="space-y-20">

      {cities.map((item) => (
        <div key={item.id} id={item.id} className="w-full">

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#2c2c2c]">
            {item.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-700 mb-8 leading-relaxed text-[15px] text-justify">
            {item.desc}
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md group">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700"
            />
          </div>

        </div>
      ))}

    </div>
  );
}