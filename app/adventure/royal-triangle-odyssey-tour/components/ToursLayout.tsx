export default function ToursLayout({ children, right }: any) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_320px] gap-10">

        {/* LEFT */}
        <div className="space-y-16">
          {children}
        </div>

        {/* RIGHT (FIXED CARD) */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            {right}
          </div>
        </div>

      </div>
    </section>
  );
}