import Link from "next/link";

export default function ConclusionCTA() {
  return (
    <section className="pb-10 md:pb-12">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* CTA Card */}

        <div className="relative overflow-hidden bg-[#faf7f3] rounded-md">

            {/* Background Accent */}


            <div className="p-6 sm:p-8">

            <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-2 leading-tight">
                Ready to Experience the Golden Triangle?
            </h3>

            <p className="text-gray-700 text-[12px] sm:text-[13px] md:text-[13px] leading-relaxed font-light text-justify max-w-6xl mb-4">
                Every Golden Triangle journey we create is tailored around your
                travel style, pace, interests, and comfort preferences. From
                private chauffeurs and expert guides to handpicked heritage
                hotels, we design experiences that feel personal, seamless,
                and unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

                <Link
                href="/customize-your-journey"
                className="inline-flex rounded-md items-center justify-center gap-2 bg-[#AF956C] hover:bg-[#9b8059] text-white px-6 py-2 md:py-2.5 text-[13px] font-light tracking-wide transition-all duration-300"
                >
                Request Your Custom Itinerary
                </Link>

                <Link
                href="/tours/majestic-golden-triangle-tour"
                className="inline-flex rounded-md items-center justify-center border border-[#d8cdbf] text-[#2c2c2c] hover:bg-white px-6 py-2 md:py-2.5 text-[13px] font-light tracking-wide transition-all duration-300"
                >
                Explore Golden Triangle Tours
                </Link>

            </div>

            </div>

        </div>
      </div>

    </section>
  );
}