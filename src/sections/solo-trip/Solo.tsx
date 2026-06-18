"use client";

import Image from "next/image";
import Link from "next/link";

export default function SoloTravelSection() {
  return (
    <section className="w-full bg-white py-14 relative overflow-hidden">
      {/* MAIN WRAPPER */}
      <div className="w-full px-6 md:px-20 lg:px-28 xl:px-36">
        {/*
          Mobile/Tablet: flex-col (stack karo)
          Desktop (lg+): flex-row side by side — UNTOUCHED
        */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="max-w-xl w-full">
            <h3 className="text-[16px] font-medium text-gray-800 mb-6 leading-relaxed">
              Thinking of coming to India... but not sure how it will feel
              doing it alone?
            </h3>

            <div>
              <p
                className="text-gray-500 text-[12px] font-[350] mb-4 leading-[1.7]"
                style={{
                  fontFamily:
                    '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
                }}
              >
                I get it.
                <br />
                India is beautiful... but it can also feel overwhelming when
                you're on your own.
                <br />
                That's exactly why I do what I do.
              </p>

              <p
                className="text-[13px] leading-[1.8] text-gray-600 mb-6"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  fontStyle: "italic",
                  letterSpacing: "0.3px",
                }}
              >
                Traveling as a solo woman through India...
                <br />
                but always knowing someone has your back :)
              </p>

              <p
                className="text-gray-500 text-[12px] mb-4 font-[350] leading-[1.7]"
                style={{
                  fontFamily:
                    '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
                }}
              >
                <span className="font-semibold text-gray-800">
                  Hi, I'm Isha.
                </span>
                <br />
                And I help women experience India in a way that feels safe,
                calm, and deeply personal without taking away the magic of
                discovering it.
                <br />
              </p>

              <p
                className="text-gray-500 text-[12px] mb-4 font-[350] leading-[1.7]"
                style={{
                  fontFamily:
                    '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
                }}
              >
                So you can travel solo…
                <br />
                but never feel alone.
              </p>
            </div>

            <Link href="/solo-women-travel">
              <button className="w-full sm:w-auto md:-ml-2 bg-transparent text-[#a67c52] text-xs px-7 py-3 rounded-full border border-[#a67c52] hover:bg-[#a67c52] hover:text-white transition-all duration-300">
                Come travel with me
              </button>
            </Link>
          </div>

          {/* RIGHT COLLAGE */}

          {/* MOBILE / TABLET collage — lg pe hide */}
          <div className="block lg:hidden mt-10 w-full">
            {/* Rangoli background */}
            <div className="relative">
              {/* 2-col grid layout for mobile */}
              <div className="relative z-10 grid grid-cols-2 gap-3">
                {/* TOP RIGHT — women wall (taller) */}
                <div className="col-span-1 row-span-2">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531020/women-wall_ftanbo.jpg"
                    alt="Solo woman traveler exploring cultural destinations in India"
                    width={300}
                    height={380}
                    className="w-full h-[280px] sm:h-[340px] object-cover rounded-sm"
                  />
                </div>

                {/* BOTTOM LEFT — night lights */}
                <div className="col-span-1">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531130/night-lights_ncz5ue.jpg"
                    alt="Traditional Indian festival lights and cultural celebrations"
                    width={300}
                    height={200}
                    className="w-full h-[280px] sm:h-[220px] object-cover rounded-sm"
                  />
                </div>

                {/* BOTTOM FULL WIDTH — taj mahal */}
                <div className="col-span-2 -mt-3">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531181/taj-mahal_hln96e.jpg"
                    alt="Taj Mahal in Agra one of India's most iconic heritage landmarks"
                    width={600}
                    height={220}
                    className="w-full h-[160px] sm:h-[200px] object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP collage — mobile pe hide, ORIGINAL CODE UNTOUCHED */}
          <div className="hidden lg:block relative w-[560px] h-[560px] flex-shrink-0">
            {/* RANGOLI (PERFECT CENTER - BACKGROUND) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531215/rangoli_gkxrux.png"
                alt="Traditional Indian rangoli artwork symbolizing culture and celebration"
                width={100}
                height={100}
                className="opacity-25 -ml-20 mb-8"
              />
            </div>

            {/* TOP LEFT */}
            <div className="absolute top-0 left-0 w-[47%] z-10">
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531252/elephant_wfliyn.jpg"
                alt="Decorated elephant representing India's rich cultural heritage"
                width={300}
                height={220}
                className="w-full h-[200px] object-cover rounded-sm"
              />
            </div>

            {/* TOP RIGHT (TALL IMAGE) */}
            <div className="absolute top-0 right-5 w-[46%] z-10">
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531020/women-wall_ftanbo.jpg"
                alt="Solo woman traveler exploring cultural destinations in India"
                width={300}
                height={360}
                className="w-full h-[320px] object-cover rounded-sm"
              />
            </div>

            {/* BOTTOM LEFT (SHIFT LEFT + OVERLAP) */}
            <div className="absolute bottom-5 left-[-60px] w-[46%] z-10">
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531130/night-lights_ncz5ue.jpg"
                alt="Traditional Indian festival lights and cultural celebrations"
                width={300}
                height={320}
                className="w-full h-[325px] object-cover rounded-sm"
              />
            </div>

            {/* BOTTOM RIGHT (EXPAND LEFT) */}
            <div className="absolute bottom-0 right-[18px] w-[58%] z-10">
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531181/taj-mahal_hln96e.jpg"
                alt="Taj Mahal in Agra one of India's most iconic heritage landmarks"
                width={340}
                height={250}
                className="w-full h-[220px] mb-2 object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}