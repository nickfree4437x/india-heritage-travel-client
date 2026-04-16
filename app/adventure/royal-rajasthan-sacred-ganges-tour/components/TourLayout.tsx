"use client";

export default function TourLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE (Flexible Content) */}
        <div className="lg:col-span-2 space-y-10">
          {children}
        </div>

        {/* RIGHT SIDE (Sticky Card) */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            {sidebar}
          </div>
        </div>

      </div>
    </section>
  );
}