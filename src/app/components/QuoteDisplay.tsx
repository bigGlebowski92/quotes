'use client';

import { useState, useEffect } from 'react';
import { useRandomQuote } from '../hooks/useRandomQuote';
import { getRandomFallbackQuote } from '../lib/fallbackQuotes';
import { Quote } from '../types/quote';
import {
  saveQuoteRating,
  getQuoteRating,
  toggleFavorite,
  isFavorite,
} from '../lib/quoteStorage';

export function QuoteDisplay() {
  const { data, isLoading, error, refetch, isFetching, isError } =
    useRandomQuote();
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [isFav, setIsFav] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    setIsOffline(!navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setCurrentQuote(data);
      setUserRating(getQuoteRating(data.id));
      setIsFav(isFavorite(data.id));
    } else if (isError || isOffline) {
      const fallbackQuote = getRandomFallbackQuote();
      setCurrentQuote(fallbackQuote);
      setUserRating(getQuoteRating(fallbackQuote.id));
      setIsFav(isFavorite(fallbackQuote.id));
    }
  }, [data, isError, isOffline]);

  const handleRating = (rating: number) => {
    if (currentQuote) {
      saveQuoteRating(currentQuote, rating);
      setUserRating(rating);
    }
  };

  const handleToggleFavorite = () => {
    if (currentQuote) {
      const newFavState = toggleFavorite(currentQuote);
      setIsFav(newFavState);
    }
  };

  const handleNewQuote = () => {
    if (isOffline || isError) {
      const fallbackQuote = getRandomFallbackQuote();
      setCurrentQuote(fallbackQuote);
      setUserRating(getQuoteRating(fallbackQuote.id));
      setIsFav(isFavorite(fallbackQuote.id));
    } else {
      refetch();
    }
  };

  if (isLoading && !currentQuote) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg text-zinc-600 dark:text-zinc-400">
          Loading quote...
        </div>
      </div>
    );
  }

  if (!currentQuote) {
    return (
      <div className="flex flex-col items-center gap-4 p-8">
        <div className="text-lg text-red-600 dark:text-red-400">
          Unable to load quotes
        </div>
        <button
          onClick={handleNewQuote}
          className="rounded-full bg-zinc-900 px-6 py-2 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      {(isOffline || isError) && (
        <div className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
          ⚠️ Offline - Showing fallback quote
        </div>
      )}

      <div className="max-w-2xl rounded-lg border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
        <blockquote className="text-xl font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
          &ldquo;{currentQuote.quote}&rdquo;
        </blockquote>
        <cite className="mt-4 block text-right text-sm font-semibold text-zinc-600 dark:text-zinc-400">
          — {currentQuote.author}
        </cite>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            Rate this quote:
          </span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleRating(rating)}
                className={`text-2xl transition-transform hover:scale-110 ${
                  userRating && userRating >= rating
                    ? 'text-yellow-400'
                    : 'text-zinc-300 dark:text-zinc-600'
                }`}
                aria-label={`Rate ${rating} stars`}
              >
                ★
              </button>
            ))}
          </div>
          {userRating && (
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              ({userRating}/5)
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
