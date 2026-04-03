import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#f4f0ea] min-h-screen">

      {/* HERO */}
      <div className="relative h-[400px]">
        <Image
          src="/rajasthan.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-4">
          Rajasthani Heritage Retreat Tour
        </h1>

        <p className="mb-6">
          Discover the royal charm of Rajasthan with grand forts, palaces, and vibrant traditions.
        </p>

        {/* GALLERY */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Image src="/raj1.jpg" alt="" width={300} height={200} />
          <Image src="/raj2.jpg" alt="" width={300} height={200} />
          <Image src="/raj3.jpg" alt="" width={300} height={200} />
        </div>

        {/* HIGHLIGHTS */}
        <ul className="list-disc pl-5 mb-6">
          <li>Explore Jaipur & Udaipur palaces</li>
          <li>Desert camel safari experience</li>
          <li>Traditional folk music & dance</li>
        </ul>

        {/* ITINERARY */}
        <div>
          <p>Day 1: Jaipur arrival</p>
          <p>Day 2: City tour</p>
          <p>Day 3: Udaipur travel</p>
          <p>Day 4: Udaipur exploration</p>
        </div>

      </div>
    </div>
  );
}