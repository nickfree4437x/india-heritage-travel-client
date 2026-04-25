"use client";

export default function TourLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className="bg-[#f4f0ea] w-full">

      <section
        className="max-w-[1400px] mx-auto px-6 py-4
        grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-8"
      >

        {/* LEFT CONTENT */}
        <div>
          {children}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:pl-4">
          <div className="sticky top-24">
            {sidebar}
          </div>
        </div>

      </section>

    </div>
  );
}