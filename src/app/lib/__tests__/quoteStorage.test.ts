import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  saveQuoteRating,
  getQuoteRating,
  toggleFavorite,
  isFavorite,
  getFavorites,
} from '../quoteStorage';

describe('quoteStorage', () => {
  beforeEach(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
    vi.clearAllMocks();
  });

  describe('Rating functions', () => {
    it('should save and retrieve a quote rating', () => {
      saveQuoteRating(1, 5);
      const rating = getQuoteRating(1);
      expect(rating).toBe(5);
    });

    it('should update existing rating', () => {
      saveQuoteRating(1, 3);
      saveQuoteRating(1, 5);
      const rating = getQuoteRating(1);
      expect(rating).toBe(5);
    });

    it('should return null for non-rated quote', () => {
      const rating = getQuoteRating(999);
      expect(rating).toBeNull();
    });

    it('should handle multiple ratings', () => {
      saveQuoteRating(1, 5);
      saveQuoteRating(2, 4);
      expect(getQuoteRating(1)).toBe(5);
      expect(getQuoteRating(2)).toBe(4);
    });
  });

  describe('Favorite functions', () => {
    it('should toggle favorite status', () => {
      const wasAdded = toggleFavorite(1);
      expect(wasAdded).toBe(true);
      expect(isFavorite(1)).toBe(true);

      const wasRemoved = toggleFavorite(1);
      expect(wasRemoved).toBe(false);
      expect(isFavorite(1)).toBe(false);
    });

    it('should return all favorites', () => {
      toggleFavorite(1);
      toggleFavorite(2);
      const favorites = getFavorites();
      expect(favorites.length).toBe(2);
      expect(favorites).toContain(1);
      expect(favorites).toContain(2);
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

