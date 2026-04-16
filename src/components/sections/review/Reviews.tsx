import ReviewCard from "./ReviewCard";
import ReviewStats from "./ReviewStats";
import { reviews } from "./reviewData";

export default function ReviewsSection() {
  return (
    <section className="bg-gradient-to-b from-[#f8f6f2] to-[#f1ede7] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-4xl md:text-5xl font-semibold text-[#8b6a3d] mb-10">
          What Travellers Say
        </h2>

        <ReviewStats />

        <ReviewCard reviews={reviews} />

      </div>
    </section>
  );
}