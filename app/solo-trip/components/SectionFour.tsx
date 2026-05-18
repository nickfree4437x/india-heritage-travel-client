"use client";

import Image from "next/image";

export default function WomenSeeSection() {
  return (
    <section className="w-full bg-[#f6f1ea] py-24 md:py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* LEFT SIDE IMAGES */}
          <div className="relative">

            <div className="grid grid-cols-2 gap-5">

              {/* IMAGE 1 */}
              <div className="relative h-[260px] md:h-[320px] rounded-[26px] overflow-hidden">
                <Image
                  src="/solo-trip/elephant.jpeg"
                  alt="Elephant"
                  fill
                  className="object-cover"
                />
              </div>

              {/* IMAGE 2 */}
              <div className="relative h-[210px] md:h-[260px] rounded-[26px] overflow-hidden mt-10">
                <Image
                  src="/solo-trip/night-lights.jpeg"
                  alt="Night Lights"
                  fill
                  className="object-cover"
                />
              </div>

              {/* IMAGE 3 */}
              <div className="relative h-[210px] md:h-[260px] rounded-[26px] overflow-hidden -mt-6">
                <Image
                  src="/solo-trip/taj-mahal.jpeg"
                  alt="Taj Mahal"
                  fill
                  className="object-cover"
                />
              </div>

              {/* IMAGE 4 */}
              <div className="relative h-[260px] md:h-[320px] rounded-[26px] overflow-hidden">
                <Image
                  src="/solo-trip/women-wall.jpeg"
                  alt="Women Wall"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

          </div>

          {/* RIGHT SIDE CONTENT */}
          <div>

            {/* LABEL */}
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#8b7355] mb-5">
              What I Really Want Women To See
            </p>

            {/* HEADING */}
            <h2
              className="
                text-[34px]
                md:text-[52px]

                font-[300]
                leading-[1.08]
                tracking-[-0.03em]

                text-[#1f1f1f]

                mb-12
              "
            >
              There’s another side of India I want you to experience
            </h2>

            {/* TEXT */}
            <div
              className="
                space-y-6

                text-[14px]
                md:text-[15px]

                leading-[2]
                tracking-[0.01em]

                text-[#4d4d4d]
                font-[300]

                max-w-[620px]
              "
            >
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

              <p>
                India is intense sometimes, yes.
              </p>

              <p>
                But it’s also deeply beautiful.
              </p>

              <p>
                And I truly believe women deserve to experience that side
                of it too - comfortably, confidently, and in their own way.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}