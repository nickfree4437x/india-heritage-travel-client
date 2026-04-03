import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#f4f0ea] min-h-screen">

      {/* HERO */}
      <div className="relative h-[400px]">
        <Image
          src="/kerala.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-4">
          Coastal Treasures & Mountain Magic Tour
        </h1>

        <p className="mb-6">
          Experience Kerala’s serene backwaters, lush greenery, and peaceful beaches.
        </p>

        {/* GALLERY */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Image src="/kerala1.jpg" alt="" width={300} height={200} />
          <Image src="/kerala2.jpg" alt="" width={300} height={200} />
          <Image src="/kerala3.jpg" alt="" width={300} height={200} />
        </div>

        {/* HIGHLIGHTS */}
        <ul className="list-disc pl-5 mb-6">
          <li>Houseboat stay in backwaters</li>
          <li>Munnar tea gardens</li>
          <li>Ayurvedic wellness experience</li>
        </ul>

        {/* ITINERARY */}
        <div>
          <p>Day 1: Kochi arrival</p>
          <p>Day 2: Munnar</p>
          <p>Day 3: Alleppey houseboat</p>
          <p>Day 4: Beach relaxation</p>
        </div>

      </div>
    </div>
  );
}