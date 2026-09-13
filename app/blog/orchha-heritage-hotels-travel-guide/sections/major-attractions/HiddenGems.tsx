"use client";

export default function NearbyAttractions() {
  return (
    <section className="w-full bg-white py-1 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Hidden Gems Most Tourists Miss
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Jhunjhunwala Haveli’s Golden Room is not a top pick for most visitors. People often walk past it because they do not know it is there. The room has warm, gold colored wall art.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> On Mandawa’s side streets, you will find old havelis that feel left behind. Their walls show flaking paint, but the fresco scenes are still easy to spot. The light and mood here make photos look better, and there are fewer crowds. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Inside Mandawa Fort there are small craft rooms. Local painting workers, including some who have worked on the fort for more than ten years, make and sell wall style art. It is fresh work, made in the same spirit as the old designs.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Go early to the lanes close to the fort. You will see daily life from nearby villages. This part of town keeps its pace, and tourism does not fully take over the streets.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}