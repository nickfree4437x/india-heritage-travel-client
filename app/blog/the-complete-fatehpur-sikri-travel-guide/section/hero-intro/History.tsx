"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History & Origins - Akbar's Vision and a Sufi Saint's Prophecy
          </h2>
        </div>

        {/* Featured Image */}
        <div className="mb-3 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783146340/brijender-dua-6FJHbHg-YDA-unsplash_zxqyvj.jpg"
              alt="Historical illustration of Emperor Akbar and the founding of Fatehpur Sikri in 1571"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-gray-600 text-[12px] md:text-[13px] font-light">
            via unsplash
          </p>
        </div>

        {/* History Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            The story of Fatehpur Sikri starts, kind of in a roundabout way, not with some big emperor
            ambition first, but with a prayer. In 1569 Akbar at that moment one of the strongest monarchs
            on earth, ruler of a Mughal realm running from Kabul to Bengal - was without an heir. And he
            came, as he often did, to the village of Sikri on the west side plains from Agra, to see a
            revered Sufi mystic named Sheikh Salim Chishti.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-6">
            The saint gave him a blessing. Soon after that, Akbar's wife gave birth to a healthy son.
            The emperor, moved beyond words, named the boy Salim, after the saint himself. Later, that
            same child would take the throne as Emperor Jahangir, one of the great Mughal rulers.
          </p>

          {/* Abandonment */}
          <h3 className="text-[18px] sm:text-[22px] font-semibold text-[#2c2c2c] mb-2">
            The Mysterious Abandonment
          </h3>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            And then, in 1585, just fourteen years after construction started, Akbar kinda packed up
            his court and left. He never really returned, like ever. The reasons are still debated to
            this day, not in a clean way though. The most accepted explanation sounds almost boringly prosaic, chronic water scarcity. The same ridge site that made the city look so dramatic in the first place also made it nearly impossible to supply enough fresh water. In a sense the surrounding landscape simply could not sustain an imperial population.
          </p>
        </div>
      </div>

      {/* Architecture Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Heading */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Architecture - A Masterpiece Written in Red Sandstone
          </h2>
        </div>

        {/* Featured Image */}
        <div className="mb-3 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783146909/aditya-doliya-j6fGT6cfTkM-unsplash_m1br1i.jpg"
              alt="Red sandstone architecture of Fatehpur Sikri with intricate Mughal carvings and arches"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-gray-600 text-[12px] md:text-[13px] font-light">
            via unsplash
          </p>
        </div>

        {/* Architecture Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The main material is Agra red sandstone, quarried nearby and shaped by thousands of
            artisans into forms with breathtaking intricacy. But if you look a little more carefully,
            you'll notice Hindu elements right next to Islamic ones - carved brackets that really
            belong in a Rajput haveli, lotus-petal motifs taken from Hindu temple work, serpentine
            columns with no real precedent in Persian architecture. And no, these aren't random,
            they aren't accidents either. They are Akbar's architectural philosophy put into the
            physical world: a truly Indian Mughal style that fuses the empire's diversity, into
            something brand new, something that feels almost singular.
          </p>
        </div>
      </div>
    </section>
  );
}