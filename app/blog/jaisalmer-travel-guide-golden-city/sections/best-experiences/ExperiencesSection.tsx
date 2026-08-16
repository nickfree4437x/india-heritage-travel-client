"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Best Experiences in Jaisalmer
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Kuldhara Village : this abandoned settlement outside the city, wrapped in local legend about why the residents just vanished overnight in the early 19th century. It feels very atmospheric, especially near sunset, and it’s kind of a favourite spot for photographers, you know.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Bada Bagh : a garden complex a few kilometres from town, scattered with domed royal cenotaphs (chhatris) set against wide open desert views. It’s calmer than the fort, and honestly it’s pretty excellent for sunrise, too. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Desert Cultural Centre & Museum : a small-ish but thoughtfully put together museum near Gadisar Lake, it covers Rajasthani textiles puppetry and everyday desert life, which is handy context before you actually head into the dunes.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Tazia Tower : a five tiered tower inside the fort complex. It was built in the style of a Muslim tazia, and it’s a solid example of how the city has layered cultural influences, over time. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Akal Wood Fossil Park : an unusual stop if you’re the type of traveller who likes the desert’s deeper geological past. It has fossilised wood, estimated at roughly 180 million years old, so yeah it’s a lot more than just a quick photo break.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}