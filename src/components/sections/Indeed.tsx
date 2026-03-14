import Image from "next/image";

export default function IndiaQuoteSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center text-white">

      {/* Background Image */}

      <Image
        src="/india-quote-bg.jpg"
        alt="India"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}

      <div className="relative z-10 max-w-4xl px-6">

        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          This is Indeed India!
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-8">
          The land of dreams and romance, of fabulous wealth and fabulous poverty,
          of splendour and rags, of palaces and hovels, of famine and pestilence,
          of genii, giants and Aladdin lamps; of tigers and elephants, the cobra
          and the jungle, the country of hundred nations and a hundred tongues,
          of a thousand religions and two million gods, cradle of the human race,
          birthplace of human speech, mother of history, grandmother of legend,
          great-grandmother of traditions.
        </p>

        <p className="text-lg font-medium text-gray-300">
          — Mark Twain
        </p>

      </div>

    </section>
  );
}