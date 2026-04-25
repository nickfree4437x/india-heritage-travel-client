"use client";

export default function ToursLayout({ children, right }: any) {
  return (
    <div className="w-full bg-[#f8f6f2]">
      <section
        className="max-w-[1400px] mx-auto px-6
                  grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-8"
      >
        {/* LEFT */}
        <div className="space-y-20 w-full">
          {children}
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block lg:pl-4">
          <div className="sticky top-24">
            {right}
          </div>
        </div>
      </section>
  </div>
  );
}