import Image from "next/image";

interface Tour {
  title: string;
  image: string;
  days: string;
  location: string;
}

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

      <Image
        src={tour.image}
        alt={tour.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        <h3 className="font-semibold mb-2">
          {tour.title}
        </h3>

        <p className="text-sm text-gray-500 mb-1">
          {tour.location}
        </p>

        <p className="text-sm text-gray-500 mb-3">
          Duration: {tour.days}
        </p>

        <button className="text-orange-500 font-medium hover:underline">
          View Details →
        </button>

      </div>

    </div>
  );
}