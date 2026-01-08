const RATINGS_KEY = 'quote-ratings';
const FAVORITES_KEY = 'quote-favorites';

// Helper to safely get/set localStorage
const getStorage = <T>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
};

const setStorage = (key: string, value: unknown): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
};

// Ratings: Simple object mapping quoteId -> rating
export const saveQuoteRating = (quoteId: number, rating: number): void => {
  const ratings = getStorage<Record<number, number>>(RATINGS_KEY, {});
  ratings[quoteId] = rating;
  setStorage(RATINGS_KEY, ratings);
};

export const getQuoteRating = (quoteId: number): number | null => {
  const ratings = getStorage<Record<number, number>>(RATINGS_KEY, {});
  return ratings[quoteId] ?? null;
};

// Favorites: Simple array of quote IDs
export const toggleFavorite = (quoteId: number): boolean => {
  const favorites = getStorage<number[]>(FAVORITES_KEY, []);
  const index = favorites.indexOf(quoteId);

  if (index >= 0) {
    favorites.splice(index, 1);
    setStorage(FAVORITES_KEY, favorites);
    return false;
  } else {
    favorites.push(quoteId);
    setStorage(FAVORITES_KEY, favorites);
    return true;
  }
};

export const isFavorite = (quoteId: number): boolean => {
  const favorites = getStorage<number[]>(FAVORITES_KEY, []);
  return favorites.includes(quoteId);
};

export const getFavorites = (): number[] => {
  return getStorage<number[]>(FAVORITES_KEY, []);
};
