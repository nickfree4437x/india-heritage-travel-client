"use client";

export default function SoloTravelSection() {
  return (
    <section className="w-full bg-white py-14">
      
      {/* MAIN WRAPPER */}
      <div className="w-full px-6 md:px-20 lg:px-28 xl:px-36">
        
        <div className="flex justify-between items-center gap-16">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 leading-relaxed whitespace-nowrap">
             Thinking of coming to India... but not sure how it will feel doing it alone?
            </h3>

            <p className="text-gray-600 text-[15px] mb-4 leading-relaxed whitespace-nowrap">
              I get it.<br />
              India is beautiful... but it can also feel overwhelming when you're on your own.<br />
              That’s exactly why I do what I do.
            </p>

            <p className="handwritten text-[20px] leading-[1.9] text-gray-700 mb-6">
              Traveling as a solo women through India...<br />
              but always knowing someone has your back :)
            </p>

            <p className="text-gray-600 mb-6 text-[15px] leading-relaxed">
              <span className="font-semibold text-gray-800">Hi, I’m Isha.</span><br />
              And I help women experience India in a way that feels safe, calm,
              and deeply personal without taking away the magic of discovering it.<br />
              So you can travel solo...<br />
              but never feel alone.
            </p>

            <button className="bg-[#8b5e3c] text-sm text-white px-6 py-3 rounded-full hover:bg-[#6e472e] transition-all duration-300 shadow-sm">
              Come travel with me
            </button>
          </div>

          {/* RIGHT COLLAGE */}
<div className="grid grid-cols-4 gap-6 w-[560px] flex-shrink-0">

  {/* TOP LEFT */}
  <img
    src="/solo-trip/elephant.jpeg"
    className="col-span-2 w-full h-[220px] object-cover rounded-sm"
  />

  {/* TOP RIGHT */}
  <img
    src="/solo-trip/women-wall.jpeg"
    className="col-span-2 w-full h-[300px] object-cover rounded-sm"
  />

  {/* BOTTOM LEFT (HEIGHT ↑ + TOP ALIGN) */}
  <img
    src="/solo-trip/night-lights.jpeg"
    className="col-span-2 w-full h-[320px] object-cover rounded-sm -mt-10"
  />

  {/* BOTTOM RIGHT (TAJ WIDE LEFT TAK) */}
  <img
    src="/solo-trip/taj-mahal.jpeg"
    className="col-span-2 w-full h-[240px] object-cover rounded-sm"
  />

</div>

        </div>
      </div>
    </section>
  );
}