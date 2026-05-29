"use client";

import Image from "next/image";

export default function OdysseyCitiesSection() {
  const cities = [
    {
      id: "delhi",
      title: "Delhi – A Blend Of History & Royalty",
      desc: "Discover Delhi, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779535347/delhi_zvevyd.jpg",
    },
    {
      id: "mandawa",
      title: "Mandawa – A Town Of Timeless Heritage And Beauty",
      desc: "Mandawa is a town where walls speak tales of artistry. This Rajasthani gem have its streets decorated with beautiful frescoes and havelis, each a live canvas of history and beauty. This is a living gallery of Rajasthan’s architectural magnificence and the stories echoes on its walls.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779535380/mandawa_knhwkt.jpg",
    },
    {
      id: "jaipur",
      title: "Jaipur – The Pink City",
      desc: "A world where the echoes of the Mughal empire still linger, and uncover a marvel born from a timeless love tale: The Taj Mahal. Explore beautiful tombs, stately forts, and vibrant marketplaces that eagerly await your presence.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779535421/jaipur_eplhjn.jpg",
    },
    {
      id: "agra",
      title: "Agra – Where History Rules Supreme",
      desc: "One of the most visited & loved city of Rajasthan is Jaipur. It is considered as a UNESCO World Heritage city & the heart of Rajasthan. The beautiful Pink city famous for its Grand forts & palaces, touristic spot & the best shopping site for traditional & rajasthani aesthetics",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779535453/agra_cgybs3.jpg",
    },
    {
      id: "varanasi",
      title: "Varanasi – The Spiritual Heart Of India",
      desc: "Varanasi, the land is ultimate spot of pilgrimage. It is also known as the oldest living cities in the world. Also Varanasi cannot be missed without a visit to Ganga Ghats. Varanasi throughout the ages, held historical significance. Also it has been centre of learning, spirituality, experiencing inner divine, culture, pilgrimage.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779535511/varanasi_djb6cb.jpg",
    },
  ];

  return (
    <div className="space-y-16">

      {cities.map((item) => (
        <div key={item.id} id={item.id} className="w-full scroll-mt-24 md:scroll-mt-28">

          {/* TITLE */}
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            {item.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] font-[300] md:text-[14px] text-justify">
            {item.desc}
          </p>

          {/* IMAGE */}
          <div className="relative w-full rounded-md overflow-hidden shadow-md -mb-6 md:mb-0">
            <Image
              src={item.img}
              alt={item.title}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>

        </div>
      ))}

    </div>
  );
}