"use client";

export default function TourLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      {/* Left Content */}
      <div className="lg:col-span-2">
        {children}
      </div>

      {/* Right Sidebar */}
      <div className="relative">
        <div className="lg:sticky lg:top-24">
          {sidebar}
        </div>
      </div>

    </section>
  );
}