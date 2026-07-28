"use client";


export default function HistorySection() {
  return (
    <section className="w-full bg-white py-3 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Night Travel Precautions
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Evenings are basically doable with a few changes, like keep to well lit, busier places, hotel 
            districts and markets for example. Also use pre booked transport, instead of trying to walk 
            back late on your own. I mean, it helps to favour group moments- say a guided evening food 
            walk, or a hotel arranged boat ride, and maybe a small cultural show. Those sort of options 
            give you the same feeling, but with way less uncertainty than a random, improvised night out.
          </p>
        </div>
      </div>
    </section>
  );
}