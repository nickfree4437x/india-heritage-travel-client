"use client";

export default function TourLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    // ✅ FULL WIDTH BACKGROUND
    <section className="w-full bg-[#f8f6f2]">

      {/* ✅ CENTERED CONTENT CONTAINER */}
      <div
        className="max-w-[1400px] mx-auto px-6
                   grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] 
                   gap-8"
      >

        {/* LEFT SIDE (WIDER CONTENT) */}
        {/* 🔥 LEFT SIDE */}
        <div
          className="
            space-y-10 sm:space-y-12 md:space-y-12
            px-0 sm:px-2
            lg:pr-8
          "
        >
          {children}
        </div>

        {/* RIGHT SIDE (STICKY SIDEBAR) */}
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
              {sidebar}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}