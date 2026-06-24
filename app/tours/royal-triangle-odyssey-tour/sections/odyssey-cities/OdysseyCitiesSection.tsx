"use client";

import WhyChooseSection from "@/src/tours/why-choose/WhyChooseSection";
import Image from "next/image";

export default function OdysseyCitiesSection() {
  const cities = [
    {
      id: "delhi",
      title: "Delhi – A Blend Of History & Royalty",
      desc: "Discover Delhi, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779535347/delhi_zvevyd.jpg",
      alt: "Old Delhi heritage landmarks in Royal Triangle Odyssey Tour India by India Heritage Travel"
    },
    {
      id: "mandawa",
      title: "Mandawa – A Town Of Timeless Heritage And Beauty",
      desc: "This Rajasthani gem has streets lined with beautifully painted frescoes and historic havelis, each reflecting centuries of art, culture, and architectural brilliance. This is a living gallery of Rajasthan’s architectural magnificence and the stories echoes on its walls.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779535380/mandawa_knhwkt.jpg",
      alt: "Mandawa heritage havelis in Royal Triangle Odyssey Tour India by India Heritage Travel"
    },
    {
      id: "jaipur",
      title: "Jaipur – The Pink City",
      desc: "Jaipur is the heart of Rajasthan and a UNESCO World Heritage City. Known as the Pink City, it is famous for its magnificent forts, royal palaces, vibrant bazaars, traditional crafts, and rich cultural heritage. Jaipur offers a perfect blend of history, architecture, local cuisine, and authentic Rajasthani experiences.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779535421/jaipur_eplhjn.jpg",
      alt: "Amber Fort Jaipur in Royal Triangle Odyssey Tour India by India Heritage Travel"
    },
    {
      id: "agra",
      title: "Agra – Where History Rules Supreme",
      desc: "Agra is home to the iconic Taj Mahal, one of the Seven Wonders of the World and a UNESCO World Heritage Site. Discover the grandeur of the Mughal Empire through magnificent monuments, historic forts, beautiful gardens, and bustling local markets that reflect the city's rich cultural legacy.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779535453/agra_cgybs3.jpg",
      alt: "Taj Mahal Agra in Royal Triangle Odyssey Tour India by India Heritage Travel"
    },
    {
      id: "varanasi",
      title: "Varanasi – The Spiritual Heart Of India",
      desc: "Varanasi, the land is ultimate spot of pilgrimage. It is also known as the oldest living cities in the world. Also Varanasi cannot be missed without a visit to Ganga Ghats. Varanasi throughout the ages, held historical significance. Also it has been centre of learning, spirituality, experiencing inner divine, culture, pilgrimage.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779535511/varanasi_djb6cb.jpg",
      alt: "Varanasi riverside in Royal Triangle Odyssey Tour India by India Heritage Travel"
    },
  ];

  return (
    <div className="space-y-12">

      <WhyChooseSection/>

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
              alt={item.alt}
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