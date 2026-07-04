"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="text-gray-700">
          <p className="leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify mb-4">
            The silence in Fatehpur Sikri feels oddly special for this type of place, because, well, there aren't
            many other places like it in India. If you walk around the big courtyard of Jama Masjid early in
            the morning, and you look at the lovely white marble Tomb of Salim Chishti tucked between those
            red terracotta walls, you suddenly feel like you've been placed, right into the heart of the empire.
          </p>

          <p className="leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Fatehpur Sikri is on the UNESCO World Heritage list; it's a real dreamlike spot for photographers
            and historians who can spare, say, half a day in the city. The site is about 40 km from the Taj
            Mahal so it can fit neatly into an Agra tour. Also, quite a few travelers even end up finding
            Fatehpur Sikri more captivating than the Taj Mahal.
          </p>
        </div>
      </div>
    </section>
  );
}