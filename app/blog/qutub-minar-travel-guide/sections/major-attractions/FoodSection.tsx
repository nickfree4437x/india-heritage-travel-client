"use client";

import Image from "next/image";

const architectureFeatures = [
  {
    title: "Lodi",
    description:
      `The Garden Restaurant (5 km, Lodhi Road) - a heritage garden setting offering excellent Indian 
       and continental food. Perfect for a post-Qutub lunch.`,
  },
  {
    title: "Indian Accent (1.5 km, The Lodhi Hotel)",
    description:
      `Ranked among Asia's finest - this Modern Indian restaurant is the only Indian name on San 
       Pellegrino's World's 50 Best list. Advance booking is essential.`,
  },
  {
    title: "The Garden of Five Senses (10 minutes)",
    description:
      `A beautifully landscaped public garden with a pleasant café - a calming post-Qutub stop`,
  },
  {
    title: "Mehrauli Village market",
    description:
      `The lanes of old Mehrauli village, immediately north of the complex, have simple dhabas and 
      tea stalls where you can eat as authentically as anywhere in Delhi`,
  },
];

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Food & Practical Comforts Near the Qutub Complex
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784177224/takashi-yamada-YNfDiSsuU_E-unsplash_hfnr5w.jpg"
              alt="Food and practical comforts near Qutub Complex - restaurants cafes and shopping"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The Qutub Complex itself has a basic refreshment stall near the entrance - adequate for 
            water and a cold drink but nothing more. The serious dining options are in the surrounding 
            Mehrauli and South Delhi area, which has become one of Delhi's most interesting dining 
            neighbourhoods.
          </p>
        </div>

        {/* Features */}

        <div className="mt-2 md:mt-4">

          <h3 className="text-[16px] sm:text-[20px] font-semibold text-[#2c2c2c] mb-3">
            Recommended Dining Options Near Qutub Minar
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">

            {architectureFeatures.map((feature) => (
              <div
                key={feature.title}
                className="border border-gray-200 rounded-md p-5"
              >
                <h4 className="text-[14px] md:text-[15px] font-semibold text-[#2c2c2c] mb-0.5">
                  {feature.title}
                </h4>

                <p className="text-[12px] sm:text-[13px] text-gray-700 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}