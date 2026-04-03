import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#f4f0ea] min-h-screen">

      {/* HERO */}
      <div className="relative h-[400px]">
        <Image
          src="/golden-triangle.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-4">
          Majestic Golden Triangle Tour
        </h1>

        <p className="mb-6">
          Explore Delhi, Agra, and Jaipur with iconic landmarks like the Taj Mahal.
        </p>

        {/* GALLERY */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Image src="/golden1.jpg" alt="" width={300} height={200} />
          <Image src="/golden2.jpg" alt="" width={300} height={200} />
          <Image src="/golden3.jpg" alt="" width={300} height={200} />
        </div>

        {/* HIGHLIGHTS */}
        <ul className="list-disc pl-5 mb-6">
          <li>Taj Mahal sunrise</li>
          <li>Jaipur forts</li>
          <li>Delhi heritage walk</li>
        </ul>

        {/* ITINERARY */}
        <div>
          <p>Day 1: Delhi</p>
          <p>Day 2: Agra</p>
          <p>Day 3: Jaipur</p>
        </div>

      </div>
    </div>
  );
}