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
    <section className="w-full bg-[#f4f0ea] py-16">

      {/* ✅ CENTERED CONTENT CONTAINER */}
      <div
        className="max-w-[1400px] mx-auto px-6
                   grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] 
                   gap-8"
      >

        {/* LEFT SIDE (WIDER CONTENT) */}
        <div className="space-y-20 w-full">
          {children}
        </div>

        {/* RIGHT SIDE (STICKY SIDEBAR) */}
        <div className="lg:pl-4">
          <div className="sticky top-24 max-w-[380px] w-full">
            {sidebar}
          </div>
        </div>

      </div>

    </section>
  );
}