import { Briefcase, Flower2, Users, User } from "lucide-react";

export default function SuitableFor() {
  return (
    <section className="bg-[#f5f5f5] py-10 border-t">
      
      {/* Top Locations Strip */}
      <div className="bg-[#9b7a50] text-white text-center py-3 text-sm md:text-base font-medium">
        Cochin | Alleppey | Thekkady | Munnar | Madurai | Thanjavur | Pondicherry | Mahabalipuram | Mumbai
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mt-8 mb-10">
        Suitable For
      </h2>

      {/* Items */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 text-center">
        
        <div className="flex flex-col items-center gap-3">
          <Briefcase className="w-10 h-10 text-[#9b7a50]" />
          <p className="font-medium">Corporate Travel</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Flower2 className="w-10 h-10 text-[#9b7a50]" />
          <p className="font-medium text-sm">
            Spiritual, Cultural, Artistic & Gastronomic Interests
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Users className="w-10 h-10 text-[#9b7a50]" />
          <p className="font-medium">Friends & Family Travel</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <User className="w-10 h-10 text-[#9b7a50]" />
          <p className="font-medium">Solo Travel</p>
        </div>

      </div>
    </section>
  );
}