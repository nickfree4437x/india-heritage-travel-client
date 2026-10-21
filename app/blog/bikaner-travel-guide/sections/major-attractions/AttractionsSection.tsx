"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Mehrangarh Fort",
    description:
      `Junagarh Fort (1589–1594) - a flat-land fortress never captured - features seven palaces, including Anup Mahal and Badal Mahal, with a museum of royal artefacts. Open 10 AM–4:30 PM; ₹50/₹300 entry; 2–3 hours; 2 km from Bikaner Junction.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786949947/India_Bikaner_Junagarh_Fort_phogoj.jpg",
  },
  {
    name: "Lalgarh Palace",
    description: 
      `Lalgarh Palace (1902–1926) - designed by Sir Samuel Swinton Jacob - blends Rajput, Mughal, and European styles in red sandstone with lace-like lattice work. The complex includes the Shri Sadul Museum and a heritage hotel.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786950082/The_Laxmi_Niwas_Palace__Bikaner__Rajasthan_gzljqh.jpg",
  },
  {
    name: "Rampuria Havelis",
    description:
      `The Rampuria Havelis in Bikaner's old city - red sandstone merchant mansions with jharokha balconies, floral reliefs, and Victorian-Rajput fusion - are best explored on a guided heritage walk through the narrow lanes.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786950151/maninder-sidhu-4Q0GId_0Fko-unsplash_uucjgp.jpg",
  },
  {
    name: "Karni Mata Temple, Deshnok (The Rat Temple)",
    description:
      `Karni Mata Temple (30 km from Bikaner) - a Mughal-style shrine with marble and silver doors - is home to over 20,000 sacred rats, where white rats are considered lucky. Visitors walk barefoot; open 4 AM–10 PM.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786950342/20191212_%C5%9Awi%C4%85tynia_Karni_Maty_w_De%C5%9Bnok_1031_8078_DxO_1_ude7dw.jpg",
  },
  {
    name: "Gajner Palace & Lake",
    description:
      `Gajner Palace - a former royal hunting lodge on Gajner Lake - is now a heritage hotel set in a 6,000-acre wildlife sanctuary. Spot blackbuck and migratory birds, or simply enjoy lakeside sunset views.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786950436/Gajner_Wildlife_Sanctuary-Courtyard-20131009_urjm6o.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions: Places to Visit in Bikaner
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

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700 mt-3 md:mt-3.5">

          <h2 className="text-[16px] sm:text-[20px] md:text-[20px] font-semibold tracking-wide text-[#2c2c2c]">
            Other Heritage Sites Worth Your Time  
          </h2>
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Bhandasar Jain Temple - this is a 15th–16th-century Jain temple built from marble and sandstone, it’s pretty well known for gold-leaf frescoes  and also that very detailed pillar carving, kinda intricate all the way through.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> National Research Centre on Camel (NRCC) - India’s only proper camel research institute, it has a camel museum, camel-milk ice cream ,and hundreds of camels spread across several breeds. It’s usually open in the afternoons, more or less 2:00–5:30 PM.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Devi Kund Sagar - the royal cenotaph complex where Bikaner’s maharajas were cremated, and the chhatris are ornately carved memorial pavilions, you know, the whole place looks ceremonial.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Prachina Museum - it’s a small museum inside the Junagarh complex, mainly about royal costumes and textiles, not too large but it feels curated.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}