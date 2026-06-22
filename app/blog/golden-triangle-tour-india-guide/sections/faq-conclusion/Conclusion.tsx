import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ConclusionCTA() {
  return (
    <section className="mb-14">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Conclusion */}

        <div className="mb-10">

            <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            Conclusion
            </h2>

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            The Golden Triangle tour India remains the ultimate introduction
            to the country for first-time travelers. In just a few days,
            visitors can explore the grandeur of Mughal architecture,
            experience the royal heritage of Rajasthan, and witness some of
            the world's most iconic landmarks.
            </p>

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Whether you're captivated by the timeless beauty of the Taj Mahal,
            the vibrant bazaars of Jaipur, or the historical depth of Delhi,
            the Golden Triangle offers one of the most rewarding travel
            experiences in India. With the right planning and expert guidance,
            your journey becomes far more than sightseeing—it becomes a
            meaningful cultural discovery.
            </p>

        </div>

        {/* CTA Card */}

        <div className="relative overflow-hidden border border-[#e7dfd4] bg-[#faf7f3] rounded-sm">

            {/* Background Accent */}


            <div className="p-6 sm:p-8 md:p-10">

            <span className="inline-block text-[11px] tracking-[0.25em] uppercase text-[#AF956C] mb-3">
                Plan Your Trip
            </span>

            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#2c2c2c] mb-4 leading-tight">
                Ready to Experience the Golden Triangle?
            </h3>

            <p className="text-gray-700 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed font-light max-w-3xl mb-6">
                Every Golden Triangle journey we create is tailored around your
                travel style, pace, interests, and comfort preferences. From
                private chauffeurs and expert guides to handpicked heritage
                hotels, we design experiences that feel personal, seamless,
                and unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

                <Link
                href="/customize-your-journey"
                className="inline-flex rounded-sm items-center justify-center gap-2 bg-[#AF956C] hover:bg-[#9b8059] text-white px-6 py-3 text-[13px] tracking-wide transition-all duration-300"
                >
                Request Your Custom Itinerary
                <ArrowRight size={16} />
                </Link>

                <Link
                href="/tours/majestic-golden-triangle-tour"
                className="inline-flex rounded-sm items-center justify-center border border-[#d8cdbf] text-[#2c2c2c] hover:bg-white px-6 py-3 text-[13px] tracking-wide transition-all duration-300"
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