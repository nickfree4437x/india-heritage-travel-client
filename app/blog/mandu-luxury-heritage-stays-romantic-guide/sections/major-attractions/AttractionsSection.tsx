"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Jahaz Mahal (Ship Palace)",
    description:
      `Built between Munj Talao and Kapur Talao lakes, Jahaz Mahal spans 120 metres and appears to float on water, especially during and after the monsoon. Originally a pleasure palace and harem quarters, it remains Mandu's most photographed monument.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789370872/Jahaz_Mahal_on_the_bank_of_Hauz-i-Shamsi_aq8frh.jpg",
  },
  {
    name: "Hindola Mahal (Swing Palace)",
    description: 
      `Named so because of its sloping and buttressed walls that make it look like a swing, the hall was used as an audience hall, perhaps for a royal darbar.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789370918/Hindola_Mahal__Mandu__India_gscifx.jpg",
  },
  {
    name: "Hoshang Shah's Tomb",
    description:
      `India's first marble mausoleum, built for the ruler who founded Mandu as Malwa's capital. Its lattice screens, corner turrets and proportion have been studied by historians as a likely precursor to the Taj Mahal.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789371038/images_xdkdlq.jpg",
  },
  {
    name: "Jami Masjid",
    description:
      `Begun by Hoshang Shah and completed by Mahmud Khilji in 1454, this mosque was inspired by the Great Mosque of Damascus, with a vast courtyard and a striking domed porch reached by a wide flight of steps.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789371137/Inside_of_Jama_Masjid_i5ihcy.jpg",
  },
  {
    name: "Rani Roopmati's Pavilion",
    description:
      `Originally built as an army observation post, this pavilion was later expanded so Roopmati could see the Narmada River from her window. It remains Mandu's best sunset point, with sweeping views across the valley.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789371306/images_1_ssy0dm.jpg",
  },
  {
    name: "Baz Bahadur's Palace",
    description:
      `A 16th-century pleasure palace with expansive courtyards and terraces, built in a mix of Rajput and Mughal styles, and visible from Roopmati's Pavilion above.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789371535/B%C3%A1z_Bah%C3%A1dur_and_R%C3%BApmat%C3%AD_on_horses_with_attendants_wbaeui.jpg",
  },
  {
    name: "Ashrafi Mahal & Rewa Kund",
    description:
      `Ashrafi Mahal began as a madrasa before later rulers added a tomb and victory tower. Rewa Kund, meanwhile, is a sacred water tank linked to Roopmati's daily rituals, still fed by a sophisticated Mughal-era water channel.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789371605/rewa-kund_vpje49.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions in Mandu
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
                    via wikipedia
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
                    via wikipedia
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