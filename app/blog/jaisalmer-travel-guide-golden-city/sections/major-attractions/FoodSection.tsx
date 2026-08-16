"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-2.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Food & Shopping in the Golden City
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Jaisalmer cuisine kind of matches its desert location , like it’s tough hardy and spiced , made 
            so travelers can keep moving even during the long dry days. Dal baati churma , basically wheat 
            dumplings served with lentils and that sweet crushed wheat thing , feels like the region’s main 
            dish. Then there’s gatte ki sabzi, gram-flour dumplings in a spiced yogurt gravy , which is also 
            very Rajasthani and worth trying. And don’t skip ker sangri , it’s this special desert-bean 
            preparation , you won’t see it that often beyond here. For dinner , rooftop restaurants looking 
            over the fort are usually the best move , the meals can be pretty straightforward , but honestly 
            the scenery does a lot of the heavy lifting.  
          </p>
        </div>
      </div>
    </section>
  );
}