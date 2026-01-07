import { describe, it, expect } from 'vitest';
import { fallbackQuotes, getRandomFallbackQuote } from '../fallbackQuotes';
import { Quote } from '../../types/quote';

describe('fallbackQuotes', () => {
  it('should have at least 10 quotes', () => {
    expect(fallbackQuotes.length).toBeGreaterThanOrEqual(10);
  });

  it('should have quotes with correct structure', () => {
    fallbackQuotes.forEach((quote) => {
      expect(quote).toHaveProperty('id');
      expect(quote).toHaveProperty('quote');
      expect(quote).toHaveProperty('author');
      expect(typeof quote.id).toBe('number');
      expect(typeof quote.quote).toBe('string');
      expect(typeof quote.author).toBe('string');
      expect(quote.quote.length).toBeGreaterThan(0);
      expect(quote.author.length).toBeGreaterThan(0);
    });
  });

  it('should have unique IDs', () => {
    const ids = fallbackQuotes.map((q) => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('getRandomFallbackQuote should return a valid quote', () => {
    const quote = getRandomFallbackQuote();
    expect(quote).toHaveProperty('id');
    expect(quote).toHaveProperty('quote');
    expect(quote).toHaveProperty('author');
    expect(fallbackQuotes).toContainEqual(quote);
  });

  it('getRandomFallbackQuote should return different quotes on multiple calls', () => {
    const quotes = new Set();
    for (let i = 0; i < 50; i++) {
      quotes.add(getRandomFallbackQuote().id);
    }
    // With 15 quotes, after 50 calls we should have multiple different quotes
    expect(quotes.size).toBeGreaterThan(1);
  });
});

