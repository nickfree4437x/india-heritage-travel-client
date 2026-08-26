"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-2">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          md:mb-2
        ">
          Major Attractions in Rohet
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> In Rohet the list of things to do is shorter than a city’s, but honestly each item runs deeper. Like you don’t just “see” it, you kind of get pulled in, quietly and a bit stubbornly.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Rohet Garh itself - the fort’s architecture, the family lineage, plus their stud of Marwari horses, one of the finest in the country. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Rohet Lake - not huge, but properly atmospheric, it holds resident and migratory birds, especially during winter.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Bishnoi villages around Rohet - you can do home visits with Bishnoi families, meet Raika shepherds in their distinctive clothing, and also hear about Meghwal and Paliwal weaving and farming life.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Village craft demonstrations - pottery, block printing, and hand-weaving, you’ll often catch them mid action, rather than something set up for visitors.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> The Marwari horse stables - an opportunity to watch (and ride) this desert breed with that inward-curving eared look.
            </li>
          </ul>

        </div>
      </div>

    </section>
  );
}