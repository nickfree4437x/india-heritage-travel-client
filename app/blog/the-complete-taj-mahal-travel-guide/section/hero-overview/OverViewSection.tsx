"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mb-4 md:mb-6">
          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-4">
            The Taj Mahal is one of India's most recognisable historic monuments,
            attracting visitors from around the world. From its grand entrance to
            the white marble mausoleum, the complex showcases remarkable Mughal
            architecture, intricate craftsmanship, and carefully planned gardens.
            Seeing it in person offers a closer appreciation of its scale and detail.
          </p>
        </div>

        {/* Taj Mahal Overview */}
        <div>
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-1">
            Taj Mahal Overview
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-4">
            Located on the southern bank of the Yamuna River in Agra, Uttar Pradesh,
            the Taj Mahal is a white-marble mausoleum commissioned by Mughal emperor
            Shah Jahan in memory of Mumtaz Mahal. Recognised as a UNESCO World
            Heritage Site in 1983, it is celebrated for its architecture, symmetry,
            decorative details, and significance in Mughal history.
          </p>
        </div>
      </div>
    </section>
  );
}