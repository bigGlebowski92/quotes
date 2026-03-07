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
import { QuoteBlock } from './QuoteBlock';
import { QuoteRating } from './QuoteRating';
import { FavoriteButton } from './FavoriteButton';
import { NewQuoteButton } from './NewQuoteButton';
import { QuoteLoading } from './QuoteLoading';

export function QuoteDisplay() {
  const [quoteKey, setQuoteKey] = useState(0);
  const [, setUpdateTrigger] = useState(0);

  const {
    data: currentQuote,
    isLoading,
    isFetching,
  } = useRandomQuote(quoteKey);

  const displayQuote = useMemo(() => {
    if (currentQuote) return currentQuote;
    if (!isLoading && !isFetching) return getRandomFallbackQuote();
    return null;
  }, [currentQuote, isLoading, isFetching]);

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

  const handleNewQuote = () => setQuoteKey((prev) => prev + 1);

  if (isLoading && !displayQuote && quoteKey === 0) return <QuoteLoading />;
  if (!displayQuote) return <QuoteLoading />;

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <QuoteBlock quote={displayQuote} />
      <div className="flex flex-col items-center gap-4">
        <QuoteRating rating={rating} onRate={handleRating} />
        <div className="flex items-center gap-4">
          <FavoriteButton isFav={isFav} onToggle={handleToggleFavorite} />
          <NewQuoteButton isFetching={isFetching} onClick={handleNewQuote} />
        </div>
      </div>
    </div>
  );
}
