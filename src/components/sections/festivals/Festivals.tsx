import FestivalCard from "./FestivalCard";
import { festivals } from "./festivalData";

export default function Festivals() {
  return (
    <section className="bg-[#f4f0ea] py-20 px-6" id="festivals">
      
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <h2 className="text-center text-4xl font-semibold text-[#8b6a3d] mb-14">
          Immerse In Festive Celebrations
        </h2>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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