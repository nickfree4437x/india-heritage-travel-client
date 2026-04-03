import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ReviewControls({
  prev,
  next,
  currentIndex,
  total,
  setIndex,
}) {
  return (
    <div className="flex items-center gap-4 pt-4">

      <button
        onClick={prev}
        className="w-11 h-11 rounded-full border hover:bg-gray-100 flex items-center justify-center"
      >
        <ArrowLeft size={18} />
      </button>

      <button
        onClick={next}
        className="w-11 h-11 rounded-full border hover:bg-gray-100 flex items-center justify-center"
      >
        <ArrowRight size={18} />
      </button>

      {/* Dots */}
      <div className="flex gap-2 ml-4">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full cursor-pointer transition-all ${
              i === currentIndex
                ? "w-6 bg-[#8b6a3d]"
                : "w-2 bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
}