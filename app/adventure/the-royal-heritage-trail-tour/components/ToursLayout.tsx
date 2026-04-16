"use client";

export default function ToursLayout({
  children,
  rightContent,
}: {
  children: React.ReactNode;
  rightContent: React.ReactNode;
}) {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="flex-1 min-w-0 space-y-12">
            {children}
          </div>

          {/* RIGHT SIDE */}
          <div className="w-[320px] shrink-0 sticky top-24">
            {rightContent}
          </div>

        </div>

      </div>

    </section>
  );
}