import { Star } from "lucide-react";

interface RatingBadgeProps {
  rating: number;
  reviews: number;
}

function ratingTier(rating: number) {
  if (rating >= 4.2) {
    return { badge: "bg-green-600 text-white", sub: "bg-green-50 text-green-700" };
  }
  if (rating >= 3.5) {
    return { badge: "bg-amber-500 text-white", sub: "bg-amber-50 text-amber-700" };
  }
  return { badge: "bg-rose-500 text-white", sub: "bg-rose-50 text-rose-700" };
}

export default function RatingBadge({ rating, reviews }: RatingBadgeProps) {
  const tier = ratingTier(rating);

  return (
    <div className="flex flex-col items-center gap-1">
      <span className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-black ${tier.badge}`}>
        <Star size={10} fill="currentColor" />
        {rating.toFixed(1)}
      </span>
      <span className={`rounded-md px-2 py-0.5 text-[11px] font-bold ${tier.sub}`}>
        {reviews.toLocaleString()}
      </span>
    </div>
  );
}
