import { Quote } from '../types/quote';

const RATINGS_KEY = 'quote-ratings';
const FAVORITES_KEY = 'quote-favorites';

export interface QuoteRating {
  quoteId: number;
  rating: number;
  timestamp: number;
}

export const saveQuoteRating = (quote: Quote, rating: number): void => {
  if (typeof window === 'undefined') return;

  const ratings = getQuoteRatings();
  const existingIndex = ratings.findIndex((r) => r.quoteId === quote.id);

  const newRating: QuoteRating = {
    quoteId: quote.id,
    rating,
    timestamp: Date.now(),
  };

  if (existingIndex >= 0) {
    ratings[existingIndex] = newRating;
  } else {
    ratings.push(newRating);
  }

  localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));
};

export const getQuoteRating = (quoteId: number): number | null => {
  if (typeof window === 'undefined') return null;

  const ratings = getQuoteRatings();
  const rating = ratings.find((r) => r.quoteId === quoteId);
  return rating ? rating.rating : null;
};

export const getQuoteRatings = (): QuoteRating[] => {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(RATINGS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const toggleFavorite = (quote: Quote): boolean => {
  if (typeof window === 'undefined') return false;

  const favorites = getFavorites();
  const index = favorites.findIndex((f) => f.id === quote.id);

  if (index >= 0) {
    favorites.splice(index, 1);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    return false;
  } else {
    favorites.push(quote);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    return true;
  }
};

export const isFavorite = (quoteId: number): boolean => {
  if (typeof window === 'undefined') return false;

  const favorites = getFavorites();
  return favorites.some((f) => f.id === quoteId);
};

export const getFavorites = (): Quote[] => {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

