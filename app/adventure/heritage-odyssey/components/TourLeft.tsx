"use client";

import Image from "next/image";

const places = [
  {
    id: "delhi",
    title: "Delhi- A Blend Of History & Royalty",
    description:
      "Discover Delhi, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.",
    image: "/adventure/heritage-odyssey/delhi.webp",
  },
  {
    id: "jaipur",
    title: "Jaipur – The Pink City & Heart Of Rajasthan",
    description:
      "One of the most visited & loved city of Rajasthan is Jaipur. It is considered as a UNESCO World Heritage city & the heart of Rajasthan. The beautiful Pink city famous for its Grand forts & palaces, touristic spot & the best shopping site for traditional & rajasthani aesthetics",
    image: "/adventure/heritage-odyssey/jaipur.webp",
  },
  {
    id: "agra",
    title: "Agra – Where History Rules Supreme",
    description:
      "A world where the echoes of the Mughal empire still linger, and uncover a marvel born from a timeless love tale: The Taj Mahal. Explore beautiful tombs, stately forts, and vibrant marketplaces that eagerly await your presence.",
    image: "/adventure/heritage-odyssey/agra.jpg",
  },
  {
    id: "ajanta",
    title: "Ajanta & Ellora- An Ancient Canvas Carved In Rock",
    description:
      "The Ajanta & Ellora Caves are UNESCO World Heritage Site world famous for ancient rock-cut temples & amazing cave paintings, which shows exceptional artistic & architectural achievements & breath-taking frescoes which date back to 2nd century BC.",
    image: "/adventure/heritage-odyssey/ajanta.webp",
  },
  {
    id: "cochin",
    title: "Cochin – Where History Meets Commerce",
    description:
      "Cochin, is former name of Kochi, popularly known as the Queen of the Arabian Sea, is a busy commercial hub rich in spice trading. It is the centre of world spice trade for many centuries. It is emerging cosmopolitan city with busy life on streets, on the other hand it is also financial, commercial & industrial capital of Kerela. Its great to see that Kochi is the only city ot have underwater metro system which is world’s largest electric boat metro transportation infrastructure.",
    image: "/adventure/heritage-odyssey/cochin.webp",
  },
  {
    id: "alleppey",
    title: "Alleppey – World of Coastal Delights",
    description:
      "Alleppey, officially known as Alappuzha, famous among the travellers is also known as “Venice of East”. The is an immensely beautiful town, embraced by Arabian Sea in the west & many lakes, lagoons & freshwater rivers. Alleppey offers a unique experience with lush paddy fields, traditional houseboats in serene water & coconut groves.This town is also famous for its Nehru Trophy Boat Race where tourists come across the globe. This town has rich cultural heritage & natural beauty, which makes it a must visit destination for travellers which assures peace of mind amidst nature’s beauty.",
    image: "/adventure/heritage-odyssey/alleppey.webp",
  },
  {
    id: "thekkady",
    title: "Thekkady – Where Nature Rules",
    description:
      "Located in the Idukki district of Kerela, Thekkady is a beautiful hill station adorned with lush greenery, amazing landscapes & diverse wildlife. Here is the famous Periyar National Park, which is a sanctuary that has variety of animals which are even exotic in their natural habitat. The beautiful Periyar lake which is located within the park have the facilities of boat cruises which offers travellers unique experience to watch wildlife along the water edges.",
    image: "/adventure/heritage-odyssey/thekkady.webp",
  },
  {
    id: "munnar",
    title: "Munnar – South India’s Alpine Haven",
    description:
      "Located in the Idukki district of Kerela, Thekkady is a beautiful hill station adorned with lush greenery, amazing landscapes & diverse wildlife. Here is the famous Periyar National Park, which is a sanctuary that has variety of animals which are even exotic in their natural habitat. The beautiful Periyar lake which is located within the park have the facilities of boat cruises which offers travellers unique experience to watch wildlife along the water edges.",
    image: "/adventure/heritage-odyssey/munnar.webp",
  },
  {
    id: "mumbai",
    title: "Mumbai – A City Of Dreams",
    description:
      "Located in the Idukki district of Kerela, Thekkady is a beautiful hill station adorned with lush greenery, amazing landscapes & diverse wildlife. Here is the famous Periyar National Park, which is a sanctuary that has variety of animals which are even exotic in their natural habitat. The beautiful Periyar lake which is located within the park have the facilities of boat cruises which offers travellers unique experience to watch wildlife along the water edges.",
    image: "/adventure/heritage-odyssey/mumbai.webp",
  },
];

export default function TourLeft() {
  return (
    <div className="space-y-16">

      {places.map((place, index) => (
        <section
          key={index}
          id={place.id}
          className="scroll-mt-24 space-y-6"
        >
          {/* Title */}
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            {place.title}
          </h2>
          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] font-[300] md:text-[14px] text-justify">
            {place.description}
          </p>

          {/* Image */}
          <div className="relative w-full rounded-md overflow-hidden shadow-md -mb-6 md:mb-0">
            <Image
              src={place.image}
              alt={place.title}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </section>
      ))}

    </div>
  );
}