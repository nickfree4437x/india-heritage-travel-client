import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#f4f0ea] min-h-screen">

      {/* HERO */}
      <div className="relative h-[400px]">
        <Image
          src="/varanasi.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-4">
          Mystical North India Discovery Tour
        </h1>

        <p className="mb-6">
          Explore spiritual India through Varanasi, temples, and sacred rituals along the Ganga.
        </p>

        {/* GALLERY */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Image src="/var1.jpg" alt="" width={300} height={200} />
          <Image src="/var2.jpg" alt="" width={300} height={200} />
          <Image src="/var3.jpg" alt="" width={300} height={200} />
        </div>

        {/* HIGHLIGHTS */}
        <ul className="list-disc pl-5 mb-6">
          <li>Ganga Aarti experience</li>
          <li>Temple visits</li>
          <li>Spiritual walks</li>
        </ul>

        {/* ITINERARY */}
        <div>
          <p>Day 1: Arrival Varanasi</p>
          <p>Day 2: Ganga Aarti</p>
          <p>Day 3: Temple visits</p>
          <p>Day 4: Departure</p>
        </div>

      </div>
    </div>
  );
}