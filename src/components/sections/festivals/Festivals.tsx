import FestivalCard from "./FestivalCard";
import { festivals } from "./festivalData";

export default function Festivals() {
  return (
    <section className="bg-[#CBB299] py-20 md:py-8 px-6" id="festivals">
      
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-center font-heading text-3xl md:text-3xl font-semibold text-white mb-4">
            Immerse In Festive Celebrations
          </h2>
          <p className="text-[14px] sm:text-[14px] md:text-[14px] leading-relaxed text-white tracking-wide">
            Discover India’s most vibrant festivals, rich in culture, tradition, and celebration.
          </p>
        </div>
        

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:mb-16">
          {festivals.map((festival) => (
            <FestivalCard 
              key={festival.slug} // ✅ FIXED (no index)
              {...festival} 
            />
          ))}
        </div>

      </div>

    </section>
  );
}