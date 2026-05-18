"use client";

import Image from "next/image";

const cities = [
  {
    id: "delhi",
    title: "Delhi - A blend of History & royalty",
    desc: "Discover Delhi, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours with this Heritage and Wildlife Tour. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.",
    img: "/adventure/wildlife/delhi.jpg",
  },
  {
    id: "mandawa",
    title: "Mandawa – A Town Of Timeless Heritage And Beauty",
    desc: "Mandawa is a town where walls speak tales of artistry. In this Heritage and Wildlife Tour, explore Rajasthani gem with its streets decorated with beautiful frescoes and havelis, each a live canvas of history and beauty. This is a living gallery of Rajasthan’s architectural magnificence and the stories echoes on its walls.",
    img: "/adventure/wildlife/mandawa.jpg",
  },
  {
    id: "pushkar",
    title: "Pushkar – Where Desert Charm Meets Holy Peace",
    desc: "The city of Pushkar is home to the only temple dedicated to Lord Brahma in the whole world. Hindus consider a journey to Pushkar to be the ultimate pilgrimage that must be undertaken to attain salvation.  Pushkar Camel Fair, Held each November at the time of the Kartik Purnima (full moon),  is one of India’s most highly-rated travel experiences attracting thousands of camels, horses and cattle and visited by over 400,000 people over a period of around fourteen days.",
    img: "/adventure/wildlife/pushkar.jpg",
  },
  {
    id: "bundi",
    title: "Bundi – Rajasthan’s Hidden Gem",
    desc: "This enchanting town of narrow lanes of Brahmin-blue houses with a temple at every turn, creating a unique visual tapestry. Explore its historic palaces, intricate step wells, and vibrant markets to immerse youself in the rich culture of Rajasthan. This is a less explored traveller’s paradise with great views.",
    img: "/adventure/wildlife/bundi.jpg",
  },
  {
    id: "ranthambore",
    title: "Ranthambore – Where Wildlife Roams Free",
    desc: "This wildlife heaven lies in the heart of Rajasthan, where tigers rule the lush forest. Ranthambore National Park is a wildlife reserve. Visit Ranthambore fort lies on a hilltop & Ganesh Mandir temple. Explore the rugged beauty, spot majestic creatures of the earth, and set on thrilling jungle safaris. Ranthambore, where nature’s raw power captivates all who visit",
    img: "/adventure/wildlife/ranthambore.jpg",
  },
  {
    id: "jaipur",
    title: "Jaipur – The Pink City & Heart Of Rajasthan",
    desc: "Jaipur is known as the heart of Rajasthan & a UNESCO world heritage city. It is among one of the most visited tourist destinations in Rajasthan. Jaipur is famous for its grand forts and palaces, local cuisines, adventure tourism, pilgrimage sites and local shopping.",
    img: "/adventure/wildlife/jaipur.jpg",
  },
  {
    id: "agra",
    title: "Agra – Where History Rules Supreme",
    desc: "Agra is worldwide famous for the majestic Taj Mahal which is a World heritage site & among the Seven Wonders of the World. Discover history of the beautiful era of love.  Explore beautiful tombs, stately forts, and vibrant marketplaces that eagerly await your presence.",
    img: "/adventure/wildlife/agra.jpg",
  },
];

export default function CitiesSection() {
  return (
    <div className="space-y-20">

      {cities.map((city) => (
        <div key={city.id} id={city.id} className="w-full">

          {/* TITLE */}
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            {city.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] font-[300] md:text-[14.5px] text-justify">
            {city.desc}
          </p>

          {/* IMAGE */}
          <div className="relative w-full rounded-md overflow-hidden shadow-md -mb-6 md:mb-0">
            <Image
              src={city.img}
              alt={city.title}
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