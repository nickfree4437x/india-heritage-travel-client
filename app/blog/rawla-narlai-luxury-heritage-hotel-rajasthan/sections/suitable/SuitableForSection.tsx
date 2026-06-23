
"use client";

const travelers = [
  {
    title: "Couples & Honeymooners",
    description:
      "Few places in Rajasthan offer a setting as romantic as Rawla Narlai. From the famous candlelit Stepwell Dinner to peaceful courtyards, heritage suites, and the intimacy of a secluded property, every experience is designed for memorable moments together. It is widely regarded as one of the most romantic heritage hotels in Rajasthan.",
  },
  {
    title: "Family Vacations",
    description:
      "Rawla Narlai transforms a family holiday into an unforgettable adventure. Children love leopard safaris, horse riding experiences, and exploring village life, while parents appreciate the property's safety, comfort, and exceptional hospitality. It is one of Rajasthan's finest luxury family-friendly heritage hotels.",
  },
  {
    title: "Solo Travelers",
    description:
      "For solo travelers seeking culture, comfort, and meaningful experiences, Rawla Narlai provides a welcoming and secure environment. Guided activities and personalized hospitality ensure guests feel connected rather than isolated throughout their stay.",
  },
  {
    title: "Wildlife Enthusiasts",
    description:
      "The nearby Jawai Leopard Reserve makes Rawla Narlai a dream destination for wildlife lovers. Combining luxury accommodation with extraordinary leopard safaris, it offers one of India's most unique wildlife experiences outside traditional national parks.",
  },
  {
    title: "Culture Enthusiasts",
    description:
      "Architecture, heritage, traditional music, local cuisine, village life, and centuries of Rajput history come together at Rawla Narlai. For travelers passionate about Rajasthan's cultural legacy, the property itself becomes part of the journey.",
  },
  {
    title: "Destination Weddings",
    description:
      "Historic stone architecture, candlelit courtyards, heritage charm, and the dramatic backdrop of the Aravalli Hills create an unforgettable setting for intimate destination weddings and celebrations. Every event can be tailored with personalized arrangements and curated experiences.",
  },
];

export default function SuitableForSection() {
  return (
    <section className="w-full bg-white py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADER */}

        <div className="mb-10">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            Who Is Rawla Narlai Suitable For?
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Whether you're planning a romantic escape, a luxury family
            vacation, a wildlife-focused journey, or a culturally immersive
            Rajasthan experience, Rawla Narlai offers something truly special
            for every type of traveler.
          </p>

        </div>

        {/* TRAVELER CARDS */}

        <div className="grid md:grid-cols-2 gap-5">

          {travelers.map((traveler) => (
            <div
              key={traveler.title}
              className="border border-[#e7dfd4] bg-white rounded-sm p-6 hover:border-[#AF956C]/40 transition-colors"
            >

              <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#2c2c2c] mb-3">
                {traveler.title}
              </h3>

              <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light text-justify">
                {traveler.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}