"use client";

export default function TourLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Grid Layout - Left Content + Right Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 sm:gap-8 md:gap-10">
        {/* Left Side - Main Content */}
        <div className="
          space-y-10 sm:space-y-12 md:space-y-12
          px-0 sm:px-2
          lg:pr-8
        ">
          {children}
        </div>

        {/* Right Side - Sidebar */}
        <div className="flex justify-center lg:justify-end mb-8 lg:mt-0">
          <div className="
            w-full
            max-w-[280px] sm:max-w-[300px]
            md:max-w-[320px]
            lg:max-w-[340px] xl:max-w-[350px]
          ">
            {/* Sticky only on desktop */}
            <div className="lg:sticky lg:top-24">
              {sidebar}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}