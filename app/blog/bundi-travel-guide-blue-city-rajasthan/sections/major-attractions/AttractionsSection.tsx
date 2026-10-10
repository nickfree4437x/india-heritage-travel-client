"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Taragarh Fort - The Star Fort",
    description:
      `Taragarh Fort - the "Star Fort" - was built in 1354 on a hill above Bundi, making it one of Rajasthan's earliest hill forts. Its broken walls, escape passages, and defensive bastions offer wide views over the blue city and the Aravalli hills - especially stunning at sunset.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788003313/Bundi-Garh_Palace-Diwan_I_Am-Stables-20131015_q8najo.jpg",
  },
  {
    name: "Bundi Palace (Garh Palace) & the Chitrashala",
    description: 
      `Bundi Palace sits below Taragarh Fort - a sprawling complex of courtyards and halls shaped over time, entered through the Hathi Pol gateway. Inside, Chhatra Mahal and Badal Mahal still hold old frescoes.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788003420/303915422Garh-palace_pv4wuq.jpg",
  },
  {
    name: "Raniji ki Baori & the Stepwells of Bundi",
    description:
      `Bundi is Rajasthan's stepwell hub, with Raniji ki Baori - built in 1699 by Queen Rani Nathavati Ji - descending 46 metres with carved deities along its levels. Nearby, Dabhai Kund and Nagar Sagar Kund offer quieter examples of the region's ancient water-harvesting heritage.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788003554/Rani_ji_ki_Baori_Bundi_m0uzta.jpg",
  },
  {
    name: "Nawal Sagar Lake & Sukh Mahal",
    description:
      `Nawal Sagar Lake reflects the palace and fort on quiet mornings - one of Bundi's most photographed views. Nearby, Sukh Mahal, an 18th-century summer palace where Kipling stayed while writing Kim, now houses a small museum of sculpture and miniature art.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788003603/Bundi-_uwkyqm.jpg",
  },
  {
    name: "The 84-Pillared Cenotaph",
    description:
      `The 84-Pillared Cenotaph, also known as Chaurasi Khambon ki Chhatri, is a striking domed memorial near Bundi's old city. Built in the 17th century, it features 84 intricately carved pillars and offers panoramic views over the surrounding landscape.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788003693/Chaurasi_Khambon_ki_Chhatri_up59c8.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions in Bundi
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
                    Image via wikipedia
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
                    Image via wikipedia
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