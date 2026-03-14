import Image from "next/image";

const destinations = [
  { name: "Central India", image: "/central-india.jpg" },
  { name: "East India", image: "/east-india.jpg" },
  { name: "Nepal", image: "/nepal.jpg" },
  { name: "North India", image: "/north-india.jpg" },
  { name: "South India", image: "/south-india.jpg" },
  { name: "West India", image: "/west-india.jpg" },
];

export default function DestinationsSection() {
  return (
    <section className="bg-[#f4f0ea] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-center text-4xl font-semibold text-[#8b6a3d] mb-16">
          Destinations
        </h2>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {destinations.map((dest, index) => (

            <div
              key={index}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
            >

              {/* Image */}

              <Image
                src={dest.image}
                alt={dest.name}
                width={600}
                height={400}
                className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

              {/* Text */}

              <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
                {dest.name}
              </h3>

            </div>

          ))}

        </div>


        {/* Button */}

        <div className="flex justify-center mt-14">

          <button className="bg-[#9b7445] text-white px-10 py-4 rounded-lg font-medium hover:bg-[#7e5f3a] transition">
            ALL DESTINATIONS
          </button>

        </div>

      </div>

    </section>
  );
}