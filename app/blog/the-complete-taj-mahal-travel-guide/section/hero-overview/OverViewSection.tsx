"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mb-6 md:mb-8">
          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-4">
            There are many extraordinary monuments in India, yet very few
            create the same feeling as the Taj Mahal. For many travellers,
            arriving at the great red sandstone gateway and catching the
            first glimpse of the white marble mausoleum beyond is a moment
            they have imagined for years. Despite countless photographs,
            documentaries, and travel stories, the experience of standing
            before the Taj Mahal feels entirely different in person.
          </p>
        </div>

        {/* Taj Mahal Overview */}
        <div>
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-3">
            Taj Mahal Overview
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-4">
            The Taj Mahal stands on the southern bank of the Yamuna River in
            Agra, Uttar Pradesh. Built entirely from white Makrana marble,
            it is widely regarded as the finest example of Mughal
            architecture and remains one of the Seven Wonders of the World.
            In recognition of its universal cultural significance, UNESCO
            designated the Taj Mahal a World Heritage Site in 1983.
          </p>
        </div>
      </div>
    </section>
  );
}