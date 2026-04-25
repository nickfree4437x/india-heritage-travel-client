"use client";

import Image from "next/image";

const places = [
  {
    id: "mumbai",
    title: "Mumbai – A City Of Dreams",
    description: `Mumbai, the “City of Dreams”, is a bustling financial capital of India & also the largest city in the country. The location of it along the Arabian Sea makes it a beautiful city with diverse culture, fast-paced life & historic landmark.
    The most famous iconic landmark Gateway of India, & Chhatrapati Shivaji Maharaj Terminus,is also a UNESCO World Heritage site & architectural marvel. The most famous Marine Drive also called as “Queen’s Necklace” due to due to its twinkling night lights & another charm of Mumbai is Juhu beach provides an endless experience.`,
    image: "/adventure/splendors/mumbai.jpg",
  },
  {
    id: "cochin",
    title: "Cochin – Where History Meets Commerce",
    description: `Cochin, is former name of Kochi, popularly known as the Queen of the Arabian Sea, is a busy commercial hub rich in spice trading. It is the centre of world spice trade for many centuries. It is emerging cosmopolitan city with busy life on streets, on the other hand it is also financial, commercial & industrial capital of Kerela. Its great to see that Kochi is the only city ot have underwater metro system which is world’s largest electric boat metro transportation infrastructure.
    While you travel to Fort Kochi, you’ll feel a different time period. The fort is settled into history & culture through ages. Kochi is a place with beautiful monuments & variety of linguistic & ethenic community such as Arabian, Dutch, Phoenician, Portuguese, Chinese, and British influences.`,
    image: "/adventure/splendors/cochin.jpg",
  },
  {
    id: "alleppey",
    title: "Alleppey – World Of Coastal Delights",
    description: `Alleppey, officially known as Alappuzha, famous among the travellers is also known as “Venice of East”. The is an immensely beautiful town, embraced by Arabian Sea in the west & many lakes, lagoons & freshwater rivers. Alleppey offers a unique experience with lush paddy fields, traditional houseboats in serene water & coconut groves.
    This town is also famous for its Nehru Trophy Boat Race where tourists come across the globe. This town has rich cultural heritage & natural beauty, which makes it a must visit destination for travellers which assures peace of mind amidst nature’s beauty`,
    image: "/adventure/splendors/alleppey.jpg",
  },
  {
    id: "thekkady",
    title: "Thekkady – Where Nature Rules",
    description: `Located in the Idukki district of Kerela, Thekkady is a beautiful hill station adorned with lush greenery, amazing landscapes & diverse wildlife. Here is the famous Periyar National Park, which is a sanctuary that has variety of animals which are even exotic in their natural habitat. The beautiful Periyar lake which is located within the park have the facilities of boat cruises which offers travellers unique experience to watch wildlife along the water edges.
    The spice plantation of Thekkady is another famous spot where one can explore & learn more about cultivation of spices such as pepper, vanilla & cardamom. Along with these it has variety of outdoor activity too like trekking, nature walks, bamboo rafting. Thekaddy is a heaven for adventure enthusiast as well as nature lover.`,
    image: "/adventure/splendors/thekkady.jpg",
  },
  {
    id: "munnar",
    title: "Munnar – South India’s Alpine Haven",
    description: `Munnar, the mesmerising hill-station in the Western Ghats of Kerala, is famous for its amazing rolling hills, cool climate, beautiful valleys & tea plantation. Also referred to as the “Kashmir of South India”, it’s a place of natural beauty. Located along the banks of three beautiful rivers – Madupetti, Nallathanni, and Periavaru, Munnar also have vast tea plantations & natural bird sanctuaries. Here you can also explore the tea museums & factories to learn more about the process of tea production. It have a rich biodiversity & breath-taking scenery, makes it a perfect gataway dor trekkers & nature lovers.`,
    image: "/adventure/splendors/munnar.jpg",
  },
  {
    id: "ooty",
    title: "Ooty – King Of Hillstations",
    description: `It is a picturesque hillstation located in NIlgiri hills of Tamil Nadu. It is famous for its scenic beauty, pleasant climate, botanical gardens, ooty lake & lush tea plantations.`,
    image: "/adventure/splendors/ooty.jpg",
  },
  {
    id: "mysore",
    title: "Mysore – A City Of Cultural Splendour",
    description: `Mysore famous for its rich heritage which include the most famous Mysore Palace. Which have carved wooden doors mosaic floors. Another famous things is Dasara festival, it aromatic sandalwood products & natural beauty.`,
    image: "/adventure/splendors/mysore.jpg",
  },
  {
    id: "hassan",
    title: "Hassan – A Heritage City With Cultural Richness",
    description: `Hassan famous for Carnatic music, vibrant flowers, Hoysala architecture & delectable cuisines. It has 19th century French missionaries on its architecture & have magic in it.`,
    image: "/adventure/splendors/hassan.jpg",
  },
  {
    id: "hampi",
    title: "Hampi – City Of Ancient Treasures",
    description: `Also considered as UNESCO World Site in Karnataka which holds unique historical treasures. It have 500 ancient monuments, markets, temples. It has famous Vijaynagar Empire which is an open-air museum which have 100 locations to discover the wonders of Indian history.`,
    image: "/adventure/splendors/hampi.jpg",
  },
];

export default function TourContent() {
  return (
    <div>

      {places.map((place, index) => (
        <div
          key={index}
          id={place.id} // 🔥 IMPORTANT (scroll target)
          className="mb-16 scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#2c2c2c]">
            {place.title}
          </h2>

          <p className="text-gray-700 text-[15px] leading-relaxed mb-6 whitespace-pre-line text-justify">
            {place.description}
          </p>

          <div className="relative w-full h-[250px] md:h-[420px] rounded-lg overflow-hidden">
            <Image
              src={place.image}
              alt={place.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}

    </div>
  );
}