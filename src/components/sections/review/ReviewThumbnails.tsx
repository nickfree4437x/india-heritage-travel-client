import Image from "next/image";

// ✅ TYPE DEFINE
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
    <div className="flex justify-center gap-5 mt-12">
      {reviews.map((item, index) => (
        <div
          key={index}
          onClick={() => setIndex(index)}
          className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
            index === currentIndex
              ? "ring-2 ring-[#8b6a3d] scale-110"
              : "opacity-60"
          }`}
        >
          <Image
            src={item.gallery}
            alt="review thumbnail"
            width={100}
            height={70}
            className="object-cover w-[100px] h-[70px]"
          />
        </div>
      ))}
    </div>
  );
}