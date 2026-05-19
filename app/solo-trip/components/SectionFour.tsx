"use client";

import Image from "next/image";

export default function WomenSeeSection() {
  return (
    <section className="w-full bg-[#f8f6f2] md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:gap-20 xl:gap-24">

          {/* LEFT SIDE - CONTENT */}
          <div className="max-w-xl w-full mt-12">

            <p className="text-[11px] tracking-[0.1em] uppercase text-[#8b7355] mb-2">
              What I Really Want Women To See
            </p>

            <h2 className="text-[16px] font-medium text-gray-800 mb-6 leading-relaxed">
              There’s another side of India I want you to experience
            </h2>

            <div className=" text-gray-500 text-[13px] md:text-[14px] mb-4 leading-[1.7] font-[300]">

              <p>
                The quiet mornings.
              </p>

              <p>
                The warmth of people.
              </p>

              <p>
                The stories hidden in old streets.
              </p>

              <p>
                The feeling of sitting somewhere unfamiliar… and somehow
                feeling completely present there.
              </p>

              <p className="mt-4">
                India is intense sometimes, yes.
              </p>

              <p>
                But it's also deeply beautiful.
              </p>

              <p className="mt-4">
                And I truly believe women deserve to experience that side
                of it too - comfortably, confidently, and in their own way.
              </p>

            </div>
          </div>

          {/* RIGHT SIDE - EDITORIAL MAGAZINE */}
          <div className="w-full lg:w-[540px] mt-6 lg:mt-0">
            
            {/* HERO IMAGE */}
            <div className="relative h-[300px] rounded-none overflow-hidden mb-3">
              <Image src="/solo-women/img_3.JPEG" alt="women" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              </div>
            </div>

            {/* BOTTOM GRID */}
            <div className="grid grid-cols-3 gap-3">
              
              {/* IMAGE 1 */}
              <div className="relative h-[180px] overflow-hidden">
                <Image src="/solo-women/img_1.JPEG" alt="elephant" fill className="object-cover" />
              </div>

              {/* IMAGE 2 */}
              <div className="relative h-[180px] overflow-hidden">
                <Image src="/solo-women/img_2.JPEG" alt="lights" fill className="object-cover" />
              </div>

              {/* IMAGE 3 */}
              <div className="relative h-[180px] overflow-hidden">
                <Image src="/solo-women/img_4.JPEG" alt="taj" fill className="object-cover" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}