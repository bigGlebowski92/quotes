'use client';

import { useState, useMemo } from 'react';
import { useRandomQuote } from '../hooks/useRandomQuote';
import {
  saveQuoteRating,
  getQuoteRating,
  toggleFavorite,
  isFavorite,
} from '../lib/quoteStorage';
import { getRandomFallbackQuote } from '../lib/fallbackQuotes';

export function QuoteDisplay() {
  const [quoteKey, setQuoteKey] = useState(0);
  const {
    data: currentQuote,
    isLoading,
    isFetching,
  } = useRandomQuote(quoteKey);

  const [, setUpdateTrigger] = useState(0);

  const displayQuote = useMemo(() => {
    if (currentQuote) return currentQuote;
    if (!isLoading && !isFetching) {
      return getRandomFallbackQuote();
    }
    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuote, isLoading, isFetching, quoteKey]);

  const rating = displayQuote ? getQuoteRating(displayQuote.id) : null;
  const isFav = displayQuote ? isFavorite(displayQuote.id) : false;

  const handleRating = (newRating: number) => {
    if (displayQuote) {
      saveQuoteRating(displayQuote.id, newRating);
      setUpdateTrigger((prev) => prev + 1);
    }
  };

  const handleToggleFavorite = () => {
    if (displayQuote) {
      toggleFavorite(displayQuote.id);
      setUpdateTrigger((prev) => prev + 1);
    }
  };

  const handleNewQuote = () => {
    setQuoteKey((prev) => prev + 1);
  };

  if (isLoading && !displayQuote && quoteKey === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg text-zinc-600 dark:text-zinc-400">
          Loading quote...
        </div>
      </div>
    );
  }

  if (!displayQuote) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg text-zinc-600 dark:text-zinc-400">
          Loading quote...
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div className="max-w-2xl rounded-lg border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
        <blockquote className="text-xl font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
          &ldquo;{displayQuote.quote}&rdquo;
        </blockquote>
        <cite className="mt-4 block text-right text-sm font-semibold text-zinc-600 dark:text-zinc-400">
          — {displayQuote.author}
        </cite>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            Rate this quote:
          </span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((starRating) => (
              <button
                key={starRating}
                onClick={() => handleRating(starRating)}
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

        <div className="flex items-center gap-4">
          <button
            onClick={handleToggleFavorite}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isFav
                ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
                : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
            }`}
          >
            {isFav ? '❤️ Favorited' : '🤍 Favorite'}
          </button>

          <button
            onClick={handleNewQuote}
            disabled={isFetching}
            className="rounded-full bg-zinc-900 px-8 py-3 text-white transition-colors hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {isFetching ? 'Loading...' : 'Get New Quote'}
          </button>
        </div>
      </div>
    </div>
  );
}
