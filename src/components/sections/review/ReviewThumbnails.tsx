import Image from "next/image";

export default function ReviewThumbnails({
  reviews,
  currentIndex,
  setIndex,
}) {
  return (
    <div className="flex justify-center gap-4 mt-10">
      {reviews.map((item, index) => (
        <div
          key={index}
          onClick={() => setIndex(index)}
          className={`cursor-pointer rounded-xl overflow-hidden transition ${
            index === currentIndex
              ? "ring-2 ring-[#8b6a3d] scale-105"
              : "opacity-60"
          }`}
        >
          <Image
            src={item.gallery}
            alt="thumb"
            width={80}
            height={60}
            className="object-cover w-[80px] h-[60px]"
          />
        </div>
      ))}
    </div>
  );
}