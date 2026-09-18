"use client";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Significance: A Living Heritage
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Fort Kochi's past exists beyond glass display cases. The Paradesi Synagogue in Jew Town 
            remains an active place of worship, serving a Jewish community present in India since ancient 
            times. Every evening, the heritage zone hosts Kathakali and Kalaripayattu performances across 
            its cultural venues.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-1">
            Every two years, the Kochi-Muziris Biennale transforms old spice warehouses into galleries, 
            staging South Asia's largest contemporary art festival. The event bridges modern artistic 
            expression with 16th-century architecture.
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789727653/mohnish-landge-LSiWfNdBJY0-unsplash_ubifxw.jpg"
              alt="Fort Kochi cultural significance - living heritage with colonial churches and art"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}