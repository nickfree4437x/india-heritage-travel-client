"use client";

export default function ToursLayout({ children, right }: any) {
  return (
    <div className="w-full bg-[#f4f0ea]">
      <section
        className="max-w-[1400px] mx-auto px-6
                  grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-8"
      >
        {/* LEFT */}
        <div
          className="
            space-y-6 sm:space-y-8 md:space-y-8
            px-0 sm:px-2
            lg:pr-8
          "
        >
          {children}
        </div>

        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end mb-8 lg:mt-0">

          <div
            className="
              w-full
              max-w-[280px]
              sm:max-w-[300px]
              md:max-w-[320px]
              lg:max-w-[340px]
              xl:max-w-[350px]
            "
          >

            {/* STICKY ONLY DESKTOP */}
            <div className="lg:sticky lg:top-24">
              {right}
            </div>

          </div>

        </div>
      </section>
  </div>
  );
}