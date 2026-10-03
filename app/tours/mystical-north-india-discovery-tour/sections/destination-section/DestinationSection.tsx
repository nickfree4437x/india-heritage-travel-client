"use client";

import Image from "next/image";
import WhyChooseSection from "@/src/tours/why-choose/WhyChooseSection";

export default function DestinationSection() {
  const destinations = [
    {
      id: "delhi",
      title: "Delhi – History, Heritage & Modern Culture",
      desc: "Discover Delhi, where India's rich history meets modern city life. Explore the heritage of Old Delhi, iconic landmarks, vibrant streets, local culture, and historic attractions that make Delhi an essential destination on a North India tour.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530004/Delhi_ne7mnp.jpg",
      alt: "Delhi heritage attractions featuring Red Fort India Gate and historic landmarks",
    },
    {
      id: "mandawa",
      title: "Mandawa – Timeless Heritage & Frescoed Havelis",
      desc: "Mandawa is a historic town where beautifully painted frescoes and grand havelis showcase the artistic heritage of Rajasthan. Explore its historic streets, traditional architecture, and intricate wall paintings on this North India tour.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530066/mandawa_ook3yh.jpg",
      alt: "Mandawa fresco painted havelis and Rajasthan heritage architecture",
    },
    {
      id: "jaipur",
      title: "Jaipur – The Pink City & Royal Heritage",
      desc: "Jaipur, the Pink City and capital of Rajasthan, is renowned for its grand forts, royal palaces, historic landmarks, local cuisine, cultural experiences, and traditional shopping. Discover the architectural and cultural heritage of Jaipur.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530100/jaipur_j3pbrw.jpg",
      alt: "Jaipur Pink City featuring Amber Fort Hawa Mahal and royal palaces",
    },
    {
      id: "agra",
      title: "Agra – Taj Mahal & Mughal Heritage",
      desc: "Explore Agra, home to the iconic Taj Mahal and remarkable Mughal heritage. Discover historic tombs, impressive forts, architectural landmarks, and vibrant marketplaces that reveal the city's fascinating history and culture.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530129/agra_gkd9qu.jpg",
      alt: "Agra Taj Mahal and Mughal heritage monuments in Uttar Pradesh",
    },
    {
      id: "orchha",
      title: "Orchha – Historic Palaces, Temples & Architecture",
      desc: "Orchha is a historic town known for its remarkable architecture and cultural heritage. Explore the blend of Mughal and Rajput architectural styles, historic palaces, beautiful murals, and the renowned Raja Ram Temple.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530156/orchha_kzyxnx.jpg",
      alt: "Orchha historic temples palaces and Bundelkhand architecture",
    },
    {
      id: "khajuraho",
      title: "Khajuraho – UNESCO Temples & Stone Carvings",
      desc: "Khajuraho is renowned for its historic temples, intricate stone carvings, and distinctive Nagara-style architecture. Explore its UNESCO World Heritage-listed temple complex featuring Hindu, Jain, and Buddhist heritage.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530191/khajuraho_wiqvfk.jpg",
      alt: "Khajuraho UNESCO temples with intricate stone carvings and Nagara architecture",
    },
    {
      id: "varanasi",
      title: "Varanasi – Spiritual Heritage & Ganga Ghats",
      desc: "Varanasi is one of India's most important spiritual and cultural destinations. Experience the historic Ganga Ghats, early-morning boat rides, traditional rituals, and the renowned evening Ganga Aarti along the sacred Ganges.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530223/varanasi_lvzh5r.jpg",
      alt: "Varanasi Ganga Ghats evening Aarti and spiritual experiences on the Ganges River",
    },
  ];

  return (
    <div className="space-y-8 md:space-y-12">
      <WhyChooseSection />

      {destinations.map((item) => (
        <div
          key={item.id}
          id={item.id}
          className="max-w-5xl scroll-mt-20 md:scroll-mt-24"
        >
          {/* Heading */}
          <h3
            className="
              text-[16px] sm:text-[20px] md:text-[22px]
              tracking-wide
              text-[#2c2c2c]
              font-semibold
              mb-4
            "
          >
            {item.title}
          </h3>

          {/* Description */}
          <p
            className="
              text-gray-700
              mb-6
              leading-relaxed
              text-[12px] sm:text-[13px]
              font-[300]
              md:text-[14px]
              text-justify
            "
          >
            {item.desc}
          </p>

          {/* Image */}
          <div className="w-full rounded-md overflow-hidden shadow-md -mb-2 md:mb-0">
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