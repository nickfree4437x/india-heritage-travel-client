"use client";

import Image from "next/image";

const experiences = [
  {
    title: "Mehrangarh Fort, Jodhpur",
    description:
      "Towering 125 metres above the Blue City, Mehrangarh Fort is widely regarded as one of the most spectacular forts in India. From its massive sandstone walls, you'll enjoy breathtaking panoramic views across Jodhpur's blue-painted houses, making it one of Rajasthan's most unforgettable landmarks.",
  },
  {
    title: "Camel Safari & Desert Camp in Jaisalmer",
    description:
      "Ride a camel across the golden dunes of the Thar Desert as the sun begins to set before arriving at a luxury desert camp. Enjoy traditional Rajasthani folk performances, a delicious thali dinner, and an unforgettable night beneath one of the clearest star-filled skies in India.",
  },
  {
    title: "Sunset Boat Ride on Lake Pichola",
    description:
      "Few experiences in India are as romantic as sailing across Lake Pichola during sunset. As the City Palace glows in the golden light and the iconic Taj Lake Palace appears to float on the water, Udaipur reveals why it is known as India's City of Lakes.",
  },
  {
    title: "Leopard Safari near Jawai",
    description:
      "The Jawai–Narlai region is one of the world's most remarkable places to observe wild leopards living peacefully alongside the Rabari community. The dramatic granite hills, open landscapes, and frequent wildlife sightings make this one of Rajasthan's most unique safari experiences.",
  },
  {
    title: "Luxury Heritage Hotel Stays",
    description:
      "Rajasthan is home to some of India's finest heritage hotels, including Umaid Bhawan Palace in Jodhpur, Taj Lake Palace in Udaipur, Samode Haveli in Jaipur, and Rawla Narlai in the Aravalli Hills. Staying in these historic palaces transforms the journey into a truly royal experience.",
  },
  {
    title: "Stepwell Soirée at Rawla Narlai",
    description:
      "One of Rajasthan's most extraordinary dining experiences, the Stepwell Soirée features a private candlelit dinner beside an 11th-century stepwell illuminated by more than 800 candles. Accompanied by traditional Jogi folk music and authentic Rajasthani cuisine, it is an evening that perfectly captures the romance and heritage of Rajasthan.",
  },
];

export default function RajasthanExperiences() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}

        <div className="mb-8">

          <h2 className="text-[17px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-3">
            Signature Rajasthan Tour Experiences
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
            If the Golden Triangle introduces you to India's iconic monuments,
            Rajasthan invites you to experience the country's royal lifestyle.
            From sleeping inside historic palaces to watching the sunset over
            the Thar Desert, every destination offers moments that simply
            cannot be replicated anywhere else.
          </p>

        </div>

        {/* Experience Blocks */}

        <div className="space-y-4">

          {experiences.map((experience, index) => (

            <div
              key={experience.title}
              className={`${
                index !== experiences.length - 1
                  ? "border-b border-[#ece7de] pb-8"
                  : ""
              }`}
            >

              <h3 className="text-[15px] sm:text-[16px] font-medium text-gray-700 mb-1">
                {experience.title}
              </h3>

              <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
                {experience.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}