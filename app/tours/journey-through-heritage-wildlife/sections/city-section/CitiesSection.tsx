"use client";

import Image from "next/image";
import WhyChooseSection from "@/src/tours/why-choose/WhyChooseSection";

const cities = [
  {
    id: "delhi",
    title: "Delhi – History, Heritage & Culture",
    desc: "Discover Delhi, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours with this Heritage and Wildlife Tour. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779533070/delhi_thhw1n.jpg",
    alt: "Delhi heritage tour featuring India Gate Red Fort Qutub Minar and historic landmarks",
  },
  {
    id: "mandawa",
    title: "Mandawa – Timeless Heritage & Frescoed Havelis",
    desc: "Mandawa is a town where walls speak tales of artistry. In this Heritage and Wildlife Tour, explore Rajasthani gem with its streets decorated with beautiful frescoes and havelis, each a live canvas of history and beauty. This is a living gallery of Rajasthan’s architectural magnificence and the stories echoes on its walls.",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779533104/mandawa_zuzxve.jpg",
    alt: "Mandawa heritage town featuring fresco painted havelis and Rajasthan cultural architecture",
  },
  {
    id: "pushkar",
    title: "Pushkar – Sacred Lake, Temples & Cultural Heritage",
    desc: "The city of Pushkar is home to the only temple dedicated to Lord Brahma in the whole world. Hindus consider a journey to Pushkar to be the ultimate pilgrimage that must be undertaken to attain salvation.  Pushkar Camel Fair, Held each November at the time of the Kartik Purnima (full moon),  is one of India’s most highly-rated travel experiences attracting thousands of camels, horses and cattle and visited by over 400,000 people over a period of around fourteen days.",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779533145/pushkar_pauuti.jpg",
    alt: "Pushkar Rajasthan featuring Brahma Temple sacred lake and cultural heritage attractions",
  },
  {
    id: "bundi",
    title: "Bundi – Historic Palaces, Stepwells & Heritage",
    desc: "This enchanting town of narrow lanes of Brahmin-blue houses with a temple at every turn, creating a unique visual tapestry. Explore its historic palaces, intricate step wells, and vibrant markets to immerse youself in the rich culture of Rajasthan. This is a less explored traveller’s paradise with great views.",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779533313/bundi_nfbpb6.png",
    alt: "Traditional blue houses and historic stepwells in Bundi Rajasthan showcasing hidden architectural treasures",
  },
  {
    id: "ranthambore",
    title: "Ranthambore – Tiger Safaris & Wildlife Adventure",
    desc: "This wildlife heaven lies in the heart of Rajasthan, where tigers rule the lush forest. Ranthambore National Park is a wildlife reserve. Visit Ranthambore fort lies on a hilltop & Ganesh Mandir temple. Explore the rugged beauty, spot majestic creatures of the earth, and set on thrilling jungle safaris. Ranthambore, where nature’s raw power captivates all who visit",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779533349/ranthambore_hynmaj.jpg",
    alt: "Ranthambore National Park featuring majestic Bengal tigers and lush forest landscapes in Rajasthan",
  },
  {
    id: "jaipur",
    title: "Jaipur – Pink City, Forts & Royal Heritage",
    desc: "Jaipur is known as the heart of Rajasthan & a UNESCO world heritage city. It is among one of the most visited tourist destinations in Rajasthan. Jaipur is famous for its grand forts and palaces, local cuisines, adventure tourism, pilgrimage sites and local shopping.",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779533393/jaipur_ievso0.jpg",
    alt: "Jaipur Pink City tour featuring Amber Fort Hawa Mahal and Rajasthan heritage attractions",
  },
  {
    id: "agra",
    title: "Agra – Taj Mahal, Mughal Heritage & History",
    desc: "Agra is worldwide famous for the majestic Taj Mahal which is a World heritage site & among the Seven Wonders of the World. Discover history of the beautiful era of love.  Explore beautiful tombs, stately forts, and vibrant marketplaces that eagerly await your presence.",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779533437/agra_ryrd0q.jpg",
    alt: "Agra Taj Mahal tour showcasing Mughal architecture and historic landmarks in India",
  },
];

export default function CitiesSection() {
  return (
    <div className="space-y-8 md:space-y-12">

      <WhyChooseSection/>

      {cities.map((city) => (
        <div key={city.id} id={city.id} className="w-full scroll-mt-24 md:scroll-mt-28">

          {/* TITLE */}
          <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            {city.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] font-[300] md:text-[14px] text-justify">
            {city.desc}
          </p>

          {/* IMAGE */}
          <div className="relative w-full rounded-md overflow-hidden shadow-md -mb-2 md:mb-0">
            <Image
              src={city.img}
              alt={city.alt}
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