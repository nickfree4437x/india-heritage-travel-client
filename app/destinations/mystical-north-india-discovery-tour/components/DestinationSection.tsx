"use client";

import Image from "next/image";

export default function DestinationSection() {
  const destinations = [
    {
      id: "delhi",
      title: "Delhi- A Blend Of History & Royalty",
      desc: "Discover Delhi, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.",
      img: "/destination/north-tour/delhi.jpg",
    },
    {
      id: "mandawa",
      title: "Mandawa – A Town Of Timeless Heritage And Beauty",
      desc: "Mandawa is a town where walls speak tales of artistry. This Rajasthani gem have its streets decorated with beautiful frescoes and havelis, each a live canvas of history and beauty. This is a living gallery of Rajasthan’s architectural magnificence and the stories echoes on its walls.",
      img: "/destination/north-tour/mandawa.jpg",
    },
    {
      id: "jaipur",
      title: "Jaipur – The Pink City & Heart Of Rajasthan",
      desc: "Jaipur is known as the heart of Rajasthan & a UNESCO world heritage city. It is among one of the most visited tourist destinations in Rajasthan. Jaipur is famous for its grand forts and palaces, local cuisines, adventure tourism, pilgrimage sites and local shopping.",
      img: "/destination/north-tour/jaipur.jpg",
    },
    {
      id: "agra",
      title: "Agra – Where History Rules Supreme",
      desc: "A world where the echoes of the Mughal empire still linger, and uncover a marvel born from a timeless love tale: The Taj Mahal. Explore beautiful tombs, stately forts, and vibrant marketplaces that eagerly await your presence",
      img: "/destination/north-tour/agra.jpg",
    },
    {
      id: "orchha",
      title: "Orchha – Echoes Of History In Its Architecture",
      desc: "Orchha, a small town known for its historical & architectural significance. Explore the blend of Mughal & Rajput architectural style in Jahangir Mahal , beautiful murals showcasing religious themes & scenes from daily life in cours in the Raja mahal. The most famous temple, Raja Ram Temple is unique temple dedicated to Lord Rama..",
      img: "/destination/north-tour/orchha.jpg",
    },
    {
      id: "khajuraho",
      title: "Khajuraho – Wonders Sculpted In Stone",
      desc: "Khajuraho, the place known for it rich historical charm & divine artistry, also considered as UNESCO world heritage. It is known for the most ancient temples which contain group of Hindu, Jain & Buddhist temples. The temples are famous for its famous Nagara-style architecture & erotic sculptures",
      img: "/destination/north-tour/khajuraho.jpg",
    },
    {
      id: "varanasi",
      title: "Varanasi – The Spiritual Heart Of India",
      desc: "Varanasi, the land is ultimate spot of pilgrimage. It is also known as the oldest living cities in the world. Also Varansi cannot be missed without a visit to Ganga Ghats. Start your day early with a boat ride along the Ganges Ghats, where you’ll see the morning rituals of bathing and prayer. In the evening, another boat ride will let you to experience the Ghats and the beautiful world famous Ganga Aarti and rituals.",
      img: "/destination/north-tour/varanasi.jpg",
    },
  ];

  return (
    <div className="space-y-20">

      {destinations.map((item) => (
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