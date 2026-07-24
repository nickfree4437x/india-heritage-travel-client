"use client";

import Image from "next/image";

const architectureFeatures = [
  {
    title: "First three storeys (Aibak and Iltutmish)",
    description:
      `Red sandstone with alternating fluted bands and projecting balconies. The intricate corbelled 
       brackets create a honeycomb muqarnas pattern a clear influence from Persian and Central Asian 
       Islamic architecture.`,
  },
  {
    title: "Fourth storey (Iltutmish, restored by Firoz Shah)",
    description:
      `Still sandstone , but the surface is more even and less deeply grooved. The balcony brackets 
       on this level are plainer, compared to the lower storeys, seems simpler overall `,
  },
  {
    title: "Fifth storey (Firoz Shah Tughlaq, 1368",
    description:
      `Pale marble crowns the top storey, contrasting sharply with the red sandstone below a hallmark 
       of the Tughlaq period's restrained, austere style.`,
  },
];

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Architecture - Five Storeys of Indo-Islamic Genius
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[610px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784174802/Details_of_the_balcony__Qutub_Minar_bjeoa3.jpg"
              alt="Close-up detail of Qutub Minar's Arabic calligraphy, carved geometric patterns and projecting balcony"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The Qutub Minar is about 72.5 metres , or 238 feet high, and it starts with a base 
            diameter of roughly 14.3 metres, then it narrows down to around 2.7 metres up near the 
            top. Inside there are 379 steps, though theyre not really reachable right now for the 
            general public . You can also notice its five storeys from outside , each one basically 
            showing the separate building phases carried out by different rulers, in a kind of layered 
            way, which is pretty clear when you look.
          </p>
        </div>

        {/* Features */}

        <div className="mt-2 md:mt-4">

          <h3 className="text-[16px] sm:text-[20px] font-semibold text-[#2c2c2c] mb-3">
            The Five Storeys
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-3">

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