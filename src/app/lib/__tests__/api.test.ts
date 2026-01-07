import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetchRandomQuote } from '../api';
import { getRandomFallbackQuote } from '../fallbackQuotes';

vi.mock('../fallbackQuotes', () => ({
  getRandomFallbackQuote: vi.fn(() => ({
    id: 999,
    quote: 'Fallback quote',
    author: 'Fallback Author',
  })),
}));

describe('fetchRandomQuote', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should fetch and return a random quote from API', async () => {
    const mockQuote = {
      id: 1,
      quote: 'Test quote',
      author: 'Test Author',
    };

    const mockResponse = {
      quotes: [
        mockQuote,
        { id: 2, quote: 'Another quote', author: 'Another Author' },
      ],
      total: 2,
      skip: 0,
      limit: 30,
    };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      } as Response)
    );

    const result = await fetchRandomQuote();

    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('quote');
    expect(result).toHaveProperty('author');
    expect(mockResponse.quotes).toContainEqual(result);
  });

  it('should return fallback quote when API fails', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('Network error')));

    const result = await fetchRandomQuote();

    expect(result).toEqual({
      id: 999,
      quote: 'Fallback quote',
      author: 'Fallback Author',
    });
    expect(getRandomFallbackQuote).toHaveBeenCalled();
  });

  it('should return fallback quote when API returns error status', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 500,
      } as Response)
    );

    const result = await fetchRandomQuote();

    expect(result).toEqual({
      id: 999,
      quote: 'Fallback quote',
      author: 'Fallback Author',
    });
    expect(getRandomFallbackQuote).toHaveBeenCalled();
  });
});
