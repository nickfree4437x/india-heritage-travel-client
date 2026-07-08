"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Taj Mahal - Agra, Uttar Pradesh",
    description:
      "Built by Shah Jahan over 22 years with 20,000 workers in memory of Mumtaz Mahal. A UNESCO site since 1983. Midday is the most crowded - visit early morning instead.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782715820/pexels-kowsiee-18722577_kycqwd.jpg"
  },
  {
    name: "Qutub Minar - Delhi",
    description:
      "The 73-meter Qutub Minar, India's tallest brick minaret, took three rulers to complete. The complex also features a 1,600-year-old iron pillar that has never rusted.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782716007/pexels-yogendras31-7462292_rqjkbf.jpg",
  },
  {
    name: "Red Fort Complex - Delhi",
    description:
      "Constructed by Shah Jahan in 1639, this red sandstone fort was the centre of Shahjahanabad for almost 200 years. It became a UNESCO site in 2007.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782716117/pexels-varan-6776755_xethki.jpg",
  },
  {
    name: "Tomb of Humayun – Delhi",
    description:
      "Humayun's Tomb, built in 1569, inspired Mughal architecture including the Taj Mahal. UNESCO World Heritage Site since 1993.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782716214/pexels-miheertewari-13256094_hja0sf.jpg",
  },
  {
    name: "Fatehpur Sikri – Uttar Pradesh",
    description:
      "Akbar's 1571 sandstone city, abandoned after 14 years due to water or administrative issues. UNESCO World Heritage Site since 1986.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782716325/pexels-shantanu09-6244983_pmive6.jpg",
  },
  {
    name: "Khajuraho Group of Monuments - Madhya Pradesh",
    description:
      "9th–11th century Chandela temples, renowned for India's finest stone carvings with ruler sculptures on the walls. UNESCO World Heritage Site since 1986.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782716412/pexels-mohit-khare-3592184-36737766_crcou1.jpg",
  },
  {
    name: "Ajanta Caves - Maharashtra",
    description:
      "2nd-century BCE to 5th-century CE Buddhist caves carved along the Waghora River, featuring 1,500-year-old murals of Buddha and gods. UNESCO World Heritage Site since 1983.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782716498/pexels-roman-saienko-1867764487-32491309_eknyxl.jpg",
  },
  {
    name: "Ellora Caves - Maharashtra",
    description:
      "Ellora's 34 caves, built over six centuries, showcase Buddhist, Hindu, and Jain traditions. The Kailasa Temple was carved top-down from basalt. UNESCO site since 1983.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782716587/pexels-logalongwithme-37540779_ky4wv4.jpg",
  },
  {
    name: "Hampi - Karnataka",
    description:
      "14th–15th century Vijayanagara capital, plundered and burnt in 1565, now in ruins. UNESCO World Heritage Site since 1986.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782716682/pexels-roman-saienko-1867764487-37626180_anyy0v.jpg",
  },
  {
    name: "Sun Temple of Konark - Orissa",
    description:
      "King Narasimhadeva I built this 13th-century temple in honour of Surya, designed as a grand chariot with 24 wheels, seven horses, and a towering structure that once stood 60 metres before collapsing.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782716817/pexels-ravi-mittal-107469583-29065084_pso9ij.jpg",
  },
  {
    name: "City of Jaipur - Rajasthan",
    description:
      "Designed in 1727 by Maharaja Jai Singh II, Jaipur was planned as a grid city. Its walled precincts were declared a UNESCO World Heritage Site in 2019 - celebrated for both architectural grandeur and its thriving living culture.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782716974/pexels-sasank-cherukupalli-2156002811-34452432_ynx2mm.jpg",
  },
  {
    name: "Chhatrapati Shivaji Maharaj Terminus - Mumbai",
    description:
      "F.W. Stevens' 1878 masterpiece blends Indian and Victorian Gothic architecture. UNESCO listed it in 2004. Unlike most heritage sites, it remains functional - serving millions daily.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782717127/pexels-roman-saienko-1867764487-28867947_kdkooi.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-5 sm:py-7">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-2 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c]">
           List of Top UNESCO World Heritage Sites in India
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cityData.map((city) => (
            <div
              key={city.name}
              className="group overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] sm:h-[260px] bg-[#faf7f3] overflow-hidden">
                {city.image ? (
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
                    via pexels
                  </p>
                )}

                {/* City Name Overlay (Mobile) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:hidden">
                  <h3 className="text-white text-[16px] font-semibold flex items-center gap-2">
                    {city.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="mt-2">
                <p className="text-[10px] sm:text-[11px] text-gray-600 font-light">
                    via pexels
                  </p>
                {/* City Name (Desktop) */}
                <h3 className="hidden mt-3 md:flex text-[14px] md:text-[16px] font-bold text-[#2c2c2c] mb-2 items-center gap-2">
                  {city.name}
                </h3>

                {/* Description */}
                <p className="text-[12px] mt-2 md:mt-0 sm:text-[13px] leading-relaxed text-gray-600 font-light line-clamp-3 md:line-clamp-4">
                  {city.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}