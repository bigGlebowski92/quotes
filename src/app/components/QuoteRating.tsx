interface QuoteRatingProps {
  rating: number | null;
  onRate: (rating: number) => void;
}

export function QuoteRating({ rating, onRate }: QuoteRatingProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-zinc-600 dark:text-zinc-400">
        Rate this quote:
      </span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((starRating) => (
          <button
            key={starRating}
            onClick={() => onRate(starRating)}
            className={`text-2xl ${
              rating && rating >= starRating
                ? 'text-yellow-400'
                : 'text-zinc-300 dark:text-zinc-600'
            }`}
            aria-label={`Rate ${starRating} stars`}
          >
            ★
          </button>
        ))}
      </div>
      {rating && (
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          ({rating}/5)
        </span>
      )}
    </div>
  );
}
