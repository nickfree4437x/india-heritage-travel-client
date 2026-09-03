"use client";

import WhyChooseSection from "@/src/tours/why-choose/WhyChooseSection";
import CitySection from "../city-section/CitySection";
import HighlightsSection from "../hightlights/HighlightsSection";

const citiesData = [
  {
    id: "delhi",
    title: "Delhi- A blend of History & Royalty",
    description: "Discover Delhi, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531449/delhi_gx7c7g.jpg",
    alt: "Old Delhi heritage landmarks in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
  },
  {
    id: "mandawa",
    title: "Mandawa – A Town Of Timeless Heritage And Beauty",
    description: "Mandawa is a town where walls speak tales of artistry. This Rajasthani gem has its streets decorated with beautiful frescoes and havelis, each a live canvas of history and beauty. This is a living gallery of Rajasthan’s architectural magnificence and the stories echoes on its walls.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531490/mandawa_xhmzzs.jpg",
    alt: "Mandawa heritage havelis in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
  },
  {
    id: "bikaner",
    title: "Bikaner – A Desert Oasis Of History And Camels",
    description:
      "Bikaner is a desert gem with history twisted into its castles and palaces, promises a captivating journey through Rajasthan’s northeast. It is known as Camel Country, it’s a place where camels gracefully pass over the landscape, making the city more attractive.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531520/bikaner_feelqg.jpg",
    alt: "Bikaner desert landscape in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
  },
  {
    id: "jaisalmer",
    title: "Jaisalmer – Where Desert Stories Come Alive",
    description:
      "Jaisalmer is a timeless desert city where people, culture, and nature have thrived together for centuries. A camel ride takes you to a bygone era, showcasing the strength and productivity of its people who flourish in the middle of challenging conditions, turning nature’s offerings into treasures",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531552/jaisalmer_nakpzu.jpg",
    alt: "Jaisalmer desert landscape in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
  },
  {
    id: "jodhpur",
    title: "Jodhpur – Where History Meets The Blue Skyline",
    description:
      "The city where the grand Mehrangarh Fort looms over the Blue City which is a 15th-century marvel of indigo-washed buildings. It is a famous tourist spot with a palace, fort, and temples, set in the stark landscape of the Thar Desert. It’s also known as the Blue City due to the dominant color scheme of its buildings in old town.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531583/jodhpur_gfctmb.jpg",
    alt: "Jodhpur blue city skyline in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
  },
  {
    id: "udaipur",
    title: "Udaipur – Where Romance And Royalty Reign",
    description:
      "Udaipur, often called the City of Lakes, is one of Rajasthan’s most romantic destinations, known for its royal palaces, serene lakes, vibrant markets, and breathtaking sunsets over Lake Pichola. Explore majestic palaces, ancient temples, and graceful Havelis. Discover bustling markets, and breathtaking sunsets views on Lake Pichola. Join us in exploring the magic of Udaipur. old town.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531613/udaipur_fssyax.jpg",
    alt: "Lake Pichola Udaipur in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
  },
  {
    id: "pushkar",
    title: "Pushkar – Where Desert Charm Meets Holy Peace",
    description:
      "The city of Pushkar is home to the only temple dedicated to Lord Brahma in the whole world. Hindus consider a journey to Pushkar to be the ultimate pilgrimage that must be undertaken to attain salvation. Pushkar Camel Fair, Held each November at the time of the Kartik Purnima (full moon),  is one of India’s most highly-rated travel experiences attracting thousands of camels, horses and cattle and visited by over 400,000 people over a period of around fourteen days.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531643/pushkar_evve5m.jpg",
    alt: "Pushkar Lake and Brahma Temple in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
  },
  {
    id: "jaipur",
    title: "Jaipur – The Pink City & Heart of Rajasthan",
    description:
      "Jaipur is the heart of Rajasthan & a UNESCO world heritage city. It is one of the most visited tourist destinations in Rajasthan. Jaipur is famous for its magnificent forts and palaces, local cuisines, wildlife and adventure tourism, pilgrimage sites and local shopping.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531671/jaipur_qhejax.jpg",
    alt: "Jaipur pink city in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
  },
  {
    id: "agra",
    title: "Agra – Where History Rules Supreme",
    description:
      "A world where the echoes of the Mughal empire still linger, and uncover a marvel born from a timeless love tale: The Taj Mahal. Explore beautiful tombs, stately forts, and vibrant marketplaces that eagerly await your presence.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531703/agra_ty8iiu.jpg",
    alt: "Agra Taj Mahal in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
  },
    {
    id: "orchha",
    title: "Orchha – Echoes Of History In Its Architecture",
    description:
        "Attractive temples, monuments lost in history and an abundance of folklore make Orchha a jewel in the crown of the state of Madhya Pradesh. This small, priestly town is popularly known as Raja Ram’s kingdom, maybe the only place in the country where Lord Rama is revered as a beloved king and not just a god.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531729/orchha_sgm2gy.jpg",
    alt: "Orchha heritage temples in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
    },
    {
    id: "khajuraho",
    title: "Khajuraho – Sculpted Wonders In Stone",
    description:
        "A captivating town renowned for its intricate and sensual stone sculptures adorning World Heritage Temple. The Khajuraho Group of Monuments is a group of Hindu temples and Jain temples. They are a UNESCO World Heritage Site. The temples are famous for their nagara-style architectural symbolism and their erotic sculptures.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531803/khajuraho_krx25s.jpg",
    alt: "Khajuraho World Heritage Temple in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
    },
    {
    id: "varanasi",  
    title: "Varanasi – The Spiritual Heart Of India By The Ganges",
    description:
        "The land of Varanasi (Kashi) has been the ultimate pilgrimage spot for Hindus for ages. They believe that one who is graced to die on the land of Varanasi would attain salvation and freedom from the cycle of birth and re-birth. Here the sacred Ganges River holds the promise of spiritual liberation, and every cremation and puja ceremony is a mystic ritual.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531835/varanasi_yahn0o.jpg",
    alt: "Varanasi sacred Ganges River in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
    }
];

export default function CitiesSection() {
  return (
    <div className="space-y-8 md:space-y-12">
    
     <WhyChooseSection/>

      {citiesData.map((city, index) => (
        <CitySection
          key={index}
          id={city.id}
          title={city.title}
          description={city.description}
          image={city.image}
          alt={city.alt}
        />
      ))}
       <HighlightsSection/>
    </div>
  );
}