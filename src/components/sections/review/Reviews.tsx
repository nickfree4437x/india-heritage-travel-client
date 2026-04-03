import ReviewCard from "./ReviewCard";
import { reviews } from "./reviewData";

export default function ReviewsSection() {
  return (
    <section className="bg-[#f8f6f2] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-4xl font-semibold text-[#8b6a3d] mb-16">
          What Travellers Say
        </h2>

        <ReviewCard reviews={reviews} />

      </div>
    </section>
  );
}