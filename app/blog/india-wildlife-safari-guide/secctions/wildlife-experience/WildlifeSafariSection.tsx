"use client";

import Image from "next/image";

const safariTypes = [
  {
    title: "Jeep Safari",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784434128/pexels-piyal-sardar-2153197104-32915948_pk41zi.jpg",
    alt: "Jeep Safari in Ranthambore National Park",
    description:
      "The Jeep Safari is the most popular and rewarding wildlife experience in India. Small open 4x4 vehicles carry up to six guests with a trained naturalist, allowing better mobility through forest tracks and increasing the chances of spotting elusive wildlife such as Royal Bengal Tigers, leopards, sloth bears, and wild dogs. Because of its flexibility and limited seating, this safari is the preferred choice for photographers and serious wildlife enthusiasts.",
    highlights: [
      "Best for tiger sightings",
      "6 guests + naturalist",
      "Ideal for photographers",
    ],
  },
  {
    title: "Canter Safari",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784434791/pexels-abdullatif-bukeni-1296376-15838640_fkoohw.jpg",
    alt: "Canter Safari inside Ranthambore National Park",
    description:
      "Canter Safaris use larger open vehicles that accommodate bigger groups, making them an economical option for families, school groups, and budget-conscious travellers. Although the experience is less private than a Jeep Safari, the elevated seating offers wide panoramic views of the forest and is perfect for enjoying the overall wilderness.",
    highlights: [
      "Budget-friendly safari option",
      "Seats 16–20 visitors",
      "Perfect for families & groups",
    ],
  },
  {
    title: "Boat Safari",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784434860/pexels-md-samiuzzaman-sakib_-499442624-37602510_ru87aa.jpg",
    alt: "Boat Safari through Periyar Lake in Kerala",
    description:
      "Not every wildlife adventure in India happens on land. Boat Safaris offer a completely different perspective as you glide through rivers, lakes, and mangrove forests while observing crocodiles, gharials, otters, elephants, migratory birds, and countless aquatic species without disturbing their natural habitat.",
    highlights: [
      "Excellent for birdwatching",
      "River wildlife",
      "Peaceful wildlife experience",
    ],
  },
  {
    title: "Elephant Safari",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784434908/pexels-regan-dsouza-1315522347-34030623_qxvvbn.jpg",
    alt: "Elephant Safari in India",
    description:
      "Elephant Safaris were once among India's most iconic wildlife experiences. Today they are available only in a few carefully regulated destinations where authorities permit them under conservation guidelines. Riding silently through forest trails offers a traditional perspective of wildlife exploration while maintaining minimal disturbance to the surrounding ecosystem.",
    highlights: [
      "Limited locations only",
      "Jungle experience",
      "Conducted under official regulations",
    ],
  },
];

export default function SafariTypesSection() {
  return (
    <section className="py-4 md:py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Types of Wildlife Safaris in India
          </h2>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Wildlife safaris in India are far more diverse than many travellers
            expect. While Jeep Safaris remain the most famous option for tiger
            sightings, the country also offers boat safaris through wetlands,
            canter safaris for larger groups, guided jungle walks, and even
            elephant safaris in select destinations. Each experience reveals a
            different side of India's extraordinary wilderness.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {safariTypes.map((safari, index) => (
            <div
              key={safari.title}
              className="bg-white rounded-md border border-gray-200 overflow-hidden transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Image */}
                <div className="relative h-64 md:h-auto md:col-span-1 bg-gray-100">
                  <Image
                    src={safari.image}
                    alt={safari.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-5 md:p-8 -mt-8 md:mt-0">
                  <h3 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide mb-2">
                    {safari.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify mb-4">
                    {safari.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {safari.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 text-[10px] md:text-[11px] font-light px-3 py-1 rounded-full"
                      >
                    
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}