"use client";

import Image from "next/image";
import WhyChooseSection from "@/src/tours/why-choose/WhyChooseSection";

const places = [
  {
    id: "delhi",
    title: "Delhi – History, Heritage & Culture",
    description:
      "Discover Delhi, a fascinating blend of history and modernity. Explore Old Delhi's vibrant streets, historic landmarks, Mughal-era architecture, and cultural experiences while discovering the heritage of India's capital.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779539363/delhi_aoi77f.webp",
    alt: "Delhi sightseeing tour featuring India Gate Red Fort Qutub Minar and heritage landmarks",
  },
  {
    id: "jaipur",
    title: "Jaipur – The Pink City & Royal Heritage",
    description:
      "Jaipur, the Pink City and heart of Rajasthan, is renowned for its grand forts, magnificent palaces, historic landmarks, and vibrant bazaars. Discover the city's rich royal heritage and traditional Rajasthani culture.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779539407/jaipur_f6patm.webp",
    alt: "Jaipur Pink City tour featuring Amber Fort Hawa Mahal and Rajasthan heritage attractions",
  },
  {
    id: "agra",
    title: "Agra – Taj Mahal & Mughal Heritage",
    description:
      "Agra brings India's Mughal heritage to life through magnificent monuments, historic forts, and vibrant marketplaces. Discover the iconic Taj Mahal, a timeless symbol of love and one of India's most celebrated heritage landmarks.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779539444/agra_ffjtu6.jpg",
    alt: "Agra Taj Mahal tour showcasing Mughal architecture and historic landmarks in India",
  },
  {
    id: "ajanta",
    title: "Ajanta & Ellora- An Ancient Canvas Carved In Rock",
    description:
      "The Ajanta and Ellora Caves are UNESCO World Heritage Sites renowned for their ancient rock-cut architecture, intricate sculptures, and remarkable cave paintings. Together, they showcase India's extraordinary artistic and architectural heritage.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779539485/ajanta_fiwigv.webp",
    alt: "Ajanta and Ellora Caves UNESCO World Heritage Site with ancient rock cut temples and cave art",
  },
  {
    id: "cochin",
    title: "Cochin – Colonial Heritage & Cultural Traditions",
    description:
      "Cochin, is former name of Kochi, popularly known as the Queen of the Arabian Sea, is a busy commercial hub rich in spice trading. It is the centre of world spice trade for many centuries. It is emerging cosmopolitan city with busy life on streets, on the other hand it is also financial, commercial & industrial capital of Kerela. Its great to see that Kochi is the only city ot have underwater metro system which is world’s largest electric boat metro transportation infrastructure.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779539525/cochin_pfsgid.webp",
    alt: "Cochin Kerala heritage tour featuring Fort Kochi colonial landmarks and cultural attractions",
  },
  {
    id: "alleppey",
    title: "Alleppey – Kerala Backwaters & Houseboats",
    description:
      "Alleppey, officially known as Alappuzha, famous among the travellers is also known as “Venice of East”. The is an immensely beautiful town, embraced by Arabian Sea in the west & many lakes, lagoons & freshwater rivers. Alleppey offers a unique experience with lush paddy fields, traditional houseboats in serene water & coconut groves.This town is also famous for its Nehru Trophy Boat Race where tourists come across the globe. This town has rich cultural heritage & natural beauty, which makes it a must visit destination for travellers which assures peace of mind amidst nature’s beauty.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779539595/alleppey_bddwmy.webp",
    alt: "Alleppey Kerala backwaters with traditional houseboat cruise and scenic waterways",
  },
  {
    id: "thekkady",
    title: "Thekkady – Where Nature Rules",
    description:
      "Located in the Idukki district of Kerela, Thekkady is a beautiful hill station adorned with lush greenery, amazing landscapes & diverse wildlife. Here is the famous Periyar National Park, which is a sanctuary that has variety of animals which are even exotic in their natural habitat. The beautiful Periyar lake which is located within the park have the facilities of boat cruises which offers travellers unique experience to watch wildlife along the water edges.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779539634/thekkady_aahblp.webp",
    alt: "Thekkady Periyar National Park wildlife sanctuary and spice plantation experience in Kerala",
  },
  {
    id: "munnar",
    title: "Munnar – Tea Plantations & Hill Landscapes",
    description:
      `Munnar, the picturesque hill station of Kerala, is nestled in the Western Ghats and is renowned for its rolling tea plantations, mist-covered mountains, and breathtaking natural beauty. Often referred to as the 'Kashmir of South India', Munnar offers visitors a peaceful retreat surrounded by lush green valleys, waterfalls, and scenic landscapes.
      The region is home to sprawling tea estates, wildlife sanctuaries, and diverse flora and fauna, making it a paradise for nature lovers and photographers. Visitors can explore tea museums, enjoy panoramic viewpoints, and experience the serene atmosphere that makes Munnar one of South India's most sought-after travel destinations.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779539698/munnar_rohruu.webp",
    alt: "Munnar tea plantations rolling hills and scenic landscapes in Kerala India",
  },
  {
    id: "mumbai",
    title: "Mumbai – Colonial Heritage & Iconic Landmarks",
    description:
      `Mumbai, famously known as the "City of Dreams", is India's financial capital and one of the country's most vibrant metropolitan cities. Located along the Arabian Sea, Mumbai is renowned for its iconic landmarks, diverse culture, colonial architecture, and dynamic lifestyle. The city perfectly blends modern skyscrapers with historic monuments, creating a unique urban experience.
       Visitors can explore famous attractions such as the Gateway of India, Marine Drive, Chhatrapati Shivaji Maharaj Terminus, and the bustling local markets that showcase the city's energy and character. As the heart of India's film industry and a hub of culture, commerce, and entertainment, Mumbai offers unforgettable experiences for travelers seeking history, culture, and modern city life.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779539735/mumbai_sl8woj.webp",
    alt: "Mumbai city tour featuring Gateway of India Marine Drive cultural landmarks and vibrant local experiences",
  },
];

export default function TourLeft() {
  return (
    <div className="space-y-8 md:space-y-12">

      <WhyChooseSection/>

      {places.map((place, index) => (
        <section
          key={index}
          id={place.id}
          className="scroll-mt-24 space-y-6"
        >
          {/* Title */}
          <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            {place.title}
          </h3>
          {/* Description */}
          <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] font-[300] md:text-[14px] text-justify">
            {place.description}
          </p>

          {/* Image */}
          <div className="relative w-full rounded-md overflow-hidden shadow-md -mb-2 md:mb-0">
            <Image
              src={place.image}
              alt={place.alt}
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