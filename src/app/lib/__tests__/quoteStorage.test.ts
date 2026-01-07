import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  saveQuoteRating,
  getQuoteRating,
  getQuoteRatings,
  toggleFavorite,
  isFavorite,
  getFavorites,
} from '../quoteStorage';
import { Quote } from '../../types/quote';

const mockQuote: Quote = {
  id: 1,
  quote: 'Test quote',
  author: 'Test Author',
};

describe('quoteStorage', () => {
  beforeEach(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
    vi.clearAllMocks();
  });

  describe('Rating functions', () => {
    it('should save and retrieve a quote rating', () => {
      saveQuoteRating(mockQuote, 5);
      const rating = getQuoteRating(mockQuote.id);
      expect(rating).toBe(5);
    });

    it('should update existing rating', () => {
      saveQuoteRating(mockQuote, 3);
      saveQuoteRating(mockQuote, 5);
      const rating = getQuoteRating(mockQuote.id);
      expect(rating).toBe(5);
    });

    it('should return null for non-rated quote', () => {
      const rating = getQuoteRating(999);
      expect(rating).toBeNull();
    });

    it('should return all ratings', () => {
      saveQuoteRating(mockQuote, 5);
      saveQuoteRating({ ...mockQuote, id: 2 }, 4);
      const ratings = getQuoteRatings();
      expect(ratings.length).toBe(2);
      expect(ratings[0].quoteId).toBe(1);
      expect(ratings[0].rating).toBe(5);
    });
  });

  describe('Favorite functions', () => {
    it('should toggle favorite status', () => {
      const wasAdded = toggleFavorite(mockQuote);
      expect(wasAdded).toBe(true);
      expect(isFavorite(mockQuote.id)).toBe(true);

      const wasRemoved = toggleFavorite(mockQuote);
      expect(wasRemoved).toBe(false);
      expect(isFavorite(mockQuote.id)).toBe(false);
    });

    it('should return all favorites', () => {
      toggleFavorite(mockQuote);
      toggleFavorite({ ...mockQuote, id: 2 });
      const favorites = getFavorites();
      expect(favorites.length).toBe(2);
      expect(favorites[0].id).toBe(1);
    });

    it('should handle localStorage errors gracefully', () => {
      const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');
      getItemSpy.mockImplementation(() => {
        throw new Error('Storage error');
      });

      expect(() => getFavorites()).not.toThrow();
      expect(getFavorites()).toEqual([]);
    });
  });
});

