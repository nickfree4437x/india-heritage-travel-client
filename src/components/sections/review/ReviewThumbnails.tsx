import Image from "next/image";

type Review = {
  gallery: string;
};

type ReviewThumbnailsProps = {
  reviews: Review[];
  currentIndex: number;
  setIndex: (index: number) => void;
};

export default function ReviewThumbnails({
  reviews,
  currentIndex,
  setIndex,
}: ReviewThumbnailsProps) {
  return (
    <div className="flex justify-center flex-wrap gap-5 mt-14">

      {reviews.map((item, index) => (
        <div
          key={index}
          onClick={() => setIndex(index)}
          className={`group relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${
            index === currentIndex
              ? "scale-110 shadow-xl ring-2 ring-[#8b6a3d]"
              : "opacity-60 hover:opacity-100"
          }`}
        >

          {/* IMAGE */}
          <Image
            src={item.gallery}
            alt="review thumbnail"
            width={120}
            height={80}
            className="object-cover w-[110px] h-[75px] transition duration-500 group-hover:scale-110"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />

          {/* ACTIVE GLOW */}
          {index === currentIndex && (
            <div className="absolute inset-0 rounded-2xl border border-[#8b6a3d]/40 pointer-events-none" />
          )}

        </div>
      ))}

    </div>
  );
}