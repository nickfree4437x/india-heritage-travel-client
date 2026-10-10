"use client";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Significance of a Living Thikana
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            What makes Devgarh culturally distinct is that it remains a living family home - not a government-
            managed monument. Guests often meet a family member in the evening, hearing firsthand stories of 
            Mewari history and seeing how a noble household actually worked - not as a museum piece, but as a 
            practiced pattern of hospitality, land care, and rural stewardship stretching back to the Rajput 
            era.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787542352/2024-08-08-16-24-24-66b4a3e0b4281-6_tmju20.jpg"
              alt="Devgarh cultural heritage - living family palace in rural Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via boutindia
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          The neighbouring villages hold their own cultural weight - Devgarh lies in a Mewar region known 
          for weaving, pottery, and miniature painting, along with rural festivals and local deities that 
          still shape daily life. With a local guide who can translate the surrounding context, not just 
          the language, you'll discover the real cultural depth of this Devgarh travel guide.
        </p>
      </div>
    </section>
  );
}