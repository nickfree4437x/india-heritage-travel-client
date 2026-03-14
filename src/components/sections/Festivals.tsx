import Image from "next/image";

const festivals = [
  {
    title: "Colors Of Joy: Holi Festival",
    days: "16",
    image: "/holi.jpg",
    desc: "A vibrant burst of colors and unity, celebrating the arrival of spring.",
  },
  {
    title: "Diwali: Festival Of Lights",
    days: "20",
    image: "/diwali.jpg",
    desc: "Festival of Lights & new beginnings, celebrating good over evil.",
  },
  {
    title: "Pushkar Camel Carnival",
    days: "16",
    image: "/pushkar.jpg",
    desc: "Where the desert comes alive with camels, culture, and camaraderie.",
  },
  {
    title: "Sacred Path: Kumbh Mela",
    days: "11",
    image: "/kumbh.jpg",
    desc: "A sacred gathering of millions, cleansing souls in holy waters.",
  },
];

export default function FestivalSection() {
  return (
    <section className="bg-[#f4f0ea] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-center text-4xl font-semibold text-[#8b6a3d] mb-14">
          Immerse In Festive Celebrations
        </h2>

        {/* Festival Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {festivals.map((festival, index) => (

            <div
              key={index}
              className="bg-white rounded-xl border border-[#d6c6a8] p-6 text-center shadow-sm hover:shadow-xl transition duration-300 group"
            >

              {/* Image */}

              <div className="overflow-hidden rounded-lg mb-6">

                <Image
                  src={festival.image}
                  alt={festival.title}
                  width={400}
                  height={260}
                  className="rounded-lg object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              {/* Title */}

              <h3 className="text-lg font-semibold text-[#8b6a3d] mb-3">
                {festival.title}
              </h3>

              {/* Days */}

              <p className="text-[#8b6a3d] font-medium mb-4">
                Days : {festival.days}
              </p>

              {/* Description */}

              <p className="text-gray-600 text-sm leading-relaxed">
                {festival.desc}
              </p>

            </div>

          ))}

        </div>


        {/* Button */}

        <div className="flex justify-center mt-12">

          <button className="bg-[#9b7445] text-white px-10 py-4 rounded-lg font-medium hover:bg-[#7e5f3a] transition">
            Explore All Tours
          </button>

        </div>

      </div>

    </section>
  );
}