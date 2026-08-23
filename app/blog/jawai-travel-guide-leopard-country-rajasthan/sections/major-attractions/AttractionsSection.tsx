"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Major Attractions In and Around Jawai
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Jawai Dam & Bandh: the region’s centerpiece-ish, a huge reservoir wrapped by granite hills, and you kinda just want to watch it at sunrise or sunset …because then the crocodiles cranes and even the occasional leopard silhouette are sort of in the same frame.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> The Leopard Hills of Bera: the most safari packed patch in Jawai , with many known leopard territories tucked between those boulder formations, it feels very plot-heavy.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Perwa & Sena Villages: Rabari settlements at work , where granite hills meet millet fields. It’s pretty good for slower wandering, and yeah more culture forward than you’d expect.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Dev Giri Temple: a hilltop shrine giving panoramic views over the dam, and the surrounding hills too, though it really pops during golden hour.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span>  Kambeshwar Mahadev Temple: a Shiva temple placed inside a dramatic rocky setting , and it’s closely braided into local devotion life.  
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}