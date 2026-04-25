import { ArrowLeft, ArrowRight } from "lucide-react";

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
    <div className="flex items-center justify-between gap-6 pt-8">

      {/* 🔘 ARROWS */}
      <div className="flex items-center gap-3">

        <button
          onClick={prev}
          className="group w-12 h-12 rounded-full bg-white/70 backdrop-blur-xl border border-gray-200 shadow-sm flex items-center justify-center transition-all duration-300 hover:bg-[#8b6a3d]"
        >
          <ArrowLeft
            size={18}
            className="transition-transform duration-300"
          />
        </button>

        <button
          onClick={next}
          className="group w-12 h-12 rounded-full bg-white/70 backdrop-blur-xl border border-gray-200 shadow-sm flex items-center justify-center transition-all duration-300 hover:bg-[#8b6a3d] hover:text-white"
        >
          <ArrowRight
            size={18}
            className="transition-transform duration-300"
          />
        </button>

      </div>

      {/* 📊 PROGRESS INDICATOR */}
      <div className="flex items-center gap-3 flex-1 max-w-[220px]">

        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className="flex-1 cursor-pointer"
          >
            <div className="h-[4px] bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  i === currentIndex
                    ? "w-full bg-[#8b6a3d]"
                    : "w-0"
                }`}
              />
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}