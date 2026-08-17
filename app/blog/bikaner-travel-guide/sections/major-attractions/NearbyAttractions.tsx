"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Nearby Attractions
        </h2>

        {/* Content - List Format */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Bikaner can work quite well on its own, or like just one smaller stop inside a longer Rajasthan 
            loop. Deshnok and its Karni Mata Temple, ( 30 km ) is the obvious extra, but don’t skip thinking 
            about Kolayat , about 50 km, for those holy ghats. Also, Katariasar’s Bishnoi dunes are a more 
            genuine desert-village diversion, and if you have a bit more time, you can continue driving to 
            Jaisalmer ( around 330 km, roughly 6 hours ) or Jodhpur ( about 250 km, roughly 4–5 hours ), 
            since both places sit very naturally with Bikaner as part of a heritage route.
          </p>
        </div>

      </div>
    </section>
  );
}