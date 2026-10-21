"use client";
import Image from "next/image";

// Major attractions data
const cityData = [
  {
    name: "Hazarduari Palace",
    description:
      `Hazarduari Palace - the "Palace of a Thousand Doors" - is Murshidabad's grandest architectural ensemble, designed by Colonel Duncan MacLeod of the Bengal Engineers in neoclassical Italianate style for Nawab Humayun Jah between 1829 and 1837. Its famed thousand doors are a mix of real and false, depending on the source. The three-storeyed palace, with its galleries, now houses a museum.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792579761/Hazarduari1_debaditya_chatterjee_kj7nes.jpg",
  },
  {
    name: "Nizamat Imambara",
    description:
      `The Nizamat Imambara, another huge Shia prayer hall, also exists in the same complex. The original structure, which was related to Siraj ud-Daulah, got burnt in 1846, and the current one was constructed in 1848. The Jahan Kosha gun of the Mughal era can be found on the grounds of the Nizamat Imambara. The Medina Mosque and the Clock Tower are also nearby. Public entry might not always be permitted; therefore, it is advised to check beforehand.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792579886/The_Imambara_at_Hazarduary_Palace_upeba6.jpg",
  },
  {
    name: "Katra Mosque",
    description:
      `Built by Murshid Quli Khan as a mosque and madrasa, the Katra Mosque was reportedly modelled on the Kaaba and designed to house hundreds of Quranic students. The founder's grave lies beneath its entrance stairs. The 1897 earthquake cracked its arches and left sections leaning, but the scale and the red brick remain moving.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792585766/KatraMasjidexterior_endkcw.jpg",
  },
  {
    name: "Motijheel (Pearl Lake)",
    description:
      `Just off the Berhampore road, Motijheel is a horseshoe-shaped lake with the shell of a palace once occupied by Siraj ud-Daulah's grandmother, Ghasiti Begum, and later by Lord Clive. There is a small museum and an overgrown family graveyard. Visit in the late afternoon and leave before dark.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792580065/Motijheel_Mosque_Murshidabad_By_Ansuman_Bhattacharya_fz7oe7.jpg",
  },
  {
    name: "The Jagat Seth Legacy at Kathgola Gardens",
    description:
      `The Kathgola garden, which belongs to the descendants of the Jagat Seth family, is made up of orchards, pavilions, marble sculptures, ornamental baths, and a Jain temple. This garden speaks volumes of the wealth of the community, the Jains merchants, who helped finance the Nawabs. An entrance fee is required to enter the garden.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792580138/Kathgola_satyajit_sinha_f4vaoy.jpg",
  },
  {
    name: "Khushbagh & Across the River",
    description:
      `The Khushbagh is the resting place of the Nawabs and is an area full of tranquility and shade to relax in. The Wasif Manzil is one more old Nawabi palace close to the main building complex. Across the river, there is the Kiriteswari Temple, which is a sacred Hindu temple.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792580273/Wasif_Manjil_alias_New_Palace_at_Murshidabad_u23c54.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-1">
            Murshidabad Nawabi Heritage and Silk: The Major Attractions
          </h2>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cityData.map((city, index) => (
            <div
              key={`${city.name}-${index}`}
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

      </div>
    </section>
  );
}