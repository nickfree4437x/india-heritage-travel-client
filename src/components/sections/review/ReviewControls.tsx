import { ArrowLeft, ArrowRight } from "lucide-react";

// ✅ TYPE DEFINE
type ReviewControlsProps = {
  prev: () => void;
  next: () => void;
  currentIndex: number;
  total: number;
  setIndex: (index: number) => void;
};

export default function ReviewControls({
  prev,
  next,
  currentIndex,
  total,
  setIndex,
}: ReviewControlsProps) {
  return (
    <div className="flex items-center gap-4 pt-6">

      <button
        onClick={prev}
        className="w-12 h-12 rounded-full border hover:bg-[#8b6a3d] hover:text-white transition flex items-center justify-center"
      >
        <ArrowLeft size={18} />
      </button>

      <button
        onClick={next}
        className="w-12 h-12 rounded-full border hover:bg-[#8b6a3d] hover:text-white transition flex items-center justify-center"
      >
        <ArrowRight size={18} />
      </button>

      <div className="flex gap-2 ml-4">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
              i === currentIndex
                ? "w-8 bg-[#8b6a3d]"
                : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}