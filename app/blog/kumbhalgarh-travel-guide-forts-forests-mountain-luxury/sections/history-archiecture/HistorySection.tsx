"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History of Kumbhalgarh Fort
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Kumbhalgarh was built between 1443 and 1458 by Rana Kumbha, the Sisodia Rajput ruler of Mewar, 
            under the supervision of architect Mandan - partly on the ruins of a 6th-century fort. A local 
            legend says early construction kept crumbling until a pilgrim offered himself in sacrifice; a 
            small shrine near the main gate marks the spot where his head fell, with the fort and walls 
            built where his body lay.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            There's a local legend that sheds light on the fort's unyielding foundations: early attempts 
            at construction kept crumbling until a spiritual advisor suggested that only a voluntary human 
            sacrifice would ensure the walls would stand strong. According to the story, a devoted pilgrim 
            offered himself, and a small shrine near the main gate marks the spot where, legend has it, his 
            head fell after the sacrifice - with the instruction that the fort and walls be built where the 
            rest of his body lay. <br/>
            Kumbhalgarh is known for its military record. For over a hundred years, Rajputs and several 
            Sultanates and Mughals fought against each other in that region. During that time, the fort 
            held out against siege after siege. Some attacks came in the early 1300s, when Alauddin Khilji 
            led troops against it and failed.
          </p>
        </div>

        {/* Image */}
        <div className="mb-1">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788325492/sagar-agrawal-6GlNGlkBpzc-unsplash_bwdndo.jpg"
              alt="Kumbhalgarh Fort history - Rana Kumbha 15th-century hill fort and sacrifice legend"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          But the most crucial heritage of the fort does not lie in the wars it had hosted but in the people 
          who have been residing in it and the fact that the famous Rajput king Maharana Pratap was born there. 
          Along with this, it should be noted that in this very fort the attempt on the life of Prince Udai 
          Singh II was carried out and he established the city of Udaipur, making one conclude that the fort 
          is the birthplace of Udaipur. Moreover, in the 19th century, Maharana Fateh Singh developed the fort 
          even further and in 2013, along with Chittorgarh, Jaisalmer, Ranthambore, Gagron and Amber, Kumbhalgarh 
          fort entered the World Heritage Site "Hill Forts of Rajasthan".
        </p>
      </div>
    </section>
  );
}