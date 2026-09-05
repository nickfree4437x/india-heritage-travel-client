"use client";

import WhyChooseSection from "@/src/tours/why-choose/WhyChooseSection";
import Image from "next/image";

const cities = [
  {
    id: "delhi",
    title: "Delhi – A Blend Of History & Royalty",
    desc: "Discover Delhi, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779534424/delhi_xcp2n1.jpg",
  },
  {
    id: "mandawa",
    title: "Mandawa – A Town Of Timeless Heritage And Beauty",
    desc: "Mandawa is a town where walls speak tales of artistry. This Rajasthani gem have its streets decorated with beautiful frescoes and havelis, each a live canvas of history and beauty. This is a living gallery of Rajasthan’s architectural magnificence and the stories echoes on its walls.",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779534461/mandawa_vgoahc.jpg",
  },
  {
    id: "jaipur",
    title: "Jaipur – The Pink City Of Magnificent Grandeur",
    desc: "One of the most visited & loved city of Rajasthan is Jaipur. It is considered as a UNESCO World Heritage city & the heart of Rajasthan. The beautiful Pink city famous for its Grand forts & palaces, touristic spot & the best shopping site for traditional & rajasthani aesthetics",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779534507/jaipur_bvgekd.jpg",
  },
  {
    id: "agra",
    title: "Agra – Where History Rules Supreme",
    desc: "A world where the echoes of the Mughal empire still linger, and uncover a marvel born from a timeless love tale: The Taj Mahal. Explore beautiful tombs, stately forts, and vibrant marketplaces that eagerly await your presence.",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779534537/agra_my5ltf.jpg",
  },
];

export default function CitiesSection() {
  return (
    <div className="space-y-8 md:space-y-12">

      <WhyChooseSection/>

      {cities.map((city) => (
        <div key={city.id} id={city.id} className="w-full scroll-mt-24 md:scroll-mt-28">

          {/* TITLE */}
          <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            {city.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] font-[300] md:text-[14px] text-justify">
            {city.desc}
          </p>

          {/* IMAGE */}
          <div className="relative w-full rounded-md overflow-hidden shadow-md -mb-2 md:mb-0">
            <Image
              src={city.img}
              alt={city.title}
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