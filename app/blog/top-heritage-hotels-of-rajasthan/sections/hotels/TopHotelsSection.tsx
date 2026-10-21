"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Rambagh Palace - Jaipur",
    description:
     "Once the residence of Jaipur's royal family, Rambagh Palace is now a luxury heritage hotel managed by Taj. Known for its grand architecture, landscaped gardens, and elegant dining spaces, it offers a glimpse into Jaipur's royal past.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782556316/Rambagh_Palace_Jaipur_k4gjer.jpg"
  },
  {
    name: "Rajmahal Palace RAAS - Jaipur",
    description:
     "Rajmahal Palace is a historic Jaipur property known for its royal heritage and distinctive interiors. Its design combines period architecture with contemporary styling, making it an option for travellers seeking a different take on a traditional palace stay.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782556469/Rajmahal_Palace_RAAS_Jaipur_hpnygt.jpg",
  },
  {
    name: "Samode Palace - Near Jaipur",
    description:
     "Located in Samode near Jaipur, this historic palace is known for its ornate interiors, traditional frescoes, and mirror work. Its courtyards and richly decorated halls showcase the craftsmanship associated with Rajasthan's palace architecture.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782556629/Samode_Palace_Jaipur_jibfwf.jpg",
  },
  {
    name: "Umaid Bhawan Palace - Jodhpur",
    description:
     "Umaid Bhawan Palace is a landmark of 20th-century architecture in Jodhpur, combining Art Deco influences with royal heritage. Part of the complex remains a royal residence, while other sections operate as a luxury hotel and museum.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782556699/Umaid_Bhawan_Palace_Jodhpur_jnhoia.jpg",
  },
  {
    name: "RAAS Jodhpur",
    description:
     "Set in Jodhpur's historic old city, RAAS is known for its contemporary design and views of Mehrangarh Fort. Its blend of modern architecture and the surrounding historic streets makes it a distinctive base for exploring the Blue City.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782556876/RAAS_-_Cond%C3%A9_Nast_Traveler_j7ooxn.jpg",
  },
  {
    name: "Taj Lake Palace - Udaipur",
    description:
     "Built in the 18th century on Lake Pichola, Taj Lake Palace is renowned for its white-marble architecture and lakeside setting. Boat transfers connect guests to the palace, where historic character and views across Udaipur create a distinctive luxury stay.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782556963/Taj_Lake_Palace_Udaipur_xxwym9.jpg",
  },
  {
    name: "The Oberoi Udaivilas - Udaipur",
    description:
     "Located on the banks of Lake Pichola, The Oberoi Udaivilas is a luxury hotel inspired by traditional Mewar architecture. Its courtyards, landscaped grounds, and intricate decorative details combine regional design influences with contemporary hospitality.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782557066/The_Oberoi_Udaivilas_Udaipur_gm5btx.png",
  },
  {
    name: "Shiv Niwas Palace - Udaipur",
    description:
     "Shiv Niwas Palace is a historic crescent-shaped palace within Udaipur's City Palace complex, now operated as a heritage hotel. Its distinctive architecture and location make it an appealing option for travellers interested in the city's royal history.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782557166/Shiv_Niwas_Palace_Udaipur_pmbm6q.jpg",
  },
  {
    name: "Suryagarh - Jaisalmer",
    description:
     "Suryagarh is a luxury property near Jaisalmer, designed with inspiration from the region's traditional fort and haveli architecture. Sandstone tones, carved details, and carefully designed courtyards create a desert-inspired setting for exploring the heritage of western Rajasthan.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782557340/pexels-navlakha-33667487_bpns2h.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-2 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c]">
           Top Heritage Hotels in Rajasthan
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
                  <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
                    Image via pexels
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
                    Image via unsplash
                  </p>
                {/* City Name (Desktop) */}
                <h3 className="hidden mt-3 md:flex text-[14px] md:text-[15px] font-bold text-[#2c2c2c] mb-2 items-center gap-2">
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