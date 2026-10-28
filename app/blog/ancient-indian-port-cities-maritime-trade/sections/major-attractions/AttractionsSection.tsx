"use client";
import Image from "next/image";

// Major attractions data
const cityData = [
  {
    name: "Lothal, Gujarat: a Harappan port-town",
    description:
      `Lothal in Gujarat is a key Indus Valley site for understanding maritime trade, featuring a planned settlement, craft workshops, a warehouse, and a basin widely believed to be a tidal dockyard. It's on UNESCO's Tentative List - a potential but not yet inscribed World Heritage Site.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1793182118/Pot_furnace_lothal_xgpdfk.jpg",
  },
  {
    name: "Muziris and Pattanam, Kerala: pepper and the western sea",
    description:
      `Based on classical accounts and ancient Tamil literature, Muziris was a thriving port on the Malabar Coast, known for its pepper trade and sea links reaching the Red Sea and Mediterranean. Though its exact location remains unknown, excavations at Pattanam, near Kodungallur and North Paravur, have confirmed the existence of an ancient port city.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1793182250/Pattanam_-_Muziris_excavation_museum_-_Muziris_Heritage_-_WikiSangamotsavam_2018__Kottappuram__Kodungalloor__10_rovhhe.jpg",
  },
  {
    name: "Arikamedu, near Puducherry: traces of overseas exchange",
    description:
      `Being located further south from Pondicherry, Arikamedu is an archaeological site that gives physical proof of early business connection with the Mediterranean civilization. The remains like pottery and other objects have proved to be very useful for the archaeologists who have conducted studies on trading in South Asia and elsewhere. It would be much more valuable than a big temple site, to understand the known or the unknown of the site by analyzing the landscape and the remains of the site with the help of some expert of the site.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1793182374/Arikamedu_nnrnag.jpg",
  },
  {
    name: "Kaveripattinam or Puhar, Tamil Nadu: a port in Tamil literature",
    description:
      `Puhar (Kaveripattinam), an important Chola-era seaport near the Kaveri's mouth, appears in early Tamil literature as a hub of markets and foreign trade. Coastal shifts mean the city survives only through literary references, geography, and regional museums rather than a complete archaeological site.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1793182455/Poompuhar-View-from-the-Lighthouse_brbwzf.jpg",
  },
  {
    name: "Tamralipta, West Bengal: gateway to the Bay of Bengal",
    description:
      `Tamralipta, identified with present-day Tamluk in West Bengal, was a major commercial port connected to the Bay of Bengal and its river systems. Its importance lay at the intersection of maritime trade routes, river networks, and eastern India's religious and cultural links. Much has changed and physical remains are few - making it a destination for those drawn to historical context rather than monuments.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1793182590/Majestic_Ruins_of_Tamluk_Rajbari_scidow.jpg",
  },
  {
    name: "Bharuch and Sopara: western gateways",
    description:
      `The location of Bharuch in Gujarat relates to the ancient port city of Barygaza mentioned in ancient texts. The proximity of the Narmada estuary made it easy for trade activities between maritime and inland routes. Ancient accounts provide us information about a bustling marketplace with trade taking place between maritime vessels, river boats, and carts. The present day city of Bharuch is an active urban center, hence the experience of visiting a heritage site would be learning how continuity is connected with geography.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1793182696/BrSwamitemple_cr7xbc.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-1">
            Six historic ports and places to explore
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